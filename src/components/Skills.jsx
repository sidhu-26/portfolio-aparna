import React from "react";
import { TrendingUp, Database, Code2, Users2, Compass } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Skills.css";

export default function Skills({ data }) {
  const { label, title, subtitle, categories } = data;
  const containerRef = useScrollReveal();

  const getCategoryIcon = (index) => {
    switch (index) {
      case 0:
        return <TrendingUp size={22} />;
      case 1:
        return <Database size={22} />;
      case 2:
        return <Code2 size={22} />;
      case 3:
        return <Users2 size={22} />;
      case 4:
      default:
        return <Compass size={22} />;
    }
  };

  return (
    <section id="expertise" className="section skills-section" ref={containerRef} aria-label="Skills and Expertise">
      <div className="container">
        {/* Section Header */}
        <div className="skills-header animate-on-scroll">
          <span className="section-label">{label}</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        {/* Editorial Categories Grid */}
        <div className="skills-categories-grid">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`skills-category-card animate-on-scroll delay-${(index % 3 + 1) * 100}`}
            >
              {/* Category Header */}
              <div className="category-header">
                <div className="category-icon-wrapper">
                  {getCategoryIcon(index)}
                </div>
                <div className="category-title-box">
                  <span className="category-index">0{index + 1}</span>
                  <h3 className="category-title">{category.title}</h3>
                </div>
              </div>

              {/* Category Subtitle */}
              <p className="category-description">{category.description}</p>

              {/* Typographic Skills List */}
              <ul className="skills-items-list">
                {category.items.map((skill, sIdx) => (
                  <li key={sIdx} className="skill-item">
                    <span className="skill-bullet" aria-hidden="true" />
                    <span className="skill-name">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
