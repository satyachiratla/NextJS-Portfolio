"use client";

import { useEffect, useState } from "react";

export default function ScrollArrow() {

  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        setBackToTop(true)
      } else {
        setBackToTop(false)
      }
    })
  }, []);

  function scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <>
    { backToTop && <button onClick={scrollUp} className="bg-gray-800 text-white rounded-full fixed bottom-10 right-10 p-3 animate-bounce">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
        />
      </svg>
    </button>}
    </>
  );
}
