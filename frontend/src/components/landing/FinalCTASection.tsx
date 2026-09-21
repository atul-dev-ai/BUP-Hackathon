import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function FinalCTASection() {
  return (
    <section className="py-16 sm:py-20 bg-bg-panel border-y border-border/50 text-text-base relative overflow-hidden">
      {/* Background Subtle Accent Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--color-primary)_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.07] pointer-events-none" />
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary border border-primary/20 mb-6">
          <ShieldCheck className="h-4 w-4 text-primary" />
          <span>Autonomous Microgrid Dispatch</span>
        </div>

        <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-text-base">
          Ready to optimize campus energy?
        </h2>

        <p className="mt-4 text-base sm:text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
          Give GridWise an operator instruction and generate a validated 24-hour energy plan.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/optimize"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary-hover active:scale-[0.98] transition-all"
          >
            <Zap className="h-5 w-5 fill-current text-white/80" />
            <span>Launch Optimizer</span>
            <ArrowRight className="h-5 w-5" />
          </Link>

          <Link
            to="/dashboard"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-bg-base px-6 py-4 text-base font-medium text-text-base border border-border hover:bg-border/40 transition-all"
          >
            <span>View Telemetry Dashboard</span>
          </Link>
        </div>

        <div className="mt-10 pt-8 border-t border-border/60 flex flex-wrap items-center justify-center gap-6 text-xs text-text-muted font-medium">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
            Zero-Trust Guardrail Isolation
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
            Coin-OR CBC Solver Integration
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
            Independent Physics Replay
          </span>
        </div>

      </div>
    </section>
  );
}
