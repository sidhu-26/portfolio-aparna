import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import LinkedInIcon from "./LinkedInIcon";
import "./Footer.css";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ data }) {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="editorial-footer">
      <div className="container footer-container">
        {/* Top Footer Tier */}
        <div className="footer-top">
          <div className="footer-identity">
            <a href="#hero" className="footer-monogram" aria-label="Aparna Varshini Home">
              <span>AV</span>
              <span className="footer-dot">.</span>
            </a>
            <div className="footer-title-block">
              <span className="footer-name">{data.name}</span>
              <span className="footer-role">MBA Candidate · Business Analytics</span>
            </div>
          </div>

          <div className="footer-social-links">
            <a
              href={`mailto:${data.email}`}
              className="footer-link-pill"
              aria-label="Send Email"
            >
              <Mail size={16} />
              <span>Email</span>
            </a>
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link-pill"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon size={16} />
              <span>LinkedIn</span>
            </a>
            <button
              type="button"
              className="footer-top-btn"
              onClick={scrollToTop}
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Footer Tier */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {CURRENT_YEAR} {data.name}. Designed with editorial rigor and authentic purpose.
          </p>

          <div className="footer-brand-swatches" aria-hidden="true">
            <span className="swatch swatch-aubergine" title="Deep Aubergine (#3A0F34)" />
            <span className="swatch swatch-silver" title="Ice Silver (#DDE3E8)" />
            <span className="swatch swatch-marigold" title="Marigold (#EAAA00)" />
          </div>
        </div>
      </div>
    </footer>
  );
}
