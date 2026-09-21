import React, { useState, useEffect } from 'react';
import { User, ChevronDown, Menu, Moon, Sun } from 'lucide-react';
import { useAppStore } from '../../store/appStore';
import { NotificationBell } from './NotificationBell';

interface TopHeaderProps {
  onMenuClick?: () => void;
}

export function TopHeader({ onMenuClick }: TopHeaderProps) {
  const lastResult = useAppStore((state) => state.lastResult);
  
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <header className="relative z-30 flex h-16 shrink-0 items-center justify-between border-b border-border bg-bg-panel/85 backdrop-blur-md px-4 sm:px-6 lg:px-8">
      <div className="flex flex-1 items-center">
        {onMenuClick && (
          <button 
            onClick={onMenuClick}
            className="mr-4 rounded-md p-2 text-text-muted hover:bg-bg-base lg:hidden focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        )}
        <h1 className="text-lg font-semibold text-text-base truncate">
          Campus Energy Control
        </h1>
        {lastResult && (
          <div className="ml-4 hidden sm:flex items-center rounded-full bg-bg-base px-3 py-1 text-xs font-medium text-text-base">
            Scenario: <span className="ml-1 text-text-base font-semibold truncate max-w-[150px]">{lastResult.scenario_id}</span>
          </div>
        )}
      </div>
      <div className="flex items-center space-x-2 sm:space-x-4 ml-4">
        <button 
          onClick={() => setIsDark(!isDark)}
          className="rounded-full p-2 text-text-muted hover:bg-bg-base hover:text-primary transition-colors"
          title="Toggle Theme"
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
        <NotificationBell />
      </div>
    </header>
  );
}
