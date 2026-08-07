import React from 'react';
import { Task } from '@/store/taskStore';
import TaskCard from './TaskCard';

interface PrioritySectionProps {
  priority: 'high' | 'medium' | 'low';
  tasks: Task[];
  onComplete?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const priorityConfig = {
  high: { label: 'High Priority', icon: '🔴', color: 'text-red-400' },
  medium: { label: 'Medium Priority', icon: '🟡', color: 'text-yellow-400' },
  low: { label: 'Low Priority', icon: '🟢', color: 'text-green-400' },
};

export default function PrioritySection({
  priority,
  tasks,
  onComplete,
  onDelete,
}: PrioritySectionProps) {
  const config = priorityConfig[priority];
  const filteredTasks = tasks.filter((t) => t.priority === priority && !t.completed);

  if (filteredTasks.length === 0) return null;

  return (
    <div>
      <h3 className={`mb-4 flex items-center gap-2 text-lg font-semibold ${config.color}`}>
        <span>{config.icon}</span>
        {config.label}
      </h3>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onComplete={() => onComplete?.(task.id)}
            onDelete={() => onDelete?.(task.id)}
          />
        ))}
      </div>
    </div>
  );
}
