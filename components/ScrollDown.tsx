"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const ScrollArrow = () => {
  const [isProjectsSection, setIsProjectsSection] = useState(true);
  const [showArrow, setShowArrow] = useState(true);
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
        opacity: [0, 1],
        transition: {
            delay: 0.9,
            duration: 0.2,
          }
    })
  }, [controls])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const yOffset = -70;
    const y = section!.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleArrowClick = () => {
    if (isProjectsSection) {
      scrollToSection("projects");
      setIsProjectsSection(false);
    } else {
      scrollToSection("contact");
      setIsProjectsSection(true);
    }
  };

  const handleScroll = () => {
    const isScrolledToBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight;

    setShowArrow(!isScrolledToBottom);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showArrow && (
        <motion.button
          className="fixed bottom-10 right-10 animate-bounce w-12 h-12 bg-gray-800 rounded-full text-white flex justify-center items-center"
          onClick={handleArrowClick}
          animate={controls}
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
        </motion.button>
      )}
    </>
  );
};

export default ScrollArrow;
