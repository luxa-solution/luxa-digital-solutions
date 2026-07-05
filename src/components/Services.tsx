import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "CUSTOM DASHBOARDS & INTERNAL SYSTEMS",
      description:
        "We build dashboards, admin tools, and operational systems that centralize data, reduce manual work, and give teams clearer control over daily performance.",
      bgColorClass: "bg-gradient-to-br from-cyan-400 to-teal-500",
      arrowColor: "text-teal-600",
      topCutout: "cutout-1.svg",
      bottomCutout: "cutout-3.svg",
    },
    {
      title: "LMS & LEARNING PLATFORMS",
      description:
        "From student portals to course delivery and progress tracking, we design learning platforms that are simple for learners and powerful for administrators.",
      bgColorClass: "bg-gradient-to-br from-indigo-400 to-indigo-500",
      arrowColor: "text-indigo-600",
      bottomCutout: "cutout-3.svg",
      topRightCutout: "cutout-2.svg",
    },
    {
      title: "MOBILE APP DEVELOPMENT",
      description:
        "We create mobile experiences for customers, internal teams, and service businesses that are practical, fast, and built to scale.",
      bgColorClass: "bg-gradient-to-br from-rose-500 to-red-600",
      arrowColor: "text-rose-500",
      topCutout: "cutout-1.svg",
      bottomCutout: "cutout-3.svg",
      topRightCutout: "cutout-2.svg",
    },
    {
      title: "WEB PLATFORMS & BUSINESS TOOLS",
      description:
        "We design custom web platforms, portals, and SaaS-style systems that bring workflows, users, and data into one reliable experience.",
      bgColorClass: "bg-gradient-to-br from-emerald-400 to-green-500",
      arrowColor: "text-emerald-600",
      topCutout: "cutout-1.svg",
      bottomCutout: "cutout-3.svg",
      topRightCutout: "cutout-2.svg",
    },
    {
      title: "BRANDING & UI/UX DESIGN",
      description:
        "We shape interfaces and brand experiences that make complex systems feel clear, confident, and easy to use from the first interaction.",
      bgColorClass: "bg-gradient-to-br from-orange-400 to-orange-500",
      arrowColor: "text-orange-500",
      topCutout: "cutout-1.svg",
      bottomCutout: "cutout-3.svg",
    },
    {
      title: "PRODUCT STRATEGY & SYSTEM DESIGN",
      description:
        "We help businesses turn scattered tools into structured digital systems through discovery, workflow mapping, and thoughtful product architecture.",
      bgColorClass: "bg-gradient-to-br from-purple-400 to-purple-500",
      arrowColor: "text-purple-500",
      topCutout: "cutout-1.svg",
      bottomCutout: "cutout-3.svg",
      topRightCutout: "cutout-2.svg",
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-x-hidden bg-white pt-20 dark:bg-background sm:pt-24 lg:pt-32"
    >
      <div className="container relative z-10 mx-auto max-w-full overflow-x-hidden px-4 sm:px-6 lg:px-8">
        {/* Header aligned like the reference: left title, right paragraph */}
        <div className="animate-slide-up mb-12 grid grid-cols-1 items-end gap-8 sm:mb-16 lg:mb-20 lg:grid-cols-3 lg:gap-12">
          <div className="col-span-1 lg:col-span-2">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-red-500 dark:text-brand-coral sm:text-base">
              OUR SERVICES
            </p>
            <h2 className="break-words text-3xl font-black leading-[1.05] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              <span className="text-gray-900 dark:text-foreground">
                DIGITAL SYSTEMS FOR
              </span>

              <span className="text-gray-900 dark:text-foreground">
                GROWING BUSINESSES
              </span>
            </h2>
          </div>
          <div className="col-span-1 hidden lg:col-span-1 lg:block">
            <p className="ml-auto max-w-md text-lg leading-relaxed text-gray-700 dark:text-muted-foreground xl:text-xl">
              We design and build platforms that bring structure to operations,
              simplify day-to-day work, and support long-term growth.
            </p>
          </div>
        </div>

        {/* Cards: equal height and alignment with decorative cutouts */}
        <div className="mb-16 grid max-w-full grid-cols-1 items-stretch gap-6 sm:mb-20 md:grid-cols-2 lg:mb-24 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`group relative h-full min-h-[420px] p-6 sm:p-8 md:min-h-[460px] lg:p-10 xl:min-h-[500px] ${service.bgColorClass} w-full overflow-hidden rounded-[40px] border-0 sm:rounded-[50px]`}
            >
              {/* SVG Cutouts */}
              <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
                {/* Top center scalloped cutout */}
                {service.topCutout && (
                  <img
                    src={`/${service.topCutout}`}
                    alt=""
                    className="absolute left-1/2 top-0 h-[30px] w-auto -translate-x-1/2 rotate-180 select-none opacity-100 sm:h-[35px] lg:h-[40px]"
                    style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.1))" }}
                  />
                )}
                {/* Top-right angular cutout (optional decorative element) */}
                {service.topRightCutout && (
                  <img
                    src={`/${service.topRightCutout}`}
                    alt=""
                    className="absolute right-0 top-0 h-[35px] w-auto select-none opacity-100 sm:h-[40px] lg:h-[45px]"
                    style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.1))" }}
                  />
                )}
                {/* Bottom-left angular cutout */}
                {service.bottomCutout && (
                  <img
                    src={`/${service.bottomCutout}`}
                    alt=""
                    className="absolute bottom-0 left-0 h-[35px] w-auto select-none opacity-100 sm:h-[40px] lg:h-[45px]"
                    style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.1))" }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="relative z-[3] flex h-full w-full flex-col justify-center gap-4 sm:gap-5 lg:gap-6">
                <h3 className="break-words text-2xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-3xl lg:text-4xl">
                  {service.title}
                </h3>
                <p className="max-w-[90%] break-words text-sm leading-relaxed text-white/90 sm:text-base lg:text-lg">
                  {service.description}
                </p>
              </div>

              {/* Arrow button */}
              <div className="absolute bottom-6 right-6 z-[4] flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-300 group-hover:rotate-45 group-hover:scale-125 sm:bottom-8 sm:right-8 sm:h-16 sm:w-16 lg:bottom-10 lg:right-10">
                <ArrowUpRight
                  className={`h-6 w-6 sm:h-7 sm:w-7 ${service.arrowColor}`}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
