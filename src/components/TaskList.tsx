import React, { useState } from 'react';
import { Plus, Trash2, CheckCircle, Circle } from 'lucide-react';
import { useStore } from '../store';
import type { Task, Category, Priority } from '../types';

export const TaskList: React.FC = () => {
  const { tasks, addTask, toggleTaskComplete } = useStore();
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [category, setCategory] = useState<Category>('Work');
  const [priority, setPriority] = useState<Priority>('Medium');
  const [dueDate, setDueDate] = useState<string>('');

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const task: Task = {
      id: crypto.randomUUID(),
      title: newTaskTitle,
      completed: false,
      category,
      priority,
      dueDate: dueDate ? new Date(dueDate) : null,
    };

    addTask(task);
    setNewTaskTitle('');
    setDueDate('');
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleAddTask} className="flex flex-col gap-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
          >
            <Plus size={20} />
          </button>
        </div>
        
        <div className="flex gap-4">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as Category)}
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
          >
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Study">Study</option>
            <option value="Other">Other</option>
          </select>
          
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as Priority)}
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
          >
            <option value="High">High Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="Low">Low Priority</option>
          </select>
          
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
          />
        </div>
      </form>

      <div className="space-y-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`flex items-center justify-between p-4 rounded-lg border ${
              task.completed
                ? 'bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600'
                : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600'
            }`}
          >
            <div className="flex items-center gap-3">
              <button
                onClick={() => toggleTaskComplete(task.id)}
                className="text-gray-500 hover:text-primary-500 dark:text-gray-400"
              >
                {task.completed ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <Circle className="h-5 w-5" />
                )}
              </button>
              
              <div className={task.completed ? 'line-through text-gray-500' : ''}>
                <div className="font-medium">{task.title}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {task.category} • {task.priority} Priority
                  {task.dueDate && ` • Due ${new Date(task.dueDate).toLocaleDateString()}`}
                </div>
              </div>
            </div>

            <button
              onClick={() => {/* Delete task implementation */}}
              className="text-gray-400 hover:text-red-500 dark:text-gray-500"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};