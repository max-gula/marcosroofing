import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  Clock,
  Calendar,
  Share2,
  Phone,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { BLOG_POSTS } from "../data/blog";
import { BUSINESS_INFO } from "../data/business";
import { Breadcrumbs } from "../components/Breadcrumbs";

export const BlogPostPage: React.FC<{ onOpenQuoteModal: () => void }> = ({ onOpenQuoteModal }) => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] pb-24">
      {/* Header */}
      <div className="bg-[#141414] border-b border-[#1F1F1F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.category, href: "/blog" },
              { label: post.title }
            ]}
          />
        </div>
      </div>

      {/* Article Hero */}
      <header className="py-12 lg:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center gap-3 text-xs text-[#8A8A8A]">
          <span className="font-bold uppercase tracking-wider text-[#D7192A]">
            {post.category}
          </span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
          <span>·</span>
          <span>{post.date}</span>
        </div>

        <h1 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-[#F5F5F5] leading-tight">
          {post.title}
        </h1>

        <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
          {post.excerpt}
        </p>

        {/* Feature Banner Image */}
        <div className="aspect-16/9 rounded-3xl overflow-hidden border border-[#1F1F1F] shadow-2xl bg-neutral-900 mt-6">
          <img
            src={post.heroImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      {/* Article Body + Table of Contents */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Table of Contents Box */}
          <aside className="lg:col-span-4 bg-[#141414] border border-[#1F1F1F] rounded-2xl p-6 lg:sticky lg:top-24 space-y-3">
            <div className="font-heading font-bold text-xs uppercase tracking-wider text-[#D7192A]">
              Table of Contents
            </div>
            <nav className="space-y-2 text-xs">
              {post.tableOfContents.map((toc) => (
                <a
                  key={toc.id}
                  href={`#${toc.id}`}
                  className="block text-[#8A8A8A] hover:text-[#F5F5F5] transition-colors py-1 hover:translate-x-1"
                >
                  {toc.text}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main Body */}
          <article className="lg:col-span-8 space-y-10 text-neutral-300 leading-relaxed text-sm">
            {post.content.map((sec) => (
              <section key={sec.id} id={sec.id} className="space-y-4 scroll-mt-28">
                <h2 className="font-heading font-black text-2xl uppercase tracking-tight text-[#F5F5F5]">
                  {sec.heading}
                </h2>
                {sec.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
                {sec.bulletPoints && (
                  <ul className="space-y-2 pt-2 border-l-2 border-[#D7192A] pl-4">
                    {sec.bulletPoints.map((bp, bidx) => (
                      <li key={bidx} className="text-xs text-neutral-300 leading-relaxed">
                        • {bp}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* In-Article CTA Box */}
            <div className="p-8 bg-[#141414] border border-[#D7192A]/40 rounded-3xl space-y-4 my-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#D7192A]" />
              <div className="text-xs font-bold uppercase tracking-widest text-[#D7192A]">
                Melbourne Roof Assessment
              </div>
              <h3 className="font-heading font-black text-2xl uppercase text-[#F5F5F5]">
                Worried About Your Roof's Condition?
              </h3>
              <p className="text-xs text-[#8A8A8A] leading-relaxed">
                Marco and Arthur offer free, comprehensive on-site inspections across Melbourne's Northern and Eastern suburbs. We'll show you high-res roof photos and give you straightforward advice with zero pressure.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={onOpenQuoteModal}
                  className="px-6 py-3 bg-[#D7192A] hover:bg-[#B01020] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-red-950/40"
                >
                  Book Free On-Site Inspection
                </button>
                <a
                  href={BUSINESS_INFO.phonePrimary.tel}
                  className="px-5 py-3 bg-[#0A0A0A] border border-[#1F1F1F] text-[#F5F5F5] text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D7192A]" />
                  <span>Call Miri: {BUSINESS_INFO.phonePrimary.display}</span>
                </a>
              </div>
            </div>
          </article>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="pt-16 mt-16 border-t border-[#1F1F1F] space-y-6">
            <h3 className="font-heading font-black text-2xl uppercase text-[#F5F5F5]">
              Related Roofing Guides
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.slug}
                  className="p-6 bg-[#141414] border border-[#1F1F1F] rounded-2xl space-y-3 card-hover-glow"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D7192A]">
                    {rel.category}
                  </span>
                  <Link
                    to={`/blog/${rel.slug}`}
                    className="font-heading font-bold text-base text-[#F5F5F5] hover:text-[#D7192A] block leading-snug"
                  >
                    {rel.title}
                  </Link>
                  <p className="text-xs text-[#8A8A8A] line-clamp-2">
                    {rel.excerpt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
