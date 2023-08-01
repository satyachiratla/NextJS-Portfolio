"use client";

import Image from "next/legacy/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import GithubLogo from "@/public/images/icons8-github.svg";
import Tilt from "react-parallax-tilt";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  url_repo: string;
  technologies: [string];
  live_link: string;
}

export default function Project({
  title,
  description,
  image,
  url_repo,
  technologies,
  live_link,
}: ProjectProps) {
  const ref = useRef<HTMLLIElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.li
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="my-4 lg:my-8 first:pt-0 flex flex-col md:items-center lg:items-start justify-center lg:flex-row"
    >
      <a href={live_link}>
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        scale={1}
        transitionSpeed={2000}
        gyroscope={false}
      >
        <div className="relative w-full border border-gray-700 rounded-lg h-48 md:w-96 md:h-56 md:hover:shadow-xl dark:md:hover:shadow-slate-600 dark:md:hover:shadow ">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="fill"
            className="mx-auto rounded-md"
          />
        </div>
      </Tilt></a>
      <div className="flex flex-col py-4 lg:py-0 lg:ml-12 ">
        <h3 className="text-2xl text-teal-600 font-medium md:text-center lg:text-start">
          {title}
        </h3>
        <p className="py-2 font-raleway text-gray-800 dark:text-gray-300 text-sm text-justify max-w-sm md:max-w-md lg:max-w-lg md:mx-auto ">
          {description}
        </p>
        <p className="max-w-sm md:max-w-md lg:max-w-lg md:mx-auto lg:mx-0">
          <span className="bg-gradient-to-r font-lunasima font-semibold from-teal-500 to-cyan-500 bg-clip-text text-transparent">
            Tech Stack
          </span>{" "}
          -{" "}
          {technologies.map((stack, index) => (
            <span key={index} className="px-1 text-sm">
              {stack}
            </span>
          ))}
        </p>
        <div className="pt-4 flex items-center md:mx-auto lg:mx-0">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="px-4 py-2 rounded-full text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-cyan-500 hover:to-teal-500"
          >
            <Link href={url_repo} className="flex items-center">
              <Image src={GithubLogo} alt="logo" width={20} height={20} />
              <span className="pl-1">Source</span>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="px-4 py-2 rounded-full text-white bg-gradient-to-r from-teal-500 to-cyan-500 ml-6 hover:from-cyan-500 hover:to-teal-500"
          >
            <Link href={live_link} className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 pr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
              Visit
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.li>
  );
}
