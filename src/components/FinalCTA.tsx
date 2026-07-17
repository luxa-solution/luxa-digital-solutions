import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-brand-dark/50 py-20 dark:bg-black/20">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-[40px] border border-white/5 bg-gradient-to-br from-brand-charcoal via-brand-dark to-brand-charcoal p-12 text-white shadow-2xl md:p-20">
          {/* Decorative background light */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-brand-teal/5 blur-3xl"></div>
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-brand-coral/5 blur-3xl"></div>

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Ready to turn your operations into a
              <span className="text-gradient-teal-gold mt-2 block">
                Stronger Digital System?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base text-gray-400 sm:text-lg">
              Let's build a platform designed specifically for how your business
              operates. We'll help you streamline tasks, centralize data, and
              scale your operations.
            </p>

            {/* Custom tags instead of stickers */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <span className="px-4.5 rounded-full border border-white/10 bg-white/5 py-1.5 text-xs font-semibold text-brand-teal backdrop-blur-md">
                ✓ Custom Workflows
              </span>
              <span className="px-4.5 rounded-full border border-white/10 bg-white/5 py-1.5 text-xs font-semibold text-brand-gold backdrop-blur-md">
                ✓ Real-time Dashboards
              </span>
              <span className="px-4.5 rounded-full border border-white/10 bg-white/5 py-1.5 text-xs font-semibold text-brand-coral backdrop-blur-md">
                ✓ Resilient Scaling
              </span>
            </div>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                onClick={() => navigate("/pricing")}
                className="text-brand-teal-foreground pulse-glow group rounded-full bg-brand-teal px-8 py-6 text-base font-semibold shadow-xl shadow-brand-teal/20 transition-all hover:scale-105 hover:bg-brand-teal/90"
              >
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                variant="outline"
                onClick={() => navigate("/contact")}
                className="rounded-full border-white/15 px-8 py-6 text-base font-semibold text-black transition-all hover:scale-105 hover:border-brand-teal/50 hover:bg-brand-teal/5 hover:text-white"
              >
                Request a Review
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
