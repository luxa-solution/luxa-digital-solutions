import { Button } from "@/components/ui/button";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Journal/Blog", href: "/blog" },
    { name: "System Pricing", href: "/pricing" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Get Quote", href: "/get-quote" },
  ];

  const services = [
    "Custom Dashboards",
    "LMS & Learning Portals",
    "Mobile Applications",
    "SaaS Business Tools",
    "Branding & UI/UX Design",
    "System Architecture Design",
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/luxa-digital-solutions/",
      icon: FaLinkedin,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/16yU24EfZE/",
      icon: FaFacebook,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/luxa__agency?igsh=MWFtY25paWFpdzZheQ==",
      icon: FaInstagram,
    },
    {
      name: "WhatsApp",
      href: "https://whatsapp.com/channel/0029Vb6lnPZ17EmpPBfjY60N",
      icon: FaWhatsapp,
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-brand-dark text-white dark:bg-black border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute left-8 top-12 h-[300px] w-[300px] rounded-full bg-brand-teal/10 blur-[100px]"></div>
        <div className="absolute right-8 bottom-12 h-[300px] w-[300px] rounded-full bg-brand-gold/10 blur-[100px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 py-24 lg:px-8">
        {/* Top CTA Banner */}
        <div className="mb-20">
          <div className="relative overflow-hidden rounded-[30px] border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent p-10 md:p-14 shadow-2xl backdrop-blur-md">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-teal/10 blur-3xl"></div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div>
                <p className="mb-2 text-xs font-mono tracking-widest text-brand-teal uppercase">
                  // Start a Partnership
                </p>
                <h3 className="text-2xl font-extrabold leading-tight uppercase tracking-tight sm:text-3xl lg:text-4xl max-w-2xl">
                  Ready to build a digital system that fits your business?
                </h3>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button
                  onClick={() => navigate("/contact")}
                  className="rounded-full bg-brand-teal text-black font-semibold hover:bg-brand-teal/90 shadow-md shadow-brand-teal/20 transition-transform hover:scale-105 px-8 py-6 w-full sm:w-auto"
                >
                  Book a Consultation
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate("/all-projects")}
                  className="rounded-full border-white/15 px-8 py-6 text-black hover:text-white hover:bg-white/10 transition-transform hover:scale-105 w-full sm:w-auto"
                >
                  View Our Work
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Main Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 border-b border-white/5 pb-16">
          {/* Column 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div
              className="flex items-center gap-1.5 cursor-pointer select-none group"
              onClick={() => navigate("/")}
            >
              <span className="text-3xl font-black uppercase tracking-wider text-gradient-teal-gold font-sans">
                luxa
              </span>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-coral opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-coral"></span>
              </span>
            </div>

            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              We design and engineer bespoke software systems, automation pipelines, and custom web portals to help scaling companies clear manual bottlenecks.
            </p>

            {/* Social Grid */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal hover:bg-brand-teal hover:text-black shadow-lg"
                    aria-label={social.name}
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-gray-500 uppercase">
              // Navigation
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(link.href);
                    }}
                    className="text-sm text-gray-400 hover:text-brand-teal transition-colors font-semibold"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Capabilities (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-gray-500 uppercase">
              // Capabilities
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service} className="text-sm text-gray-400 hover:text-brand-teal transition-colors select-none font-semibold">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-gray-500 uppercase">
              // Direct Line
            </h4>
            <ul className="space-y-3.5 text-sm text-gray-400">
              <li>
                <span className="block text-[10px] uppercase font-mono tracking-widest text-gray-500">Phone lines</span>
                <a href="tel:+2348089287065" className="hover:text-brand-teal transition-colors font-semibold">
                  +234 808 928 7065
                </a>
                <span className="block text-xs text-gray-500">Kwara Office Support</span>
              </li>
              <li>
                <span className="block text-[10px] uppercase font-mono tracking-widest text-gray-500">Direct Email</span>
                <a href="mailto:info@luxasolution.com" className="hover:text-brand-teal transition-colors font-semibold">
                  info@luxasolution.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-6 text-xs text-gray-500 font-mono uppercase tracking-widest md:flex-row md:items-center">
          <div>
            © {new Date().getFullYear()} LUXA Digital Solutions. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a className="hover:text-brand-teal transition-colors cursor-pointer">Privacy Policy</a>
            <a className="hover:text-brand-teal transition-colors cursor-pointer">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          onClick={scrollToTop}
          className="shadow-xl transition-all duration-300 hover:scale-110 group h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-brand-teal text-black hover:bg-brand-teal hover:shadow-brand-teal/20"
        >
          <FiArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 sm:h-6 sm:w-6" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
