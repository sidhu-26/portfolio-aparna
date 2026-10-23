import React from "react";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Journey.css";

export default function Journey({ data }) {
  const { label, title, subtitle, items } = data;
  const containerRef = useScrollReveal();

  const getTypeIcon = (type) => {
    switch (type) {
      case "Education":
        return <GraduationCap size={18} />;
      case "Leadership":
        return <Award size={18} />;
      case "Experience":
      default:
        return <Briefcase size={18} />;
    }
  };

  return (
    <section id="journey" className="section journey-section" ref={containerRef} aria-label="Education and Journey">
      <div className="container">
        {/* Section Header */}
        <div className="journey-header animate-on-scroll">
          <span className="section-label">{label}</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        {/* Editorial Timeline */}
        <div className="timeline-container">
          {/* Vertical Track Spine */}
          <div className="timeline-spine" aria-hidden="true">
            <div className="timeline-spine-glow" />
          </div>

          <div className="timeline-items-list">
            {items.map((item, index) => (
              <div
                key={index}
                className={`timeline-entry animate-on-scroll delay-${(index % 3 + 1) * 100}`}
              >
                {/* Node Marker */}
                <div className="timeline-node" aria-hidden="true">
                  <div className="node-outer-ring">
                    <div className="node-inner-dot" />
                  </div>
                </div>

                {/* Entry Card Content */}
                <div className="timeline-card">
                  {/* Metadata Row */}
                  <div className="timeline-meta-row">
                    <div className="timeline-period-badge">
                      <span className="period-text">{item.period}</span>
                    </div>

                    <div className="timeline-type-pill">
                      {getTypeIcon(item.type)}
                      <span>{item.badge}</span>
                    </div>
                  </div>

                  {/* Main Role & Institution */}
                  <h3 className="timeline-role-title">{item.title}</h3>
                  <div className="timeline-institution">{item.institution}</div>

                  {/* Description Narrative */}
                  <p className="timeline-desc">{item.description}</p>

                  {/* Competency & Skill Tags */}
                  <div className="timeline-tags">
                    {item.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
