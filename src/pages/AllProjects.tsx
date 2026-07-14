import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { projects } from "@/data/projects";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  Calendar,
  ExternalLink,
  Eye,
  Grid3X3,
  List,
  Search,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllProjects = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = [
    "All",
    "Business Dashboard",
    "Educational Platform",
    "E-Commerce Platform",
    "Islamic Education",
    "Online Education",
    "Creative Portfolio",
    "Environmental Tech",
    "Brand Identity"
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tech.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase()),
        );

      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-brand-dark text-white dark:bg-black">
      <Navigation />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 py-16 md:px-6 md:py-24">
          <div className="absolute inset-0">
            <div className="absolute right-20 top-20 h-50 w-50 rounded-full bg-brand-teal/5 blur-[120px]"></div>
            <div className="absolute bottom-20 left-20 h-40 w-40 rounded-full bg-brand-coral/5 blur-[120px]"></div>
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
                PORTFOLIO DIRECTORY
              </Badge>

              <h1 className="mb-6 text-4xl font-extrabold md:text-6xl uppercase leading-tight tracking-tight">
                OUR <span className="text-gradient-teal-gold">PROJECTS</span>
              </h1>

              <p className="mb-8 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Explore our comprehensive finder directory of operational systems, business dashboards, and educational platforms built for growth.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center">
                  <TrendingUp className="mr-2 h-4 w-4 text-brand-teal" />
                  <span>{projects.length}+ Projects Completed</span>
                </div>
                <div className="flex items-center">
                  <Award className="mr-2 h-4 w-4 text-brand-gold" />
                  <span>Resilient Architecture Standards</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="border-y border-white/5 bg-brand-dark/30 py-12 backdrop-blur-md">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
              {/* Search Bar */}
              <div className="relative max-w-md w-full">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-500" />
                <Input
                  placeholder="Search by keyword or technology..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="h-12 border-white/10 bg-white/5 pl-12 text-white placeholder-gray-500 rounded-full focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/15 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-brand-teal text-black shadow-lg shadow-brand-teal/20"
                        : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2 border border-white/10 rounded-full p-1 bg-white/5">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-full transition-all ${viewMode === "grid" ? "bg-brand-teal text-black" : "text-gray-400 hover:text-white"}`}
                  aria-label="Grid view"
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-full transition-all ${viewMode === "list" ? "bg-brand-teal text-black" : "text-gray-400 hover:text-white"}`}
                  aria-label="List view"
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-8 text-center text-xs font-mono uppercase tracking-widest text-gray-500">
              Showing {filteredProjects.length} of {projects.length} projects
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </div>
          </div>
        </section>

        {/* Projects Grid/List */}
        <section className="bg-brand-dark py-20 dark:bg-black">
          <div className="container mx-auto px-6">
            {filteredProjects.length === 0 ? (
              <div className="py-20 text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/5 border border-white/10">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="mb-4 text-2xl font-bold">No projects found</h3>
                <p className="mb-8 text-gray-400 max-w-sm mx-auto">
                  Try adjusting your search terms or selecting a different category filter.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  className="rounded-full bg-brand-teal text-black px-6 py-2 hover:bg-brand-teal/90"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                    : "space-y-6"
                }
              >
                {filteredProjects.map((project, index) => (
                  <Card
                    key={project.id}
                    className={`group relative overflow-hidden rounded-[30px] border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent shadow-xl transition-all duration-500 hover:border-white/10 hover:shadow-2xl ${
                      viewMode === "list" ? "flex flex-col md:flex-row items-stretch" : "flex flex-col justify-between"
                    }`}
                  >
                    {/* Image Container */}
                    <div
                      className={`relative overflow-hidden bg-white/[0.01] ${
                        viewMode === "list" ? "h-64 w-full md:h-auto md:w-80 flex-shrink-0" : "aspect-[4/3] w-full"
                      }`}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90"></div>

                      {/* Category Badge overlay */}
                      <div className="absolute left-6 top-6 z-10">
                        <Badge
                          variant="secondary"
                          className="border-white/10 bg-black/60 px-3.5 py-1 text-xs font-semibold text-white backdrop-blur-md"
                        >
                          {project.category}
                        </Badge>
                      </div>

                      {/* Action Button */}
                      <div className="absolute bottom-6 right-6 z-10 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-teal text-black shadow-lg">
                          <Eye className="h-5 w-5" />
                        </div>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 p-8 flex flex-col justify-between">
                      <div>
                        {/* Project Header */}
                        <div className="mb-4 flex items-start justify-between">
                          <h3 className="mr-4 text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-brand-teal sm:text-2xl">
                            {project.title}
                          </h3>
                          <ExternalLink className="h-5 w-5 flex-shrink-0 text-gray-500 group-hover:text-brand-teal transition-colors" />
                        </div>

                        {/* Project Description */}
                        <p className="mb-6 text-sm leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors">
                          {project.description}
                        </p>

                        {/* Project Meta */}
                        <div className="mb-6 flex flex-wrap gap-4 text-xs font-mono text-gray-500 uppercase tracking-widest">
                          <div className="flex items-center">
                            <Calendar className="mr-2 h-4 w-4 text-brand-teal" />
                            <span>{project.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="mr-2 h-4 w-4 text-brand-gold" />
                            <span>{project.teamSize} developers</span>
                          </div>
                        </div>

                        {/* Key Results Grid */}
                        {project.results && project.results.length > 0 && (
                          <div className="mb-6 border-t border-white/5 pt-6">
                            <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-400">
                              Validated Results:
                            </h4>
                            <div className="grid grid-cols-2 gap-3">
                              {project.results
                                .slice(0, 2)
                                .map((result, resultIndex) => (
                                  <div
                                    key={resultIndex}
                                    className="rounded-xl border border-white/5 bg-white/[0.01] p-3 text-center"
                                  >
                                    <div className="text-base font-black text-brand-teal">
                                      {result.value}
                                    </div>
                                    <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">
                                      {result.metric}
                                    </div>
                                  </div>
                                ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Tech Stack and Button */}
                      <div>
                        <div className="mb-6 flex flex-wrap gap-2">
                          {project.tech.slice(0, 4).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="rounded-full bg-white/5 border border-white/10 px-3.5 py-1 text-xs font-semibold text-gray-300"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 4 && (
                            <span className="rounded-full bg-white/5 border border-white/10 px-3.5 py-1 text-xs font-semibold text-gray-500">
                              +{project.tech.length - 4} more
                            </span>
                          )}
                        </div>

                        <Button
                          onClick={() => navigate(`/project/${project.id}`)}
                          className="w-full rounded-full bg-white/5 hover:bg-brand-teal hover:text-black border border-white/10 hover:border-brand-teal text-white font-semibold transition-all duration-300"
                        >
                          View Case Study Details
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-brand-dark py-24 text-white dark:bg-black border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-extrabold uppercase sm:text-5xl tracking-tight">
                OUR PLATFORM <span className="text-gradient-teal-gold">IMPACT</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-gray-400 leading-relaxed">
                Empirical metrics detailing how our system engineering drives conversion, adoption, and scalability.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="rounded-3xl border border-white/5 bg-white/[0.01] p-8 text-center backdrop-blur-md shadow-xl">
                <div className="mb-2 text-4xl font-black text-brand-teal sm:text-5xl">
                  {projects.length}+
                </div>
                <div className="font-semibold text-sm uppercase tracking-wider text-white">Projects Delivered</div>
                <p className="text-xs text-gray-500 mt-2">Custom business platforms deployed</p>
              </div>

              <div className="rounded-3xl border border-white/5 bg-white/[0.01] p-8 text-center backdrop-blur-md shadow-xl">
                <div className="mb-2 text-4xl font-black text-brand-gold sm:text-5xl">98%</div>
                <div className="font-semibold text-sm uppercase tracking-wider text-white">Client Retention</div>
                <p className="text-xs text-gray-500 mt-2">Continuous growth iterations</p>
              </div>

              <div className="rounded-3xl border border-white/5 bg-white/[0.01] p-8 text-center backdrop-blur-md shadow-xl">
                <div className="mb-2 text-4xl font-black text-brand-coral sm:text-5xl">99.9%</div>
                <div className="font-semibold text-sm uppercase tracking-wider text-white">Platform Uptime</div>
                <p className="text-xs text-gray-500 mt-2">Zero downtime architecture</p>
              </div>

              <div className="rounded-3xl border border-white/5 bg-white/[0.01] p-8 text-center backdrop-blur-md shadow-xl">
                <div className="mb-2 text-4xl font-black text-brand-teal sm:text-5xl">3.5x</div>
                <div className="font-semibold text-sm uppercase tracking-wider text-white">Client ROI</div>
                <p className="text-xs text-gray-500 mt-2">Operational throughput growth</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-brand-dark py-24 text-white dark:bg-black border-t border-white/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-extrabold uppercase sm:text-5xl leading-tight">
              Ready to Join Our
              <span className="block text-gradient-teal-gold mt-2">Success Stories?</span>
            </h2>
            <p className="mx-auto mt-6 mb-10 max-w-xl text-base text-gray-400 sm:text-lg leading-relaxed">
              Let's map out how we can engineer a similar high-performance digital system for your business operations.
            </p>
            <div className="flex flex-col justify-center items-center gap-4 sm:flex-row">
              <Button
                onClick={() => navigate("/pricing")}
                className="text-brand-teal-foreground pulse-glow rounded-full bg-brand-teal px-8 py-6 text-base font-semibold transition-all hover:scale-105 hover:bg-brand-teal/90 shadow-xl shadow-brand-teal/20 w-full sm:w-auto"
              >
                Start Your Project
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate("/contact")}
                className="rounded-full border-white/15 hover:border-brand-teal/50 hover:bg-brand-teal/5 px-8 py-6 text-base font-semibold text-white transition-all hover:scale-105 w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AllProjects;
