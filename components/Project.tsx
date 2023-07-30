"use client";

import Image from "next/legacy/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
      <div className="relative w-full  h-48 md:w-96 md:h-56 md:hover:shadow-xl dark:md:hover:shadow-slate-600 dark:md:hover:shadow ">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="fill"
          className="mx-auto rounded-md"
        />
      </div>
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
        <div className="pt-4 flex md:mx-auto lg:mx-0">
          <motion.div whileHover={{ scale: 1.1 }}>
            <a
              className="px-4 py-2 rounded-full text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-cyan-500 hover:to-teal-500"
              href={url_repo}
            >
              Source
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <a
              className="px-4 py-2 rounded-full text-white bg-gradient-to-r from-teal-500 to-cyan-500 ml-6 hover:from-cyan-500 hover:to-teal-500"
              href={live_link}
            >
              View
            </a>
          </motion.div>
        </div>
      </div>
    </motion.li>
  );
}
