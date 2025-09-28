import { useEffect, useRef, useState } from "react";

export default function ScrollToTop({
  threshold = 300,
  className = "",
  ariaLabel = "Kembali ke atas",
}) {
  const [visible, setVisible] = useState(false);
  const tickingRef = useRef(false);

  // respect prefers-reduced-motion
  const prefersReduced =
    typeof window !== "undefined" && window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  useEffect(() => {
    function onScroll() {
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || window.pageYOffset;
          setVisible(scrollY > threshold);
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [threshold]);

  function scrollToTop() {
    if (prefersReduced) {
      window.scrollTo(0, 0);
      return;
    }
    if ("scrollBehavior" in document.documentElement.style) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }

  function onKeyDown(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollToTop();
    }
  }

  return (
    <div
      aria-hidden={!visible}
      className={`fixed right-6 bottom-6 z-60 ${className}`}
    >
      <button
        onClick={scrollToTop}
        onKeyDown={onKeyDown}
        title={ariaLabel}
        aria-label={ariaLabel}
        className={`btn btn-primary btn-circle shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/40
          transform transition-all duration-250
          ${
            visible
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-6 opacity-0 scale-95 pointer-events-none"
          }`}
        style={{ transitionDuration: prefersReduced ? "0ms" : "220ms" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </div>
  );
}
