import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Show only first 4 projects on homepage
  const featuredProjects = projects.slice(0, 4);

  useEffect(() => {
    // Initially show all cards (remove animation dependency)
    setVisibleCards(new Set(featuredProjects.map((_, idx) => idx)));

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0",
            );
            setVisibleCards((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" },
    );

    return () => observerRef.current?.disconnect();
  }, []);

  const cardRef = (el: HTMLDivElement | null, index: number) => {
    if (el && observerRef.current) {
      observerRef.current.observe(el);
    }
  };

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-brand-dark py-24 text-white dark:bg-black sm:py-28 lg:py-36"
    >
      {/* Decorative gradient light overlays */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-brand-teal/5 blur-[120px]"></div>
      <div className="pointer-events-none absolute left-0 bottom-1/4 h-[500px] w-[500px] rounded-full bg-brand-coral/5 blur-[120px]"></div>

      {/* Header Section */}
      <div className="container relative z-10 mx-auto px-4 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-left">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-teal sm:text-sm">
            SELECTED CASE STUDIES
          </p>
          <h2 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            OUR <span className="text-gradient-teal-gold">PORTFOLIO</span>
          </h2>
          <p className="max-w-2xl text-base text-gray-400 sm:text-lg">
            We partner with ambitious teams to turn complex ideas into highly reliable and beautiful digital systems. Explore some of our selected projects below.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => cardRef(el, index)}
              data-index={index}
              className="group relative cursor-pointer overflow-hidden rounded-[30px] border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/10 hover:shadow-2xl"
              onClick={() => navigate(`/project/${project.id}`)}
            >
              {/* Image Container with 4:3 Aspect Ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Category Badges (top-right) */}
                <div className="absolute right-6 top-6 z-10 flex gap-2">
                  <span className="rounded-full bg-black/60 border border-white/10 px-4.5 py-1.5 text-xs font-semibold text-white shadow-sm backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Dark gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                {/* Circular CTA that appears on hover */}
                <button
                  aria-label={`Open ${project.title}`}
                  className="absolute bottom-6 right-6 flex h-14 w-14 translate-y-4 transform items-center justify-center rounded-full bg-brand-teal text-black opacity-0 shadow-xl transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 hover:scale-110 hover:bg-brand-gold"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </button>
              </div>

              {/* Text Content */}
              <div className="p-8">
                <div className="mb-3 flex items-center gap-2 text-xs font-mono tracking-widest text-brand-teal uppercase">
                  <span>{project.category}</span>
                  <span>•</span>
                  <span>{project.client}</span>
                </div>

                <h3 className="mb-4 text-2xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-brand-teal sm:text-3xl">
                  {project.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/portfolio")}
            className="group relative overflow-hidden rounded-full bg-brand-teal px-10 py-4 text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand-teal/20"
          >
            <span className="relative z-10 flex items-center gap-3">
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
