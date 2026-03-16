export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'client' | 'admin';
  level: number;
  xp: number;
  badges: Badge[];
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  unlockedAt?: Date;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'pending' | 'in-progress' | 'review' | 'completed';
  progress: number;
  previewUrl?: string;
  steps: ProjectStep[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ProjectStep {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed' | 'validated';
  order: number;
  needsValidation: boolean;
  validatedAt?: Date;
}

export interface Formation {
  id: string;
  title: string;
  type: 'web' | 'design';
  progress: number;
  totalLessons: number;
  completedLessons: number;
  xpReward: number;
  badge?: Badge;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  type: 'meeting' | 'deadline' | 'formation';
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  createdAt: Date;
}

export interface Document {
  id: string;
  title: string;
  type: 'pdf' | 'devis' | 'facture' | 'contrat' | 'autre';
  category: 'formation' | 'projet' | 'administratif';
  url: string;
  size: string;
  createdAt: Date;
}

export interface TimelineItem {
  id: string;
  projectId: string;
  projectName: string;
  stepTitle: string;
  status: 'pending' | 'validated' | 'rejected';
  submittedAt: Date;
  validatedAt?: Date;
}
