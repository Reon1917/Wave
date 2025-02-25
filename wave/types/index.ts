export type UserRole = 'student' | 'team_leader' | 'team_member' | 'viewer';

export type Priority = 'minor' | 'normal' | 'major' | 'critical';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  teams: string[];
}

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  status: 'todo' | 'in_progress' | 'review' | 'done';
  assignee: string;
  dueDate: string;
  attachments: Array<{
    id: string;
    name: string;
    url: string;
    type: string;
  }>;
  projectId: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  teamId: string;
  tasks: Task[];
  members: User[];
  progress: number;
  status: 'active' | 'completed' | 'on_hold';
}

export interface Team {
  id: string;
  name: string;
  description: string;
  members: Array<{
    userId: string;
    role: UserRole;
  }>;
  projects: string[];
}
