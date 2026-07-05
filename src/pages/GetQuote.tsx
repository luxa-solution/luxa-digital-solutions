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
  DollarSign,
  Calendar,
  MessageSquare,
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
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-dark relative overflow-hidden px-6 py-24">
          <div className="absolute inset-0">
            <div className="absolute right-20 top-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl"></div>
            <div className="absolute bottom-20 left-20 h-32 w-32 rounded-full bg-primary/5 blur-3xl"></div>
          </div>

          <div className="container relative z-10 mx-auto">
            <div className="mb-8">
              <Button
                variant="ghost"
                onClick={() => navigate("/")}
                className="transition-all-spring hover-lift group mb-6 text-muted-foreground hover:text-primary"
              >
                <ArrowLeft className="mr-3 h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
                Back to Home
              </Button>
            </div>

            <div className="mx-auto max-w-4xl text-center">
              <Badge
                variant="secondary"
                className="mb-6 border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary"
              >
                Get Your Quote
              </Badge>

              <h1 className="mb-6 text-4xl font-bold md:text-6xl">
                Let's Design a
                <span className="relative inline-block">
                  <span className="relative z-10 px-4 py-2 font-bold text-white">
                    Better System
                  </span>
                  <div className="absolute inset-0 -skew-x-12 transform rounded-lg bg-brand-teal"></div>
                </span>
              </h1>

              <p className="mb-8 text-xl leading-relaxed text-muted-foreground">
                Tell us about your current setup, the challenge you are solving,
                and the kind of platform you need. We will help you shape a
                clear path forward.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <div className="flex items-center text-muted-foreground">
                  <Clock className="mr-2 h-5 w-5" />
                  <span>Response within 24 hours</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  <span>Free consultation included</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="bg-background px-6 py-24">
          <div className="container mx-auto">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold">
                Clear
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Project Ranges
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
                We price based on scope, complexity, integrations, and the
                business outcome you want to achieve.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {pricingTiers.map((tier, index) => (
                <Card
                  key={tier.name}
                  className={`hover-lift transition-all-spring group relative overflow-hidden p-8 ${
                    tier.popular
                      ? "bg-gradient-accent border-primary/40"
                      : "border-border/30 bg-card/30"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 transform">
                      <Badge className="bg-primary px-4 py-2 font-semibold text-black">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <div className="text-center">
                    <h3 className="mb-4 text-2xl font-bold">{tier.name}</h3>
                    <div className="mb-2 text-3xl font-bold text-primary">
                      {tier.price}
                    </div>
                    <p className="mb-6 text-muted-foreground">
                      {tier.description}
                    </p>

                    <ul className="mb-8 space-y-3 text-left">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full ${
                        tier.popular
                          ? "bg-gradient-primary hover:shadow-cyan"
                          : "border-primary/30 bg-primary/10 text-primary hover:bg-primary/20"
                      } transition-all-spring hover-lift`}
                    >
                      Choose {tier.name}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section className="bg-gradient-to-b from-background to-card/20 px-6 py-24">
          <div className="container mx-auto">
            <div className="mx-auto max-w-4xl">
              <div className="mb-16 text-center">
                <h2 className="mb-6 text-4xl font-bold">
                  Get Your{" "}
                  <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    Custom Quote
                  </span>
                </h2>
                <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
                  Fill out the form below and we'll provide you with a detailed
                  quote for your project.
                </p>
              </div>

              <Card className="border-border/30 bg-card/30 p-8 backdrop-blur-sm lg:p-12">
                <form className="space-y-8">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label
                        htmlFor="firstName"
                        className="text-sm font-medium text-foreground"
                      >
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        required
                        className="transition-all-spring h-12 border-border/50 hover:border-primary/40 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="lastName"
                        className="text-sm font-medium text-foreground"
                      >
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        required
                        className="transition-all-spring h-12 border-border/50 hover:border-primary/40 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="transition-all-spring h-12 border-border/50 hover:border-primary/40 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="text-sm font-medium text-foreground"
                      >
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        placeholder="+2347047494586"
                        className="transition-all-spring h-12 border-border/50 hover:border-primary/40 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="company"
                      className="text-sm font-medium text-foreground"
                    >
                      Company
                    </Label>
                    <Input
                      id="company"
                      placeholder="Your Company"
                      className="transition-all-spring h-12 border-border/50 hover:border-primary/40 focus:border-primary"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label
                        htmlFor="service"
                        className="text-sm font-medium text-foreground"
                      >
                        Primary Service *
                      </Label>
                      <Select>
                        <SelectTrigger className="transition-all-spring h-12 border-border/50 hover:border-primary/40 focus:border-primary">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
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
                      <Label
                        htmlFor="budget"
                        className="text-sm font-medium text-foreground"
                      >
                        Budget Range *
                      </Label>
                      <Select>
                        <SelectTrigger className="transition-all-spring h-12 border-border/50 hover:border-primary/40 focus:border-primary">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5k-15k">
                            $5,000 - $15,000
                          </SelectItem>
                          <SelectItem value="15k-50k">
                            $15,000 - $50,000
                          </SelectItem>
                          <SelectItem value="50k-100k">
                            $50,000 - $100,000
                          </SelectItem>
                          <SelectItem value="100k+">$100,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="timeline"
                      className="text-sm font-medium text-foreground"
                    >
                      Project Timeline
                    </Label>
                    <Select>
                      <SelectTrigger className="transition-all-spring h-12 border-border/50 hover:border-primary/40 focus:border-primary">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">
                          As soon as possible
                        </SelectItem>
                        <SelectItem value="1-2-months">1-2 months</SelectItem>
                        <SelectItem value="3-6-months">3-6 months</SelectItem>
                        <SelectItem value="6-months+">6+ months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="description"
                      className="text-sm font-medium text-foreground"
                    >
                      Project Description *
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your project requirements, goals, and any specific features you need..."
                      rows={6}
                      required
                      className="transition-all-spring resize-none border-border/50 hover:border-primary/40 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="additional"
                      className="text-sm font-medium text-foreground"
                    >
                      Additional Requirements
                    </Label>
                    <Textarea
                      id="additional"
                      placeholder="Any additional information, questions, or special requirements..."
                      rows={4}
                      className="transition-all-spring resize-none border-border/50 hover:border-primary/40 focus:border-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-gradient-primary hover:shadow-cyan transition-all-spring hover-lift group relative w-full overflow-hidden py-6 text-xl font-semibold"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    <span className="relative z-10 flex items-center justify-center">
                      Get My Quote
                      <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-background px-6 py-24">
          <div className="container mx-auto">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  LUXA?
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
                We deliver exceptional results with transparent pricing and
                unmatched quality.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="bg-gradient-accent mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl">
                  <Calculator className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-4 text-xl font-bold">Transparent Pricing</h3>
                <p className="text-muted-foreground">
                  No hidden costs. Get a detailed breakdown of your project
                  costs upfront.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-accent mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-4 text-xl font-bold">Fast Response</h3>
                <p className="text-muted-foreground">
                  Receive your custom quote within 24 hours of submitting your
                  request.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-accent mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-4 text-xl font-bold">Quality Guarantee</h3>
                <p className="text-muted-foreground">
                  We stand behind our work with quality guarantees and ongoing
                  support.
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
