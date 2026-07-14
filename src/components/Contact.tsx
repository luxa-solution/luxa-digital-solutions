import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const faqItems = [
    {
      q: "How do I get started with a project?",
      a: "Start by sending us a brief via this form or schedule a free consultation. We will review your needs and provide a tailored project roadmap and estimate.",
    },
    {
      q: "What are your typical project timelines?",
      a: "Timelines vary by scope: landing pages and simple websites typically 2–6 weeks; dashboards and medium apps 6–12 weeks; enterprise software 8+ weeks. We provide a timeline with your proposal.",
    },
    {
      q: "Do you offer ongoing support after launch?",
      a: "Yes. We offer maintenance, monitoring, optimization, and content support packages to keep your product performing and improving over time.",
    },
    {
      q: "How do you price projects?",
      a: "We price based on scope, complexity, and ongoing needs. Use the budget dropdown to indicate a range and we will follow up with a detailed estimate after discovery.",
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-brand-dark text-white dark:bg-black">
      {/* HERO Header */}
      <header className="relative overflow-hidden bg-brand-dark py-36 text-white dark:bg-black">
        {/* Background decorative lights */}
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-brand-teal/30 blur-3xl"></div>
          <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-brand-gold/30 blur-3xl"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 text-center">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-teal sm:text-sm">
            GET IN TOUCH
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold uppercase leading-[0.9] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
            LET&apos;S <span className="text-gradient-teal-gold">CONNECT</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base text-gray-300 sm:text-lg lg:text-xl leading-relaxed">
            Tell us about the custom system you need, the operational bottleneck you are solving, and the growth milestones you want to reach.
          </p>
        </div>

        {/* decorative curved cutout */}
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

      {/* Main contact highlights: three glass cards */}
      <div className="container mx-auto px-6 pb-20 pt-5">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          {/* Card 1: Email */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-[30px] border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent p-10 text-center shadow-xl backdrop-blur-md glow-card hover:-translate-y-1 transition-all duration-300">
            <div>
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-white/10 text-brand-teal">
                <Mail className="h-6 w-6" />
              </div>
              <h4 className="mb-4 text-xl font-bold uppercase tracking-tight text-white">EMAIL US</h4>
              <div className="text-sm text-gray-400">info@luxasolution.com</div>
              <div className="mt-2 text-sm text-gray-500">luxadigitalsolutions@gmail.com</div>
            </div>
            <div className="mt-8 h-1 w-12 bg-brand-teal mx-auto rounded-full"></div>
          </div>

          {/* Card 2: Visit */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-[30px] border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent p-10 text-center shadow-xl backdrop-blur-md glow-card hover:-translate-y-1 transition-all duration-300">
            <div>
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-white/10 text-brand-gold">
                <MapPin className="h-6 w-6" />
              </div>
              <h4 className="mb-4 text-xl font-bold uppercase tracking-tight text-white">VISIT US</h4>
              <div className="text-sm text-gray-400">Acre Santa, Ilorin</div>
              <div className="mt-2 text-sm text-gray-500">Kwara State, Nigeria</div>
            </div>
            <div className="mt-8 h-1 w-12 bg-brand-gold mx-auto rounded-full"></div>
          </div>

          {/* Card 3: Call */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-[30px] border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent p-10 text-center shadow-xl backdrop-blur-md glow-card hover:-translate-y-1 transition-all duration-300">
            <div>
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-white/10 text-brand-coral">
                <Phone className="h-6 w-6" />
              </div>
              <h4 className="mb-4 text-xl font-bold uppercase tracking-tight text-white">CALL US</h4>
              <div className="text-sm text-gray-400">+234 808 928 7065</div>
              <div className="mt-2 text-sm text-gray-500">+234 704 749 4586</div>
            </div>
            <div className="mt-8 h-1 w-12 bg-brand-coral mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main contact form panel */}
      <div className="container mx-auto px-6 pb-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 rounded-[40px] border border-white/5 bg-gradient-to-b from-white/[0.01] to-transparent p-10 md:grid-cols-2 md:p-14 lg:p-20 shadow-2xl backdrop-blur-md">
          {/* Left Side: Testimonial & Map */}
          <aside className="order-2 flex flex-col justify-between gap-12 md:order-1 border-t md:border-t-0 md:border-r border-white/5 pt-12 md:pt-0 md:pr-12">
            <div>
              <div className="mb-8">
                <p className="mb-4 text-xs font-mono tracking-widest text-brand-teal uppercase">// CONNECT</p>
                <h3 className="text-3xl font-extrabold leading-snug text-white sm:text-4xl">
                  The right system can turn messy operations into a clear path
                  for growth.
                </h3>
                <p className="mt-6 text-sm leading-relaxed text-gray-400 sm:text-base">
                  Share what you are building, what is slowing you down, and
                  what your team needs next. We will help you shape it into
                  something practical, scalable, and useful.
                </p>
              </div>

              {/* CEO Testimonial */}
              <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-6 shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full border border-white/10">
                    <img
                      src="/assets/mbayaan.png"
                      alt="avatar"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Reuben Adeyemi</div>
                    <div className="text-xs text-brand-teal font-mono uppercase tracking-wider">CEO, DataLab</div>
                  </div>
                </div>
                <blockquote className="text-xs leading-relaxed text-gray-400 italic">
                  &quot;LUXA Digital Solutions delivered the kind of clarity and engineering excellence we have been searching for. Fast, focused, and fully aligned with our vision.&quot;
                </blockquote>
              </div>
            </div>

            {/* Office map */}
            <div>
              <p className="mb-4 text-sm font-semibold text-white">
                Most of our work is digital, but great partnerships start with
                real conversations. If you&apos;re nearby, feel free to swing by.
              </p>

              <div className="overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-black/20 max-w-full h-80">
                <iframe
                  title="office-map"
                  src="https://www.google.com/maps?q=Acre+Santa,+Ilorin,+Kwara+State,+Nigeria&output=embed"
                  className="h-full w-full grayscale filter contrast-[0.9] invert-[0.9]"
                  loading="lazy"
                />
              </div>
            </div>
          </aside>

          {/* Right Side: Form */}
          <div className="order-1 md:order-2">
            <div className="mb-8">
              <p className="mb-2 text-xs font-mono tracking-widest text-brand-teal uppercase">GET IN TOUCH</p>
              <h2 className="text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
                Start a conversation with Luxa
              </h2>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <Label htmlFor="fullName" className="text-xs font-bold uppercase tracking-wider text-gray-300">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  placeholder="Your full name"
                  className="mt-3 h-12 border-white/10 bg-white/5 text-white placeholder-gray-500 rounded-full focus:border-brand-teal focus:ring-brand-teal/15"
                />
              </div>

              <div>
                <Label htmlFor="emailForm" className="text-xs font-bold uppercase tracking-wider text-gray-300">
                  Email Address
                </Label>
                <Input
                  id="emailForm"
                  type="email"
                  placeholder="you@company.com"
                  className="mt-3 h-12 border-white/10 bg-white/5 text-white placeholder-gray-500 rounded-full focus:border-brand-teal focus:ring-brand-teal/15"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-gray-300">
                  Phone Number
                </Label>
                <div className="mt-3 flex items-center gap-3">
                  <select
                    aria-label="country code selection"
                    className="h-12 rounded-full border border-white/10 bg-white/5 px-4 text-xs font-semibold text-gray-400"
                  >
                    <option value="ng">🇳🇬 +234</option>
                    <option value="us">🇺🇸 +1</option>
                    <option value="uk">🇬🇧 +44</option>
                  </select>
                  <Input
                    id="phone"
                    placeholder="704 749 4586"
                    className="flex-1 h-12 border-white/10 bg-white/5 text-white placeholder-gray-500 rounded-full focus:border-brand-teal focus:ring-brand-teal/15"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="company" className="text-xs font-bold uppercase tracking-wider text-gray-300">
                  Company
                </Label>
                <Input
                  id="company"
                  placeholder="Your company name"
                  className="mt-3 h-12 border-white/10 bg-white/5 text-white placeholder-gray-500 rounded-full focus:border-brand-teal focus:ring-brand-teal/15"
                />
              </div>

              <div>
                <Label htmlFor="serviceType" className="text-xs font-bold uppercase tracking-wider text-gray-300">
                  What do you need help with?
                </Label>
                <Select>
                  <SelectTrigger className="mt-3 h-12 border-white/10 bg-white/5 text-white rounded-full focus:border-brand-teal focus:ring-brand-teal/15">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="border-white/10 bg-brand-charcoal text-white">
                    <SelectItem value="dashboard">Custom Dashboard & Internal Systems</SelectItem>
                    <SelectItem value="lms">LMS & Learning Platform</SelectItem>
                    <SelectItem value="mobile">Mobile App Development</SelectItem>
                    <SelectItem value="web">Web Platform Development</SelectItem>
                    <SelectItem value="design">Branding & UI/UX Design</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="budget" className="text-xs font-bold uppercase tracking-wider text-gray-300">
                  Budget Range
                </Label>
                <Select>
                  <SelectTrigger className="mt-3 h-12 border-white/10 bg-white/5 text-white rounded-full focus:border-brand-teal focus:ring-brand-teal/15">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent className="border-white/10 bg-brand-charcoal text-white">
                    <SelectItem value="3k-8k">$3,000 - $8,000</SelectItem>
                    <SelectItem value="8k-20k">$8,000 - $20,000</SelectItem>
                    <SelectItem value="20k+">$20,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="projectDetails" className="text-xs font-bold uppercase tracking-wider text-gray-300">
                  Project Details
                </Label>
                <Textarea
                  id="projectDetails"
                  placeholder="Tell us about your current setup, database size, user roles, and what you are trying to achieve..."
                  rows={6}
                  className="mt-3 resize-none rounded-[20px] border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-brand-teal focus:ring-brand-teal/15"
                />
              </div>

              <Button
                type="submit"
                className="text-brand-teal-foreground pulse-glow w-full rounded-full bg-brand-teal py-6 text-base font-semibold hover:bg-brand-teal/90 shadow-xl shadow-brand-teal/20 transition-transform hover:scale-105"
              >
                Submit Message
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <FAQSection items={faqItems} />

      <FinalCTA />
    </section>
  );
};

export default Contact;
