import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import "./Navigation.css";

export default function Navigation({ activeSection = "hero" }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Journey", href: "#journey" },
    { name: "Work", href: "#work" },
    { name: "Expertise", href: "#expertise" },
    { name: "Recognition", href: "#recognition" },
    { name: "Contact", href: "#contact" }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`nav-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="nav-container">
        {/* Typographic Monogram */}
        <a href="#hero" className="nav-brand" aria-label="Aparna Varshini Home">
          <span className="brand-letters">AV</span>
          <span className="brand-dot">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="nav-desktop" aria-label="Main Navigation">
          <ul className="nav-menu">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name} className="nav-item">
                  <a
                    href={link.href}
                    className={`nav-link ${isActive ? "is-active" : ""}`}
                  >
                    {link.name}
                    {isActive && <span className="active-dot" aria-hidden="true" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="nav-actions">
          <a href="#contact" className="btn btn-primary nav-cta">
            <span>Let's Connect</span>
            <ArrowUpRight size={15} />
          </a>

          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? "is-open" : ""}`}>
        <nav className="mobile-nav" aria-label="Mobile Navigation">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.name} className="mobile-nav-item">
                <a
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={handleLinkClick}
                >
                  <span className="mobile-link-name">{link.name}</span>
                  <ArrowUpRight size={18} className="mobile-link-icon" />
                </a>
              </li>
            ))}
            <li className="mobile-nav-item mobile-cta-item">
              <a
                href="#contact"
                className="btn btn-marigold mobile-nav-cta"
                onClick={handleLinkClick}
              >
                <span>Let's Connect</span>
                <ArrowUpRight size={16} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
