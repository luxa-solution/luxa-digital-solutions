import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import { CheckCircle, Lightbulb, Star, Users } from "lucide-react";

const About = () => {
  const faqItems = [
    {
      q: "How do I get started with a project?",
      a: "Start by sending us a brief via the contact form or schedule a free consultation. We'll review your needs and provide a tailored roadmap and estimate.",
    },
    {
      q: "What are your typical project timelines?",
      a: "Timelines vary by scope: landing pages 2–6 weeks; medium apps 6–12 weeks; larger enterprise projects vary. We'll provide an accurate timeline with your proposal.",
    },
    {
      q: "Do you offer ongoing support after launch?",
      a: "Yes — we offer maintenance, monitoring, optimization, and content support packages to keep your product performing and improving over time.",
    },
    {
      q: "How do you price projects?",
      a: "We price based on scope, complexity, and ongoing needs. Use the budget dropdown in the contact form to indicate a range and we'll follow up with a detailed estimate.",
    },
  ];

  return (
    <>
      {/* Dark hero header to match other pages (Contact/Hero) */}
      <header className="relative overflow-hidden bg-[#071a29] text-white">
        <div className="container mx-auto px-6 py-36 text-center">
          <div className="mb-4 text-sm font-semibold tracking-widest text-violet-300">
            ABOUT
          </div>

          <h1 className="mx-auto max-w-4xl text-7xl font-extrabold uppercase leading-[0.9] md:text-[96px] lg:text-[112px]">
            WE&apos;RE <span className="text-brand-teal">LUXA</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-xl text-white/90">
            Luxa Digital Solutions builds custom digital systems for businesses
            that need more than templates, more than disconnected tools, and
            more than quick fixes.
          </p>
        </div>

        {/* decorative curved cutout */}
        <div className="pointer-events-none absolute -bottom-6 left-0 right-0 overflow-hidden">
          <svg
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            className="block h-12 w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,0 C300,60 900,60 1200,0 L1200,60 L0,60 Z"
              fill="#071a29"
            />
            <path
              d="M0,60 C300,0 900,0 1200,60 L1200,0 L0,0 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </header>

      {/* Attached hero-style UI (large two-tone heading) - inserted before the 'We work' section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="mx-auto max-w-6xl text-center text-5xl font-extrabold uppercase leading-tight sm:text-6xl md:text-7xl lg:text-[88px]">
            At LUXA, WE BELIEVE THAT EVERY
            <br /> BRAND HAS THE POTENTIAL
            <br />
            <span className="text-muted-foreground">
              TO ACHIEVE EXTRAORDINARY RESULTS
            </span>
          </h2>
        </div>
      </section>

      {/* Existing 'We work' section (unchanged) */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Left vertical list */}
            <aside className="lg:col-span-4">
              <div className="space-y-6">
                {[
                  { label: "Brains", value: "80" },
                  { label: "Languages", value: "11" },
                  { label: "Nationalities", value: "17" },
                  { label: "Time Zones", value: "10" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between border-b border-border/20 py-4"
                  >
                    <div className="text-base font-medium text-foreground">
                      {item.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-border/20 pt-6">
                <div className="space-y-6">
                  {[
                    "Branding",
                    "Mobile Apps",
                    "Social Media",
                    "Web Development",
                  ].map((s) => (
                    <div
                      key={s}
                      className="flex items-center justify-between py-4"
                    >
                      <div className="text-base text-foreground">{s}</div>
                      <div className="text-muted-foreground">✓</div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* Right content */}
            <div className="lg:col-span-8">
              <h2 className="mb-6 max-w-4xl text-5xl font-extrabold leading-tight tracking-tight text-foreground">
                We work with businesses that have outgrown scattered tools and
                need a clearer way to operate.
              </h2>

              <div className="prose max-w-none text-lg text-muted-foreground">
                <p>
                  Luxa was built around a simple idea: most businesses do not
                  need more apps, they need a better system. We help teams bring
                  dashboards, workflows, data, and user experience together so
                  daily operations feel more structured and more manageable.
                </p>

                <p>
                  Our founder works closely on product structure, workflow
                  design, and system architecture, making sure every solution is
                  shaped around the realities of the business rather than a
                  generic template.
                </p>

                <p>
                  Whether the need is a learning platform, a business dashboard,
                  a mobile app, or a full internal operating system, we focus on
                  clarity, function, and long-term value over quick fixes.
                </p>
              </div>

              {/* Stats row */}
              <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="text-center">
                  <div className="text-4xl font-black text-foreground">5+</div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    Years of Experience
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-black text-foreground">10+</div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    Projects Delivered
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-black text-foreground">95%</div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    Customer Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main about content - tuned spacing so it sits nicely under the hero */}
      <section
        id="about"
        className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28"
      >
        {/* Background decorative elements */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-20 top-20 h-32 w-32 rounded-full bg-brand-teal/5 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 h-40 w-40 rounded-full bg-brand-teal/5 blur-3xl"></div>
          <div className="bg-brand-teal/3 absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          {/* New Highlight Stats Section (from design) */}
          <section className="pb-20 pt-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="mb-10 text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                WITH YEARS OF EXPERIENCE AND A TRACK
                <br /> RECORD OF{" "}
                <span className="text-muted-foreground">
                  DELIVERING MEASURABLE RESULTS
                </span>
              </h2>

              <div className="grid gap-6 md:grid-cols-3">
                {/* Card 1 */}
                <div className="relative overflow-hidden rounded-3xl bg-orange-500 p-10 text-white">
                  <div className="mb-6 text-6xl font-black leading-none">
                    10+
                  </div>
                  <div className="mb-4 text-lg font-semibold">
                    Successful Campaigns
                  </div>
                  <p className="text-sm opacity-90">
                    Tailored to your business goals and successful campaigns
                    delivered across various industries.
                  </p>

                  {/* decorative notch */}
                  <div className="pointer-events-none absolute -bottom-6 left-1/2 h-12 w-12 -translate-x-1/2 rotate-45 rounded-sm bg-white" />
                </div>

                {/* Card 2 */}
                <div className="relative overflow-hidden rounded-3xl bg-lime-300 p-10 text-foreground">
                  <div className="mb-6 text-6xl font-black leading-none">
                    2.5x
                  </div>
                  <div className="mb-4 text-lg font-semibold">Average ROI</div>
                  <p className="text-sm opacity-90">
                    Crafted for your success, delivering impactful campaigns
                    across diverse industries worldwide.
                  </p>

                  <div className="pointer-events-none absolute -bottom-6 left-1/2 h-12 w-12 -translate-x-1/2 rotate-45 rounded-sm bg-background" />
                </div>

                {/* Card 3 */}
                <div className="relative overflow-hidden rounded-3xl bg-violet-300 p-10 text-white">
                  <div className="mb-6 text-6xl font-black leading-none">
                    80K+
                  </div>
                  <div className="mb-4 text-lg font-semibold">
                    Impressions generated
                  </div>
                  <p className="text-sm opacity-90">
                    Achieving excellence through personalized strategies and
                    successful results in every industry.
                  </p>

                  <div className="pointer-events-none absolute -bottom-6 left-1/2 h-12 w-12 -translate-x-1/2 rotate-45 rounded-sm bg-white" />
                </div>
              </div>
            </div>
          </section>

          {/* OUR VALUES */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-violet-300">
                    ABOUT US
                  </div>
                  <h2 className="text-6xl font-extrabold leading-tight text-[#071a29]">
                    OUR VALUES
                  </h2>
                </div>

                <div className="lg:col-span-5">
                  <p className="mt-4 text-lg text-muted-foreground">
                    Our philosophy is simple: build systems that bring order to
                    complexity and create room for growth.
                  </p>
                </div>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#071a29] text-white">
                      <Lightbulb className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="mb-2 text-xl font-extrabold tracking-wider text-[#071a29]">
                        SYSTEMS OVER TOOLS
                      </h4>
                      <p className="text-muted-foreground">
                        We design around the workflow, not around the latest
                        trend.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#071a29] text-white">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="mb-2 text-xl font-extrabold tracking-wider text-[#071a29]">
                        CLARITY OVER COMPLEXITY
                      </h4>
                      <p className="text-muted-foreground">
                        Clear flows, clean interfaces, and practical outcomes
                        matter more than noise.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#071a29] text-white">
                      <Star className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="mb-2 text-xl font-extrabold tracking-wider text-[#071a29]">
                        RESULTS-DRIVEN
                      </h4>
                      <p className="text-muted-foreground">
                        Focusing on measurable outcomes that matter.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#071a29] text-white">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="mb-2 text-xl font-extrabold tracking-wider text-[#071a29]">
                        COLLABORATION
                      </h4>
                      <p className="text-muted-foreground">
                        Partnering with clients for shared success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Render reusable FAQ and Final CTA components above the existing final CTA card */}
          <FAQSection items={faqItems} />
          <FinalCTA />
        </div>
      </section>
    </>
  );
};

export default About;
