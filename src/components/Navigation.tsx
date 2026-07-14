import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        !target.closest(".mobile-menu") &&
        !target.closest(".mobile-toggle")
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { name: "About", href: "/about", action: "navigate" },
    { name: "Portfolio", href: "portfolio", action: "scroll" },
    { name: "Services", href: "services", action: "scroll" },
    { name: "Blog", href: "/blog", action: "navigate" },
    { name: "Pricing", href: "/pricing", action: "navigate" },
    { name: "Reviews", href: "/testimonials", action: "navigate" },
    { name: "Contact", href: "/contact", action: "navigate" },
  ];

  const handleNavClick = (item: { href: string; action: string }) => {
    setIsOpen(false);

    if (item.action === "navigate") {
      navigate(item.href);
    } else {
      // For scroll actions, check if we're on the homepage
      const isHomePage =
        location.pathname === "/" || location.pathname === "/index";

      if (isHomePage) {
        const element = document.getElementById(item.href);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      } else {
        // Navigate home and then scroll
        navigate(`/#${item.href}`);
      }
    }
  };

  return (
    <>
      {/* Floating Pill Navigation Bar */}
      <nav className="fixed left-0 right-0 top-0 z-50 w-full transition-all duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6">
          <div
            className={`w-full rounded-full border border-white/10 bg-black/60 text-white shadow-2xl backdrop-blur-xl transition-all duration-300 px-6 sm:px-8 py-3.5 flex items-center justify-between ${
              scrolled ? "shadow-brand-teal/5 bg-black/80 py-3" : ""
            }`}
          >
            {/* Beautiful Text-Based Logo */}
            <div
              className="flex items-center gap-1.5 cursor-pointer select-none group"
              onClick={() => navigate("/")}
            >
              <span className="text-2xl font-black uppercase tracking-wider text-gradient-teal-gold font-sans transition-all duration-300 group-hover:scale-105">
                luxa
              </span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-coral opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-coral"></span>
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden items-center justify-center gap-1 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                  className="px-4.5 py-2 text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-brand-teal transition-all duration-300 hover:scale-105"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Desktop Action button */}
            <div className="hidden items-center gap-4 lg:flex">
              <Button
                onClick={() => navigate("/pricing")}
                className="text-brand-teal-foreground pulse-glow rounded-full bg-brand-teal px-6 py-2.5 text-xs uppercase tracking-widest font-black transition-all hover:scale-105 hover:bg-brand-teal/90 shadow-md shadow-brand-teal/20"
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Toggle Button */}
            <div className="mobile-toggle lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-1 text-gray-300 hover:text-brand-teal transition-colors"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Mobile Drawer */}
      <div
        className={`fixed inset-y-4 right-4 z-40 w-72 rounded-[30px] border border-white/10 bg-black/90 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 lg:hidden flex flex-col justify-between mobile-menu ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-[120%] opacity-0"
        }`}
      >
        <div>
          {/* Header inside Drawer */}
          <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
            <div
              className="flex items-center gap-1.5 cursor-pointer select-none"
              onClick={() => {
                setIsOpen(false);
                navigate("/");
              }}
            >
              <span className="text-xl font-black uppercase tracking-wider text-gradient-teal-gold">
                luxa
              </span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-coral opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-coral"></span>
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-gray-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Links List */}
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item);
                }}
                className="rounded-full px-5 py-3 text-sm font-bold uppercase tracking-wider text-gray-400 hover:bg-white/5 hover:text-brand-teal transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Footer inside Drawer */}
        <div className="border-t border-white/5 pt-6 mt-6">
          <Button
            onClick={() => {
              setIsOpen(false);
              navigate("/pricing");
            }}
            className="text-brand-teal-foreground w-full rounded-full bg-brand-teal py-3 text-xs uppercase tracking-widest font-black hover:bg-brand-teal/90 shadow-md"
          >
            Get Quote
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
