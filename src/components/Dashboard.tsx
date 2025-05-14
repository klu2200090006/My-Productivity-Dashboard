import React from 'react';
import { Calendar, Clock, ListTodo, Book, Quote } from 'lucide-react';
import { TaskList } from './TaskList';
import { JournalSection } from './JournalSection';
import { CalendarView } from './CalendarView';
import { Timer } from './Timer';
import { DailyQuote } from './DailyQuote';

export const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <ListTodo className="mr-2" />
            <h2 className="text-xl font-semibold">Tasks</h2>
          </div>
          <TaskList />
        </div>
        
        <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <Calendar className="mr-2" />
            <h2 className="text-xl font-semibold">Calendar</h2>
          </div>
          <CalendarView />
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <Clock className="mr-2" />
            <h2 className="text-xl font-semibold">Timer</h2>
          </div>
          <Timer />
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <Book className="mr-2" />
            <h2 className="text-xl font-semibold">Journal</h2>
          </div>
          <JournalSection />
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <Quote className="mr-2" />
            <h2 className="text-xl font-semibold">Daily Quote</h2>
          </div>
          <DailyQuote />
        </div>
      </div>
    </div>
  );
};