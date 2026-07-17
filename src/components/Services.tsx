import { Card } from "@/components/ui/card";
import {
  ArrowUpRight,
  LayoutDashboard,
  GraduationCap,
  Smartphone,
  Globe,
  Palette,
  Compass,
} from "lucide-react";
import { useState } from "react";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: "CUSTOM DASHBOARDS & INTERNAL SYSTEMS",
      description:
        "We build dashboards, admin tools, and operational systems that centralize data, reduce manual work, and give teams clearer control over daily performance.",
      accentColor: "#12bbbb", // Brand Teal
      icon: LayoutDashboard,
    },
    {
      title: "LMS & LEARNING PLATFORMS",
      description:
        "From student portals to course delivery and progress tracking, we design learning platforms that are simple for learners and powerful for administrators.",
      accentColor: "#e6b14b", // Brand Gold
      icon: GraduationCap,
    },
    {
      title: "MOBILE APP DEVELOPMENT",
      description:
        "We create mobile experiences for customers, internal teams, and service businesses that are practical, fast, and built to scale.",
      accentColor: "#bb1212", // Brand Coral
      icon: Smartphone,
    },
    {
      title: "WEB PLATFORMS & BUSINESS TOOLS",
      description:
        "We design custom web platforms, portals, and SaaS-style systems that bring workflows, users, and data into one reliable experience.",
      accentColor: "#12bbbb", // Brand Teal
      icon: Globe,
    },
    {
      title: "BRANDING & UI/UX DESIGN",
      description:
        "We shape interfaces and brand experiences that make complex systems feel clear, confident, and easy to use from the first interaction.",
      accentColor: "#e6b14b", // Brand Gold
      icon: Palette,
    },
    {
      title: "PRODUCT STRATEGY & SYSTEM DESIGN",
      description:
        "We help businesses turn scattered tools into structured digital systems through discovery, workflow mapping, and thoughtful product architecture.",
      accentColor: "#bb1212", // Brand Coral
      icon: Compass,
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-x-hidden bg-brand-dark py-24 text-white dark:bg-black sm:py-28 lg:py-36"
    >
      {/* Decorative gradient light overlays */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-brand-teal/5 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-brand-gold/5 blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header: Left title, right description */}
        <div className="animate-slide-up mb-16 grid grid-cols-1 items-end gap-8 lg:mb-24 lg:grid-cols-3 lg:gap-12">
          <div className="col-span-1 lg:col-span-2">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-brand-teal">
              // OUR CAPABILITIES
            </p>
            <h2 className="break-words text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              DIGITAL SYSTEMS FOR
              <span className="text-gradient-teal-gold mt-2 block">
                GROWING BUSINESSES
              </span>
            </h2>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <p className="text-base leading-relaxed text-gray-400 lg:text-lg">
              We design and build custom systems that bring organization to
              operations, simplify complex workflows, and support scalable
              growth.
            </p>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;

            return (
              <Card
                key={service.title}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-[40px] border bg-gradient-to-b from-white/[0.02] to-transparent p-8 shadow-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 md:p-10"
                style={{
                  borderColor: isHovered
                    ? `${service.accentColor}40`
                    : "rgba(255, 255, 255, 0.05)",
                  boxShadow: isHovered
                    ? `0 15px 40px -15px ${service.accentColor}30`
                    : "0 10px 30px -10px rgba(0,0,0,0.5)",
                }}
              >
                {/* Accent Background Glow (Visible on Card Hover) */}
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-20"
                  style={{ backgroundColor: service.accentColor }}
                ></div>

                {/* Card Top Area */}
                <div className="">
                  <div className="mb-8 flex items-center justify-between">
                    {/* Visual Custom Icon */}
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300"
                      style={{
                        borderColor: isHovered
                          ? `${service.accentColor}60`
                          : `${service.accentColor}20`,
                        backgroundColor: `${service.accentColor}10`,
                      }}
                    >
                      <Icon
                        className="h-5 w-5"
                        style={{ color: service.accentColor }}
                      />
                    </div>

                    <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                      Capability // 0{index + 1}
                    </span>
                  </div>

                  <h3 className="mb-4 text-xl font-bold uppercase leading-snug tracking-tight text-black transition-colors duration-300 hover:text-white group-hover:text-brand-teal sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="text-base leading-relaxed text-gray-500 transition-colors duration-300 group-hover:text-gray-400 sm:text-base">
                    {service.description}
                  </p>
                </div>

                {/* Card Action Footer */}
                <div className="mt-10 flex items-center justify-between border-t border-white/5 pt-6">
                  <span className="cursor-pointer text-[10px] font-bold uppercase tracking-widest text-black transition-colors duration-300 group-hover:text-brand-teal">
                    Explore Platform
                  </span>
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-500 group-hover:rotate-45"
                    style={{
                      borderColor: isHovered
                        ? `${service.accentColor}50`
                        : "rgba(255,255,255,0.1)",
                      backgroundColor: isHovered
                        ? service.accentColor
                        : "rgba(255,255,255,0.05)",
                      color: isHovered ? "#000" : "#fff",
                    }}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
