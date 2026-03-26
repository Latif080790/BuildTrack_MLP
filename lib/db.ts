import Dexie, { type Table } from 'dexie';

export interface OfflineTask {
  id: string; // The Supabase UUID
  category_id: string;
  description: string;
  priority: string;
  due_date: string | null;
  assigned_to: string | null;
}

export interface OfflineRecord {
  id: string; // Local UUID generated before sync
  task_id: string;
  status: 'Submitted' | 'Needs Revision' | 'Approved' | 'Pending';
  notes: string;
  sync_status: 'Pending' | 'Synced'; // Tracks if it needs to be pushed to Supabase
  created_at: string;
}

export interface OfflinePhoto {
  id: string; // Local UUID
  record_id: string;
  photo_data: Blob; // The actual file / base64 for local display
  sync_status: 'Pending' | 'Synced';
}

export class BuildTrackDatabase extends Dexie {
  tasks!: Table<OfflineTask>; 
  records!: Table<OfflineRecord>;
  photos!: Table<OfflinePhoto>;

  constructor() {
    super('BuildTrackDB');
    this.version(1).stores({
      tasks: 'id, category_id, priority', // Primary key and indexed props
      records: 'id, task_id, sync_status',
      photos: 'id, record_id, sync_status'
    });
  }
}

export const db = new BuildTrackDatabase();
