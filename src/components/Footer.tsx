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
    { name: "Home", href: "#home", action: "scroll" },
    { name: "Services", href: "#services", action: "scroll" },
    { name: "Portfolio", href: "#portfolio", action: "scroll" },
    { name: "Blog", href: "/blog", action: "navigate" },
    { name: "About", href: "/about", action: "navigate" },
    { name: "Contact", href: "/contact", action: "navigate" },
  ];

  const handleQuickLinkClick = (link: { href: string; action: string }) => {
    if (link.action === "navigate") {
      navigate(link.href);
    } else {
      const element = document.querySelector(link.href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  const services = [
    "Web Development",
    "Mobile Applications",
    "UI/UX Design",
    "Digital Consulting",
    "Performance Optimization",
    "Security & Compliance",
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
    <footer className="relative overflow-hidden bg-brand-dark text-white">
      {/* Background decorative elements (subtle) */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute left-8 top-12 h-24 w-24 rounded-full bg-brand-gold/5 blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 py-28">
        {/* Top CTA band */}
        <div className="mb-12 md:mb-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-teal/20 via-brand-teal/10 to-transparent ring-1 ring-white/10">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-teal/20 blur-3xl"></div>
            <div className="flex flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center md:gap-10 md:px-12 md:py-14">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/60">
                  Let’s build something bold
                </p>
                <h3 className="text-2xl font-extrabold leading-tight md:text-3xl lg:text-4xl">
                  Ready to craft award‑winning experiences?
                </h3>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  onClick={() => navigate("/contact")}
                  className="rounded-full bg-brand-teal px-6 py-6 text-base font-semibold text-black hover:bg-brand-teal/90"
                >
                  Start Your Project
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate("/all-projects")}
                  className="rounded-full border-white/20 px-6 py-6 text-base text-white hover:bg-white/10"
                >
                  View Our Work
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main two-column layout: Left (brand), Right (socials) */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8">
          {/* Left: Big Brand / Description */}
          <div className="flex flex-col justify-between md:col-span-1">
            <div>
              <div className="flex items-center gap-4">
                <img
                  src="/luxa.png"
                  alt="LUXA Digital Solutions"
                  className="h-12 w-auto"
                />
                <span className="ml-2 text-2xl font-extrabold">
                  LUXA Digital Solutions
                </span>
              </div>

              <p className="mt-10 max-w-md text-lg leading-relaxed text-muted-foreground">
                LUXA Digital Solutions helps ambitious brands refine their
                vision, grow their digital presence, and drive measurable
                results.
              </p>
            </div>

            <div className="mt-12 text-sm text-muted-foreground">
              Powered by LUXA
            </div>
          </div>

          {/* Right: Socials only, prominent */}
          <div className="md:col-span-1">
            <div className="flex h-full flex-col items-start justify-between gap-8 md:items-end">
              <div className="w-full max-w-md md:text-right">
                <h4 className="mb-4 text-sm font-semibold text-white">
                  Connect
                </h4>
                <div className="flex flex-wrap items-center gap-4 md:justify-end">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-brand-teal hover:bg-brand-teal hover:text-white"
                        aria-label={social.name}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom legal bar */}
        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-white/10 pt-6 text-sm text-muted-foreground md:flex-row md:items-center">
          <div>
            © {new Date().getFullYear()} LUXA Digital Solutions. All rights
            reserved.
          </div>
          <div className="flex items-center gap-6">
            <a className="hover:text-white">Privacy Policy</a>
            <a className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button - keep existing style */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          onClick={scrollToTop}
          className="shadow-elegant hover:shadow-cyan transition-all-spring hover-lift group fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full bg-brand-teal/90 text-black hover:bg-brand-teal sm:bottom-8 sm:right-8 sm:h-14 sm:w-14"
        >
          <FiArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 sm:h-6 sm:w-6" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
