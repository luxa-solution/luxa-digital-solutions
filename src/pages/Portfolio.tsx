import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string>("all");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    "all",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Animated Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-card/20 to-background pb-20 pt-32">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute -left-40 top-0 h-96 w-96 animate-pulse rounded-full bg-brand-teal/20 blur-3xl"></div>
          <div className="absolute -right-40 top-40 h-96 w-96 animate-pulse rounded-full bg-purple-500/20 blur-3xl delay-700"></div>
          <div className="absolute bottom-0 left-1/2 h-96 w-96 animate-pulse rounded-full bg-cyan-500/20 blur-3xl delay-1000"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge
              variant="secondary"
              className="animate-fade-in-up mb-6 border-brand-teal/20 bg-brand-teal/10 px-4 py-2 text-sm font-semibold text-brand-teal"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Our Work
            </Badge>

            <h1 className="animate-fade-in-up mb-6 text-5xl font-bold leading-tight delay-100 sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="bg-gradient-to-r from-foreground via-brand-teal to-foreground bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>

            <p className="animate-fade-in-up mx-auto max-w-2xl text-lg text-muted-foreground delay-200 sm:text-xl md:text-2xl">
              Each project reflects a practical challenge, a clear system
              design, and a measurable outcome. These are examples of how Luxa
              turns scattered processes into structured digital experiences.
            </p>

            {/* Stats */}
            <div className="animate-fade-in-up mt-12 grid grid-cols-3 gap-6 delay-300">
              <div className="rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-brand-teal sm:text-4xl">
                  {projects.length}+
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Projects Completed
                </div>
              </div>
              <div className="rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-brand-teal sm:text-4xl">
                  100%
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Client Satisfaction
                </div>
              </div>
              <div className="rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-brand-teal sm:text-4xl">
                  5+
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-20 z-30 border-b border-border/50 bg-background/80 py-6 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? "scale-105 bg-brand-teal text-white shadow-lg shadow-brand-teal/25"
                    : "bg-card/50 text-muted-foreground hover:scale-105 hover:bg-card hover:text-foreground"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="mt-4 text-center text-sm text-muted-foreground">
            Showing {filteredProjects.length} project
            {filteredProjects.length !== 1 ? "s" : ""}
          </div>
        </div>
      </section>

      {/* Projects Grid - Awwwards Style */}
      <section className="bg-gradient-to-b from-background to-card/10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-in-up group relative cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => navigate(`/project/${project.id}`)}
              >
                {/* Project Card */}
                <div className="relative overflow-hidden rounded-3xl bg-card shadow-xl transition-all duration-700 hover:shadow-2xl hover:shadow-brand-teal/10">
                  {/* Image Container with Aspect Ratio */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-brand-teal/5 to-purple-500/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                    />

                    {/* Dark Gradient Overlay - Grows on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-90" />

                    {/* Category Badge - Top Left */}
                    <div className="absolute left-6 top-6 z-20">
                      <Badge
                        variant="secondary"
                        className="border-border/50 bg-background/90 font-semibold text-foreground shadow-lg backdrop-blur-sm transition-all duration-500 group-hover:bg-brand-teal group-hover:text-white"
                      >
                        {project.category}
                      </Badge>
                    </div>

                    {/* Action Icon - Top Right - Appears on Hover */}
                    <div className="absolute right-6 top-6 z-20 -translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-charcoal shadow-lg transition-transform hover:scale-110 hover:bg-brand-teal hover:text-white">
                        <ExternalLink className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Project Details - Slides Up from Bottom on Hover */}
                    <div className="absolute bottom-0 left-0 right-0 z-10 translate-y-12 p-8 transition-all duration-700 ease-out group-hover:translate-y-0">
                      {/* Project Number - Slides in */}
                      <div className="mb-4 flex items-center gap-3 opacity-0 transition-all delay-100 duration-500 group-hover:opacity-100">
                        <span className="text-5xl font-bold text-white/30">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="h-px flex-1 bg-white/20"></div>
                      </div>

                      {/* Title */}
                      <h3 className="mb-3 text-2xl font-bold text-white transition-all duration-500 sm:text-3xl md:text-4xl">
                        {project.title}
                      </h3>

                      {/* Description - Slides in with delay */}
                      <p className="mb-5 line-clamp-2 text-sm text-white/80 opacity-0 transition-all delay-200 duration-500 group-hover:opacity-100 sm:text-base">
                        {project.description}
                      </p>

                      {/* Meta Info - Client & Year */}
                      <div className="mb-4 flex items-center gap-3 text-sm text-white/60 opacity-0 transition-all delay-300 duration-500 group-hover:opacity-100">
                        <span className="font-medium">{project.client}</span>
                        <span>•</span>
                        <span>{new Date().getFullYear()}</span>
                      </div>

                      {/* Tech Stack Pills - Slide in with stagger */}
                      <div className="delay-400 flex flex-wrap gap-2 opacity-0 transition-all duration-500 group-hover:opacity-100">
                        {project.tech.slice(0, 4).map((tech, techIndex) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-brand-teal hover:bg-brand-teal"
                            style={{ transitionDelay: `${techIndex * 50}ms` }}
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
                            +{project.tech.length - 4}
                          </span>
                        )}
                      </div>

                      {/* View Project CTA - Slides in last */}
                      <div className="mt-6 flex items-center gap-2 text-white opacity-0 transition-all delay-500 duration-500 group-hover:opacity-100">
                        <span className="text-sm font-semibold">
                          View Case Study
                        </span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>

                  {/* Animated Border Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 rounded-3xl border-2 border-brand-teal/30 shadow-lg shadow-brand-teal/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-teal/5 via-purple-500/5 to-cyan-500/5 py-32">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold sm:text-5xl md:text-6xl">
              Ready to Build a
              <span className="bg-gradient-to-r from-brand-teal to-cyan-500 bg-clip-text text-transparent">
                Better System?
              </span>
            </h2>

            <p className="mb-10 text-lg text-muted-foreground sm:text-xl">
              If your business is growing faster than your tools can support, we
              can help you turn that complexity into a clear, scalable platform.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                onClick={() => navigate("/get-quote")}
                className="group rounded-full bg-brand-teal px-8 py-6 text-lg font-semibold text-white shadow-xl shadow-brand-teal/25 transition-all hover:scale-105 hover:bg-brand-teal/90 hover:shadow-2xl hover:shadow-brand-teal/40"
              >
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/contact")}
                className="rounded-full border-2 border-brand-teal/40 px-8 py-6 text-lg font-semibold text-foreground transition-all hover:scale-105 hover:border-brand-teal/60 hover:bg-brand-teal/10"
              >
                Request a System Review
              </Button>
            </div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden opacity-20">
          <div className="absolute -left-40 top-20 h-96 w-96 animate-pulse rounded-full bg-brand-teal/30 blur-3xl"></div>
          <div className="absolute -right-40 bottom-20 h-96 w-96 animate-pulse rounded-full bg-purple-500/30 blur-3xl delay-700"></div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-700 {
          animation-delay: 0.7s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
