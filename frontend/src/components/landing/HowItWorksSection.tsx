import React from 'react';
import { MessageSquare, Sparkles, ShieldCheck, Cpu, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Operator Input',
    subtitle: 'Human Directives',
    description: 'Facility engineers enter 1–3 natural-language instructions detailing maintenance windows, minimum battery reserves, or grid caps.',
    icon: MessageSquare,
    badge: 'Natural Language',
    highlight: 'Operator Notes',
  },
  {
    step: '02',
    title: 'AI Interpretation',
    subtitle: 'Semantic Translation',
    description: 'The LLM translates informal text into strict JSON directives with zero ambiguity regarding time bounds and quantitative factors.',
    icon: Sparkles,
    badge: 'Strict JSON Schema',
    highlight: 'Groq / OpenAI',
  },
  {
    step: '03',
    title: 'Constraint Validation',
    subtitle: 'Deterministic Guardrails',
    description: '13 strict zero-trust rules assert that all hours are in [0, 23], factors are bounded, values are non-negative, and parameters are physically valid.',
    icon: ShieldCheck,
    badge: 'Zero-Trust Gate',
    highlight: '13 Checks',
  },
  {
    step: '04',
    title: 'MILP Optimization',
    subtitle: 'Mathematical Dispatch',
    description: 'Coin-OR CBC solver optimizes 144 decision variables across 24 hours, enforcing conservation laws and charge/discharge mutual exclusivity.',
    icon: Cpu,
    badge: 'PuLP / CBC Solver',
    highlight: 'Cost Minimization',
  },
  {
    step: '05',
    title: 'Validated Plan',
    subtitle: 'Certified Schedule',
    description: 'An independent replay validator recalculates every energy transition at 1e-5 numerical tolerance before emitting the final hourly plan.',
    icon: CheckCircle,
    badge: 'Physics Verified',
    highlight: '24-Hour Dispatch',
  }
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-bg-panel border-t border-border/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary border border-primary">
            End-to-End Pipeline
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-text-base sm:text-4xl">
            How GridWise Works
          </h2>
          <p className="mt-4 text-base text-text-muted leading-relaxed">
            A seamless bridge between natural human communication and rigorous mathematical optimization.
            The LLM provides semantic comprehension, while deterministic algorithms guarantee physics and safety.
          </p>
        </div>

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className="relative flex flex-col justify-between rounded-2xl bg-bg-base/80 p-6 border border-border hover:border-green-300 hover:shadow-md transition-all group"
            >
              {/* Step indicator & badge */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-slate-300 group-hover:text-green-600 transition-colors font-mono">
                    {item.step}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bg-panel border border-border text-primary shadow-xs group-hover:scale-110 group-hover:bg-primary-light transition-all">
                    <item.icon className="h-5 w-5" />
                  </div>
                </div>

                <span className="inline-flex items-center rounded-md bg-primary-light/70 px-2 py-0.5 text-[10px] font-semibold text-primary mb-2">
                  {item.badge}
                </span>

                <h3 className="text-base font-bold text-text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-text-muted mb-3">
                  {item.subtitle}
                </p>

                <p className="text-xs text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom footer */}
              <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-[11px] text-text-muted font-medium">
                <span>{item.highlight}</span>
                {idx < steps.length - 1 && (
                  <ArrowRight className="h-3.5 w-3.5 text-slate-300 hidden lg:block" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Flow summary banner */}
        <div className="mt-12 rounded-xl bg-primary-light p-4 sm:p-5 border border-primary flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-semibold text-green-900 text-center">
          <span className="bg-bg-panel px-3 py-1 rounded-md border border-green-300 shadow-xs">Operator Note</span>
          <span className="text-green-600">→</span>
          <span className="bg-bg-panel px-3 py-1 rounded-md border border-green-300 shadow-xs">AI Translation</span>
          <span className="text-green-600">→</span>
          <span className="bg-bg-panel px-3 py-1 rounded-md border border-green-300 shadow-xs">13 Guardrails</span>
          <span className="text-green-600">→</span>
          <span className="bg-bg-panel px-3 py-1 rounded-md border border-green-300 shadow-xs">MILP Optimizer</span>
          <span className="text-green-600">→</span>
          <span className="bg-green-700 text-white px-3 py-1 rounded-md shadow-xs">Validated 24h Plan</span>
        </div>

      </div>
    </section>
  );
}
