import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, LayoutDashboard, Zap, List, LineChart, History, Activity, X, AlertCircle, Loader2 } from 'lucide-react';
import { cn } from '../../utils/cn';
import { checkHealth } from '../../services/api';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Optimize Energy', href: '/optimize', icon: Zap },
  { name: 'Energy Plan', href: '/plan', icon: List },
  { name: 'Analytics', href: '/analytics', icon: LineChart },
  { name: 'Optimization History', href: '/history', icon: History },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ isOpen = false, onClose }: SidebarProps) {
  // Prevent scrolling when mobile sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const [healthStatus, setHealthStatus] = useState<'checking' | 'healthy' | 'error'>('checking');

  useEffect(() => {
    let mounted = true;
    
    const verifyHealth = async () => {
      const isHealthy = await checkHealth();
      if (mounted) {
        setHealthStatus(isHealthy ? 'healthy' : 'error');
      }
    };

    verifyHealth();
    const interval = setInterval(verifyHealth, 30000);
    
    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  const sidebarContent = (
    <div className="flex h-full w-64 flex-col border-r border-border bg-bg-panel/75 backdrop-blur-md">
      <div className="flex h-16 shrink-0 items-center justify-between px-6">
        <div className="flex items-center h-full py-2">
          <img src="/logo.png" alt="Nexus" className="h-full object-contain max-h-12" />
        </div>
        {onClose && (
          <button 
            onClick={onClose}
            className="lg:hidden rounded-md p-2 text-text-muted hover:bg-bg-base"
          >
            <X className="h-6 w-6" />
          </button>
        )}
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto px-4 py-4">
        <nav className="flex-1 space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              onClick={() => {
                if (onClose) onClose();
              }}
              className={({ isActive }) =>
                cn(
                  isActive
                    ? 'bg-primary-light text-primary'
                    : 'text-text-base hover:bg-bg-base hover:text-text-base',
                  'group flex items-center rounded-md px-2 py-2 text-sm font-medium transition-colors'
                )
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon
                    className={cn(
                      isActive ? 'text-primary' : 'text-text-muted group-hover:text-text-muted',
                      'mr-3 h-5 w-5 flex-shrink-0 transition-colors'
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="shrink-0 border-t border-border p-4">
        <a 
          href="/health" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center text-sm font-medium text-text-base hover:text-text-base cursor-pointer transition-colors"
        >
          {healthStatus === 'checking' && (
            <>
              <Loader2 className="mr-2 h-5 w-5 text-text-muted animate-spin" />
              Checking System...
            </>
          )}
          {healthStatus === 'healthy' && (
            <>
              <Activity className="mr-2 h-5 w-5 text-green-500" />
              System Healthy
            </>
          )}
          {healthStatus === 'error' && (
            <>
              <AlertCircle className="mr-2 h-5 w-5 text-red-500" />
              System Offline
            </>
          )}
        </a>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-900/80 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <div 
        className={cn(
          "fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out lg:static lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {sidebarContent}
      </div>
    </>
  );
}
