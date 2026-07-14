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
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  ArrowRight,
  Calendar as CalendarIcon,
  Clock,
  CheckCircle,
  Video,
  Phone,
  MapPin,
  Users,
  Target,
  Award,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";

const ScheduleConsultation = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [consultationType, setConsultationType] = useState("");

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
  ];

  const consultationTypes = [
    {
      type: "video",
      title: "Video Call",
      description: "Face-to-face consultation via Zoom or Google Meet",
      icon: Video,
      duration: "30 minutes",
      benefits: ["Screen sharing", "Personal interaction", "Recorded session"],
      accentColor: "#12bbbb", // Brand Teal
    },
    {
      type: "phone",
      title: "Phone Call",
      description: "Traditional phone consultation for quick discussions",
      icon: Phone,
      duration: "20 minutes",
      benefits: ["Quick setup", "No technical requirements", "Flexible timing"],
      accentColor: "#e6b14b", // Brand Gold
    },
    {
      type: "in-person",
      title: "In-Person Meeting",
      description: "Meet at our office for a comprehensive discussion",
      icon: MapPin,
      duration: "45 minutes",
      benefits: ["Full attention", "Document review", "Team introduction"],
      accentColor: "#bb1212", // Brand Coral
    },
  ];

  const benefits = [
    "Free 30-minute consultation",
    "No obligation to proceed",
    "Direct expert engineering advice",
    "Custom project system roadmap",
    "Preliminary scope estimate",
    "Timeline milestone planning",
  ];

  return (
    <div className="min-h-screen bg-brand-dark text-white dark:bg-black">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 px-6 bg-brand-dark dark:bg-black relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-40 h-40 bg-brand-teal/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-32 h-32 bg-brand-coral/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto relative z-10">
            <div className="mb-8">
              <Button
                variant="ghost"
                onClick={() => navigate("/")}
                className="text-gray-400 hover:text-white mb-6 transition-all duration-300 hover:bg-white/5"
              >
                <ArrowLeft className="mr-3 w-5 h-5" />
                Back to Home
              </Button>
            </div>

            <div className="text-center max-w-4xl mx-auto">
              <Badge
                variant="secondary"
                className="bg-brand-teal/10 text-brand-teal border-brand-teal/20 mb-6 px-4 py-2 text-sm font-semibold"
              >
                FREE CONSULTATION
              </Badge>

              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 uppercase tracking-tight leading-tight">
                SCHEDULE YOUR
                <span className="block text-gradient-teal-gold mt-2">FREE CONSULTATION</span>
              </h1>

              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                Book a free 30-minute system diagnosis consultation with our engineers to discuss your operational bottlenecks and get custom advice.
              </p>

              <div className="flex flex-wrap gap-6 justify-center items-center text-xs font-mono uppercase tracking-widest text-gray-500">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-brand-teal" />
                  <span>30 minutes free</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-brand-gold" />
                  <span>No obligation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-24 px-6 bg-brand-dark dark:bg-black border-t border-white/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
                Choose Your
                <span className="text-gradient-teal-gold"> Consultation Type</span>
              </h2>
              <p className="text-sm text-gray-400 max-w-md mx-auto mt-4 leading-relaxed">
                Select the diagnostic communication method that works best for your schedule.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultationTypes.map((type) => {
                const Icon = type.icon;
                const isSelected = consultationType === type.type;
                return (
                  <Card
                    key={type.type}
                    className={`p-8 relative overflow-hidden group cursor-pointer rounded-[30px] border transition-all duration-300 ${
                      isSelected
                        ? "border-brand-teal bg-white/[0.04]"
                        : "border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent hover:border-white/10"
                    }`}
                    onClick={() => setConsultationType(type.type)}
                  >
                    <div className="text-center flex flex-col justify-between h-full">
                      <div>
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 border"
                          style={{
                            borderColor: `${type.accentColor}30`,
                            backgroundColor: `${type.accentColor}10`,
                          }}
                        >
                          <Icon className="w-8 h-8" style={{ color: type.accentColor }} />
                        </div>

                        <h3 className="text-xl font-bold mb-3 text-white uppercase tracking-tight">{type.title}</h3>
                        <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                          {type.description}
                        </p>
                        <div className="text-base font-bold mb-6" style={{ color: type.accentColor }}>
                          {type.duration}
                        </div>

                        <ul className="space-y-3 text-left mb-8 border-t border-white/5 pt-6">
                          {type.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start text-xs text-gray-300">
                              <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0 text-brand-teal mt-0.5" />
                              <span className="leading-relaxed">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button
                        className={`w-full rounded-full transition-all duration-300 font-semibold ${
                          isSelected
                            ? "bg-brand-teal text-black hover:bg-brand-teal/95"
                            : "border-white/15 bg-white/5 text-white hover:bg-white/10"
                        }`}
                      >
                        {isSelected ? "Selected" : "Choose Option"}
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-6 bg-brand-dark dark:bg-black border-t border-white/5">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
                What You&apos;ll
                <span className="text-gradient-teal-gold"> Get</span>
              </h2>
              <p className="text-sm text-gray-400 max-w-md mx-auto mt-4 leading-relaxed">
                Our free diagnostic call provides concrete technical value and actionable roadmap insights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="rounded-2xl border border-white/5 bg-white/[0.01] p-6 text-center shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-5 h-5 text-brand-teal" />
                  </div>
                  <h3 className="text-sm font-semibold text-white uppercase tracking-tight">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scheduling Form */}
        <section className="py-24 px-6 bg-brand-dark dark:bg-black border-t border-white/5">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
                  Pick Your
                  <span className="text-gradient-teal-gold"> Perfect Time</span>
                </h2>
                <p className="text-sm text-gray-400 max-w-md mx-auto mt-4 leading-relaxed">
                  Select a date and time slot that fits your operational availability.
                </p>
              </div>

              <Card className="rounded-[30px] border border-white/5 bg-gradient-to-b from-white/[0.01] to-transparent p-8 md:p-12 shadow-2xl backdrop-blur-md">
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-xs font-bold uppercase tracking-wider text-gray-300">
                        Preferred Date *
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={`w-full h-12 justify-start text-left font-normal border-white/10 bg-white/5 rounded-full text-white hover:bg-white/10 ${
                              !date && "text-gray-500"
                            }`}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4 text-brand-teal" />
                            {date ? (
                              format(date, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 border-white/10 bg-brand-charcoal text-white" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            disabled={(date) => date < new Date()}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs font-bold uppercase tracking-wider text-gray-300">
                        Preferred Time *
                      </Label>
                      <Select
                        value={selectedTime}
                        onValueChange={setSelectedTime}
                      >
                        <SelectTrigger className="h-12 border-white/10 bg-white/5 text-white rounded-full focus:border-brand-teal focus:ring-brand-teal/15">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent className="border-white/10 bg-brand-charcoal text-white">
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType" className="text-xs font-bold uppercase tracking-wider text-gray-300">
                      Project Type
                    </Label>
                    <Select>
                      <SelectTrigger className="h-12 border-white/10 bg-white/5 text-white rounded-full focus:border-brand-teal focus:ring-brand-teal/15">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent className="border-white/10 bg-brand-charcoal text-white">
                        <SelectItem value="web-development">Web Development</SelectItem>
                        <SelectItem value="mobile-apps">Mobile Applications</SelectItem>
                        <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                        <SelectItem value="consulting">Digital Consulting</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-xs font-bold uppercase tracking-wider text-gray-300">
                      Project Details
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Briefly describe your requirements or what you'd like to discuss during the diagnostic call..."
                      rows={4}
                      className="resize-none rounded-[20px] border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-brand-teal focus:ring-brand-teal/15"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={!date || !selectedTime || !consultationType}
                    className="text-brand-teal-foreground pulse-glow w-full rounded-full bg-brand-teal py-6 text-lg font-semibold hover:bg-brand-teal/90 shadow-xl shadow-brand-teal/20 transition-transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Schedule Diagnostic Call
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>

        {/* Diagnostic Call Core Values */}
        <section className="bg-brand-dark py-24 text-white dark:bg-black border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
                Diagnostic
                <span className="text-gradient-teal-gold"> Standards</span>
              </h2>
              <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-400">
                All consultations are direct sessions focused entirely on mapping actionable technical outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto gap-8">
              <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-8 text-center backdrop-blur-md shadow-xl">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-white/10">
                  <Users className="h-6 w-6 text-brand-teal" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-white uppercase tracking-tight">Expert Engineers</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  Speak directly with lead technical developers who shape architectural blueprints every day.
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-8 text-center backdrop-blur-md shadow-xl">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-white/10">
                  <Target className="h-6 w-6 text-brand-gold" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-white uppercase tracking-tight">Focused Scope</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  We don't sell templates. We diagnose operational blockages and suggest specialized code modifications.
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-8 text-center backdrop-blur-md shadow-xl">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-white/10">
                  <Award className="h-6 w-6 text-brand-coral" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-white uppercase tracking-tight">Predictable Results</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  At the end of our call, you'll receive a conceptual wireframe scope outlining your workflow solution.
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

export default ScheduleConsultation;
