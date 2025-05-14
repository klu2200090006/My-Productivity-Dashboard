import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const WelcomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden"
    >
      <div className="p-8 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="inline-block p-3 rounded-full bg-green-100 dark:bg-green-900 mb-6"
        >
          <CheckCircle className="w-12 h-12 text-green-500" />
        </motion.div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to Productivity Dashboard
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          Your account has been successfully created! Get ready to boost your productivity with our powerful tools and features.
        </p>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">What's included:</h3>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
          >
            {[
              'Task Management',
              'Calendar Integration',
              'Pomodoro Timer',
              'Journal Entries',
              'Daily Quotes',
              'Dark Mode Support'
            ].map((feature, index) => (
              <div
                key={feature}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
              >
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>{feature}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center space-x-2 bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors duration-200"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};