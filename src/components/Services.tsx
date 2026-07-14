import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "CUSTOM DASHBOARDS & INTERNAL SYSTEMS",
      description:
        "We build dashboards, admin tools, and operational systems that centralize data, reduce manual work, and give teams clearer control over daily performance.",
      accentColor: "#12bbbb", // Brand Teal
    },
    {
      title: "LMS & LEARNING PLATFORMS",
      description:
        "From student portals to course delivery and progress tracking, we design learning platforms that are simple for learners and powerful for administrators.",
      accentColor: "#8b5cf6", // Violet/Purple
    },
    {
      title: "MOBILE APP DEVELOPMENT",
      description:
        "We create mobile experiences for customers, internal teams, and service businesses that are practical, fast, and built to scale.",
      accentColor: "#bb1212", // Brand Coral
    },
    {
      title: "WEB PLATFORMS & BUSINESS TOOLS",
      description:
        "We design custom web platforms, portals, and SaaS-style systems that bring workflows, users, and data into one reliable experience.",
      accentColor: "#10b981", // Emerald
    },
    {
      title: "BRANDING & UI/UX DESIGN",
      description:
        "We shape interfaces and brand experiences that make complex systems feel clear, confident, and easy to use from the first interaction.",
      accentColor: "#f59e0b", // Amber
    },
    {
      title: "PRODUCT STRATEGY & SYSTEM DESIGN",
      description:
        "We help businesses turn scattered tools into structured digital systems through discovery, workflow mapping, and thoughtful product architecture.",
      accentColor: "#e6b14b", // Brand Gold
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-x-hidden bg-brand-dark py-24 text-white dark:bg-black sm:py-28 lg:py-36"
    >
      {/* Decorative gradient light overlays */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-brand-teal/5 blur-3xl"></div>
      <div className="pointer-events-none absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-brand-gold/5 blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header: Left title, right description */}
        <div className="animate-slide-up mb-16 grid grid-cols-1 items-end gap-8 lg:mb-24 lg:grid-cols-3 lg:gap-12">
          <div className="col-span-1 lg:col-span-2">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-teal sm:text-sm">
              OUR CAPABILITIES
            </p>
            <h2 className="break-words text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              DIGITAL SYSTEMS FOR
              <span className="block text-gradient-teal-gold">
                GROWING BUSINESSES
              </span>
            </h2>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <p className="text-base leading-relaxed text-gray-400 lg:text-lg">
              We design and build custom systems that bring organization to operations, simplify complex workflows, and support scalable growth.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[30px] border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent p-8 shadow-2xl backdrop-blur-md glow-card hover:translate-y-[-8px] transition-all duration-500 min-h-[385px]"
            >
              {/* Header inside Card */}
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs font-mono tracking-widest text-gray-500">
                    CAPABILITY // 0{index + 1}
                  </span>
                  {/* Indicator Dot */}
                  <div
                    className="h-2 w-2 rounded-full animate-pulse"
                    style={{
                      backgroundColor: service.accentColor,
                      boxShadow: `0 0 10px ${service.accentColor}`,
                    }}
                  ></div>
                </div>

                <h3 className="break-words text-xl font-bold uppercase leading-snug tracking-tight text-white mb-4 sm:text-2xl transition-colors duration-300 group-hover:text-brand-teal">
                  {service.title}
                </h3>
                <p className="break-words text-sm leading-relaxed text-gray-400 sm:text-base">
                  {service.description}
                </p>
              </div>

              {/* Footer action inside Card */}
              <div className="mt-8 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-teal group-hover:text-white transition-colors duration-300">
                  Explore System
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white ring-1 ring-white/10 transition-all duration-500 group-hover:rotate-45 group-hover:bg-brand-teal group-hover:text-black group-hover:ring-brand-teal group-hover:shadow-lg group-hover:shadow-brand-teal/20">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
