import { create } from 'zustand';

export interface Task {
  id: string;
  title: string;
  description: string;
  deadline?: string;
  priority: 'high' | 'medium' | 'low';
  category: string;
  steps: string[];
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

interface TaskStore {
  tasks: Task[];
  addTask: (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  completeTask: (id: string) => void;
  getTodaysTasks: () => Task[];
  getTasksByPriority: (priority: 'high' | 'medium' | 'low') => Task[];
}

export const useTaskStore = create<TaskStore>((set, get) => ({
  tasks: [],

  addTask: (task) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          ...task,
          id: `task_${Date.now()}`,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ],
    })),

  updateTask: (id, updates) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id
          ? { ...task, ...updates, updatedAt: new Date().toISOString() }
          : task
      ),
    })),

  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),

  completeTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id
          ? { ...task, completed: true, updatedAt: new Date().toISOString() }
          : task
      ),
    })),

  getTodaysTasks: () => {
    const tasks = get().tasks;
    const today = new Date().toDateString();
    return tasks.filter((task) => {
      if (!task.deadline) return true;
      return new Date(task.deadline).toDateString() === today;
    });
  },

  getTasksByPriority: (priority) => {
    return get().tasks.filter((task) => task.priority === priority && !task.completed);
  },
}));
