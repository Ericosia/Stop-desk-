'use client';

import React, { useEffect, useState } from 'react';
import { Package } from 'lucide-react';

const LoadingOverlay: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading overlay once the page is fully loaded
    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.addEventListener('load', () => setIsLoading(false));
    }

    // Show loading overlay on navigation
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    window.addEventListener('beforeunload', handleStart);
    window.addEventListener('unload', handleStart);

    return () => {
      window.removeEventListener('load', () => setIsLoading(false));
      window.removeEventListener('beforeunload', handleStart);
      window.removeEventListener('unload', handleStart);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white/90 bg-gray-900/90 backdrop-blur-sm z-[9999] flex items-center justify-center">
      <div className="relative"> 
        {/* Outer spinning circle */}
        <div className="absolute inset-0 w-24 h-24 border-8 border-blue-200 dark:border-blue-800 rounded-full animate-[spin_3s_linear_infinite]" />
        
        {/* Middle spinning circle */}
        <div className="absolute inset-2 w-20 h-20 border-8 border-blue-400 dark:border-blue-600 border-t-transparent rounded-full animate-[spin_2s_linear_infinite_reverse]" />
        
        {/* Inner spinning circle */}
        <div className="absolute inset-4 w-16 h-16 border-8 border-blue-600 dark:border-blue-400 border-b-transparent rounded-full animate-[spin_1.5s_linear_infinite]" />
        
        {/* Center icon */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          <Package className="w-12 h-12 text-blue-600 dark:text-blue-400 animate-pulse" />
        </div>
        
        {/* Loading text */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <p className="text-base font-medium text-gray-800 dark:text-gray-200">
            Loading...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay;