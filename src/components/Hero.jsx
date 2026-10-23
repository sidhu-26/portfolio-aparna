import React from "react";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import "./Hero.css";

export default function Hero({ data }) {
  const {
    eyebrow,
    heroHeadingLine1,
    heroHeadingLine2,
    tagline,
    summary,
    portraitImage,
    currentRole,
    institution,
    cgpa
  } = data;

  return (
    <section id="hero" className="hero-section" aria-label="Introduction">
      <div className="editorial-grid-bg" aria-hidden="true" />

      <div className="container hero-container">
        {/* Left Column: Typographic Narrative */}
        <div className="hero-content">
          {/* Eyebrow */}
          <div className="hero-eyebrow-wrapper hero-animate-eyebrow">
            <span className="hero-badge">
              <span className="hero-badge-dot" />
              {eyebrow}
            </span>
          </div>

          {/* Main Editorial Headline */}
          <h1 className="hero-title" aria-label="Aparna Varshini">
            <span className="hero-title-line hero-animate-title-1">
              {heroHeadingLine1}
            </span>
            <span className="hero-title-line hero-title-line-indent hero-animate-title-2">
              <span className="hero-accent-text">{heroHeadingLine2}</span>
            </span>
          </h1>

          {/* Supporting Tagline & Paragraph */}
          <div className="hero-statement-wrapper hero-animate-statement">
            <p className="hero-tagline">{tagline}</p>
            <p className="hero-summary">{summary}</p>
          </div>

          {/* Quick Academic Highlight Pill */}
          <div className="hero-academic-pill hero-animate-statement">
            <div className="academic-icon-box">
              <Sparkles size={16} className="sparkle-icon" />
            </div>
            <div className="academic-text">
              <span className="academic-role">{currentRole}</span>
              <span className="academic-sep">·</span>
              <span className="academic-institution">{institution}</span>
              <span className="academic-badge">CGPA {cgpa}</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="hero-actions hero-animate-actions">
            <a href="#journey" className="btn btn-primary hero-btn-primary">
              <span>Explore My Journey</span>
              <ArrowDown size={16} />
            </a>
            <a href="#contact" className="btn btn-secondary hero-btn-secondary">
              <span>Let's Connect</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Right Column: Editorial Portrait with Layered Framing */}
        <div className="hero-visual-col hero-animate-image">
          <div className="hero-image-frame">
            {/* Fine Grid Accent */}
            <div className="frame-backdrop-grid" aria-hidden="true" />
            
            {/* Offset Ice Silver Framing Block */}
            <div className="frame-accent-card" aria-hidden="true" />

            {/* Authentic Portrait Image */}
            <div className="hero-image-wrapper">
              <img
                src={portraitImage}
                alt="Aparna Varshini - MBA Candidate in Business Analytics"
                className="hero-portrait-img"
                width="540"
                height="680"
                fetchPriority="high"
              />
              <div className="image-overlay-vignette" aria-hidden="true" />
            </div>

            {/* Floating Editorial Label Tag */}
            <div className="hero-editorial-badge">
              <span className="badge-num">01</span>
              <div className="badge-text">
                <span className="badge-title">SRM IST</span>
                <span className="badge-sub">Business Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Understated Scroll Indicator */}
      <a href="#about" className="hero-scroll-indicator" aria-label="Scroll to about section">
        <span className="scroll-text">SCROLL TO DISCOVER</span>
        <div className="scroll-arrow-line">
          <ArrowDown size={14} className="scroll-bounce" />
        </div>
      </a>
    </section>
  );
}
