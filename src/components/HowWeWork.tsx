import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Discovery & Diagnosis",
    description:
      "We begin by understanding your operations, your bottlenecks, and your goals so we can diagnose the real problem before we design a solution.",
    duration: "1-2 Weeks",
    bgGradient: "linear-gradient(135deg, #ff6b61 0%, #ff5449 100%)",
    bgSolid: "#ff6b61",
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
        title: "Roadmap",
        duration: "Week 2",
        tags: ["Scope", "Priority", "Timeline", "Success Metrics"],
      },
    ],
  },
  {
    id: 2,
    title: "System Design & Build",
    description:
      "We turn the findings into a thoughtful product structure, interface, and technical build that fits how your team actually works.",
    duration: "4-8 Weeks",
    bgGradient: "linear-gradient(135deg, #c4ff0d 0%, #b5eb00 100%)",
    bgSolid: "#c4ff0d",
    cards: [
      {
        title: "Flow & UX Design",
        duration: "Week 1-2",
        tags: ["Wireframes", "User Journey", "Interfaces", "Design System"],
      },
      {
        title: "Development",
        duration: "Week 3-6",
        tags: ["Frontend", "Backend", "Integrations", "Automation"],
      },
      {
        title: "Testing",
        duration: "Week 7-8",
        tags: ["Validation", "Performance", "Security", "Refinement"],
      },
    ],
  },
  {
    id: 3,
    title: "Launch & Ongoing Support",
    description:
      "We support your launch, train your team, and stay involved to ensure the system keeps improving as your business grows.",
    duration: "Ongoing",
    bgGradient: "linear-gradient(135deg, #FF8A3C 0%, #FF7420 100%)",
    bgSolid: "#FF8A3C",
    cards: [
      {
        title: "Deployment",
        duration: "Week 1",
        tags: ["Go Live", "Setup", "Training", "Documentation"],
      },
      {
        title: "Adoption",
        duration: "Week 2",
        tags: ["Team Handover", "Feedback", "Optimization", "Support"],
      },
      {
        title: "Growth Support",
        duration: "Ongoing",
        tags: ["Updates", "Enhancements", "Monitoring", "Scaling"],
      },
    ],
  },
];

