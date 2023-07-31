"use client"

import { useState } from "react";

const ScrollArrow = () => {
  const [isProjectsSection, setIsProjectsSection] = useState(true);
  const [showDownArrow, setShowDownArrow] = useState(true);

  const scrollToYSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const yOffset = -70;
    const y = section!.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleArrowClick = () => {
    if (isProjectsSection) {
      scrollToYSection("projects");
    } else {
      scrollToYSection("contact");
      setShowDownArrow((prev) => !prev);
    }

    setIsProjectsSection(!isProjectsSection);
  };

  return (
    <>
      {showDownArrow && (
        <button
          className="fixed bottom-10 animate-bounce right-10 w-12 h-12 bg-gray-800 rounded-full text-white flex justify-center items-center"
          onClick={handleArrowClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollArrow;
