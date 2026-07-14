import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string>("all");
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Reset visible cards when filter changes
    setVisibleCards(new Set());

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0",
            );
            setVisibleCards((prev) => {
              const next = new Set(prev);
              next.add(index);
              return next;
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    // Observe cards after render timeout
    const timer = setTimeout(() => {
      const cards = document.querySelectorAll(".portfolio-card");
      cards.forEach((card) => observer.observe(card));
    }, 50);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [filter]);

  const categories = [
    "all",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-brand-dark text-white dark:bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-dark pt-36 pb-20 dark:bg-black">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -left-40 top-0 h-[500px] w-[500px] animate-pulse rounded-full bg-brand-teal/20 blur-[100px]"></div>
          <div className="absolute -right-40 top-40 h-[500px] w-[500px] animate-pulse rounded-full bg-brand-coral/20 blur-[100px] delay-700"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge
              variant="secondary"
              className="animate-fade-in mb-6 border-brand-teal/20 bg-brand-teal/10 px-4 py-2 text-sm font-semibold text-brand-teal"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              CASE STUDIES
            </Badge>

            <h1 className="animate-slide-up mb-6 text-5xl font-extrabold leading-tight tracking-tight sm:text-7xl lg:text-8xl">
              SELECTED <span className="text-gradient-teal-gold">PORTFOLIO</span>
            </h1>

            <p className="animate-slide-up mx-auto max-w-2xl text-lg text-gray-400 sm:text-xl leading-relaxed">
              Each project reflects a practical operational challenge, a clear architectural system
              design, and a measurable outcome. These are real examples of how Luxa
              turns manual flows into structured digital experiences.
            </p>

            {/* Stats Overview */}
            <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="rounded-3xl border border-white/5 bg-white/[0.01] p-6 shadow-xl backdrop-blur-md">
                <div className="text-3xl font-black text-brand-teal sm:text-4xl">
                  {projects.length}+
                </div>
                <div className="mt-2 text-[10px] text-gray-500 uppercase tracking-widest font-mono">
                  Systems Deployed
                </div>
              </div>
              <div className="rounded-3xl border border-white/5 bg-white/[0.01] p-6 shadow-xl backdrop-blur-md">
                <div className="text-3xl font-black text-brand-gold sm:text-4xl">
                  98%
                </div>
                <div className="mt-2 text-[10px] text-gray-500 uppercase tracking-widest font-mono">
                  Satisfaction Rate
                </div>
              </div>
              <div className="rounded-3xl border border-white/5 bg-white/[0.01] p-6 shadow-xl backdrop-blur-md">
                <div className="text-3xl font-black text-brand-coral sm:text-4xl">
                  5+
                </div>
                <div className="mt-2 text-[10px] text-gray-500 uppercase tracking-widest font-mono">
                  Years of Launching
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Menu Section */}
      <section className="sticky top-20 z-30 border-b border-white/5 bg-brand-dark/90 py-6 backdrop-blur-xl dark:bg-black/90">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                  filter === category
                    ? "bg-brand-teal text-black shadow-lg shadow-brand-teal/20"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="mt-4 text-center text-xs font-mono text-gray-500 uppercase tracking-widest">
            Showing {filteredProjects.length} selected project
            {filteredProjects.length !== 1 ? "s" : ""}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-brand-dark py-20 dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
            {filteredProjects.map((project, index) => {
              const isVisible = visibleCards.has(index);

              // Alternating asymmetrical spans and vertical offsets
              let gridSpan = "";
              let verticalOffset = "";

              if (index % 4 === 0) {
                gridSpan = "md:col-span-7";
                verticalOffset = "";
              } else if (index % 4 === 1) {
                gridSpan = "md:col-span-5";
                verticalOffset = "md:mt-24";
              } else if (index % 4 === 2) {
                gridSpan = "md:col-span-5";
                verticalOffset = "";
              } else {
                gridSpan = "md:col-span-7";
                verticalOffset = "md:mt-24";
              }

              return (
                <div
                  key={project.id}
                  data-index={index}
                  className={`portfolio-card group relative cursor-pointer rounded-[40px] border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent shadow-xl transition-all duration-1000 ease-out hover:border-white/10 hover:shadow-2xl ${gridSpan} ${verticalOffset} ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
                  }`}
                  onClick={() => navigate(`/project/${project.id}`)}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-[40px] bg-white/[0.01]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-90" />

                    {/* Category tag */}
                    <div className="absolute left-6 top-6 z-20">
                      <span className="rounded-full bg-black/60 border border-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    {/* Action Icon overlay */}
                    <div className="absolute right-6 top-6 z-20 -translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-teal text-black shadow-lg hover:scale-110">
                        <ExternalLink className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  {/* Details Area */}
                  <div className="p-8 sm:p-10">
                    <div className="mb-4 flex items-center gap-3 text-xs font-mono tracking-widest text-brand-teal uppercase">
                      <span className="font-semibold text-brand-teal">{project.client}</span>
                      <span>•</span>
                      <span>{project.duration}</span>
                    </div>

                    {/* Title */}
                    <h3 className="mb-3 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-brand-teal sm:text-3xl">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-6 text-sm text-gray-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-white/5 border border-white/10 px-3.5 py-1 text-xs font-semibold text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="rounded-full bg-white/5 border border-white/10 px-3.5 py-1 text-xs font-semibold text-gray-400">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Case study CTA link */}
                    <div className="mt-8 flex items-center gap-2 text-brand-teal font-semibold uppercase tracking-wider text-xs">
                      <span>View Case Study</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-brand-dark py-32 dark:bg-black border-t border-white/5">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-extrabold uppercase sm:text-5xl md:text-6xl">
              Ready to Build a
              <span className="block text-gradient-teal-gold mt-2">Better System?</span>
            </h2>

            <p className="mb-12 text-base text-gray-400 sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              If your business is growing faster than your current tools can handle, we
              can help you turn operational complexity into a clear, scalable platform.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                onClick={() => navigate("/pricing")}
                className="text-brand-teal-foreground pulse-glow rounded-full bg-brand-teal px-8 py-6 text-base font-semibold transition-all hover:scale-105 hover:bg-brand-teal/90 shadow-xl shadow-brand-teal/25"
              >
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                onClick={() => navigate("/contact")}
                className="rounded-full border-white/15 hover:border-brand-teal/50 hover:bg-brand-teal/5 px-8 py-6 text-base font-semibold text-white transition-all hover:scale-105"
              >
                Request a Review
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
