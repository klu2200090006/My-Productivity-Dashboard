import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { useStore } from '../store';
import type { Quote } from '../types';

export const DailyQuote: React.FC = () => {
  const { quotes, toggleQuoteFavorite } = useStore();
  const [currentQuote] = useState<Quote>({
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    favorite: false
  });

  const handleFavorite = () => {
    toggleQuoteFavorite(currentQuote);
  };

  return (
    <div className="space-y-4">
      <blockquote className="text-lg italic">
        "{currentQuote.text}"
      </blockquote>
      
      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
        <span>— {currentQuote.author}</span>
        <button
          onClick={handleFavorite}
          className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
            currentQuote.favorite ? 'text-red-500' : 'text-gray-400'
          }`}
        >
          <Heart className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};