import React from 'react';
import { Users, Award, ShieldCheck } from 'lucide-react';
import { teamMembers } from '../../data/teamData';

export function TeamSection() {
  return (
    <section id="team" className="py-16 sm:py-24 bg-bg-base border-t border-border/80 scroll-mt-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary border border-primary">
            <Users className="h-3.5 w-3.5 text-primary" />
            Team CISNEXUS
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-text-base sm:text-4xl">
            Meet the Team
          </h2>
          <p className="mt-4 text-base text-text-muted leading-relaxed">
            Built by a team passionate about AI, optimization, and smarter campus energy.
          </p>
        </div>

        {/* 4-Card Responsive Grid: Desktop 4 in a row, Tablet 2x2, Mobile 1 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group relative flex flex-col justify-between rounded-2xl bg-bg-panel p-6 border border-border/90 shadow-xs hover:shadow-xl hover:border-green-400 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Photo Container with subtle zoom effect */}
                <div className="relative mx-auto mb-5 h-44 w-44 sm:h-48 sm:w-48 overflow-hidden rounded-2xl bg-bg-base border-2 border-border/80 group-hover:border-green-600 shadow-sm transition-colors duration-300">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none" />
                </div>

                {/* Member Info */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-text-base group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  
                  <p className="mt-1 text-xs font-semibold text-primary leading-snug">
                    {member.role}
                  </p>

                  <p className="mt-3 text-xs text-text-muted leading-relaxed">
                    {member.description}
                  </p>

                  {/* Social Links */}
                  <div className="mt-4 flex items-center justify-center gap-4">
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors" title="GitHub Profile">
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-[#0A66C2] transition-colors" title="LinkedIn Profile">
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Focus Area Tag */}
              {member.focusArea && (
                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-border/60 text-center">
                  <span className="inline-flex items-center gap-1 rounded-full bg-bg-base px-2.5 py-0.5 text-[10px] font-medium text-text-muted group-hover:bg-primary-light group-hover:text-primary transition-colors">
                    <Award className="h-3 w-3 text-green-600" />
                    <span>{member.focusArea}</span>
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Team Philosophy Note */}
        <div className="mt-12 text-center text-xs text-text-muted max-w-xl mx-auto flex items-center justify-center gap-2">
          <ShieldCheck className="h-4 w-4 text-green-600 shrink-0" />
          <span>Developed with zero-trust safety principles for the BUP CSE FEST 2026 Hackathon Challenge.</span>
        </div>

      </div>
    </section>
  );
}
