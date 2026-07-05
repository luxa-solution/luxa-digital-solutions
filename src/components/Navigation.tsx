import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ThemeToggle } from "./theme-toggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Pages that use a dark hero/header and should show a dark navbar initially
  const darkHeroRoutes = ["/about", "/contact", "/case-studies", "/pricing"];
  const isHeroRoute = darkHeroRoutes.includes(location.pathname);

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
    { name: "Portfolio", href: "#portfolio", action: "scroll" },
    { name: "Services", href: "#services", action: "scroll" },
    { name: "Blog", href: "/blog", action: "navigate" },
    { name: "Pricing", href: "/pricing", action: "navigate" },
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
        // We're on homepage, scroll directly
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      } else {
        // We're on a different page, navigate to homepage with hash
        navigate(`/${item.href}`, { replace: false });
      }
    }
  };

  // Dynamic class helpers
  const navBgClass = scrolled
    ? "border-b border-border/30 bg-background text-foreground"
    : isHeroRoute
      ? "bg-[#071a29] text-white"
      : "bg-transparent";

  const linkTextClass =
    scrolled || !isHeroRoute
      ? "text-muted-foreground hover:text-foreground"
      : "text-white hover:text-white/90";

  const iconButtonText =
    scrolled || !isHeroRoute ? "text-foreground" : "text-white";

  return (
    <>
      {/* Modern Navigation Bar */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-200 ${navBgClass}`}
      >
        <div className="container mx-auto my-2 px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between sm:h-20">
            <div className="flex items-center justify-start">
              {/* Modern Logo */}
              <div
                className="group relative cursor-pointer"
                onClick={() => navigate("/")}
              >
                <div
                  className={`relative overflow-hidden rounded-full border border-brand-coral/20 ${isHeroRoute && !scrolled ? "bg-transparent" : "bg-black"} p-2 backdrop-blur-sm transition-all duration-500 hover:border-brand-coral/40 hover:shadow-lg hover:shadow-brand-coral/20 sm:p-4`}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-coral/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                  <img
                    src="/luxa.png"
                    alt="LUXA"
                    className={`relative z-10 h-8 w-auto drop-shadow-sm filter transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-md sm:h-10 ${isHeroRoute && !scrolled ? "invert-[0.98]" : ""}`}
                  />
                  <div className="absolute -right-1 -top-1 h-3 w-3 animate-pulse rounded-full bg-brand-coral/30"></div>
                  <div
                    className="absolute -bottom-1 -left-1 h-2 w-2 animate-pulse rounded-full bg-brand-gold/20"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden items-center justify-center lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                  className={`${linkTextClass} px-5 py-2 text-lg font-medium transition-colors`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA Button and Theme Toggle */}
            <div className="hidden items-center gap-4 lg:flex">
              {/* <ThemeToggle /> */}
              <Button
                onClick={() => navigate("/pricing")}
                className="text-brand-teal-foreground rounded-full bg-brand-teal px-6 py-2 text-sm font-medium hover:bg-brand-teal/90"
              >
                Book a Consultation
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="mobile-toggle ml-4 lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className={`p-1 transition-colors hover:text-brand-coral ${iconButtonText}`}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 transform transition-all duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        <nav className="relative ml-auto h-full w-full max-w-xs border-l border-border/30 bg-background shadow-xl">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-border/30 p-4">
              <div
                className="group relative cursor-pointer"
                onClick={() => {
                  setIsOpen(false);
                  navigate("/");
                }}
              >
                {/* Mobile logo placeholder - kept intentionally small */}
                <div className="relative overflow-hidden rounded-xl p-2">
                  <img
                    src="/lovable-uploads/ba542bb9-91f7-434d-bdec-fc554c9339ac.png"
                    alt="LUXA"
                    className="relative z-10 h-7 w-auto drop-shadow-sm filter transition-all duration-500 group-hover:scale-110 sm:h-8"
                  />
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="p-1 text-foreground transition-colors hover:text-brand-coral"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
              <div className="flex flex-col space-y-2 px-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item);
                    }}
                    className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="mt-4 border-t border-border/30 pt-4">
                  <div className="mb-4 flex justify-center">
                    <ThemeToggle />
                  </div>
                  <Button
                    onClick={() => {
                      setIsOpen(false);
                      navigate("/pricing");
                    }}
                    className="text-brand-teal-foreground w-full rounded-full bg-brand-teal px-6 py-2 text-sm font-medium hover:bg-brand-teal/90"
                  >
                    Book a Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
