import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Clock,
  Calendar,
  ArrowRight,
  BookOpen
} from "lucide-react";
import { BLOG_POSTS } from "../data/blog";
import { Breadcrumbs } from "../components/Breadcrumbs";

export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Restoration", "Repairs", "Rebedding", "Painting", "Maintenance"];

  const filteredPosts = selectedCategory === "All"
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] pb-24">
      {/* Header */}
      <div className="bg-[#141414] border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Roofing Advice & Guides" }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="py-14 lg:py-20 bg-gradient-to-b from-[#141414] to-[#0A0A0A] border-b border-[#1F1F1F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1F1F1F] rounded-full text-xs font-semibold text-[#D7192A]">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Melbourne Homeowner Guides</span>
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-[#F5F5F5]">
            Roofing Knowledge & Advice
          </h1>

          <p className="text-sm sm:text-base text-[#8A8A8A] max-w-xl mx-auto">
            Practical tips from Melbourne tradies on diagnosing leaks, avoiding door-to-door scams, and extending your tile roof's lifespan.
          </p>

          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? "bg-[#D7192A] text-white"
                    : "bg-[#141414] border border-[#1F1F1F] text-[#8A8A8A] hover:text-[#F5F5F5]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-[#141414] border border-[#1F1F1F] rounded-2xl overflow-hidden card-hover-glow flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-16/10 overflow-hidden bg-neutral-900">
                  <img
                    src={post.heroImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0A0A0A]/85 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-bold text-[#D7192A] border border-[#1F1F1F] uppercase">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 space-y-2.5">
                  <div className="flex items-center gap-3 text-xs text-[#8A8A8A]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="font-heading font-bold text-lg text-[#F5F5F5] group-hover:text-[#D7192A] transition-colors block leading-snug"
                  >
                    {post.title}
                  </Link>

                  <p className="text-xs text-[#8A8A8A] line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#1F1F1F] mt-4 flex items-center justify-between text-xs">
                <span className="text-[#8A8A8A]">Marco's Roofing Guide</span>
                <Link
                  to={`/blog/${post.slug}`}
                  className="font-bold text-[#D7192A] group-hover:underline flex items-center gap-1 uppercase tracking-wider"
                >
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
