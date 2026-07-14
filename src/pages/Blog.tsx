import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { blogs } from "@/data/blogs";
import {
  ArrowRight,
  Calendar,
  Clock,
  Search,
  TrendingUp,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    "all",
    ...Array.from(new Set(blogs.map((b) => b.category))),
  ];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory = filter === "all" || blog.category === filter;
    const matchesSearch =
      searchQuery === "" ||
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  const latestBlog = filteredBlogs[0];

  return (
    <div className="min-h-screen bg-brand-dark text-white dark:bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-dark pb-20 pt-32 dark:bg-black">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -left-40 top-0 h-[500px] w-[500px] animate-pulse rounded-full bg-brand-teal/20 blur-[100px]"></div>
          <div className="absolute -right-40 top-40 h-[500px] w-[500px] animate-pulse rounded-full bg-brand-coral/20 blur-[100px] delay-700"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge
              variant="secondary"
              className="mb-6 border-brand-teal/20 bg-brand-teal/10 px-4 py-2 text-sm font-semibold text-brand-teal"
            >
              <TrendingUp className="mr-2 h-4 w-4" />
              LUXA INSIGHTS
            </Badge>

            <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight sm:text-7xl lg:text-8xl">
              OUR <span className="text-gradient-teal-gold">JOURNAL</span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg text-gray-400 sm:text-xl leading-relaxed">
              Explore custom systems engineering, dashboard UX, operational workflows, and tech scaling strategies to accelerate your business.
            </p>

            {/* Search Bar */}
            <div className="mx-auto mt-12 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                <Input
                  type="text"
                  placeholder="Search articles by keyword, topic, or tag..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-14 border-white/10 bg-white/5 pl-12 text-white placeholder-gray-500 rounded-full focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/15 focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-20 z-30 border-b border-white/5 bg-brand-dark/90 py-6 backdrop-blur-xl dark:bg-black/90">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                  filter === category
                    ? "bg-brand-teal text-black shadow-lg shadow-brand-teal/20"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="mt-4 text-center text-xs font-mono text-gray-500 uppercase tracking-widest">
            {filteredBlogs.length} article{filteredBlogs.length !== 1 ? "s" : ""} found
          </div>
        </div>
      </section>

      {/* Featured Article - Hero */}
      {latestBlog && (
        <section className="bg-brand-dark py-16 dark:bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-center gap-2">
              <div className="h-px flex-1 bg-white/5"></div>
              <Badge className="bg-brand-teal text-black font-semibold">LATEST INSIGHT</Badge>
              <div className="h-px flex-1 bg-white/5"></div>
            </div>

            <div
              className="group relative cursor-pointer overflow-hidden rounded-[30px] border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent shadow-2xl transition-all duration-500 hover:border-white/10"
              onClick={() => navigate(`/blog/${latestBlog.slug}`)}
            >
              <div className="grid gap-0 lg:grid-cols-2">
                {/* Image Side */}
                <div className="relative h-64 overflow-hidden lg:h-auto bg-white/[0.01]">
                  <img
                    src={latestBlog.coverImage}
                    alt={latestBlog.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent lg:bg-gradient-to-r lg:from-black/80 lg:to-transparent"></div>

                  {/* Category Badge */}
                  <Badge className="absolute left-6 top-6 bg-brand-teal text-black font-semibold">
                    {latestBlog.category}
                  </Badge>
                </div>

                {/* Content Side */}
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <h2 className="mb-4 text-2xl font-bold leading-snug transition-colors duration-300 group-hover:text-brand-teal sm:text-3xl lg:text-4xl">
                    {latestBlog.title}
                  </h2>

                  <p className="mb-6 text-sm sm:text-base text-gray-400 leading-relaxed">
                    {latestBlog.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="mb-6 flex flex-wrap gap-4 text-xs font-mono text-gray-500 uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-brand-teal" />
                      <span>{latestBlog.author.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-brand-gold" />
                      <span>
                        {new Date(latestBlog.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          },
                        )}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-brand-coral" />
                      <span>{latestBlog.readTime}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {latestBlog.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-brand-teal font-semibold uppercase tracking-wider text-xs">
                    <span>Read Article</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="bg-brand-dark py-20 dark:bg-black border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredBlogs.length > 1 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {filteredBlogs.slice(1).map((blog, index) => (
                <div
                  key={blog.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-[30px] border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent shadow-xl transition-all duration-500 hover:border-white/10 hover:-translate-y-1"
                  onClick={() => navigate(`/blog/${blog.slug}`)}
                >
                  <div>
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-white/[0.01]">
                      <img
                        src={blog.coverImage}
                        alt={blog.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                      {/* Category Badge */}
                      <Badge className="absolute left-4 top-4 bg-brand-teal text-black font-semibold">
                        {blog.category}
                      </Badge>
                    </div>

                    {/* Content inside card */}
                    <div className="p-6">
                      <div className="mb-3 flex flex-wrap gap-4 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3 w-3 text-brand-teal" />
                          <span>
                            {new Date(blog.publishedAt).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                              },
                            )}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3 w-3 text-brand-gold" />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>

                      <h3 className="mb-3 text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-brand-teal">
                        {blog.title}
                      </h3>

                      <p className="line-clamp-3 text-xs leading-relaxed text-gray-400">
                        {blog.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* CTA Footer */}
                  <div className="border-t border-white/5 p-6 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-teal group-hover:text-white transition-colors">
                      Read Article
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-brand-teal transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            filteredBlogs.length === 0 && (
              <div className="py-20 text-center text-gray-500">
                No matching articles found.
              </div>
            )
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
