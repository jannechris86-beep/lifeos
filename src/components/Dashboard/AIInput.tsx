import React, { useState } from 'react';
import { SparklesIcon, MicrophoneIcon } from '@heroicons/react/24/outline';

interface AIInputProps {
  onSubmit: (message: string) => void;
  isLoading?: boolean;
}

const suggestions = [
  'Plan my week',
  'Organize my tasks',
  'Prepare for my interview',
  'Plan a trip',
];

export default function AIInput({ onSubmit, isLoading }: AIInputProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSubmit(input);
      setInput('');
    }
  };

  return (
    <div className="mb-12">
      <form onSubmit={handleSubmit} className="mx-auto max-w-3xl space-y-6">
        <div className="glass relative overflow-hidden">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What do you need help with today?"
            className="w-full resize-none bg-transparent px-6 py-4 text-lg text-white placeholder-gray-500 outline-none"
            rows={3}
          />
          <div className="flex items-center justify-between border-t border-white/10 px-6 py-4">
            <button
              type="button"
              className="rounded-full bg-dark-tertiary p-2 hover:bg-secondary/20 transition-colors"
            >
              <MicrophoneIcon className="h-5 w-5 text-gray-400" />
            </button>
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-secondary px-6 py-2 font-semibold text-white hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              <SparklesIcon className="h-5 w-5" />
              {isLoading ? 'Processing...' : 'Ask LifeOS'}
            </button>
          </div>
        </div>
      </form>

      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => onSubmit(suggestion)}
            className="rounded-full border border-white/20 px-4 py-2 text-sm text-gray-400 hover:border-primary hover:text-primary transition-colors"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}
