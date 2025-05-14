export type Task = {
  id: string;
  title: string;
  completed: boolean;
  category: Category;
  priority: Priority;
  dueDate: Date | null;
};

export type Category = 'Work' | 'Personal' | 'Study' | 'Other';
export type Priority = 'High' | 'Medium' | 'Low';

export type JournalEntry = {
  id: string;
  content: string;
  mood: Mood;
  date: Date;
};

export type Mood = 'Happy' | 'Sad' | 'Excited' | 'Neutral' | 'Anxious';

export type Theme = 'light' | 'dark' | 'babypink';

export type Quote = {
  text: string;
  author: string;
  favorite: boolean;
};