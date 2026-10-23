import React, { useEffect, useRef } from "react";
import { X, Check, ArrowRight, Tag } from "lucide-react";
import "./ProjectModal.css";

export default function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div className="modal-dialog" ref={modalRef}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-meta">
            <span className="modal-number">{project.number}</span>
            <span className="modal-category">{project.category}</span>
            <span className="modal-period">{project.period}</span>
          </div>

          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close project details"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <h2 id="modal-project-title" className="modal-title">
            {project.title}
          </h2>

          <div className="modal-accent-pill">
            <span className="accent-label">Focus Outcome:</span>
            <span className="accent-val">{project.accentMetric}</span>
          </div>

          <div className="modal-section">
            <h3 className="modal-section-heading">Project Overview & Context</h3>
            <p className="modal-description">{project.detailedDescription}</p>
          </div>

          <div className="modal-section">
            <h3 className="modal-section-heading">Key Accomplishments & Deliverables</h3>
            <ul className="modal-highlights-list">
              {project.highlights.map((item, index) => (
                <li key={index} className="modal-highlight-item">
                  <div className="highlight-check-icon">
                    <Check size={16} />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-section">
            <h3 className="modal-section-heading">Technologies & Competencies Applied</h3>
            <div className="modal-skills-grid">
              {project.skills.map((skill, index) => (
                <span key={index} className="tag-pill modal-skill-pill">
                  <Tag size={12} className="tag-icon" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary modal-action-btn"
            onClick={onClose}
          >
            Close Details
          </button>
          <a
            href="#contact"
            className="btn btn-primary modal-action-btn"
            onClick={onClose}
          >
            <span>Inquire About This Project</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
