import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  // Show only first 4 projects on homepage
  const featuredProjects = projects.slice(0, 4);

  useEffect(() => {
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

    // Observe all portfolio cards
    const cards = document.querySelectorAll(".portfolio-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-brand-dark py-24 text-white dark:bg-black sm:py-28 lg:py-36"
    >
      {/* Decorative gradient lights */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-brand-teal/5 blur-[120px]"></div>
      <div className="pointer-events-none absolute bottom-1/4 left-0 h-[500px] w-[500px] rounded-full bg-brand-coral/5 blur-[120px]"></div>

      {/* Header Section */}
      <div className="container relative z-10 mx-auto px-4 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-left">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-brand-teal">
            // SELECTED CASE STUDIES
          </p>
          <h2 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            OUR <span className="text-gradient-teal-gold">PORTFOLIO</span>
          </h2>
          <p className="max-w-2xl text-base text-gray-400 sm:text-lg">
            We partner with growing teams to replace complex manual processes
            with custom digital architectures. Explore some of our selected
            work.
          </p>
        </div>
      </div>

      {/* Staggered Asymmetrical Projects Grid */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          {featuredProjects.map((project, index) => {
            const isVisible = visibleCards.has(index);

            // Stagger column spans and vertical spacing
            // Index 0: spans 7 columns
            // Index 1: spans 5 columns, offset down
            // Index 2: spans 5 columns
            // Index 3: spans 7 columns, offset down
            let gridSpan = "";
            let verticalOffset = "";

            if (index === 0) {
              gridSpan = "md:col-span-7";
              verticalOffset = "";
            } else if (index === 1) {
              gridSpan = "md:col-span-5";
              verticalOffset = "md:mt-24";
            } else if (index === 2) {
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
                className={`portfolio-card group relative cursor-pointer overflow-hidden rounded-[40px] border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent shadow-xl transition-all duration-1000 ease-out hover:border-white/10 hover:shadow-2xl ${gridSpan} ${verticalOffset} ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-16 opacity-0"
                }`}
                onClick={() => navigate(`/project/${project.id}`)}
              >
                {/* Image Container with Parallax Scale effect */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-white/[0.01]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Category overlay */}
                  <div className="absolute left-6 top-6 z-20">
                    <span className="rounded-full border border-white/10 bg-black/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-90"></div>

                  {/* Hover Action Circle */}
                  <div className="absolute bottom-6 right-6 z-20 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-teal text-black shadow-lg hover:scale-110">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                {/* Details Bottom Content */}
                <div className="p-8 sm:p-10">
                  <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-brand-teal">
                    <span>{project.client}</span>
                    <span>•</span>
                    <span>{project.duration}</span>
                  </div>

                  <h3 className="mb-3 text-2xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-brand-teal sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/portfolio")}
            className="group relative overflow-hidden rounded-full bg-brand-teal px-10 py-4 text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand-teal/20"
          >
            <span className="relative z-10 flex items-center gap-3 hover:text-white">
              View All Projects
              <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
