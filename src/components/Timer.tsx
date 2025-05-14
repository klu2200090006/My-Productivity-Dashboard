import React, { useState, useEffect } from 'react';
import { Play, Pause, RefreshCw, Plus, Minus } from 'lucide-react';

export const Timer: React.FC = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && totalSeconds > 0) {
      interval = setInterval(() => {
        setTotalSeconds((prev) => prev - 1);
        setMinutes(Math.floor(totalSeconds / 60));
        setSeconds(totalSeconds % 60);
      }, 1000);
    } else if (totalSeconds === 0) {
      setIsRunning(false);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning, totalSeconds]);

  const toggleTimer = () => {
    if (totalSeconds > 0) {
      setIsRunning(!isRunning);
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTotalSeconds(0);
    setMinutes(0);
    setSeconds(0);
  };

  const adjustTime = (type: 'minutes' | 'seconds', amount: number) => {
    if (!isRunning) {
      if (type === 'minutes') {
        const newMinutes = Math.max(0, minutes + amount);
        setMinutes(newMinutes);
        setTotalSeconds(newMinutes * 60 + seconds);
      } else {
        const newSeconds = Math.max(0, Math.min(59, seconds + amount));
        setSeconds(newSeconds);
        setTotalSeconds(minutes * 60 + newSeconds);
      }
    }
  };

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="flex items-center space-x-8">
        <div className="flex flex-col items-center">
          <button
            onClick={() => adjustTime('minutes', 1)}
            className="p-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 disabled:opacity-50"
            disabled={isRunning}
          >
            <Plus size={24} />
          </button>
          <div className="text-4xl font-bold tabular-nums">{formatNumber(minutes)}</div>
          <button
            onClick={() => adjustTime('minutes', -1)}
            className="p-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 disabled:opacity-50"
            disabled={isRunning}
          >
            <Minus size={24} />
          </button>
        </div>

        <div className="text-4xl font-bold">:</div>

        <div className="flex flex-col items-center">
          <button
            onClick={() => adjustTime('seconds', 1)}
            className="p-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 disabled:opacity-50"
            disabled={isRunning}
          >
            <Plus size={24} />
          </button>
          <div className="text-4xl font-bold tabular-nums">{formatNumber(seconds)}</div>
          <button
            onClick={() => adjustTime('seconds', -1)}
            className="p-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 disabled:opacity-50"
            disabled={isRunning}
          >
            <Minus size={24} />
          </button>
        </div>
      </div>

      <div className="flex space-x-4">
        <button
          onClick={toggleTimer}
          className={`flex items-center justify-center w-12 h-12 rounded-full transition-colors ${
            totalSeconds === 0
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700 text-white'
          }`}
          disabled={totalSeconds === 0}
        >
          {isRunning ? <Pause size={24} /> : <Play size={24} />}
        </button>
        <button
          onClick={resetTimer}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 transition-colors"
        >
          <RefreshCw size={24} />
        </button>
      </div>
    </div>
  );
};