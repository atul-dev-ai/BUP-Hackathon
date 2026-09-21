import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ShieldCheck } from 'lucide-react';

export function LandingFooter() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-bg-panel border-t border-border/60 py-16 overflow-hidden mt-10">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary-light/30 blur-[100px] pointer-events-none rounded-full" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
          
          {/* Brand & Wordmark */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light border border-primary/20 shadow-sm">
                <img src="/logo.png" alt="GridWise Logo" className="h-6 w-6 object-contain" />
              </div>
              <span className="text-xl font-extrabold text-text-base tracking-tight">GridWise</span>
            </div>
            <p className="mt-4 text-sm text-text-muted max-w-xs leading-relaxed">
              AI-powered campus energy optimization and deterministic microgrid dispatch engine.
            </p>
            <div className="mt-5 inline-flex items-center rounded-full bg-primary-light/50 px-3 py-1 text-xs font-bold tracking-wide text-primary border border-primary/20">
              Team CISNEXUS • BUP CSE FEST 2026
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-center gap-x-8 gap-y-4 text-sm font-semibold text-text-muted">
            <Link to="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link>
            <Link to="/optimize" className="hover:text-primary transition-colors">Optimize</Link>
            <button onClick={() => scrollToSection('how-it-works')} className="hover:text-primary transition-colors cursor-pointer">How It Works</button>
            <button onClick={() => scrollToSection('energy-system')} className="hover:text-primary transition-colors cursor-pointer">Energy System</button>
            <button onClick={() => scrollToSection('capabilities')} className="hover:text-primary transition-colors cursor-pointer">Capabilities</button>
            <button onClick={() => scrollToSection('team')} className="hover:text-primary transition-colors cursor-pointer">Team</button>
          </div>

          {/* GitHub Project Link */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <a
              href="https://github.com/atul-dev-ai/BUP-Hackathon"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-xl bg-text-base px-5 py-3 text-sm font-semibold text-bg-panel hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-text-base/10 transition-all duration-300"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>Star on GitHub</span>
            </a>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-16 pt-8 border-t border-border/80 flex flex-col md:flex-row items-center justify-between text-xs text-text-muted gap-4">
          <span className="font-medium tracking-wide">&copy; {new Date().getFullYear()} GridWise • All rights reserved.</span>
          <span className="flex items-center gap-2 rounded-full bg-bg-base px-4 py-2 border border-border shadow-xs">
            <ShieldCheck className="h-4 w-4 text-green-500" />
            <span className="font-semibold text-text-base">Deterministic MILP Engine</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
