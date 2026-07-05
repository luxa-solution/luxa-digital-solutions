import LiquidEther from "@/components/animations/LiquidEther";
import LogoLoop from "@/components/animations/LogoLoop";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate parallax effect
  const parallaxOffset = scrollY * 0.5;

  return (
    <div ref={heroRef} className="relative bg-brand-dark dark:bg-black">
      {/* First Section - Hero with Image */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-brand-dark dark:bg-black">
        {/* LiquidEther Background Animation */}
        <div className="absolute inset-0 z-0">
          <LiquidEther
            colors={["#5227FF", "#00D9FF", "#B19EEF"]}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
            className="h-full w-full"
          />
        </div>

        {/* Background with parallax */}
        <div
          className="absolute inset-0 z-[1] bg-brand-dark/30 dark:bg-black/30"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-5 dark:opacity-10"></div>
        </div>

        <div className="container relative z-10 mx-auto h-full w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid min-h-screen gap-8 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20 xl:gap-20">
            {/* Left Content - Aligned to bottom */}
            <div className="flex items-end pb-24 lg:pb-32">
              <div className="animate-slide-up space-y-6 lg:space-y-8">
                <h1 className="text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  <span className="text-white dark:text-white">We build </span>
                  <span className="relative text-brand-gold dark:text-yellow-400">
                    digital systems
                  </span>
                  <span className="mt-2 block text-white dark:text-white">
                    that help businesses operate with clarity, control, and
                    scale.
                  </span>
                </h1>
              </div>
            </div>

            {/* Right Content - Aligned to top */}
            <div className="flex items-start pt-8 lg:pt-16">
              <div
                className="animate-slide-up-delayed relative w-full"
                style={{ transform: `translateY(${parallaxOffset * -0.3}px)` }}
              >
                {/* Descriptive Text - Top Right */}
                <div className="mb-8 ml-auto max-w-sm lg:mb-12">
                  <p className="text-right text-sm leading-relaxed text-gray-400 dark:text-gray-300 lg:text-base">
                    From custom dashboards and LMS platforms to internal tools
                    and mobile apps, we design solutions around how your
                    business actually works.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Bottom Right */}
        <div className="animate-fade-in absolute bottom-32 right-8 z-20 flex flex-col items-center gap-3 text-gray-400 dark:text-gray-500 lg:bottom-40 lg:right-16">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-gray-500 pt-2 dark:border-gray-600 lg:h-12 lg:w-7">
              <div className="h-2 w-1 animate-bounce rounded-full bg-gray-500 dark:bg-gray-600 lg:h-3 lg:w-1.5"></div>
            </div>
          </div>
          <div className="text-center text-xs lg:text-sm">
            <p className="font-medium text-gray-400 dark:text-gray-400">
              Scroll
            </p>
            <p className="text-gray-500 dark:text-gray-500">to explore</p>
          </div>
        </div>

        {/* Bottom Trusted Brands */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-gray-800 bg-brand-dark/50 py-4 backdrop-blur-sm dark:border-gray-800 dark:bg-black/50 lg:py-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <p className="mb-3 text-xs text-gray-500 dark:text-gray-600 lg:text-sm">
              Trusted by
              <br className="sm:hidden" /> Global Brands
            </p>
            <div className="pt-1">
              <LogoLoop
                logos={[
                  {
                    node: (
                      <>
                        <span className="text-base lg:text-lg">🏢</span>
                        <span className="ml-3 text-sm font-semibold text-white lg:text-base">
                          kanba
                        </span>
                      </>
                    ),
                    ariaLabel: "kanba",
                    title: "kanba",
                  },
                  {
                    node: (
                      <>
                        <span className="text-base lg:text-lg">🏛️</span>
                        <span className="ml-3 text-sm font-semibold text-white lg:text-base">
                          nirastate
                        </span>
                      </>
                    ),
                    ariaLabel: "nirastate",
                    title: "nirastate",
                  },
                  {
                    node: (
                      <>
                        <span className="text-base lg:text-lg">✦</span>
                        <span className="ml-3 text-sm font-semibold text-white lg:text-base">
                          Radiyal
                        </span>
                      </>
                    ),
                    ariaLabel: "Radiyal",
                    title: "Radiyal",
                  },
                  {
                    node: (
                      <>
                        <span className="text-base lg:text-lg">🌲</span>
                        <span className="ml-3 text-sm font-semibold text-white lg:text-base">
                          treva
                        </span>
                      </>
                    ),
                    ariaLabel: "treva",
                    title: "treva",
                  },
                  {
                    node: (
                      <>
                        <span className="text-base lg:text-lg">⚡</span>
                        <span className="ml-3 text-sm font-semibold text-white lg:text-base">
                          velocity
                        </span>
                      </>
                    ),
                    ariaLabel: "velocity",
                    title: "velocity",
                  },
                  {
                    node: (
                      <>
                        <span className="text-base lg:text-lg">◆</span>
                        <span className="ml-3 text-sm font-semibold text-white lg:text-base">
                          liva
                        </span>
                      </>
                    ),
                    ariaLabel: "liva",
                    title: "liva",
                  },
                ]}
                speed={60}
                gap={48}
                logoHeight={36}
                pauseOnHover={true}
                fadeOut={true}
                fadeOutColor="rgba(255,255,255,0.03)"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Stats with Parallax */}
      <section
        className="relative flex min-h-screen items-center bg-brand-dark dark:bg-black"
        style={{ transform: `translateY(${parallaxOffset * -0.2}px)` }}
      >
        {/* Subtle separator line */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent dark:via-gray-700"></div>

        <div className="container relative z-10 mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20 xl:px-12">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-24">
            {/* Left - Testimonial */}
            <div className="animate-slide-up order-2 space-y-6 lg:order-1 lg:space-y-8">
              <div className="mb-2 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-brand-gold text-brand-gold dark:fill-yellow-400 dark:text-yellow-400 lg:h-6 lg:w-6"
                  />
                ))}
              </div>

              <blockquote className="max-w-lg text-base leading-relaxed text-gray-300 dark:text-gray-300 sm:text-lg lg:text-xl">
                Luxa helped us turn scattered processes into one structured
                system. The result was better visibility, faster decisions, and
                a platform our team could actually rely on every day.
              </blockquote>

              <div className="flex items-center gap-4 pt-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-teal to-cyan-600 text-lg font-bold text-white dark:from-brand-teal dark:to-blue-500 lg:h-14 lg:w-14">
                  CJ
                </div>
                <div>
                  <p className="text-base font-semibold text-white dark:text-white lg:text-lg">
                    Corie Johnson
                  </p>
                  <p className="text-sm text-gray-400 dark:text-gray-400 lg:text-base">
                    CEO, Uniq Solutions
                  </p>
                </div>
              </div>

              {/* Years Badge */}
              <div className="mt-6 inline-flex items-center rounded-full border-2 border-brand-gold px-6 py-4 dark:border-yellow-400 lg:mt-8 lg:px-8 lg:py-5">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-8 w-8 text-brand-gold dark:text-yellow-400 lg:h-10 lg:w-10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                  <div className="border-l border-brand-gold/30 pl-2 text-left dark:border-yellow-400/30">
                    <div className="text-3xl font-bold leading-none text-brand-gold dark:text-yellow-400 lg:text-4xl">
                      5+
                    </div>
                    <div className="text-xs leading-tight text-gray-400 dark:text-gray-400">
                      years of experience
                    </div>
                  </div>
                </div>
              </div>

              <p className="max-w-md pt-2 text-sm text-gray-400 dark:text-gray-400 lg:text-base">
                We bring together product thinking, workflow design, and
                software delivery so your business can scale without adding
                confusion.
              </p>
            </div>

            {/* Right - Big Stats */}
            <div className="animate-slide-up-delayed order-1 space-y-6 lg:order-2 lg:space-y-8">
              <div className="relative">
                <h2 className="mb-4 text-sm font-medium text-gray-400 dark:text-gray-400 lg:mb-6 lg:text-base">
                  In a market of
                </h2>

                {/* Large Number with Parallax */}
                <div
                  className="text-[80px] font-black leading-none tracking-tighter sm:text-[120px] md:text-[160px] lg:text-[180px] xl:text-[220px]"
                  style={{
                    transform: `translateX(${parallaxOffset * 0.05}px)`,
                  }}
                >
                  <span className="bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent dark:from-white dark:via-gray-300 dark:to-gray-500">
                    9,994
                  </span>
                </div>

                {/* Decorative blur effect */}
                <div className="absolute right-0 top-0 -z-10 h-32 w-32 rounded-full bg-brand-teal/20 blur-3xl dark:bg-white/10 lg:h-40 lg:w-40"></div>
              </div>

              <h3 className="max-w-xl text-2xl font-bold leading-tight text-white dark:text-white sm:text-3xl lg:text-4xl xl:text-5xl">
                When operations become messy, the right system makes everything
                clearer.
              </h3>

              <div className="h-px max-w-lg bg-gradient-to-r from-gray-700 via-gray-600 to-transparent dark:from-gray-700 dark:via-gray-600"></div>

              <p className="max-w-xl text-base leading-relaxed text-gray-300 dark:text-gray-400 lg:text-lg">
                We help businesses move from scattered tools and manual
                processes to structured digital systems that support growth.
                Every platform we build is designed around how your team
                actually works.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 pt-6 sm:flex-row lg:pt-8">
                <Button
                  size="lg"
                  onClick={() => navigate("/pricing")}
                  className="rounded-full bg-brand-teal px-8 py-6 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-brand-teal/90 hover:shadow-xl hover:shadow-brand-teal/20 dark:bg-brand-teal dark:hover:bg-brand-teal/90 lg:text-lg"
                >
                  Book a Consultation
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate("/all-projects")}
                  className="rounded-full border-2 border-white/20 px-8 py-6 text-base font-semibold text-gray-500 transition-all hover:scale-105 hover:border-white/30 hover:bg-white/10 dark:border-white/20 dark:text-white dark:hover:border-white/30 dark:hover:bg-white/10 lg:text-lg"
                >
                  View Our Work
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
