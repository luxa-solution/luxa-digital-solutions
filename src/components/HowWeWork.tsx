import React from "react";
import { CheckCircle2, Calendar, ClipboardCheck } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Discovery & Diagnosis",
    description:
      "We begin by understanding your operations, bottlenecks, and goals so we can diagnose structural operational gaps before proposing code.",
    duration: "1-2 Weeks",
    accentColor: "#12bbbb", // Brand Teal
    cards: [
      {
        title: "Business Review",
        duration: "Week 1",
        tags: ["Workflow Mapping", "Pain Points", "Goals", "Current Tools"],
      },
      {
        title: "System Audit",
        duration: "Week 2",
        tags: ["Process Review", "Data Flow", "Users", "Constraints"],
      },
      {
        title: "Roadmap Proposal",
        duration: "Week 2",
        tags: ["Scope", "Priority", "Timeline", "Success Metrics"],
      },
    ],
  },
  {
    id: "02",
    title: "System Design & Build",
    description:
      "We turn diagnosis findings into modular product structures, interactive user interfaces, and robust codebase structures tailored to your team.",
    duration: "4-8 Weeks",
    accentColor: "#e6b14b", // Brand Gold
    cards: [
      {
        title: "Flow & UX Design",
        duration: "Weeks 1-2",
        tags: ["Wireframes", "User Journey", "Interfaces", "Design System"],
      },
      {
        title: "Platform Development",
        duration: "Weeks 3-6",
        tags: ["Frontend", "Backend", "Integrations", "Automation"],
      },
      {
        title: "Quality Validation",
        duration: "Weeks 7-8",
        tags: ["Validation", "Performance", "Security", "Refinement"],
      },
    ],
  },
  {
    id: "03",
    title: "Launch & Support",
    description:
      "We support production deployment, run onboarding sessions for your staff, and continuously optimize the performance of the system.",
    duration: "Ongoing",
    accentColor: "#bb1212", // Brand Coral
    cards: [
      {
        title: "Deployment",
        duration: "Week 1",
        tags: ["Go Live", "Setup", "Training", "Documentation"],
      },
      {
        title: "Team Adoption",
        duration: "Week 2",
        tags: ["Handover", "Feedback", "Optimization", "Support"],
      },
      {
        title: "Scaling Support",
        duration: "Ongoing",
        tags: ["Updates", "Enhancements", "Monitoring", "Scaling"],
      },
    ],
  },
];

const HowWeWork: React.FC = () => {
  return (
    <section
      id="how-we-work"
      className="relative overflow-hidden bg-brand-dark py-24 text-white dark:bg-black sm:py-28 lg:py-36"
    >
      {/* Decorative gradients */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-96 w-96 rounded-full bg-brand-coral/5 blur-3xl"></div>
      <div className="pointer-events-none absolute right-1/4 bottom-10 h-96 w-96 rounded-full bg-brand-teal/5 blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20 max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-teal sm:text-sm">
            OUR PROCESS
          </p>
          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            HOW WE
            <span className="block text-gradient-teal-gold">BUILD SYSTEMS</span>
          </h2>
          <p className="mt-6 text-base text-gray-400 sm:text-lg">
            We follow a structured roadmap designed to remove ambiguity, validate requirements, and deliver predictable outcomes.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Central Line for larger screens */}
          <div className="absolute left-8 top-2 bottom-2 hidden w-0.5 bg-gradient-to-b from-brand-teal via-brand-gold to-brand-coral opacity-25 lg:left-12 lg:block"></div>

          {/* Steps List */}
          <div className="space-y-24">
            {steps.map((step) => (
              <div
                key={step.id}
                className="relative grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16"
              >
                {/* Timeline node */}
                <div className="relative z-10 col-span-1 flex items-center lg:col-span-1 lg:justify-center">
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-charcoal text-xl font-bold border-2 shadow-xl lg:h-24 lg:w-24 lg:text-3xl"
                    style={{
                      borderColor: step.accentColor,
                      boxShadow: `0 0 20px ${step.accentColor}20`,
                      color: step.accentColor,
                    }}
                  >
                    {step.id}
                  </div>
                </div>

                {/* Step Content */}
                <div className="col-span-1 lg:col-span-11">
                  <div className="mb-8 flex flex-wrap items-center gap-4">
                    <h3 className="text-2xl font-bold uppercase tracking-tight sm:text-3xl lg:text-4xl">
                      {step.title}
                    </h3>
                    <span
                      className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase border"
                      style={{
                        borderColor: `${step.accentColor}30`,
                        backgroundColor: `${step.accentColor}10`,
                        color: step.accentColor,
                      }}
                    >
                      <Calendar className="mr-1.5 h-3.5 w-3.5" />
                      {step.duration}
                    </span>
                  </div>

                  <p className="mb-10 max-w-3xl text-sm leading-relaxed text-gray-400 sm:text-base lg:text-lg">
                    {step.description}
                  </p>

                  {/* Substeps Grid */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {step.cards.map((card, idx) => (
                      <div
                        key={idx}
                        className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01] p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.03] hover:border-white/10"
                      >
                        <div>
                          <div className="mb-4 flex items-center justify-between">
                            <span className="text-xs font-mono text-gray-500 uppercase">
                              Phase 0{idx + 1}
                            </span>
                            <span className="text-xs font-semibold text-brand-teal">
                              {card.duration}
                            </span>
                          </div>

                          <h4 className="mb-3 text-lg font-bold text-white transition-colors duration-300 group-hover:text-brand-teal">
                            {card.title}
                          </h4>
                        </div>

                        {/* Badges */}
                        <div className="mt-4 flex flex-wrap gap-2">
                          {card.tags.map((tag, tagIdx) => (
                            <span
                              key={tagIdx}
                              className="rounded-full bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-gray-300 border border-white/5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
