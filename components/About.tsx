"use client";

import Image from "next/image";
import Profile from "@/public/images/profile-updated.jpeg";
import { motion } from "framer-motion";

const imageVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      duration: 0.2,
    },
  },
};

const titleVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.2,
    },
  },
};

const roleVariants = {
  hidden: { y: -40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.7,
      duration: 0.2,
    },
  },
};

const bioVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.9,
      duration: 0.2,
    },
  },
};

export default function About() {
  return (
    <>
      <motion.section className="text-center p-4 md:px-20 md:py-10">
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="relative w-64 h-64 mx-auto"
        >
          <Image
            src={Profile}
            alt="profile-image"
            fill
            sizes="256px"
            priority
            className="relative z-40 mx-auto rounded-full object-cover"
          />
        </motion.div>
        <div>
          <motion.h2
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="text-teal-600 tracking-wide text-5xl pt-4 font-medium"
          >
            Satya Chiratla
          </motion.h2>
          <motion.h3
            variants={roleVariants}
            initial="hidden"
            animate="visible"
            className="text-2xl py-2"
          >
            Software Engineer
          </motion.h3>
          <motion.p
            variants={bioVariants}
            initial="hidden"
            animate="visible"
            className="text-gray-800 dark:text-gray-300 font-raleway text-base leading-8 py-5 mx-auto md:max-w-md lg:max-w-xl"
          >
            Hello, I am{" "}
            <span className="bg-gradient-to-r font-lunasima font-semibold from-teal-500 to-cyan-500 bg-clip-text text-transparent">
              Satya Chiratla
            </span>
            , a Software Engineer specializing in React JS, React Native, and
            Next JS. I currently build high-impact healthcare mobile features at
            Optum while also developing AI-driven automation tools for release
            risk analysis and developer workflows.{" "}
            <br></br>
            My work spans responsive interfaces, reusable component systems,
            performance optimization, API migrations, RTK Query data layers, and
            production monitoring with Datadog. I enjoy turning complex product
            and engineering problems into reliable, accessible, and maintainable
            user experiences.
            <br></br>
            Core technologies I work with include{" "}
            <span className="bg-gradient-to-r font-lunasima font-semibold from-teal-500 to-cyan-500 bg-clip-text text-transparent">
              JavaScript, TypeScript, React JS, React Native, Next JS, Redux,
              Tailwind CSS, Python, MySQL, Firestore, RAG systems, and CI/CD
              workflows
            </span>
            .
          </motion.p>
        </div>
      </motion.section>
    </>
  );
}
