import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      value: "+2347047494586",
      description: "Call us anytime",
      action: "Call Now",
      onClick: () => window.open("tel:+2347047494586", "_self"),
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@luxasolution.com",
      description: "Send us a message",
      action: "Send Email",
      onClick: () => window.open("mailto:info@luxasolution.com", "_self"),
    },
    {
      icon: MapPin,
      title: "Office",
      value: "123 Digital Street",
      description: "Visit our office",
      action: "Get Directions",
      onClick: () =>
        window.open("https://maps.google.com/?q=123+Digital+Street", "_blank"),
    },
    {
      icon: Clock,
      title: "Hours",
      value: "Mon-Fri 9AM-6PM",
      description: "Business hours",
      action: "Schedule Meeting",
      onClick: () => navigate("/schedule-consultation"),
    },
  ];

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
    <section id="contact" className="relative overflow-hidden bg-background">
      {/* HERO: dark top band styled like the example */}
      <header className="relative overflow-hidden bg-[#071a29] text-white">
        <div className="container mx-auto px-6 py-36 text-center">
          <div className="mb-4 text-sm font-semibold tracking-widest text-violet-300">
            CONTACT US
          </div>

          <h1 className="mx-auto max-w-4xl text-7xl font-extrabold uppercase leading-[0.9] md:text-[96px] lg:text-[112px]">
            LET&apos;S <span className="text-brand-teal">CONNECT</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-xl text-white/90">
            Tell us about the system you need, the problem you are solving, and
            the kind of growth you are planning for.
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

      {/* Main contact highlights: three large cards */}
      <div className="container mx-auto px-6 pb-12 pt-5">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1: Email */}
          <div className="rounded-3xl bg-sky-50 p-12 text-center shadow-sm">
            <div className="bg-[#071a29]/6 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-lg text-[#071a29]">
              <Mail className="h-7 w-7" />
            </div>
            <h4 className="mb-4 text-3xl font-extrabold tracking-tight text-[#071a29]">
              EMAIL US
            </h4>
            <div className="text-base text-muted-foreground">
              info@luxasolution.com
            </div>
            <div className="mt-3 text-base text-muted-foreground">
              luxadigitalsolutions@gmail.com
            </div>
          </div>

          {/* Card 2: Visit */}
          <div className="rounded-3xl bg-sky-50 p-12 text-center shadow-sm">
            <div className="bg-[#071a29]/6 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-lg text-[#071a29]">
              <MapPin className="h-7 w-7" />
            </div>
            <h4 className="mb-4 text-3xl font-extrabold tracking-tight text-[#071a29]">
              VISIT OUR OFFICE
            </h4>
            <div className="text-base text-muted-foreground">
              Acre Santa, Ilorin,
            </div>
            <div className="mt-3 text-base text-muted-foreground">
              Kwara State, Nigeria
            </div>
          </div>

          {/* Card 3: Call */}
          <div className="rounded-3xl bg-sky-50 p-12 text-center shadow-sm">
            <div className="bg-[#071a29]/6 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-lg text-[#071a29]">
              <Phone className="h-7 w-7" />
            </div>
            <h4 className="mb-4 text-3xl font-extrabold tracking-tight text-[#071a29]">
              CALL US
            </h4>
            <div className="text-base text-muted-foreground">
              +2348089287065
            </div>
            <div className="mt-3 text-base text-muted-foreground">
              +2347047494586
            </div>
          </div>
        </div>
      </div>

      {/* Main contact panel: light grey background with form on left and image on right */}
      <div className="container mx-auto px-6 pb-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 rounded-[36px] bg-muted-foreground/10 p-10 md:grid-cols-2 md:p-14 lg:p-20">
          {/* Left: Testimonial + map (visual column) */}
          <aside className="order-2 flex flex-col justify-between gap-8 md:order-1">
            <div>
              <div className="mb-6">
                <p className="mb-4 text-sm font-medium text-muted-foreground">
                  // Contact
                </p>
                <h3 className="text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
                  The right system can turn messy operations into a clear path
                  for growth.
                </h3>
                <p className="mt-6 text-lg text-muted-foreground">
                  Share what you are building, what is slowing you down, and
                  what your team needs next. We will help you shape it into
                  something practical, scalable, and useful.
                </p>
              </div>

              <div className="mt-8 flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 overflow-hidden rounded-full">
                    <img
                      src="/assets/mbayaan.png"
                      alt="avatar"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    Reuben Adeyemi
                  </div>
                  <div className="text-xs text-muted-foreground">
                    CEO, DataLab
                  </div>
                </div>
              </div>

              <p className="mt-6 max-w-prose text-base text-muted-foreground">
                Artboard delivered the kind of clarity and creative excellence
                we have been searching for. Fast, focused, and fully aligned
                with our vision.
              </p>
            </div>

            <div className="mt-6">
              <p className="mb-4 text-base font-medium text-foreground">
                Most of our work is digital, but great partnerships start with
                real conversations. If you're nearby, feel free to swing by.
              </p>

              <div
                className="overflow-hidden rounded-lg border border-border/20 shadow-sm"
                style={{ width: 340, height: 340 }}
              >
                <iframe
                  title="office-map"
                  src="https://www.google.com/maps?q=Acre+Santa,+Ilorin,+Kwara+State,+Nigeria&output=embed"
                  className="h-full w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </aside>

          {/* Right: Detailed contact form */}
          <div className="order-1 md:order-2">
            <div className="mb-6">
              <p className="mb-3 text-sm font-medium text-muted-foreground">
                Get In Touch
              </p>
              <h2 className="text-3xl font-extrabold text-foreground">
                Start a conversation with Luxa
              </h2>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <Label
                  htmlFor="fullName"
                  className="text-sm font-medium text-foreground"
                >
                  Name
                </Label>
                <Input
                  id="fullName"
                  placeholder="Your full name"
                  className="mt-3 rounded-md border border-border/20 bg-background/50 px-4 py-3 placeholder:text-muted-foreground focus:border-brand-teal focus:ring-2 focus:ring-brand-teal"
                />
              </div>

              <div>
                <Label
                  htmlFor="emailForm"
                  className="text-sm font-medium text-foreground"
                >
                  Email
                </Label>
                <Input
                  id="emailForm"
                  type="email"
                  placeholder="you@company.com"
                  className="mt-3 rounded-md border border-border/20 bg-background/50 px-4 py-3 placeholder:text-muted-foreground focus:border-brand-teal focus:ring-2 focus:ring-brand-teal"
                />
              </div>

              <div>
                <Label
                  htmlFor="phone"
                  className="text-sm font-medium text-foreground"
                >
                  Phone
                </Label>
                <div className="mt-3 flex items-center gap-3">
                  <select
                    aria-label="country"
                    className="h-12 rounded-md border border-border/20 bg-background/50 px-3 text-sm text-muted-foreground"
                  >
                    <option value="us">🇺🇸 +1</option>
                    <option value="ng">🇳🇬 +234</option>
                    <option value="uk">🇬🇧 +44</option>
                  </select>
                  <Input
                    id="phone"
                    placeholder="123 456 7890"
                    className="flex-1 rounded-md border border-border/20 bg-background/50 px-4 py-3 placeholder:text-muted-foreground focus:border-brand-teal focus:ring-2 focus:ring-brand-teal"
                  />
                </div>
              </div>

              <div>
                <Label
                  htmlFor="company"
                  className="text-sm font-medium text-foreground"
                >
                  Company
                </Label>
                <Input
                  id="company"
                  placeholder="Your company name"
                  className="mt-3 rounded-md border border-border/20 bg-background/50 px-4 py-3 placeholder:text-muted-foreground focus:border-brand-teal focus:ring-2 focus:ring-brand-teal"
                />
              </div>

              <div>
                <Label
                  htmlFor="serviceType"
                  className="text-sm font-medium text-foreground"
                >
                  What do you need help with?
                </Label>
                <Select>
                  <SelectTrigger className="mt-3 rounded-md border border-border/20 bg-background/50 px-3 py-3 placeholder:text-muted-foreground focus:border-brand-teal focus:ring-2 focus:ring-brand-teal">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dashboard">
                      Custom Dashboard & Internal Systems
                    </SelectItem>
                    <SelectItem value="lms">LMS & Learning Platform</SelectItem>
                    <SelectItem value="mobile">
                      Mobile App Development
                    </SelectItem>
                    <SelectItem value="web">
                      Web Platform Development
                    </SelectItem>
                    <SelectItem value="design">
                      Branding & UI/UX Design
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label
                  htmlFor="budget"
                  className="text-sm font-medium text-foreground"
                >
                  Budget Range
                </Label>
                <Select>
                  <SelectTrigger className="mt-3 rounded-md border border-border/20 bg-background/50 px-3 py-3 placeholder:text-muted-foreground focus:border-brand-teal focus:ring-2 focus:ring-brand-teal">
                    <SelectValue placeholder="Select a budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3k-8k">$3,000 - $8,000</SelectItem>
                    <SelectItem value="8k-20k">$8,000 - $20,000</SelectItem>
                    <SelectItem value="20k+">$20,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label
                  htmlFor="projectDetails"
                  className="text-sm font-medium text-foreground"
                >
                  What do you need?
                </Label>
                <Textarea
                  id="projectDetails"
                  placeholder="Tell us about your current setup and what you are trying to achieve."
                  rows={6}
                  className="mt-3 resize-none rounded-md border border-border/20 bg-background/50 px-4 py-6 placeholder:text-muted-foreground focus:border-brand-teal focus:ring-2 focus:ring-brand-teal"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="mt-6 w-full rounded-[14px] bg-black py-5 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-2xl"
                >
                  Submit
                </button>
              </div>
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
