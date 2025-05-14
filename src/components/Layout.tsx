import React from 'react';
import { Sun, Moon, Heart } from 'lucide-react';
import { useStore } from '../store';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme, toggleTheme } = useStore();
  
  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Moon size={20} />;
      case 'dark':
        return <Heart size={20} className="text-pink-400" />;
      case 'babypink':
        return <Sun size={20} />;
    }
  };
  
  return (
    <div className={`min-h-screen ${
      theme === 'dark' ? 'bg-gray-900 text-white' :
      theme === 'babypink' ? 'bg-pink-50 text-gray-900' :
      'bg-gray-50 text-gray-900'
    }`}>
      <nav className={`border-b ${
        theme === 'dark' ? 'border-gray-700' :
        theme === 'babypink' ? 'border-pink-200' :
        'border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className={`text-2xl font-bold ${
                theme === 'babypink' ? 'text-pink-600' : ''
              }`}>Productivity Dashboard</h1>
            </div>
            <div className="flex items-center">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${
                  theme === 'dark' ? 'hover:bg-gray-700' :
                  theme === 'babypink' ? 'hover:bg-pink-100' :
                  'hover:bg-gray-200'
                }`}
              >
                {getThemeIcon()}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
};