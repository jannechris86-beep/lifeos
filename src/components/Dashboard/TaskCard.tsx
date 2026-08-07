import React from 'react';
import { Task } from '@/store/taskStore';
import { CheckIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';

interface TaskCardProps {
  task: Task;
  onComplete?: () => void;
  onDelete?: () => void;
  onEdit?: () => void;
}

const priorityColors = {
  high: 'bg-red-500/20 border-red-500/50 text-red-200',
  medium: 'bg-yellow-500/20 border-yellow-500/50 text-yellow-200',
  low: 'bg-green-500/20 border-green-500/50 text-green-200',
};

export default function TaskCard({ task, onComplete, onDelete, onEdit }: TaskCardProps) {
  const completedSteps = task.steps.filter((s) => s.startsWith('[x]')).length;
  const progressPercent = task.steps.length > 0 ? (completedSteps / task.steps.length) * 100 : 0;

  return (
    <div className={`glass p-6 ${task.completed ? 'opacity-60' : ''}`}>
      <div className="mb-4 flex items-start justify-between">
        <div className="flex-1">
          <h3 className={`text-lg font-semibold ${ task.completed ? 'line-through text-gray-500' : 'text-white'}`}>
            {task.title}
          </h3>
          <p className="mt-1 text-sm text-gray-400">{task.description}</p>
        </div>
        <span className={`ml-4 inline-block rounded-full border px-3 py-1 text-xs font-medium ${priorityColors[task.priority]}`}>
          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
        </span>
      </div>

      {task.deadline && (
        <div className="mb-4 text-xs text-gray-400">
          Due: {format(new Date(task.deadline), 'MMM d, yyyy')}
        </div>
      )}

      {task.steps.length > 0 && (
        <div className="mb-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-medium text-gray-400">Progress</span>
            <span className="text-xs text-gray-400">{completedSteps}/{task.steps.length}</span>
          </div>
          <div className="h-1 overflow-hidden rounded-full bg-dark-tertiary">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      )}

      {task.steps.length > 0 && (
        <div className="mb-4 max-h-32 overflow-y-auto">
          <ul className="space-y-1 text-xs text-gray-400">
            {task.steps.slice(0, 3).map((step, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {step}
              </li>
            ))}
            {task.steps.length > 3 && <li className="text-gray-500">+{task.steps.length - 3} more steps</li>}
          </ul>
        </div>
      )}

      <div className="flex gap-2">
        {!task.completed && (
          <button
            onClick={onComplete}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary/20 px-3 py-2 text-sm font-medium text-primary hover:bg-primary/30 transition-colors"
          >
            <CheckIcon className="h-4 w-4" />
            Complete
          </button>
        )}
        <button
          onClick={onEdit}
          className="rounded-lg bg-dark-tertiary/50 p-2 text-gray-400 hover:text-white transition-colors"
        >
          <PencilIcon className="h-4 w-4" />
        </button>
        <button
          onClick={onDelete}
          className="rounded-lg bg-dark-tertiary/50 p-2 text-gray-400 hover:text-red-400 transition-colors"
        >
          <TrashIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
