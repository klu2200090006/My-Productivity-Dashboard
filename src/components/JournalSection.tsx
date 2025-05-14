import React, { useState } from 'react';

export const JournalSection: React.FC = () => {
  const [entry, setEntry] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle journal entry submission here
    console.log('Journal entry:', entry);
    setEntry('');
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-3">
        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          className="w-full h-32 p-3 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Write your thoughts for today..."
        />
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Save Entry
        </button>
      </form>
      
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Write daily reflections, goals, or thoughts to track your journey.
      </div>
    </div>
  );
};