"use client";

import { useEffect } from "react";

export function MobileHoverObserver() {
  useEffect(() => {
    // Only run this logic on devices without hover support (typically mobile/touch devices)
    if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.setAttribute("data-in-view", "true");
            } else {
              entry.target.removeAttribute("data-in-view");
            }
          });
        },
        { 
          // Trigger when 30% of the element is visible
          threshold: 0.3,
          // Offset slightly so it triggers a bit before fully centering
          rootMargin: "-10% 0px -20% 0px"
        }
      );

      // We observe all .group elements on the page
      const groupElements = document.querySelectorAll(".group");
      groupElements.forEach((el) => observer.observe(el));

      // Cleanup
      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return null;
}
