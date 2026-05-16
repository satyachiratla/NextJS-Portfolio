"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Experience {
  company: string;
  location: string;
  period: string;
  role: string;
  highlights: string[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    company: "Optum (UnitedHealth Group)",
    location: "Hyderabad",
    period: "Apr 2025 - Present",
    role: "Associate Software Engineer",
    highlights: [
      "Developing UHC Mobile App features in React Native, including the Abyss UI Upgrade, Oneportal Migration, Premium Payments home tile, and Ask Avery Agent Mode POC.",
      "Building an AI Release Risk Predictor that analyzes branch diffs during release and cherry-pick workflows, producing risk scores and summaries for deployment decisions.",
      "Completed an AI Dojo Capstone by building a Clinical Intelligence RAG System with hybrid search and GPT reranking.",
      "Serve as Dev on Call, managing release standups and monitoring production health with Datadog.",
    ],
    skills: ["React Native", "Java", "Datadog", "AI/RAG", "Release Automation"],
  },
  {
    company: "KBridge Consulting Services",
    location: "Hyderabad",
    period: "Oct 2024 - Mar 2025",
    role: "Software Engineer - Frontend",
    highlights: [
      "Developed a payroll system and reusable Storybook UI components that improved development efficiency.",
      "Integrated React Query for reliable API data fetching, caching, and frontend state management.",
    ],
    skills: ["React JS", "Storybook", "React Query", "TypeScript"],
  },
  {
    company: "Nivaah Digital Private Limited",
    location: "Delhi",
    period: "Jun 2023 - Sep 2024",
    role: "Junior Frontend Developer",
    highlights: [
      "Built a cross-platform e-commerce app with React Native and optimized web performance using Tailwind CSS.",
      "Migrated data management to RTK Query to reduce boilerplate and improve maintainability.",
    ],
    skills: ["React Native", "RTK Query", "Tailwind CSS", "Performance"],
  },
  {
    company: "Various Projects",
    location: "Remote",
    period: "Freelance",
    role: "Freelance Frontend Developer",
    highlights: [
      "Built Next.js experiences with server-side rendering and robust form validation using React Hook Form and Zod.",
    ],
    skills: ["Next JS", "SSR", "React Hook Form", "Zod"],
  },
];

function ExperienceItem({ experience }: { experience: Experience }) {
  const ref = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.15 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.li
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="relative border-l border-teal-500/50 pl-6 pb-10 last:pb-0"
    >
      <span className="absolute -left-2 top-1 h-4 w-4 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500" />
      <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-2xl text-teal-600 font-medium">
            {experience.role}
          </h3>
          <p className="font-lunasima text-gray-900 dark:text-gray-100">
            {experience.company}
          </p>
        </div>
        <div className="font-raleway text-sm text-gray-700 dark:text-gray-300 md:text-right">
          <p>{experience.period}</p>
          <p>{experience.location}</p>
        </div>
      </div>
      <ul className="mt-4 space-y-3 font-raleway text-sm leading-7 text-gray-800 dark:text-gray-300">
        {experience.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {experience.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-cyan-500/40 px-3 py-1 text-xs text-teal-700 dark:text-cyan-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.li>
  );
}

export default function WorkExperience() {
  return (
    <section className="mx-auto mt-10 max-w-4xl py-8">
      <h1 className="text-center text-3xl font-semibold text-cyan-500">
        Work Experience
      </h1>
      <ol className="mx-auto mt-8 max-w-3xl">
        {experiences.map((experience) => (
          <ExperienceItem
            key={`${experience.company}-${experience.role}`}
            experience={experience}
          />
        ))}
      </ol>
    </section>
  );
}
