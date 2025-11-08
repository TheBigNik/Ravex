export interface RavexClip {
  id: string;
  content: string;
  sourceUrl?: string;
  createdAt: string;
  updatedAt?: string;
  tags?: string[];
  pinned?: boolean;
}

export interface RavexWorkspace {
  id: string;
  name: string;
  clipCount: number;
}

export interface RavexTag {
  id: string;
  label: string;
  color?: string;
}
