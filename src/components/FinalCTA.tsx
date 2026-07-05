import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-[#071a29] p-20 text-white">
          <h2 className="mx-auto max-w-4xl text-center text-4xl font-extrabold leading-tight md:text-6xl">
            READY TO TURN YOUR OPERATIONS INTO A STRONGER DIGITAL SYSTEM?
          </h2>

          {/* decorative pills / stickers */}
          <span className="absolute left-12 top-12 inline-block rotate-6 transform rounded-full bg-lime-300 px-4 py-2 text-sm font-semibold text-[#071a29] shadow-lg">
            Performance Metrics
          </span>

          <span className="absolute left-36 top-44 inline-block -rotate-6 transform rounded-full bg-[#ff5a5a] px-4 py-2 text-sm font-semibold text-white shadow-lg">
            Brand Strategy
          </span>

          <span className="absolute right-36 top-56 inline-block transform rounded-full bg-[#ffd54f] px-4 py-2 text-sm font-semibold text-[#071a29] shadow-lg">
            Sticker Mockups
          </span>

          <div className="mt-12 flex justify-center">
            <Button className="rounded-full bg-white px-12 py-4 text-[#071a29]">
              Book a Consultation
            </Button>
          </div>

          {/* decorative rounded cutout on right */}
          <div className="pointer-events-none absolute -bottom-6 left-0 right-0 overflow-hidden">
            <svg
              viewBox="0 0 1200 80"
              preserveAspectRatio="none"
              className="block h-20 w-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,0 L0,60 Q300,120 600,60 Q900,0 1200,60 L1200,0 Z"
                fill="#071a29"
              />
              <path
                d="M0,60 C300,0 900,0 1200,60 L1200,80 L0,80 Z"
                fill="#ffffff"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
