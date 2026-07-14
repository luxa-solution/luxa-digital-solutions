import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import { Button } from "@/components/ui/button";
import { Box, Crown, Users, Zap, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  const faqItems = [
    {
      q: "How do you price projects?",
      a: "Every engagement is scoped individually. We look at the complexity of the workflow design, user interfaces, and the third-party integrations needed, so the estimate matches the actual engineering required.",
    },
    {
      q: "What kinds of systems do you build?",
      a: "We design and build custom dashboards, internal operations panels, LMS/education portals, SaaS applications, mobile applications, and system databases.",
    },
    {
      q: "Do you work with growing teams?",
      a: "Yes. Most of our clients are companies that have outgrown simple spreadsheets or off-the-shelf tools and need a structured, single platform to run their business.",
    },
    {
      q: "How long does a typical project take?",
      a: "Timelines depend on complexity. Focused systems (small) take 3–6 weeks; medium platforms take 6–12 weeks; large enterprise architectures are designed in multi-month phases.",
    },
  ];

  return (
    <div className="min-h-screen bg-brand-dark text-white dark:bg-black">
      <Navigation />

      {/* HERO Section */}
      <header className="relative overflow-hidden bg-brand-dark py-36 text-white dark:bg-black">
        {/* Decorative background light */}
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-brand-teal/30 blur-3xl"></div>
          <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-brand-gold/30 blur-3xl"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-teal sm:text-sm">
            INVESTMENT ROADMAP
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold uppercase leading-[0.9] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
            SYSTEM <span className="text-gradient-teal-gold">PRICING</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base text-gray-300 sm:text-lg lg:text-xl leading-relaxed">
            We price each custom system around the scope, operational workflow, and business outcomes you need to achieve.
          </p>
        </div>

        {/* decorative cutout */}
        <div className="pointer-events-none absolute -bottom-6 left-0 right-0 overflow-hidden">
          <svg
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            className="block h-12 w-full fill-brand-dark dark:fill-black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0,0 C300,60 900,60 1200,0 L1200,60 L0,60 Z" />
          </svg>
        </div>
      </header>

      {/* How we price introduction */}
      <section className="bg-brand-dark py-20 dark:bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mx-auto max-w-4xl text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            HOW WE PRICE
            <span className="text-gradient-teal-gold"> DIGITAL SYSTEMS</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-gray-400 sm:text-lg">
            Every engagement is scoped uniquely. We structure our estimation into three predictable tiers based on capabilities, automation, and scale.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="bg-brand-dark pb-28 dark:bg-black">
        <div className="container mx-auto space-y-8 px-6 max-w-6xl">
          <div className="grid gap-8 grid-cols-1">
            {/* Card 1: Small Systems */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-[30px] border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent p-10 shadow-2xl backdrop-blur-md glow-card hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
                <div className="lg:w-1/3">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-teal shadow-[0_0_8px_#12bbbb]" />
                    <span className="text-xs font-mono tracking-widest text-brand-teal uppercase">TIER 01</span>
                  </div>
                  <h3 className="text-3xl font-black text-white uppercase sm:text-4xl">SMALL SYSTEMS</h3>
                  <p className="mt-4 text-sm leading-relaxed text-gray-400">
                    Designed for focused tools, lightweight web applications, user portals, or standalone dashboards.
                  </p>
                </div>

                <div className="lg:w-1/3">
                  <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-white">TYPICAL FEATURES</h4>
                  <ul className="space-y-2.5 text-sm text-gray-400">
                    <li className="flex items-center gap-2">✓ $3k–$8k range based on inputs</li>
                    <li className="flex items-center gap-2">✓ Clear technical specifications</li>
                    <li className="flex items-center gap-2">✓ Ideal for early-stage automation</li>
                  </ul>
                </div>

                <div className="ml-auto flex flex-col items-end lg:w-1/3 w-full mt-6 lg:mt-0">
                  <div className="text-3xl font-black text-brand-teal sm:text-4xl">$3k–$8k</div>
                  <Button
                    onClick={() => navigate("/schedule-consultation")}
                    className="mt-6 rounded-full bg-brand-teal text-black font-semibold hover:bg-brand-teal/90 shadow-md shadow-brand-teal/20 transition-transform hover:scale-105 w-full lg:w-auto px-8"
                  >
                    Book a Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Card 2: Medium Systems */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-10 shadow-2xl backdrop-blur-md glow-card hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
                <div className="lg:w-1/3">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-gold shadow-[0_0_8px_#e6b14b]" />
                    <span className="text-xs font-mono tracking-widest text-brand-gold uppercase">TIER 02 // POPULAR</span>
                  </div>
                  <h3 className="text-3xl font-black text-white uppercase sm:text-4xl">MEDIUM SYSTEMS</h3>
                  <p className="mt-4 text-sm leading-relaxed text-gray-400">
                    Designed for growing teams requiring fully integrated LMS platforms, operations portals, or robust SaaS tools.
                  </p>
                </div>

                <div className="lg:w-1/3">
                  <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-white">TYPICAL FEATURES</h4>
                  <ul className="space-y-2.5 text-sm text-gray-400">
                    <li className="flex items-center gap-2">✓ $8k–$20k range based on sprints</li>
                    <li className="flex items-center gap-2">✓ Deeper workflow automation & integrations</li>
                    <li className="flex items-center gap-2">✓ Structured administration portal & analytics</li>
                  </ul>
                </div>

                <div className="ml-auto flex flex-col items-end lg:w-1/3 w-full mt-6 lg:mt-0">
                  <div className="text-3xl font-black text-brand-gold sm:text-4xl">$8k–$20k</div>
                  <Button
                    onClick={() => navigate("/schedule-consultation")}
                    className="mt-6 rounded-full bg-brand-gold text-black font-semibold hover:bg-brand-gold/90 shadow-md shadow-brand-gold/20 transition-transform hover:scale-105 w-full lg:w-auto px-8"
                  >
                    Book a Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Card 3: Large Platforms */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-[30px] border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent p-10 shadow-2xl backdrop-blur-md glow-card hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
                <div className="lg:w-1/3">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-coral shadow-[0_0_8px_#bb1212]" />
                    <span className="text-xs font-mono tracking-widest text-brand-coral uppercase">TIER 03</span>
                  </div>
                  <h3 className="text-3xl font-black text-white uppercase sm:text-4xl">LARGE PLATFORMS</h3>
                  <p className="mt-4 text-sm leading-relaxed text-gray-400">
                    Designed for complex, multi-user platforms, massive custom software, and highly resilient databases.
                  </p>
                </div>

                <div className="lg:w-1/3">
                  <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-white">TYPICAL FEATURES</h4>
                  <ul className="space-y-2.5 text-sm text-gray-400">
                    <li className="flex items-center gap-2">✓ $20k+ range based on milestones</li>
                    <li className="flex items-center gap-2">✓ Custom API and database engineering</li>
                    <li className="flex items-center gap-2">✓ Ongoing security protocols & scaling support</li>
                  </ul>
                </div>

                <div className="ml-auto flex flex-col items-end lg:w-1/3 w-full mt-6 lg:mt-0">
                  <div className="text-3xl font-black text-brand-coral sm:text-4xl">$20k+</div>
                  <Button
                    onClick={() => navigate("/schedule-consultation")}
                    className="mt-6 rounded-full bg-brand-coral text-white font-semibold hover:bg-brand-coral/90 shadow-md shadow-brand-coral/20 transition-transform hover:scale-105 w-full lg:w-auto px-8"
                  >
                    Book a Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="bg-brand-dark py-24 text-white dark:bg-black border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 items-start gap-8 border-b border-white/5 pb-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-teal">
                INVESTMENT PHILOSOPHY
              </div>
              <h2 className="text-4xl font-extrabold leading-tight text-white uppercase sm:text-5xl lg:text-6xl">
                OUR VALUES
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-base text-gray-400 sm:text-lg leading-relaxed">
                We believe software pricing should reflect operational efficiency, clear timelines, and predictable system architectures.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Zap,
                title: "SYSTEMS OVER TOOLS",
                desc: "We prioritize long-term workflow design over short-term trends or disconnected apps.",
                accent: "text-brand-teal",
              },
              {
                icon: Box,
                title: "CLARITY OVER COMPLEXITY",
                desc: "We design simple, logical interface pathways that administrators can adopt with ease.",
                accent: "text-brand-gold",
              },
              {
                icon: Crown,
                title: "FUNCTION OVER BUZZWORDS",
                desc: "We avoid vanity engineering. We build technical systems designed around operational throughput.",
                accent: "text-brand-coral",
              },
              {
                icon: Users,
                title: "GROWTH SCALE MINDSET",
                desc: "All code modules are constructed to accommodate additional developer features as you scale.",
                accent: "text-brand-teal",
              },
            ].map((value, i) => {
              const Icon = value.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-white/5 bg-white/[0.01] p-6 shadow-xl hover:bg-white/[0.03] transition-colors"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10">
                    <Icon className={`h-5 w-5 ${value.accent}`} />
                  </div>
                  <h4 className="mb-3 text-lg font-bold tracking-tight text-white uppercase">
                    {value.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-400">
                    {value.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURE SHOWCASE: redesigned glass badge block */}
      <section className="bg-brand-dark py-20 dark:bg-black border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-[40px] border border-white/5 bg-gradient-to-br from-brand-charcoal to-brand-dark p-12 text-center md:p-20 shadow-2xl">
            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-brand-teal/5 blur-3xl"></div>

            <div className="relative z-10">
              <span className="rounded-full bg-brand-teal/10 border border-brand-teal/20 px-4 py-1.5 text-xs font-semibold text-brand-teal uppercase tracking-widest">
                System Impact
              </span>

              <h2 className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight text-white md:text-5xl uppercase tracking-tight mt-6">
                Redefining digital impact with
                <span className="block text-gradient-teal-gold mt-2">innovative operational strategies</span>
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base">
                Boost your business throughput, automate administrative friction, and acquire quality data visibility under a single technical system.
              </p>

              {/* Redesigned clean tag badges */}
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <span className="rounded-full bg-white/5 border border-white/10 px-4.5 py-1.5 text-xs font-semibold text-brand-teal backdrop-blur-md">
                  ✓ High-End Analytics
                </span>
                <span className="rounded-full bg-white/5 border border-white/10 px-4.5 py-1.5 text-xs font-semibold text-brand-gold backdrop-blur-md">
                  ✓ Agile Sprint Development
                </span>
                <span className="rounded-full bg-white/5 border border-white/10 px-4.5 py-1.5 text-xs font-semibold text-brand-coral backdrop-blur-md">
                  ✓ Dedicated Scaling Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & Final CTA integration */}
      <section className="bg-brand-dark dark:bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <FAQSection items={faqItems} />
          <div className="mt-12">
            <FinalCTA />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
