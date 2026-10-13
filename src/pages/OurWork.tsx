import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  X,
  MapPin,
  Calendar,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { PROJECTS, Project } from "../data/projects";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { BeforeAfterSlider } from "../components/BeforeAfterSlider";

export const OurWorkPage: React.FC<{ onOpenQuoteModal: () => void }> = ({ onOpenQuoteModal }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ["All", "Restoration", "Repairs", "Painting", "Rebedding", "Solar"];

  const filteredProjects = selectedFilter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedFilter);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] pb-24">
      {/* Header */}
      <div className="bg-[#141414] border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Our Work & Projects" }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="py-14 lg:py-20 bg-gradient-to-b from-[#141414] to-[#0A0A0A] border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1F1F1F] rounded-full text-xs font-semibold text-[#D7192A]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Melbourne Northern & Eastern Suburbs Portfolio</span>
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-[#F5F5F5]">
            Real Work. Real Transformations.
          </h1>

          <p className="text-sm sm:text-base text-[#8A8A8A] max-w-2xl mx-auto">
            Browse our completed tile roof restorations, emergency leak repairs, and ridge rebedding projects across Bundoora, Doncaster, Mill Park, Greensborough, and beyond.
          </p>

          {/* Filter Pills / Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedFilter === cat
                    ? "bg-[#D7192A] text-white shadow-lg shadow-red-950/40"
                    : "bg-[#141414] border border-[#1F1F1F] text-[#8A8A8A] hover:text-[#F5F5F5]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#141414] border border-[#1F1F1F] rounded-2xl overflow-hidden card-hover-glow cursor-pointer group flex flex-col justify-between"
              onClick={() => setActiveProject(project)}
            >
              <div>
                <div className="relative aspect-16/10 overflow-hidden bg-neutral-900">
                  <img
                    src={project.afterImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0A0A0A]/85 backdrop-blur-md px-2.5 py-1 rounded text-xs font-semibold text-white border border-[#1F1F1F] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#D7192A]" />
                    <span>{project.suburb} VIC</span>
                  </div>

                  <div className="absolute bottom-3 right-3 bg-[#D7192A] text-white text-[11px] font-bold px-2 py-0.5 rounded uppercase">
                    {project.category}
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <div className="text-[11px] font-semibold text-[#8A8A8A]">
                    {project.roofType} · {project.yearBuilt}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#F5F5F5] group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#8A8A8A] line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#1F1F1F] mt-4 flex items-center justify-between text-xs text-[#8A8A8A]">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {project.completionTime}
                </span>
                <span className="font-bold text-[#D7192A] group-hover:underline flex items-center gap-1">
                  View Case Study
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Lightbox Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-md"
            onClick={() => setActiveProject(null)}
          />

          <div className="flex min-h-full items-center justify-center p-4">
            <div className="relative bg-[#0A0A0A] border border-[#1F1F1F] rounded-3xl max-w-4xl w-full p-6 sm:p-10 shadow-2xl overflow-hidden space-y-8">
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-5 right-5 p-2 bg-[#141414] text-[#8A8A8A] hover:text-white rounded-full border border-[#1F1F1F]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D7192A]">
                  <span>{activeProject.category} Case Study</span>
                  <span>·</span>
                  <span>{activeProject.suburb} VIC</span>
                </div>
                <h2 className="font-heading font-black text-2xl sm:text-3xl uppercase text-[#F5F5F5]">
                  {activeProject.title}
                </h2>
                <div className="flex flex-wrap gap-4 text-xs text-[#8A8A8A] pt-1">
                  <span>Roof Type: <strong className="text-white">{activeProject.roofType}</strong></span>
                  <span>·</span>
                  <span>House Era: <strong className="text-white">{activeProject.yearBuilt}</strong></span>
                  <span>·</span>
                  <span>Duration: <strong className="text-white">{activeProject.completionTime}</strong></span>
                </div>
              </div>

              {/* Interactive Before & After Comparison Slider */}
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#8A8A8A]">
                  Before & After Interactive Comparison
                </div>
                <BeforeAfterSlider
                  beforeImage={activeProject.beforeImage}
                  afterImage={activeProject.afterImage}
                  beforeLabel="BEFORE RESTORATION"
                  afterLabel="AFTER RESTORATION"
                />
              </div>

              {/* Scope of Work */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#141414] border border-[#1F1F1F] p-6 rounded-2xl">
                <div className="space-y-3">
                  <h4 className="font-heading font-bold text-sm uppercase text-[#F5F5F5]">
                    Scope of Work Completed
                  </h4>
                  <ul className="space-y-2 text-xs text-neutral-300">
                    {activeProject.scopeOfWork.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D7192A] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 border-t sm:border-t-0 sm:border-l border-[#1F1F1F] sm:pl-6 pt-4 sm:pt-0">
                  <h4 className="font-heading font-bold text-sm uppercase text-[#F5F5F5]">
                    Homeowner Feedback
                  </h4>
                  <p className="text-xs text-[#8A8A8A] italic leading-relaxed">
                    "{activeProject.quoteFeedback}"
                  </p>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveProject(null);
                        onOpenQuoteModal();
                      }}
                      className="w-full py-3 bg-[#D7192A] hover:bg-[#B01020] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-red-950/40"
                    >
                      Book Free Inspection for Your Roof
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
