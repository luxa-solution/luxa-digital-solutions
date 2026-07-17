import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import {
  CheckCircle2,
  Lightbulb,
  Star,
  Users,
  ArrowUpRight,
} from "lucide-react";

const About = () => {
  const faqItems = [
    {
      q: "How do I get started with a project?",
      a: "Start by sending us a brief via the contact form or scheduling a free consultation. We'll review your operational flows, identify bottlenecks, and provide a tailored systems roadmap and estimate.",
    },
    {
      q: "What are your typical project timelines?",
      a: "Timelines depend on the scale of the system: simple tools and dashboards take 2–6 weeks; medium platforms and LMS systems take 6–12 weeks; large-scale custom integrations take longer. We verify all timelines during our discovery phase.",
    },
    {
      q: "Do you offer ongoing support after launch?",
      a: "Yes - we offer ongoing monitoring, updates, optimization, and system support packages to ensure your digital platform scales as your operations grow.",
    },
    {
      q: "How do you price projects?",
      a: "We price transparently around the scope and complexity of the platform. We offer small, medium, and large system price ranges so you can align your investment with your business goals.",
    },
  ];

  return (
    <>
      {/* Dark hero header */}
      <header className="relative overflow-hidden bg-brand-dark py-36 text-white dark:bg-black">
        {/* Background decorative lights */}
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-brand-teal/30 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-brand-gold/30 blur-3xl"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-teal sm:text-sm">
            ABOUT LUXA
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold uppercase leading-[0.9] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
            WE&apos;RE <span className="text-gradient-teal-gold">LUXA</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg lg:text-xl">
            Luxa Digital Solutions builds custom digital systems for businesses
            that need more than templates, more than disconnected tools, and
            more than quick fixes.
          </p>
        </div>

        {/* curved cutout bottom */}
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

      {/* Two-tone header banner */}
      <section className="bg-brand-dark py-20 text-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mx-auto max-w-6xl text-center text-4xl font-extrabold uppercase leading-tight sm:text-5xl md:text-6xl lg:text-[76px]">
            At LUXA, WE BELIEVE THAT EVERY
            <br /> BRAND HAS THE POTENTIAL
            <br />
            <span className="text-gradient-teal-gold mt-2 block">
              TO ACHIEVE EXTRAORDINARY RESULTS
            </span>
          </h2>
        </div>
      </section>

      {/* 'We work' section with stats sidebar */}
      <section className="bg-brand-dark py-20 text-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
            {/* Left sidebar: details dashboard */}
            <aside className="space-y-8 lg:sticky lg:top-24 lg:col-span-4">
              <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 shadow-xl backdrop-blur-md">
                <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-brand-teal">
                  THE AGENCY IN NUMBERS
                </h3>
                <div className="space-y-6">
                  {[
                    { label: "Systems Launched", value: "15+" },
                    { label: "Client Satisfaction", value: "98%" },
                    { label: "Nationalities Represented", value: "3" },
                    { label: "Time Zones Supported", value: "4" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between border-b border-white/5 py-4"
                    >
                      <div className="text-sm font-medium text-gray-300">
                        {item.label}
                      </div>
                      <div className="text-base font-bold text-white">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 shadow-xl backdrop-blur-md">
                <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-brand-teal">
                  CORE EXPERTISE
                </h3>
                <div className="space-y-4">
                  {[
                    "Business Custom Dashboards",
                    "Modular Mobile Applications",
                    "UI/UX Visual Engineering",
                    "Cloud Platform Architectures",
                  ].map((s) => (
                    <div
                      key={s}
                      className="flex items-center justify-between py-2 text-sm text-gray-300"
                    >
                      <span>{s}</span>
                      <span className="font-bold text-brand-teal">✓</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* Right content */}
            <div className="space-y-10 lg:col-span-8">
              <h2 className="text-3xl font-extrabold leading-snug tracking-tight text-white sm:text-4xl md:text-5xl">
                We work with businesses that have outgrown scattered tools and
                need a clearer way to operate.
              </h2>

              <div className="space-y-6 text-base leading-relaxed text-gray-400 sm:text-lg">
                <p>
                  Luxa was built around a simple idea: most businesses do not
                  need more apps, they need a better system. We help teams bring
                  dashboards, workflows, data, and user experience together so
                  daily operations feel more structured and more manageable.
                </p>

                <p>
                  Our team works closely on product structure, workflow design,
                  and system architecture, making sure every solution is shaped
                  around the realities of the business rather than a generic
                  template.
                </p>

                <p>
                  Whether the need is a learning platform, a business dashboard,
                  a mobile app, or a full internal operating system, we focus on
                  clarity, function, and long-term value over quick fixes.
                </p>
              </div>

              {/* Quick stats row */}
              <div className="grid grid-cols-3 gap-6 border-t border-white/5 pt-12 text-center sm:text-left">
                <div>
                  <div className="text-4xl font-black text-brand-teal sm:text-5xl">
                    5+
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-widest text-gray-400">
                    Years of Experience
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-black text-brand-gold sm:text-5xl">
                    15+
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-widest text-gray-400">
                    Projects Delivered
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-black text-brand-coral sm:text-5xl">
                    98%
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-widest text-gray-400">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing adjustments for About page */}
      <section className="bg-brand-dark py-12 text-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            BUILT WITH A TRACK RECORD OF
            <br />
            <span className="text-gradient-teal-gold">
              DELIVERING OPERATIONAL IMPACT
            </span>
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="glow-card group relative flex flex-col justify-between overflow-hidden rounded-[30px] border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent p-10 shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1">
              <div>
                <div className="mb-6 text-6xl font-black leading-none text-brand-teal">
                  15+
                </div>
                <h3 className="mb-3 text-lg font-bold uppercase tracking-tight text-white">
                  Custom Systems Delivered
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  Resilient, user-friendly digital architectures deployed to
                  streamline core operational activities.
                </p>
              </div>
              <div className="mt-8 h-1 w-12 rounded-full bg-brand-teal"></div>
            </div>

            {/* Card 2 */}
            <div className="glow-card group relative flex flex-col justify-between overflow-hidden rounded-[30px] border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent p-10 shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1">
              <div>
                <div className="mb-6 text-6xl font-black leading-none text-brand-gold">
                  40%
                </div>
                <h3 className="mb-3 text-lg font-bold uppercase tracking-tight text-white">
                  Average Operations ROI
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  Substantial improvement in operational cycles through
                  intelligent workflow automation.
                </p>
              </div>
              <div className="mt-8 h-1 w-12 rounded-full bg-brand-gold"></div>
            </div>

            {/* Card 3 */}
            <div className="glow-card group relative flex flex-col justify-between overflow-hidden rounded-[30px] border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent p-10 shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1">
              <div>
                <div className="mb-6 text-6xl font-black leading-none text-brand-coral">
                  99.9%
                </div>
                <h3 className="mb-3 text-lg font-bold uppercase tracking-tight text-white">
                  Platform Reliability
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  Resilient technical foundations designed for scale, keeping
                  transaction layers fully reliable.
                </p>
              </div>
              <div className="mt-8 h-1 w-12 rounded-full bg-brand-coral"></div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="bg-brand-dark py-24 text-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-8 border-b border-white/5 pb-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-teal">
                OUR PHILOSOPHY
              </div>
              <h2 className="text-4xl font-extrabold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
                OUR VALUES
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-base leading-relaxed text-gray-400 sm:text-lg">
                Our approach is grounded in clarity, operational practicality,
                and long-term value for the growing businesses we support.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Lightbulb,
                title: "SYSTEMS OVER TOOLS",
                desc: "We design around the workflow and operations, not around generic software templates.",
                accent: "text-brand-teal",
              },
              {
                icon: CheckCircle2,
                title: "CLARITY OVER NOISE",
                desc: "Clear flows, clean interfaces, and logical steps matter more than visual decoration.",
                accent: "text-brand-gold",
              },
              {
                icon: Star,
                title: "RESULTS-DRIVEN",
                desc: "We focus on measurable outcomes that solve bottlenecks and support scaling goals.",
                accent: "text-brand-coral",
              },
              {
                icon: Users,
                title: "COLLABORATION FIRST",
                desc: "We build close partnerships, working directly with administrators and core teams.",
                accent: "text-brand-teal",
              },
            ].map((value, i) => {
              const Icon = value.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-white/5 bg-white/[0.01] p-6 shadow-xl transition-colors hover:bg-white/[0.03]"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5">
                    <Icon className={`h-5 w-5 ${value.accent}`} />
                  </div>
                  <h4 className="mb-3 text-lg font-bold uppercase tracking-tight text-white">
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

      {/* Reusable FAQ Section and Final CTA Section */}
      <section className="bg-brand-dark py-12 text-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSection items={faqItems} />
          <div className="mt-12">
            <FinalCTA />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
