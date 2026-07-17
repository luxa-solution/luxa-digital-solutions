"use client";

import { lazy, Suspense, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// ✅ Lazy load heavy animation
const LiquidEther = lazy(() => import("@/components/animations/LiquidEther"));

const Hero = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const scrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const updateParallax = () => {
      const offset = scrollY.current * 0.5;

      document.documentElement.style.setProperty(
        "--parallax-main",
        `${offset}px`,
      );

      document.documentElement.style.setProperty(
        "--parallax-reverse",
        `${offset * -0.3}px`,
      );

      ticking = false;
    };

    const handleScroll = () => {
      scrollY.current = window.scrollY;

      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div ref={heroRef} className="relative bg-brand-dark dark:bg-black">
      {/* HERO SECTION */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-brand-dark dark:bg-black">
        {/* ✅ Optimized LiquidEther */}
        <div className="absolute inset-0 z-0">
          {!isMobile && (
            <Suspense fallback={null}>
              <LiquidEther
                colors={["#5227FF", "#00D9FF", "#B19EEF"]}
                mouseForce={15} // ↓ reduced
                cursorSize={80} // ↓ reduced
                isViscous={false}
                viscous={20} // ↓ reduced
                iterationsViscous={16} // ↓ reduced
                iterationsPoisson={16} // ↓ reduced
                resolution={0.4} // ↓ reduced
                isBounce={false}
                autoDemo={true}
                autoSpeed={0.4}
                autoIntensity={1.8}
                takeoverDuration={0.25}
                autoResumeDelay={3000}
                autoRampDuration={0.6}
                className="h-full w-full"
              />
            </Suspense>
          )}
        </div>

        {/* ✅ Parallax layer (NO re-render) */}
        <div className="parallax-main absolute inset-0 z-[1] bg-brand-dark/30 dark:bg-black/30">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-5 dark:opacity-10"></div>
        </div>

        <div className="container relative z-10 mx-auto h-full w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid min-h-screen gap-8 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20 xl:gap-20">
            {/* LEFT CONTENT */}
            <div className="flex items-end pb-24 lg:pb-32">
              <div className="animate-slide-up space-y-6 lg:space-y-8">
                <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  <span className="text-white">We build </span>
                  <span className="text-gradient-teal-gold block drop-shadow-sm">
                    digital systems
                  </span>
                  <span className="mt-4 block max-w-xl text-lg font-normal leading-relaxed text-gray-300 sm:text-xl md:text-2xl">
                    that help businesses operate with clarity, control, and
                    scale.
                  </span>
                </h1>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex items-start pt-8 lg:justify-end lg:pt-16">
              <div className="animate-slide-up-delayed parallax-reverse relative w-full max-w-md">
                <div className="glass-card-dark mb-8 ml-auto rounded-3xl border border-white/10 p-8 shadow-2xl backdrop-blur-md lg:mb-12">
                  <div className="mb-6 h-1.5 w-12 rounded-full bg-gradient-to-r from-brand-teal to-brand-gold"></div>
                  <p className="text-sm leading-relaxed text-gray-300 lg:text-base">
                    From custom dashboards and LMS platforms to internal tools
                    and mobile apps, we design solutions around how your
                    business actually works. We turn manual spreadsheets and
                    complex workflows into clear, scalable operating
                    environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        {/* <div className="animate-fade-in absolute bottom-32 right-8 z-20 flex flex-col items-center gap-3 text-gray-400 dark:text-gray-500 lg:bottom-40 lg:right-16">
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
        </div> */}
      </section>
    </div>
  );
};

export default Hero;
