import React from 'react';
import { Users, Award, ShieldCheck, Github, Linkedin } from 'lucide-react';
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
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-[#0A66C2] transition-colors" title="LinkedIn Profile">
                        <Linkedin className="h-4 w-4" />
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
