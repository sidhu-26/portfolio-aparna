import { useEffect, useRef } from "react";

/**
 * Custom hook to reveal elements smoothly when they enter the viewport.
 * Automatically checks prefers-reduced-motion.
 */
export function useScrollReveal(options = { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // If user prefers reduced motion, reveal everything immediately
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      if (containerRef.current) {
        const elements = containerRef.current.querySelectorAll(".animate-on-scroll");
        elements.forEach((el) => el.classList.add("is-visible"));
      }
      return;
    }

    if (!("IntersectionObserver" in window)) {
      // Fallback
      if (containerRef.current) {
        const elements = containerRef.current.querySelectorAll(".animate-on-scroll");
        elements.forEach((el) => el.classList.add("is-visible"));
      }
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return containerRef;
}
