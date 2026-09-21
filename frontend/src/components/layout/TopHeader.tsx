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
    <header className="relative z-30 flex h-18 shrink-0 items-center justify-between border-b border-border/40 bg-bg-panel/95 backdrop-blur-xl px-4 sm:px-6 lg:px-8 shadow-sm">
      <div className="flex flex-1 items-center">
        {onMenuClick && (
          <button 
            onClick={onMenuClick}
            className="mr-4 rounded-xl p-2.5 text-text-muted hover:bg-bg-base lg:hidden focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300"
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        )}
        <h1 className="text-xl font-extrabold tracking-tight text-text-base truncate">
          Campus Energy Control
        </h1>
        {lastResult && (
          <div className="ml-5 hidden sm:flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary shadow-xs">
            <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span>Scenario: <span className="text-text-base ml-1">{lastResult.scenario_id}</span></span>
          </div>
        )}
      </div>
      <div className="flex items-center space-x-3 ml-4">
        <button 
          onClick={() => setIsDark(!isDark)}
          className="rounded-full p-2.5 text-text-muted bg-bg-base/50 border border-border/60 hover:bg-bg-base hover:text-primary hover:border-primary/50 shadow-xs transition-all duration-300"
          title="Toggle Theme"
        >
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
        <NotificationBell />
      </div>
    </header>
  );
}
