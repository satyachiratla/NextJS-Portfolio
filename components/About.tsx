"use client";

import Image from "next/legacy/image";
import Profile from "@/public/images/profile.jpeg";
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
          layout="fill"
          objectFit="cover"
          priority
          className="relative z-40 mx-auto rounded-full"
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
          Frontend Developer
        </motion.h3>
        <motion.p
          variants={bioVariants}
          initial="hidden"
          animate="visible"
          className="text-gray-800 dark:text-gray-300 font-raleway text-base leading-8 py-5 mx-auto md:max-w-md lg:max-w-xl"
        >
          Hello I am{" "}
          <span className="bg-gradient-to-r font-lunasima font-semibold from-teal-500 to-cyan-500 bg-clip-text text-transparent">
            Satya Chiratla
          </span>
          , A highly motivated individual passionate about coding and
          technology. I have been developing websites for over 2 years.{" "}
          <br></br>
          The technologies I knew are{" "}
          <span className="bg-gradient-to-r font-lunasima font-semibold from-teal-500 to-cyan-500 bg-clip-text text-transparent">
            Html5, CSS3, JavaScript, NextJS, ReactJs, Redux, SQL, MongoDB,
            Python and NodeJs
          </span>
          . I create responsive websites that are displayed on all devices
          desktops and mobiles. I have curious to learn FullStack and many more
          technologies.
          <br></br>
          Also, I have worked hard in my education and now its time to put them
          into my career.
        </motion.p>
      </div>
    </motion.section>
  );
}
