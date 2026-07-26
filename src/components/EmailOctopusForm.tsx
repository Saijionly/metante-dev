"use client";

import { useEffect, useRef } from "react";

export function EmailOctopusForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Avoid injecting the script twice (e.g. on fast refresh / re-render)
    if (containerRef.current.querySelector("script")) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://eomail5.com/form/e88db052-88fb-11f1-9f98-37be14541337.js";
    script.setAttribute("data-form", "e88db052-88fb-11f1-9f98-37be14541337");
    containerRef.current.appendChild(script);
  }, []);

  return <div ref={containerRef} />;
}