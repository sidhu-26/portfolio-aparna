import React from "react";
import { CheckCircle2, Award, Users, BookOpen } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./About.css";

export default function About({ data }) {
  const { label, title, quote, paragraphs, stats, corePrinciples } = data;
  const containerRef = useScrollReveal();

  const statIcons = [
    <BookOpen key="1" size={20} />,
    <Users key="2" size={20} />,
    <Award key="3" size={20} />,
    <CheckCircle2 key="4" size={20} />
  ];

  return (
    <section id="about" className="section about-section" ref={containerRef} aria-label="About Aparna Varshini">
      <div className="container">
        {/* Section Header */}
        <div className="about-header animate-on-scroll">
          <span className="section-label">{label}</span>
          <h2 className="section-title">{title}</h2>
          <div className="editorial-accent-line" aria-hidden="true" />
        </div>

        {/* Editorial Two-Column Layout */}
        <div className="about-grid">
          {/* Left Column: Quote & Bio Narrative */}
          <div className="about-narrative">
            <blockquote className="about-pullquote animate-on-scroll delay-100">
              <span className="quote-mark" aria-hidden="true">“</span>
              <p className="quote-text">{quote}</p>
            </blockquote>

            <div className="about-bio animate-on-scroll delay-200">
              {paragraphs.map((para, index) => (
                <p key={index} className="about-paragraph">
                  {para}
                </p>
              ))}
            </div>

            {/* Core Principles */}
            <div className="core-principles-wrapper animate-on-scroll delay-300">
              <h3 className="principles-heading">Guiding Principles</h3>
              <div className="principles-list">
                {corePrinciples.map((item, index) => (
                  <div key={index} className="principle-item">
                    <span className="principle-number">0{index + 1}</span>
                    <div className="principle-text">
                      <h4 className="principle-title">{item.title}</h4>
                      <p className="principle-desc">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Quantitative Impact & Credentials */}
          <div className="about-credentials">
            {/* Impact Metric Cards */}
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className={`stat-card animate-on-scroll delay-${(index + 1) * 100}`}>
                  <div className="stat-icon-wrapper">
                    {statIcons[index % statIcons.length]}
                  </div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Editorial Focus Card */}
            <div className="editorial-focus-card animate-on-scroll delay-400">
              <div className="focus-card-header">
                <span className="focus-tag">AREAS OF PURSUIT</span>
                <span className="focus-badge">MBA · SRM IST</span>
              </div>
              <h3 className="focus-title">Where Analytics Meets Strategy</h3>
              <p className="focus-description">
                Committed to decoding big data into commercial strategy, bridging statistical modeling with executive decision-making, and fostering high-performing team dynamics.
              </p>
              <div className="focus-tags-list">
                <span className="tag-pill">Predictive Analytics</span>
                <span className="tag-pill">Business Strategy</span>
                <span className="tag-pill">Institutional Governance</span>
                <span className="tag-pill">Stakeholder Alignment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