const HowWeWork: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="how-we-work"
      className="relative overflow-hidden bg-background py-20 sm:px-6 lg:px-8"
    >
      {/* Decorative Cutouts */}
      <div className="pointer-events-none absolute left-0 top-20 h-48 w-48 opacity-10 md:h-64 md:w-64">
        <img
          src="/cutout-1.svg"
          alt=""
          className="h-full w-full object-contain"
        />
      </div>
      <div className="pointer-events-none absolute right-0 top-1/3 h-48 w-48 opacity-10 md:h-64 md:w-64">
        <img
          src="/cutout-2.svg"
          alt=""
          className="h-full w-full object-contain"
        />
      </div>
      <div className="pointer-events-none absolute bottom-20 left-1/4 h-48 w-48 opacity-10 md:h-64 md:w-64">
        <img
          src="/cutout-3.svg"
          alt=""
          className="h-full w-full object-contain"
        />
      </div>
      <div className="pointer-events-none absolute bottom-0 right-0 h-48 w-48 opacity-10 md:h-64 md:w-64">
        <img
          src="/cutout-4.svg"
          alt=""
          className="h-full w-full object-contain"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-coral">
            HOW WE WORK
          </p>
          <h2 className="mb-16 text-4xl font-extrabold tracking-tight text-brand-charcoal dark:text-foreground sm:text-5xl md:text-6xl">
            OUR WORKING METHOD
          </h2>

          <div className="space-y-8">
            {steps.map((step) => {
              const isOpen = active === step.id;
              return (
                <div key={step.id} className="border-b border-gray-300 pb-8">
                  {/* Top row: Number, Title, Description, Toggle */}
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-12">
                    {/* Left: Number and Title */}
                    <div className="flex items-start gap-4 lg:w-1/2">
                      <div className="text-6xl font-extrabold leading-none text-brand-charcoal dark:text-foreground sm:text-7xl lg:text-8xl">
                        {step.id}.
                      </div>
                      <div className="flex-1 pt-2">
                        <h3 className="text-2xl font-bold uppercase leading-tight text-brand-charcoal dark:text-foreground sm:text-3xl lg:text-4xl">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    {/* Right: Description and Toggle Button */}
                    <div className="flex flex-1 items-start justify-between gap-6">
                      <p className="max-w-xl text-base text-muted-foreground lg:text-lg">
                        {step.description}
                      </p>
                      <button
                        aria-expanded={isOpen}
                        aria-label={
                          isOpen ? "Collapse section" : "Expand section"
                        }
                        onClick={() => setActive(isOpen ? null : step.id)}
                        className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-charcoal text-white transition-all duration-300 hover:scale-110 hover:bg-brand-teal dark:bg-brand-teal dark:hover:bg-brand-gold dark:hover:text-brand-charcoal"
                      >
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5" />
                        ) : (
                          <ChevronDown className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Expandable Cards Section */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isOpen
                        ? "mt-8 max-h-[2000px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div
                      className={`relative rounded-[2.5rem] p-8 transition-colors duration-300 md:p-12`}
                      style={{
                        backgroundImage: isOpen ? step.bgGradient : "none",
                      }}
                    >
                      {/* Speech Bubble Cutout - Left */}
                      {isOpen && (
                        <>
                          <div className="pointer-events-none absolute -left-6 top-1/2 h-32 w-32 -translate-y-1/2">
                            <div className="h-full w-full rounded-full bg-background"></div>
                            <div
                              className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full"
                              style={{
                                background: step.bgGradient,
                              }}
                            ></div>
                          </div>

                          {/* Speech Bubble Cutout - Right */}
                          <div className="pointer-events-none absolute -right-6 top-1/4 hidden h-32 w-32 md:block">
                            <div className="h-full w-full rounded-full bg-background"></div>
                            <div
                              className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full"
                              style={{
                                background: step.bgGradient,
                              }}
                            ></div>
                          </div>

                          {/* Toggle Button in Cutout - Top Right */}
                          <div className="absolute -right-4 -top-4 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg">
                            <ChevronUp className="h-6 w-6 text-brand-charcoal" />
                          </div>
                        </>
                      )}

                      {/* Header Text - Inside Colored Box */}
                      {isOpen && (
                        <div
                          className={`mb-8 ${step.id === 2 ? "text-brand-charcoal" : "text-white"}`}
                        >
                          <h4 className="mb-4 text-2xl font-bold md:text-3xl">
                            {step.id === 1 && "DISCOVERY AND STRATEGY"}
                            {step.id === 2 && "DESIGN AND DEVELOPMENT"}
                            {step.id === 3 && "LAUNCH AND OPTIMIZATION"}
                          </h4>
                          <p
                            className={`max-w-xl text-base leading-relaxed md:text-lg ${step.id === 2 ? "opacity-80" : "opacity-95"}`}
                          >
                            {step.description}
                          </p>
                        </div>
                      )}

                      <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {step.cards.map((card, i) => (
                          <div
                            key={i}
                            className="group rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                          >
                            {/* Sprint Badge */}
                            <div className="mb-4 flex items-center gap-3">
                              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-400">
                                <svg
                                  className="h-6 w-6 text-white"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </div>
                              <div>
                                <div className="text-sm font-bold text-brand-charcoal">
                                  {i === 0 && "1-3 Sprints"}
                                  {i === 1 && "2-4 Sprints"}
                                  {i === 2 && "3-5 Sprints"}
                                </div>
                                <div className="text-xs text-brand-muted">
                                  {card.duration}
                                </div>
                              </div>
                            </div>

                            <h5 className="mb-2 text-lg font-bold text-brand-charcoal">
                              {card.title}
                            </h5>
                            <p className="mb-4 text-sm text-muted-foreground">
                              {card.tags.slice(0, 2).join(" and ")}. Develop a
                              comprehensive strategy.
                            </p>

                            <div className="flex flex-wrap gap-2">
                              {card.tags.map((tag, k) => (
                                <span
                                  key={k}
                                  className="rounded-md px-2 py-1 text-xs font-medium text-brand-charcoal"
                                  style={{
                                    backgroundColor:
                                      k % 3 === 0
                                        ? "#FF9B66"
                                        : k % 3 === 1
                                          ? "#6DD4C4"
                                          : "#E6E66D",
                                  }}
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
