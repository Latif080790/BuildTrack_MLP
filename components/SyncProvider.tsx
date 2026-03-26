'use client'

import { useEffect } from 'react'
import { useSyncStore } from '@/lib/store/syncStore'
import { createClient } from '@/utils/supabase/client'

export default function SyncProvider({ children }: { children: React.ReactNode }) {
  const { setOnlineStatus, checkPendingRecords, syncNow } = useSyncStore()

  useEffect(() => {
    const handleOnline = () => setOnlineStatus(true)
    const handleOffline = () => setOnlineStatus(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    // Initial checks
    checkPendingRecords()
    if (navigator.onLine) {
       syncNow()
    }

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [setOnlineStatus, checkPendingRecords, syncNow])

  // Setup Push Notifications via Supabase Realtime
  useEffect(() => {
    // Request permission only on mount and if needed
    if (typeof window !== 'undefined' && 'Notification' in window) {
      if (Notification.permission === 'default') {
        Notification.requestPermission();
      }
    }

    const supabase = createClient();
    const recordsSubscription = supabase
      .channel('public:records')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'records' },
        (payload) => {
          if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
             let title = 'Checklist Action';
             let body = 'A checklist record was updated.';
             if (payload.eventType === 'INSERT') {
               title = 'New Inspection Logged';
               body = `Inspection #${payload.new.id.substring(0,6)} has been submitted.`;
             } else if (payload.eventType === 'UPDATE') {
               title = `Inspection Updated`;
               body = `Status changed to: ${payload.new.status}`;
             }
             new Notification(title, { body, icon: '/icon-192x192.png' });
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(recordsSubscription)
    }
  }, [])

  return <>{children}</>
}
