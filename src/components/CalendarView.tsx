import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday } from 'date-fns';
import { useStore } from '../store';

export const CalendarView: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { tasks } = useStore();
  
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  const getTasksForDate = (date: Date) => {
    return tasks.filter(task => 
      task.dueDate && 
      format(new Date(task.dueDate), 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <button
          onClick={prevMonth}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
        >
          <ChevronLeft size={20} />
        </button>
        
        <h3 className="text-lg font-semibold">
          {format(currentDate, 'MMMM yyyy')}
        </h3>
        
        <button
          onClick={nextMonth}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div
            key={day}
            className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 py-2"
          >
            {day}
          </div>
        ))}
        
        {daysInMonth.map((day, index) => {
          const dayTasks = getTasksForDate(day);
          const isCurrentMonth = isSameMonth(day, currentDate);
          const isCurrentDay = isToday(day);
          
          return (
            <div
              key={index}
              className={`
                min-h-[80px] p-2 border border-gray-200 dark:border-gray-700 rounded-lg
                ${!isCurrentMonth ? 'bg-gray-50 dark:bg-gray-800/50' : 'bg-white dark:bg-gray-800'}
                ${isCurrentDay ? 'ring-2 ring-primary-500' : ''}
              `}
            >
              <div className={`
                text-sm font-medium mb-1
                ${!isCurrentMonth ? 'text-gray-400 dark:text-gray-500' : ''}
                ${isCurrentDay ? 'text-primary-500' : ''}
              `}>
                {format(day, 'd')}
              </div>
              
              <div className="space-y-1">
                {dayTasks.map(task => (
                  <div
                    key={task.id}
                    className={`
                      text-xs p-1 rounded
                      ${task.priority === 'High' ? 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300' :
                        task.priority === 'Medium' ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300' :
                        'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300'}
                    `}
                  >
                    {task.title}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};