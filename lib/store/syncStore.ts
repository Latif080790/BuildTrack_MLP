import { create } from 'zustand'
import { db } from '../db'
import { createClient } from '@/utils/supabase/client'

interface SyncState {
  isOnline: boolean;
  syncInProgress: boolean;
  pendingCount: number;
  setOnlineStatus: (status: boolean) => void;
  checkPendingRecords: () => Promise<void>;
  syncNow: () => Promise<void>;
}

export const useSyncStore = create<SyncState>((set, get) => ({
  isOnline: typeof window !== 'undefined' ? navigator.onLine : true,
  syncInProgress: false,
  pendingCount: 0,

  setOnlineStatus: (status) => {
    set({ isOnline: status });
    if (status) {
      get().syncNow();
    }
  },

  checkPendingRecords: async () => {
    const recordsCount = await db.records.where('sync_status').equals('Pending').count();
    set({ pendingCount: recordsCount });
  },

  syncNow: async () => {
    const { isOnline, syncInProgress } = get();
    if (!isOnline || syncInProgress) return;

    set({ syncInProgress: true });
    
    try {
      const supabase = createClient();
      const recordsToSync = await db.records.where('sync_status').equals('Pending').toArray();

      if (recordsToSync.length > 0) {
        for (const record of recordsToSync) {
          // Prepare payload (exclude local ID if generated locally or handle upsert)
          const { error } = await supabase.from('records').insert({
            task_id: record.task_id,
            status: record.status,
            notes: record.notes,
            created_at: record.created_at,
          });

          if (!error) {
            await db.records.update(record.id, { sync_status: 'Synced' });
          } else {
            console.error('Failed to sync record:', record.id, error);
          }
        }
      }

      // Re-check after sync
      await get().checkPendingRecords();
    } catch (e) {
      console.error('Error during sync interval:', e);
    } finally {
      set({ syncInProgress: false });
    }
  }
}));
