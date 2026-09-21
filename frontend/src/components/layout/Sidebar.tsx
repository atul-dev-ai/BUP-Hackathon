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
    <div className="flex h-full w-64 flex-col border-r border-border/50 bg-bg-panel/95 backdrop-blur-xl shadow-2xl">
      {/* Brand Header */}
      <div className="flex h-20 shrink-0 items-center justify-between px-6 border-b border-border/40">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-light/50 border border-primary/30 shadow-xs">
            <img src="/logo.png" alt="GridWise Logo" className="h-6 w-6 object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-text-base leading-tight">GridWise</span>
            <span className="text-[9px] font-semibold text-primary uppercase tracking-widest">AI Microgrid</span>
          </div>
        </div>
        {onClose && (
          <button 
            onClick={onClose}
            className="lg:hidden rounded-lg p-2 text-text-muted hover:bg-bg-base transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Navigation */}
      <div className="flex flex-1 flex-col overflow-y-auto px-4 py-6 scrollbar-hide">
        <nav className="flex-1 space-y-1.5">
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
                    ? 'bg-primary/10 text-primary border border-primary/20 shadow-inner'
                    : 'text-text-muted hover:bg-bg-base/80 hover:text-text-base border border-transparent',
                  'group flex items-center rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-300'
                )
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon
                    className={cn(
                      isActive ? 'text-primary' : 'text-text-muted group-hover:text-text-base',
                      'mr-3 h-5 w-5 flex-shrink-0 transition-colors duration-300'
                    )}
                    aria-hidden="true"
                  />
                  <span className={cn("transition-transform duration-300", isActive ? "translate-x-1" : "group-hover:translate-x-1")}>
                    {item.name}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Footer / System Health */}
      <div className="shrink-0 p-4">
        <a 
          href="/health" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-between rounded-xl border border-border/60 bg-bg-base/50 p-3 hover:bg-bg-base hover:border-primary/40 transition-all cursor-pointer group shadow-sm"
        >
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-0.5">System Status</span>
            <div className="flex items-center text-xs font-semibold text-text-base group-hover:text-primary transition-colors">
              {healthStatus === 'checking' && (
                <>
                  <Loader2 className="mr-1.5 h-3.5 w-3.5 text-text-muted animate-spin" />
                  Checking...
                </>
              )}
              {healthStatus === 'healthy' && (
                <>
                  <Activity className="mr-1.5 h-3.5 w-3.5 text-green-500" />
                  Healthy
                </>
              )}
              {healthStatus === 'error' && (
                <>
                  <AlertCircle className="mr-1.5 h-3.5 w-3.5 text-red-500" />
                  Offline
                </>
              )}
            </div>
          </div>
          <div className={cn(
            "h-2 w-2 rounded-full",
            healthStatus === 'checking' ? 'bg-amber-400 animate-pulse' :
            healthStatus === 'healthy' ? 'bg-green-500 animate-pulse' : 'bg-red-500'
          )} />
        </a>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm lg:hidden transition-opacity"
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
