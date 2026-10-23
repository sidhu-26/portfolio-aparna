import React, { useState } from "react";
import { ArrowUpRight, Layers, BarChart3, ShieldCheck, ShoppingBag } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import ProjectModal from "./ProjectModal";
import "./SelectedWork.css";

export default function SelectedWork({ data }) {
  const { label, title, subtitle, items } = data;
  const [selectedProject, setSelectedProject] = useState(null);
  const containerRef = useScrollReveal();

  const getVisualIcon = (id) => {
    switch (id) {
      case "predictive-analytics":
        return <BarChart3 size={32} />;
      case "pm-setu":
        return <ShieldCheck size={32} />;
      case "student-management":
        return <Layers size={32} />;
      case "kevell-frontend":
      default:
        return <ShoppingBag size={32} />;
    }
  };

  return (
    <section id="work" className="section work-section" ref={containerRef} aria-label="Selected Projects">
      <div className="container">
        {/* Section Header */}
        <div className="work-header animate-on-scroll">
          <div className="work-header-content">
            <span className="section-label">{label}</span>
            <h2 className="section-title">{title}</h2>
            <p className="section-subtitle">{subtitle}</p>
          </div>
          <div className="work-header-note">
            <span className="editorial-count">{items.length} CASE STUDIES</span>
          </div>
        </div>

        {/* Asymmetrical Editorial Projects Grid */}
        <div className="projects-grid">
          {items.map((project, index) => {
            const isFeatured = index === 0;

            return (
              <article
                key={project.id}
                className={`project-card ${isFeatured ? "project-card-featured" : ""} animate-on-scroll delay-${(index % 2 + 1) * 150}`}
              >
                {/* Visual Header / Abstract Illustration Graphic */}
                <div className={`project-visual-canvas visual-variant-${(index % 4) + 1}`}>
                  <div className="visual-graphic-glow" aria-hidden="true" />
                  
                  {/* Decorative Geometric Patterns */}
                  <div className="visual-pattern" aria-hidden="true">
                    <div className="pattern-grid" />
                  </div>

                  <div className="visual-icon-badge">
                    {getVisualIcon(project.id)}
                  </div>

                  <div className="visual-metric-tag">
                    <span>{project.accentMetric}</span>
                  </div>

                  <div className="visual-number-stamp">
                    {project.number}
                  </div>
                </div>

                {/* Content Container */}
                <div className="project-content">
                  <div className="project-category-row">
                    <span className="project-category">{project.category}</span>
                    <span className="project-period">{project.period}</span>
                  </div>

                  <h3 className="project-title">
                    {project.title}
                  </h3>

                  <p className="project-summary">
                    {project.summary}
                  </p>

                  {/* Skills tags */}
                  <div className="project-skills-list">
                    {project.skills.slice(0, 4).map((skill, sIdx) => (
                      <span key={sIdx} className="tag-pill">
                        {skill}
                      </span>
                    ))}
                    {project.skills.length > 4 && (
                      <span className="tag-pill tag-more">
                        +{project.skills.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Interactive Trigger */}
                  <div className="project-footer-row">
                    <button
                      type="button"
                      className="btn-text-interactive"
                      onClick={() => setSelectedProject(project)}
                      aria-label={`View case study details for ${project.title}`}
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight size={16} className="btn-arrow-icon" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
