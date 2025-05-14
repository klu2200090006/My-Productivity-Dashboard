import { create } from 'zustand';
import { Task, JournalEntry, Theme, Quote } from './types';

interface AppState {
  tasks: Task[];
  journalEntries: JournalEntry[];
  theme: Theme;
  quotes: Quote[];
  addTask: (task: Task) => void;
  toggleTaskComplete: (taskId: string) => void;
  addJournalEntry: (entry: JournalEntry) => void;
  toggleTheme: () => void;
  toggleQuoteFavorite: (quote: Quote) => void;
}

export const useStore = create<AppState>((set) => ({
  tasks: [],
  journalEntries: [],
  theme: 'light',
  quotes: [],
  
  addTask: (task) => set((state) => ({ 
    tasks: [...state.tasks, task] 
  })),
  
  toggleTaskComplete: (taskId) => set((state) => ({
    tasks: state.tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    )
  })),
  
  addJournalEntry: (entry) => set((state) => ({
    journalEntries: [...state.journalEntries, entry]
  })),
  
  toggleTheme: () => set((state) => ({
    theme: state.theme === 'light' ? 'dark' : state.theme === 'dark' ? 'babypink' : 'light'
  })),
  
  toggleQuoteFavorite: (quote) => set((state) => ({
    quotes: state.quotes.map(q =>
      q.text === quote.text ? { ...q, favorite: !q.favorite } : q
    )
  })),
}));