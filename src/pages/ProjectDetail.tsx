import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projects } from "@/data/projects";
import {
  ArrowLeft,
  CheckCircle,
  ExternalLink,
  Lightbulb,
  Star,
  Target,
  Zap,
  ArrowUpRight,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-brand-dark text-white dark:bg-black">
        <div className="animate-fade-in text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/5 border border-white/10">
            <Star className="h-10 w-10 text-brand-teal" />
          </div>
          <h1 className="mb-4 text-4xl font-bold">Project Not Found</h1>
          <p className="mx-auto mb-8 max-w-md text-gray-400">
            The project you're looking for doesn't exist or has been moved.
          </p>
          <Button
            onClick={() => navigate("/portfolio")}
            className="rounded-full bg-brand-teal text-black px-6 py-2.5 hover:bg-brand-teal/90"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-dark text-white dark:bg-black">
      <Navigation />

      {/* HERO: full bleed with image overlay */}
      <header className="relative h-[65vh] w-full overflow-hidden lg:h-[75vh]">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent dark:from-black"></div>

        <div className="container relative z-10 mx-auto flex h-full items-end pb-16 px-6 lg:px-8">
          <div className="w-full">
            <div className="max-w-4xl">
              <div className="mb-6">
                <span className="rounded-full bg-brand-teal/10 border border-brand-teal/20 px-4.5 py-1.5 text-xs font-semibold text-brand-teal uppercase tracking-widest">
                  {project.category}
                </span>
              </div>

              <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-6xl md:text-7xl">
                {project.title}
              </h1>

              <p className="mt-6 max-w-2xl text-base text-gray-300 sm:text-lg lg:text-xl leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </div>

        {/* back to portfolio button - top left on hero */}
        <div className="absolute left-6 top-24 z-20">
          <Button
            variant="ghost"
            onClick={() => navigate("/portfolio")}
            className="rounded-full bg-black/60 border border-white/10 px-4 py-2 text-white hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Work
          </Button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="container mx-auto px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Left sidebar: narrow, sticky, glass container */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 shadow-xl backdrop-blur-md">
                <h4 className="mb-4 text-xs font-mono tracking-widest text-gray-500 uppercase">
                  Project Info
                </h4>
                <div className="space-y-4">
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-gray-500 font-mono">Client</span>
                    <span className="text-base font-semibold text-white">{project.client}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-gray-500 font-mono">Duration</span>
                    <span className="text-base font-semibold text-white">{project.duration}</span>
                  </div>
                  {project.link !== "#" && (
                    <div className="pt-4 border-t border-white/5">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-sm font-semibold text-brand-teal hover:underline"
                      >
                        Visit Live Platform
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  )}
                </div>
              </div>

              <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 shadow-xl backdrop-blur-md">
                <h4 className="mb-6 text-xs font-mono tracking-widest text-gray-500 uppercase">
                  Deliverables Checklist
                </h4>

                <ul className="space-y-4">
                  {project.features.slice(0, 8).map((feat, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-0.5">
                        <CheckCircle className="h-5 w-5 text-brand-teal" />
                      </div>
                      <div className="text-sm text-gray-300 leading-relaxed">{feat}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Right main case study section */}
          <section className="space-y-20 lg:col-span-8">
            {/* Overview / Challenge / Solution Summary Box */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <Card className="rounded-[24px] border border-white/5 bg-white/[0.01] p-8 shadow-xl">
                <div className="flex flex-col gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                    <Target className="h-6 w-6 text-brand-teal" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-white uppercase tracking-tight">Overview</h3>
                    <p className="text-xs leading-relaxed text-gray-400">{project.overview}</p>
                  </div>
                </div>
              </Card>

              <Card className="rounded-[24px] border border-white/5 bg-white/[0.01] p-8 shadow-xl">
                <div className="flex flex-col gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                    <Zap className="h-6 w-6 text-brand-coral" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-white uppercase tracking-tight">Challenge</h3>
                    <p className="text-xs leading-relaxed text-gray-400">{project.challenge}</p>
                  </div>
                </div>
              </Card>

              <Card className="rounded-[24px] border border-white/5 bg-white/[0.01] p-8 shadow-xl">
                <div className="flex flex-col gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                    <Lightbulb className="h-6 w-6 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-white uppercase tracking-tight">Solution</h3>
                    <p className="text-xs leading-relaxed text-gray-400">{project.solution}</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Results Grid */}
            <div className="border-t border-white/5 pt-12">
              <h3 className="mb-8 text-2xl font-bold uppercase tracking-tight">
                Operational <span className="text-gradient-teal-gold">Results</span>
              </h3>
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                {project.results.map((r, i) => (
                  <Card key={i} className="rounded-[24px] border border-white/5 bg-white/[0.01] p-6 text-center shadow-xl hover:bg-white/[0.02] transition-colors">
                    <div className="mb-2 text-3xl font-black text-brand-teal sm:text-4xl">
                      {r.value}
                    </div>
                    <div className="mb-2 text-xs font-bold text-white uppercase tracking-wider">{r.metric}</div>
                    <div className="text-[11px] leading-relaxed text-gray-500">
                      {r.description}
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Screenshot Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="border-t border-white/5 pt-12">
                <h3 className="mb-8 text-2xl font-bold uppercase tracking-tight">
                  Platform <span className="text-gradient-teal-gold">Screenshots</span>
                </h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <div className="overflow-hidden rounded-[24px] border border-white/5 shadow-lg md:col-span-2">
                    <img
                      src={project.gallery[0]}
                      alt="gallery-1"
                      className="h-96 w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="grid gap-6">
                    {project.gallery[1] && (
                      <div className="overflow-hidden rounded-[24px] border border-white/5 shadow-lg">
                        <img
                          src={project.gallery[1]}
                          alt="gallery-2"
                          className="h-44 w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    )}
                    {project.gallery[2] && (
                      <div className="overflow-hidden rounded-[24px] border border-white/5 shadow-lg">
                        <img
                          src={project.gallery[2]}
                          alt="gallery-3"
                          className="h-44 w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Testimonial card */}
            {project.testimonial && (
              <div className="border-t border-white/5 pt-12">
                <Card className="rounded-[30px] border border-white/5 bg-gradient-to-r from-white/[0.01] to-transparent p-10 md:p-12 shadow-2xl backdrop-blur-md">
                  <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start">
                    <img
                      src={project.testimonial.avatar}
                      alt={project.testimonial.author}
                      className="h-20 w-20 rounded-full object-cover border border-white/10 flex-shrink-0 shadow-md"
                    />
                    <div>
                      <div className="mb-1 text-lg font-bold text-white">
                        {project.testimonial.author}
                      </div>
                      <div className="mb-6 text-xs text-brand-teal uppercase tracking-widest font-mono">
                        {project.testimonial.position} — {project.testimonial.company}
                      </div>
                      <blockquote className="text-base leading-relaxed text-gray-300 italic">
                        "{project.testimonial.quote}"
                      </blockquote>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Bottom CTA block */}
            <div className="rounded-[30px] border border-white/5 bg-gradient-to-r from-white/[0.02] to-transparent p-10 text-center shadow-2xl backdrop-blur-md">
              <h3 className="mb-4 text-2xl font-bold uppercase tracking-tight sm:text-3xl">
                Interested in a similar system?
              </h3>
              <p className="mb-8 text-sm text-gray-400 sm:text-base max-w-lg mx-auto">
                Let's discuss how we can engineer a custom digital platform that solves your specific operational bottleneck.
              </p>
              <div className="flex flex-col justify-center items-center gap-4 sm:flex-row">
                <Button
                  onClick={() => navigate("/pricing")}
                  className="text-brand-teal-foreground pulse-glow rounded-full bg-brand-teal px-8 py-6 text-base font-semibold transition-all hover:scale-105 hover:bg-brand-teal/90 shadow-xl shadow-brand-teal/20 w-full sm:w-auto"
                >
                  Start Project
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate("/portfolio")}
                  className="rounded-full border-white/15 hover:border-brand-teal/50 hover:bg-brand-teal/5 px-8 py-6 text-base font-semibold text-white transition-all hover:scale-105 w-full sm:w-auto"
                >
                  View Other Work
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
