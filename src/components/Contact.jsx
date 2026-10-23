import React, { useState } from "react";
import { Mail, Phone, MapPin, Download, ArrowUpRight, Copy, Check } from "lucide-react";
import LinkedInIcon from "./LinkedInIcon";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Contact.css";

export default function Contact({ data }) {
  const { label, headline, description, email, secondaryEmail, phone, linkedin, location, resumeUrl } = data;
  const [copied, setCopied] = useState(false);
  const containerRef = useScrollReveal();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section contact-section" ref={containerRef} aria-label="Contact and Inquiries">
      <div className="container">
        <div className="contact-card-editorial animate-on-scroll">
          <div className="contact-grid">
            {/* Left Column: Headline & Direct Inquiries */}
            <div className="contact-main">
              <span className="section-label section-label-light">{label}</span>
              <h2 className="contact-headline">{headline}</h2>
              <p className="contact-lead">{description}</p>

              {/* Action Buttons */}
              <div className="contact-action-row">
                <a
                  href={`mailto:${email}`}
                  className="btn btn-marigold contact-primary-btn"
                >
                  <Mail size={18} />
                  <span>Send an Email</span>
                </a>

                <button
                  type="button"
                  className="btn btn-outline-light contact-copy-btn"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                  <span>{copied ? "Copied!" : "Copy Address"}</span>
                </button>
              </div>

              {/* Verified Resume Download */}
              <div className="resume-download-box">
                <div className="resume-info">
                  <span className="resume-title">Curriculum Vitae</span>
                  <span className="resume-sub">PDF Document · Updated</span>
                </div>
                <a
                  href={resumeUrl}
                  download="Aparna_Varshini_Resume.pdf"
                  className="btn-resume"
                  aria-label="Download Aparna Varshini Resume PDF"
                >
                  <Download size={16} />
                  <span>Download CV</span>
                </a>
              </div>
            </div>

            {/* Right Column: Verified Contact Coordinates */}
            <div className="contact-coordinates">
              <h3 className="coordinates-heading">Direct Coordinates</h3>

              <div className="coordinates-list">
                {/* Primary Email */}
                <a
                  href={`mailto:${email}`}
                  className="coordinate-item"
                  title="Official University Email"
                >
                  <div className="coordinate-icon">
                    <Mail size={18} />
                  </div>
                  <div className="coordinate-details">
                    <span className="coordinate-label">University Email</span>
                    <span className="coordinate-value">{email}</span>
                  </div>
                  <ArrowUpRight size={16} className="coord-arrow" />
                </a>

                {/* Secondary Personal Email */}
                <a
                  href={`mailto:${secondaryEmail}`}
                  className="coordinate-item"
                  title="Personal Email"
                >
                  <div className="coordinate-icon">
                    <Mail size={18} />
                  </div>
                  <div className="coordinate-details">
                    <span className="coordinate-label">Personal Correspondence</span>
                    <span className="coordinate-value">{secondaryEmail}</span>
                  </div>
                  <ArrowUpRight size={16} className="coord-arrow" />
                </a>

                {/* LinkedIn Profile */}
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="coordinate-item"
                  title="LinkedIn Profile"
                >
                  <div className="coordinate-icon">
                    <LinkedInIcon size={18} />
                  </div>
                  <div className="coordinate-details">
                    <span className="coordinate-label">Professional Profile</span>
                    <span className="coordinate-value">linkedin.com/in/aparnavarshini-s</span>
                  </div>
                  <ArrowUpRight size={16} className="coord-arrow" />
                </a>

                {/* Phone */}
                <a
                  href={`tel:${phone}`}
                  className="coordinate-item"
                  title="Phone Contact"
                >
                  <div className="coordinate-icon">
                    <Phone size={18} />
                  </div>
                  <div className="coordinate-details">
                    <span className="coordinate-label">Phone & WhatsApp</span>
                    <span className="coordinate-value">{phone}</span>
                  </div>
                  <ArrowUpRight size={16} className="coord-arrow" />
                </a>

                {/* Location */}
                <div className="coordinate-item-static">
                  <div className="coordinate-icon">
                    <MapPin size={18} />
                  </div>
                  <div className="coordinate-details">
                    <span className="coordinate-label">Base Location</span>
                    <span className="coordinate-value">{location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
