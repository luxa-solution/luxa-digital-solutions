import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  ArrowRight,
  Calculator,
  Clock,
  CheckCircle,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const GetQuote = () => {
  const navigate = useNavigate();

  const pricingTiers = [
    {
      name: "Small Systems",
      price: "$3,000 - $8,000",
      description: "For focused dashboards, portals, or lightweight platforms",
      features: [
        "Custom dashboard or internal tool",
        "Straightforward workflow design",
        "Clear user experience",
        "Practical launch plan",
      ],
      accentColor: "#12bbbb", // Brand Teal
      popular: false,
    },
    {
      name: "Medium Systems",
      price: "$8,000 - $20,000",
      description:
        "For growing teams that need a more complete operating platform",
      features: [
        "Custom web platform or LMS",
        "Workflow automation and integrations",
        "Structured admin experience",
        "Ongoing support planning",
      ],
      accentColor: "#e6b14b", // Brand Gold
      popular: true,
    },
    {
      name: "Large Platforms",
      price: "$20,000+",
      description: "For ambitious products and complex operational systems",
      features: [
        "Scalable architecture",
        "Advanced integrations",
        "Multi-user workflows",
        "Longer-term product support",
      ],
      accentColor: "#bb1212", // Brand Coral
      popular: false,
    },
  ];

  const services = [
    "Web Development",
    "Mobile Applications",
    "UI/UX Design",
    "Digital Consulting",
    "Performance Optimization",
    "Security & Compliance",
  ];

  return (
    <div className="min-h-screen bg-brand-dark text-white dark:bg-black">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 py-24 bg-brand-dark dark:bg-black">
          <div className="absolute inset-0">
            <div className="absolute right-20 top-20 h-40 w-40 rounded-full bg-brand-teal/5 blur-3xl"></div>
            <div className="absolute bottom-20 left-20 h-32 w-32 rounded-full bg-brand-coral/5 blur-3xl"></div>
          </div>

          <div className="container relative z-10 mx-auto">
            <div className="mb-8">
              <Button
                variant="ghost"
                onClick={() => navigate("/")}
                className="transition-all duration-300 hover:bg-white/5 text-gray-400 hover:text-white"
              >
                <ArrowLeft className="mr-3 h-5 w-5" />
                Back to Home
              </Button>
            </div>

            <div className="mx-auto max-w-4xl text-center">
              <Badge
                variant="secondary"
                className="mb-6 border-brand-teal/20 bg-brand-teal/10 px-4 py-2 text-sm font-semibold text-brand-teal"
              >
                GET YOUR QUOTE
              </Badge>

              <h1 className="mb-6 text-4xl font-extrabold md:text-6xl uppercase tracking-tight leading-tight">
                LET&apos;S DESIGN A
                <span className="block text-gradient-teal-gold">BETTER SYSTEM</span>
              </h1>

              <p className="mb-8 text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Tell us about your current setup, the bottlenecks you are solving,
                and the kind of platform you need. We will help you shape a clear path forward.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 uppercase tracking-widest font-mono">
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4 text-brand-teal" />
                  <span>Response within 24 hours</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-brand-gold" />
                  <span>Free consultation included</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers Ranges */}
        <section className="bg-brand-dark py-24 dark:bg-black border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
                Clear Project
                <span className="text-gradient-teal-gold"> Ranges</span>
              </h2>
              <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-400">
                We price based on operational milestones, complexity, integrations, and the business outcome you want to achieve.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              {pricingTiers.map((tier) => (
                <Card
                  key={tier.name}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-[30px] border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent p-8 shadow-2xl backdrop-blur-md glow-card hover:-translate-y-1 transition-all duration-300"
                >
                  {tier.popular && (
                    <div className="absolute right-6 top-6">
                      <span className="rounded-full bg-brand-gold/10 border border-brand-gold/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-gold">
                        Popular
                      </span>
                    </div>
                  )}

                  <div>
                    <div className="mb-4 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: tier.accentColor, boxShadow: `0 0 8px ${tier.accentColor}` }} />
                      <h3 className="text-xl font-bold uppercase tracking-tight text-white">{tier.name}</h3>
                    </div>

                    <div className="mb-6 text-3xl font-black text-white">
                      {tier.price}
                    </div>

                    <p className="mb-6 text-xs leading-relaxed text-gray-400">
                      {tier.description}
                    </p>

                    <ul className="mb-8 space-y-3.5 border-t border-white/5 pt-6">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="mr-3 h-4 w-4 flex-shrink-0 text-brand-teal mt-0.5" />
                          <span className="text-xs text-gray-300 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    onClick={() => {
                      const formSection = document.getElementById("quote-form-section");
                      if (formSection) {
                        formSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="w-full rounded-full border border-white/10 hover:border-brand-teal text-white bg-white/5 hover:bg-brand-teal hover:text-black font-semibold transition-all duration-300"
                  >
                    Select {tier.name}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section id="quote-form-section" className="bg-brand-dark py-24 dark:bg-black border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-4xl">
              <div className="mb-16 text-center">
                <h2 className="mb-4 text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
                  Get Your
                  <span className="text-gradient-teal-gold"> Custom Estimate</span>
                </h2>
                <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-400">
                  Fill out the structural form details below and we&apos;ll configure a system breakdown roadmap.
                </p>
              </div>

              <Card className="rounded-[30px] border border-white/5 bg-gradient-to-b from-white/[0.01] to-transparent p-8 md:p-12 shadow-2xl backdrop-blur-md">
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-xs font-bold uppercase tracking-wider text-gray-300">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        required
                        className="h-12 border-white/10 bg-white/5 text-white placeholder-gray-500 rounded-full focus:border-brand-teal focus:ring-brand-teal/15"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-xs font-bold uppercase tracking-wider text-gray-300">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        required
                        className="h-12 border-white/10 bg-white/5 text-white placeholder-gray-500 rounded-full focus:border-brand-teal focus:ring-brand-teal/15"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-gray-300">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="h-12 border-white/10 bg-white/5 text-white placeholder-gray-500 rounded-full focus:border-brand-teal focus:ring-brand-teal/15"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-gray-300">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        placeholder="+1 (555) 000-0000"
                        className="h-12 border-white/10 bg-white/5 text-white placeholder-gray-500 rounded-full focus:border-brand-teal focus:ring-brand-teal/15"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-xs font-bold uppercase tracking-wider text-gray-300">
                      Company
                    </Label>
                    <Input
                      id="company"
                      placeholder="Your Company Name"
                      className="h-12 border-white/10 bg-white/5 text-white placeholder-gray-500 rounded-full focus:border-brand-teal focus:ring-brand-teal/15"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-xs font-bold uppercase tracking-wider text-gray-300">
                        Primary Service Needed *
                      </Label>
                      <Select>
                        <SelectTrigger className="h-12 border-white/10 bg-white/5 text-white rounded-full focus:border-brand-teal focus:ring-brand-teal/15">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="border-white/10 bg-brand-charcoal text-white">
                          {services.map((service) => (
                            <SelectItem
                              key={service}
                              value={service.toLowerCase().replace(/\s+/g, "-")}
                            >
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-xs font-bold uppercase tracking-wider text-gray-300">
                        Budget Range *
                      </Label>
                      <Select>
                        <SelectTrigger className="h-12 border-white/10 bg-white/5 text-white rounded-full focus:border-brand-teal focus:ring-brand-teal/15">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent className="border-white/10 bg-brand-charcoal text-white">
                          <SelectItem value="3k-8k">$3,000 - $8,000</SelectItem>
                          <SelectItem value="8k-20k">$8,000 - $20,000</SelectItem>
                          <SelectItem value="20k-50k">$20,000 - $50,000</SelectItem>
                          <SelectItem value="50k+">$50,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline" className="text-xs font-bold uppercase tracking-wider text-gray-300">
                      Project Timeline
                    </Label>
                    <Select>
                      <SelectTrigger className="h-12 border-white/10 bg-white/5 text-white rounded-full focus:border-brand-teal focus:ring-brand-teal/15">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent className="border-white/10 bg-brand-charcoal text-white">
                        <SelectItem value="asap">As soon as possible</SelectItem>
                        <SelectItem value="1-2-months">1-2 months</SelectItem>
                        <SelectItem value="3-6-months">3-6 months</SelectItem>
                        <SelectItem value="6-months+">6+ months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-xs font-bold uppercase tracking-wider text-gray-300">
                      Project Description *
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your operational requirements, user roles, database needs, and key dashboard features..."
                      rows={6}
                      required
                      className="resize-none rounded-[20px] border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-brand-teal focus:ring-brand-teal/15"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="text-brand-teal-foreground pulse-glow w-full rounded-full bg-brand-teal py-6 text-lg font-semibold hover:bg-brand-teal/90 shadow-xl shadow-brand-teal/20 transition-transform hover:scale-105"
                  >
                    Submit Estimate Request
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-brand-dark py-24 text-white dark:bg-black border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
                Why Choose
                <span className="text-gradient-teal-gold"> LUXA?</span>
              </h2>
              <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-400">
                We deliver custom technical engineering with transparent milestone deliverables and long-term scaling roadmap support.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-8 text-center backdrop-blur-md shadow-xl">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-white/10">
                  <Calculator className="h-6 w-6 text-brand-teal" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-white uppercase tracking-tight">Transparent Scope</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  Get a complete visual flow roadmap and milestone sprint pricing breakdown before development begins.
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-8 text-center backdrop-blur-md shadow-xl">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-white/10">
                  <Clock className="h-6 w-6 text-brand-gold" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-white uppercase tracking-tight">Responsive Feedback</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  We review your submission details and return a diagnosed technical proposal breakdown within 24 hours.
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-8 text-center backdrop-blur-md shadow-xl">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-white/10">
                  <Star className="h-6 w-6 text-brand-coral" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-white uppercase tracking-tight">Architectural Standard</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  We build scalable code bases with optimal speeds, resilient security layers, and responsive structures.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GetQuote;
