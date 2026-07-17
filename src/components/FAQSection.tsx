import { Minus, Plus } from "lucide-react";
import { useState } from "react";

type FAQItem = {
  q: string;
  a: string;
};

type Props = {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  initialOpen?: number | null;
  className?: string;
};

const FAQSection = ({
  items,
  title = "FAQ",
  subtitle = "Helping you understand our process and offerings. If you don't see your question, send it via our contact form.",
  initialOpen = null,
  className = "",
}: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(initialOpen);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      className={`bg-brand-dark/50 py-12 text-white dark:bg-black/40 ${className}`}
    >
      <div className="container mx-auto px-1">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Left info column */}
          <div className="lg:sticky lg:top-24 lg:col-span-5">
            <div className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-teal">
              {title}
            </div>
            <h2 className="text-4xl font-extrabold uppercase leading-tight text-white sm:text-5xl">
              Frequently
              <span className="text-gradient-teal-gold block">
                Asked Questions
              </span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-gray-400 sm:text-lg">
              {subtitle}
            </p>
          </div>

          {/* Right accordion column */}
          <div className="space-y-6 lg:col-span-7">
            {items.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-white/5 bg-white/[0.01] p-6 shadow-md transition-all duration-300 hover:border-white/10"
                >
                  <button
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between gap-4 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                  >
                    <h4 className="text-lg font-bold tracking-tight text-white sm:text-xl">
                      {item.q}
                    </h4>
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-brand-teal hover:text-black">
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>

                  <div
                    id={`faq-${i}`}
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? "mt-4 max-h-[500px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="border-t border-white/5 pt-4 text-sm leading-relaxed text-gray-400 sm:text-base">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
