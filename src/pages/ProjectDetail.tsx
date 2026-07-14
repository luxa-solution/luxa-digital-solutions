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
            The project you're looking for doesn't exist.
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

      {/* HERO Section: Redesigned Split Layout */}
      <header className="relative overflow-hidden bg-brand-dark pt-32 pb-16 dark:bg-black border-b border-white/5">
        {/* Background decorative lights */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-brand-teal/20 blur-[120px]"></div>
          <div className="absolute -right-40 top-40 h-[500px] w-[500px] rounded-full bg-brand-coral/20 blur-[120px] delay-700"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          {/* Back button */}
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate("/portfolio")}
              className="rounded-full bg-white/5 border border-white/10 px-4.5 py-1.5 text-xs text-white hover:bg-white/10 hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Work
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
            {/* Left side: content & key stats */}
            <div className="lg:col-span-7">
              <div className="mb-6">
                <span className="rounded-full bg-brand-teal/10 border border-brand-teal/20 px-4 py-1.5 text-xs font-semibold text-brand-teal uppercase tracking-widest font-mono">
                  {project.category}
                </span>
              </div>

              <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-6xl md:text-7xl uppercase tracking-tight">
                {project.title}
              </h1>

              <p className="mt-6 text-base text-gray-300 sm:text-lg leading-relaxed">
                {project.description}
              </p>

              {/* Quick statistics row */}
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/5 pt-8">
                {project.results.slice(0, 2).map((res, i) => (
                  <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.01] p-5 shadow-lg">
                    <div className="text-3xl font-black text-brand-teal">{res.value}</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-mono mt-1">{res.metric}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: floating mockup frame */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.02] p-3 shadow-2xl backdrop-blur-md">
                <div className="relative overflow-hidden rounded-[26px] aspect-[4/3] w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT SECTION */}
      <main className="container mx-auto px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Left sidebar info column */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              {/* Client specifications */}
              <div className="rounded-[30px] border border-white/5 bg-white/[0.02] p-8 shadow-xl backdrop-blur-md">
                <h4 className="mb-4 text-xs font-mono tracking-widest text-gray-500 uppercase">// Specs</h4>
                <div className="space-y-4">
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-gray-500 font-mono">Client</span>
                    <span className="text-base font-bold text-white">{project.client}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-gray-500 font-mono">Duration</span>
                    <span className="text-base font-bold text-white">{project.duration}</span>
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

              {/* Deliverables Checklist */}
              <div className="rounded-[30px] border border-white/5 bg-white/[0.02] p-8 shadow-xl backdrop-blur-md">
                <h4 className="mb-6 text-xs font-mono tracking-widest text-gray-500 uppercase">// Deliverables</h4>
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
            {/* Overview / Challenge / Solution Card Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                {
                  num: "01",
                  title: "Overview",
                  text: project.overview,
                  icon: Target,
                  color: "border-brand-teal",
                  glow: "text-brand-teal",
                },
                {
                  num: "02",
                  title: "Challenge",
                  text: project.challenge,
                  icon: Zap,
                  color: "border-brand-coral",
                  glow: "text-brand-coral",
                },
                {
                  num: "03",
                  title: "Solution",
                  text: project.solution,
                  icon: Lightbulb,
                  color: "border-brand-gold",
                  glow: "text-brand-gold",
                },
              ].map((step, i) => {
                const Icon = step.icon;
                return (
                  <Card key={i} className={`relative overflow-hidden rounded-[30px] border border-white/5 bg-white/[0.01] p-8 shadow-xl border-t-2 ${step.color}`}>
                    <div className="flex flex-col justify-between h-full gap-6">
                      <div className="flex justify-between items-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                          <Icon className={`h-5 w-5 ${step.glow}`} />
                        </div>
                        <span className="text-2xl font-black text-white/20 font-mono">{step.num}</span>
                      </div>
                      <div>
                        <h3 className="mb-2 text-lg font-bold text-white uppercase tracking-tight">{step.title}</h3>
                        <p className="text-xs leading-relaxed text-gray-400">{step.text}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Results Grid */}
            <div className="border-t border-white/5 pt-12">
              <h3 className="mb-8 text-2xl font-bold uppercase tracking-tight">
                Operational <span className="text-gradient-teal-gold">Results</span>
              </h3>
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                {project.results.map((r, i) => (
                  <Card key={i} className="rounded-[24px] border border-white/5 bg-white/[0.01] p-6 text-center shadow-xl">
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

            {/* Screenshot Masonry Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="border-t border-white/5 pt-12">
                <h3 className="mb-8 text-2xl font-bold uppercase tracking-tight">
                  Platform <span className="text-gradient-teal-gold">Screenshots</span>
                </h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <div className="overflow-hidden rounded-[24px] border border-white/5 shadow-lg md:col-span-2 aspect-[16/10] bg-white/[0.01]">
                    <img
                      src={project.gallery[0]}
                      alt="gallery-1"
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="grid gap-6">
                    {project.gallery[1] && (
                      <div className="overflow-hidden rounded-[24px] border border-white/5 shadow-lg aspect-square bg-white/[0.01]">
                        <img
                          src={project.gallery[1]}
                          alt="gallery-2"
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    )}
                    {project.gallery[2] && (
                      <div className="overflow-hidden rounded-[24px] border border-white/5 shadow-lg aspect-square bg-white/[0.01]">
                        <img
                          src={project.gallery[2]}
                          alt="gallery-3"
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Testimonial Quote redesign */}
            {project.testimonial && (
              <div className="border-t border-white/5 pt-12">
                <div className="relative rounded-[40px] border border-white/5 bg-gradient-to-r from-white/[0.01] to-transparent p-10 md:p-12 shadow-2xl backdrop-blur-md overflow-hidden">
                  <div className="absolute top-10 left-10 text-9xl font-serif text-white/5 pointer-events-none select-none">“</div>
                  <div className="relative z-10 flex flex-col items-center gap-8 md:flex-row md:items-start">
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
                      <blockquote className="text-lg leading-relaxed text-gray-300 font-sans tracking-wide">
                        &quot;{project.testimonial.quote}&quot;
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom CTA block */}
            <div className="rounded-[40px] border border-white/5 bg-gradient-to-r from-white/[0.02] to-transparent p-10 text-center shadow-2xl backdrop-blur-md">
              <h3 className="mb-4 text-2xl font-bold uppercase tracking-tight sm:text-3xl">
                Interested in a similar system?
              </h3>
              <p className="mb-8 text-sm text-gray-400 sm:text-base max-w-lg mx-auto">
                Let&apos;s discuss how we can engineer a custom digital platform that solves your specific operational bottleneck.
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
