import { Project, Task, Team, User } from '@/types';

export const mockUsers: User[] = [
  {
    id: 'u1',
    name: 'Alex Johnson',
    email: 'alex@student.edu',
    role: 'team_leader',
    avatar: '/avatars/alex.jpg',
    teams: ['t1', 't2'],
  },
  {
    id: 'u2',
    name: 'Sarah Chen',
    email: 'sarah@student.edu',
    role: 'team_member',
    avatar: '/avatars/sarah.jpg',
    teams: ['t1'],
  },
  {
    id: 'u3',
    name: 'Mike Ross',
    email: 'mike@student.edu',
    role: 'team_member',
    avatar: '/avatars/mike.jpg',
    teams: ['t2'],
  },
  {
    id: 'u4',
    name: 'Emma Wilson',
    email: 'emma@student.edu',
    role: 'team_leader',
    avatar: '/avatars/emma.jpg',
    teams: ['t2'],
  },
];

export const mockTasks: Task[] = [
  {
    id: 't1',
    title: 'Design System Implementation',
    description: 'Create a consistent design system for the project',
    priority: 'major',
    status: 'in_progress',
    assignee: 'u1',
    dueDate: '2025-03-15',
    attachments: [],
    projectId: 'p1',
  },
  {
    id: 't2',
    title: 'User Research',
    description: 'Conduct user interviews and analyze feedback',
    priority: 'critical',
    status: 'todo',
    assignee: 'u2',
    dueDate: '2025-03-10',
    attachments: [],
    projectId: 'p1',
  },
  {
    id: 't3',
    title: 'Database Schema Design',
    description: 'Design and implement database structure',
    priority: 'major',
    status: 'review',
    assignee: 'u3',
    dueDate: '2025-03-20',
    attachments: [],
    projectId: 'p2',
  },
  {
    id: 't4',
    title: 'API Documentation',
    description: 'Document all API endpoints and usage',
    priority: 'normal',
    status: 'done',
    assignee: 'u4',
    dueDate: '2025-03-05',
    attachments: [],
    projectId: 'p2',
  },
];

export const mockProjects: Project[] = [
  {
    id: 'p1',
    name: 'Student Portal Redesign',
    description: 'Modernizing the student portal interface',
    startDate: '2025-02-01',
    endDate: '2025-05-01',
    teamId: 't1',
    tasks: mockTasks.filter(t => t.projectId === 'p1'),
    members: mockUsers.filter(u => u.teams.includes('t1')),
    progress: 35,
    status: 'active',
  },
  {
    id: 'p2',
    name: 'Course Management System',
    description: 'Building a new course management platform',
    startDate: '2025-02-15',
    endDate: '2025-06-01',
    teamId: 't2',
    tasks: mockTasks.filter(t => t.projectId === 'p2'),
    members: mockUsers.filter(u => u.teams.includes('t2')),
    progress: 65,
    status: 'active',
  },
];

export const mockTeams: Team[] = [
  {
    id: 't1',
    name: 'UX Innovation Team',
    description: 'Focused on user experience improvements',
    members: [
      { userId: 'u1', role: 'team_leader' },
      { userId: 'u2', role: 'team_member' },
    ],
    projects: ['p1'],
  },
  {
    id: 't2',
    name: 'Backend Development Team',
    description: 'Core system architecture and development',
    members: [
      { userId: 'u4', role: 'team_leader' },
      { userId: 'u3', role: 'team_member' },
    ],
    projects: ['p2'],
  },
];
