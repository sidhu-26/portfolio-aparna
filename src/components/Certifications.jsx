import React from "react";
import { Award } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Certifications.css";

export default function Certifications({ data }) {
  const { label, title, items } = data;
  const containerRef = useScrollReveal();

  return (
    <section id="recognition" className="section cert-section" ref={containerRef} aria-label="Certifications and Accolades">
      <div className="container">
        {/* Section Header */}
        <div className="cert-header animate-on-scroll">
          <span className="section-label">{label}</span>
          <h2 className="section-title">{title}</h2>
          <div className="editorial-accent-line" aria-hidden="true" />
        </div>

        {/* Certifications Grid */}
        <div className="cert-grid">
          {items.map((item, index) => (
            <div
              key={index}
              className={`cert-card animate-on-scroll delay-${(index % 3 + 1) * 100}`}
            >
              <div className="cert-card-top">
                <div className="cert-badge-icon">
                  <Award size={20} />
                </div>
                <span className="cert-date">{item.date}</span>
              </div>

              <h3 className="cert-title">{item.title}</h3>
              <div className="cert-issuer">{item.issuer}</div>
              <p className="cert-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
