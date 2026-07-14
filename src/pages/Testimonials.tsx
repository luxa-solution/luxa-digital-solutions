import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Quote, Phone, Globe, Star, MessageSquare } from "lucide-react";
import { useEffect } from "react";

interface TestimonialItem {
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar: string;
  phone?: string;
  website?: string;
  accentColor: string;
}

const Testimonials = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const testimonialsList: TestimonialItem[] = [
    {
      quote:
        "It has been phenomenal working with LUXA Digital Solutions. As a graphic designer brand, it was decided that a landing page is needed to communicate my creative identity in the modern and professional lens. And of course, considering trust, effective communication and technical expertise, LUXA Digital Solutions stood next to none in my choose. And the team listened carefully to what I wanted, gave helpful suggestions, and delivered everything without hassle. The page looks clean, loads fast, and truly represents my work.\n\nI truly appreciate their commitment to excellence and highly recommend LUXA Digital Solutions to anyone looking for reliable and top-quality web development services.",
      author: "AL-MUWAHHID CONCEPT",
      position: "Graphic Designer",
      company: "Al-Muwahhid Concept",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      phone: "+234 703 757 4762",
      website: "almuwahhidconcept.com.ng",
      accentColor: "#12bbbb", // Teal Accent
    },
    {
      quote:
        "LUXA's custom dashboard has completely transformed our business operations. We can now monitor inventory, transaction processing speeds, and customer sales metrics in real-time. It allowed us to make data-driven decisions that have significantly improved our scalability and daily profitability.",
      author: "Abdulrahim",
      position: "CEO",
      company: "360Data Solutions",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      accentColor: "#e6b14b", // Gold Accent
    },
    {
      quote:
        "LUXA transformed our educational platform beyond our expectations. The new website has made it incredibly easy for students to register for our Islamic courses, and we've seen a remarkable increase in enrollment. The design perfectly reflects our institution's values while providing modern functionality.",
      author: "Sheikh Abdullah Rahman",
      position: "Academic Director",
      company: "Markazul Bayaan",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      accentColor: "#bb1212", // Coral Accent
    },
    {
      quote:
        "Our new website has become our most powerful marketing tool. The design perfectly captures our corporate brand essence, handles millions of page requests smoothly, and has significantly improved our sales lead generation qualities. Truly an industry-leading partner.",
      author: "David Rodriguez",
      position: "Managing Partner",
      company: "TechVentures Global",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      accentColor: "#10b981", // Emerald Accent
    },
  ];

  return (
    <div className="min-h-screen bg-brand-dark text-white dark:bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-dark pt-36 pb-20 dark:bg-black">
        <div className="absolute inset-0">
          <div className="absolute right-20 top-20 h-60 w-60 rounded-full bg-brand-teal/5 blur-[120px]"></div>
          <div className="absolute bottom-20 left-20 h-60 w-60 rounded-full bg-brand-coral/5 blur-[120px]"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 text-center max-w-4xl">
          <Badge
            variant="secondary"
            className="mb-6 border-brand-teal/20 bg-brand-teal/10 px-4 py-2 text-sm font-semibold text-brand-teal"
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            CLIENT TRUST
          </Badge>

          <h1 className="mb-6 text-4xl font-extrabold uppercase leading-tight tracking-tight sm:text-6xl md:text-7xl">
            CLIENT <span className="text-gradient-teal-gold">TESTIMONIALS</span>
          </h1>

          <p className="text-base text-gray-400 sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
            Read direct feedback from the founders, operators, and educators who run their daily systems using LUXA Digital Solutions.
          </p>
        </div>
      </section>

      {/* Testimonials List/Grid Section */}
      <section className="bg-brand-dark py-20 dark:bg-black border-t border-white/5">
        <div className="container mx-auto px-6 max-w-5xl space-y-12">
          {testimonialsList.map((test, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden rounded-[30px] border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent shadow-2xl backdrop-blur-md transition-all duration-300"
            >
              {/* Giant quote sign background */}
              <div className="absolute top-10 left-10 text-9xl font-serif text-white/5 pointer-events-none select-none">
                “
              </div>

              <div className="relative z-10 p-8 sm:p-12">
                <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
                  {/* User Profile Avatar */}
                  <img
                    src={test.avatar}
                    alt={test.author}
                    className="h-20 w-20 rounded-full object-cover border border-white/10 flex-shrink-0 shadow-lg"
                  />

                  {/* Feedback Text */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                          {test.author}
                        </h3>
                        <p
                          className="text-xs font-mono uppercase tracking-widest mt-1"
                          style={{ color: test.accentColor }}
                        >
                          {test.position} — {test.company}
                        </p>
                      </div>

                      {/* 5 Star Rating Indicator */}
                      <div className="flex items-center gap-1 text-brand-gold">
                        {[...Array(5)].map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className="h-4 w-4 fill-brand-gold text-brand-gold"
                          />
                        ))}
                      </div>
                    </div>

                    <blockquote className="text-base sm:text-lg leading-relaxed text-gray-300 whitespace-pre-line">
                      &quot;{test.quote}&quot;
                    </blockquote>
                  </div>
                </div>

                {/* Specific Contact Footer Strip (If present, e.g. for Al-Muwahhid) */}
                {(test.phone || test.website) && (
                  <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center gap-6 justify-center text-xs font-mono tracking-wider text-gray-400">
                    {test.phone && (
                      <a
                        href={`tel:${test.phone}`}
                        className="flex items-center gap-2 hover:text-brand-teal transition-colors"
                      >
                        <Phone className="h-4 w-4 text-brand-teal" />
                        <span>{test.phone}</span>
                      </a>
                    )}
                    {test.website && (
                      <a
                        href={`https://${test.website}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 hover:text-brand-teal transition-colors"
                      >
                        <Globe className="h-4 w-4 text-brand-teal" />
                        <span className="underline">{test.website}</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
