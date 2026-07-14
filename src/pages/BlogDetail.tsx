import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogs } from "@/data/blogs";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Facebook,
  Linkedin,
  Share2,
  Twitter,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [showShareMenu, setShowShareMenu] = useState(false);

  const blog = blogs.find((b) => b.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-brand-dark text-white dark:bg-black">
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/5 border border-white/10">
            <Clock className="h-8 w-8 text-brand-teal" />
          </div>
          <h1 className="mb-4 text-4xl font-bold">Blog Post Not Found</h1>
          <Button
            onClick={() => navigate("/blog")}
            className="rounded-full bg-brand-teal text-black px-6 py-2"
          >
            Back to Journal
          </Button>
        </div>
      </div>
    );
  }

  // Get related articles
  const relatedBlogs = blogs
    .filter(
      (b) =>
        b.id !== blog.id &&
        (b.category === blog.category ||
          b.tags.some((tag) => blog.tags.includes(tag))),
    )
    .slice(0, 3);

  const shareUrl = window.location.href;
  const shareText = blog.title;

  return (
    <div className="min-h-screen bg-brand-dark text-white dark:bg-black">
      <Navigation />

      {/* Hero Section with Cover Image */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden bg-brand-charcoal">
        {/* Cover Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="h-full w-full object-cover opacity-40 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent dark:from-black"></div>
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto flex h-full items-end px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl w-full">
            {/* Back Button */}
            <button
              onClick={() => navigate("/blog")}
              className="mb-6 flex items-center gap-2 text-white/80 transition-colors hover:text-brand-teal"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm font-semibold uppercase tracking-wider">Back to Journal</span>
            </button>

            {/* Category Badge */}
            <Badge className="mb-4 bg-brand-teal text-black font-semibold">
              {blog.category}
            </Badge>

            {/* Title */}
            <h1 className="mb-6 text-3xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
              {blog.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <img
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  className="h-12 w-12 rounded-full border border-white/10 object-cover shadow-sm"
                />
                <div>
                  <div className="font-bold text-white">
                    {blog.author.name}
                  </div>
                  <div className="text-xs text-gray-500 font-mono uppercase tracking-widest">
                    {blog.author.role}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gray-400">
                <Calendar className="h-4 w-4 text-brand-teal" />
                <span>
                  {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gray-400">
                <Clock className="h-4 w-4 text-brand-gold" />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-16 bg-brand-dark dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* Share & Progress Sidebar (Desktop) */}
            <div className="sticky top-24 float-left -ml-20 mr-8 hidden xl:block">
              <div className="flex flex-col gap-4">
                {/* Share Button */}
                <div className="relative">
                  <button
                    onClick={() => setShowShareMenu(!showShareMenu)}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white shadow-sm transition-all hover:border-brand-teal hover:bg-brand-teal hover:text-black hover:shadow-md"
                  >
                    <Share2 className="h-5 w-5" />
                  </button>

                  {/* Share Menu */}
                  {showShareMenu && (
                    <div className="absolute left-full top-0 ml-2 flex gap-2 rounded-full border border-white/10 bg-brand-charcoal p-2 shadow-lg">
                      <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full transition-all text-white hover:bg-brand-teal hover:text-black"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full transition-all text-white hover:bg-brand-teal hover:text-black"
                      >
                        <Facebook className="h-4 w-4" />
                      </a>
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full transition-all text-white hover:bg-brand-teal hover:text-black"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Article Content */}
            <article className="prose prose-lg prose-slate dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-4xl prose-h2:mb-4 prose-h2:mt-12 prose-h2:text-3xl prose-h3:mb-3 prose-h3:mt-8 prose-h3:text-2xl prose-p:leading-relaxed prose-p:text-gray-300 prose-a:text-brand-teal prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:rounded prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm prose-pre:bg-white/5 prose-pre:text-white prose-ul:my-6 prose-li:my-2 max-w-none">
              <ReactMarkdown>{blog.content}</ReactMarkdown>
            </article>

            {/* Tags */}
            <div className="mt-12 border-t border-white/5 pt-8">
              <div className="mb-4 text-xs font-mono tracking-widest text-gray-500 uppercase">
                TAGGED IN
              </div>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => navigate("/blog")}
                    className="rounded-full border border-white/10 bg-white/5 px-4.5 py-2 text-xs font-semibold text-gray-300 transition-all hover:border-brand-teal hover:bg-brand-teal hover:text-black"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Author Bio Card */}
            <div className="mt-12 rounded-[30px] border border-white/5 bg-gradient-to-r from-white/[0.02] to-transparent p-8 md:p-10 shadow-xl backdrop-blur-md">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <img
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  className="h-20 w-20 rounded-full border border-white/10 object-cover shadow-sm"
                />
                <div className="flex-1">
                  <h3 className="mb-1 text-xl font-bold text-white">
                    {blog.author.name}
                  </h3>
                  <p className="mb-3 text-xs text-brand-teal font-mono uppercase tracking-widest">{blog.author.role}</p>
                  <p className="text-sm leading-relaxed text-gray-400">
                    An expert in software systems, database engineering, and custom UX workflows, helping growing teams implement clarify, control, and digital scale.
                  </p>
                </div>
              </div>
            </div>

            {/* Share Section (Mobile) */}
            <div className="mt-12 border-t border-white/5 pt-8 xl:hidden">
              <div className="mb-4 text-xs font-mono tracking-widest text-gray-500 uppercase">
                SHARE THIS ARTICLE
              </div>
              <div className="flex gap-3">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:bg-brand-teal hover:text-black hover:border-brand-teal"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:bg-brand-teal hover:text-black hover:border-brand-teal"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:bg-brand-teal hover:text-black hover:border-brand-teal"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <section className="border-t border-white/5 bg-brand-dark py-20 dark:bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
                CONTINUE <span className="text-gradient-teal-gold">READING</span>
              </h2>
              <p className="mt-3 text-sm text-gray-400 uppercase tracking-widest font-mono">
                Explore related insights and system trends
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {relatedBlogs.map((relatedBlog) => (
                <div
                  key={relatedBlog.id}
                  className="group cursor-pointer flex flex-col justify-between overflow-hidden rounded-[30px] border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent shadow-xl transition-all duration-500 hover:border-white/10"
                  onClick={() => navigate(`/blog/${relatedBlog.slug}`)}
                >
                  <div>
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-white/[0.01]">
                      <img
                        src={relatedBlog.coverImage}
                        alt={relatedBlog.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <Badge className="absolute left-4 top-4 bg-brand-teal text-black font-semibold">
                        {relatedBlog.category}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="mb-3 line-clamp-2 text-lg font-bold text-white transition-colors duration-300 group-hover:text-brand-teal leading-snug">
                        {relatedBlog.title}
                      </h3>
                      <p className="line-clamp-2 text-xs leading-relaxed text-gray-400">
                        {relatedBlog.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-white/5 p-6 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-teal group-hover:text-white transition-colors">
                      Read Article
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-brand-teal transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogDetail;
