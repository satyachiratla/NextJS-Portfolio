"use client";

import { motion } from "framer-motion";
import ScrollArrow from "./ScrollArrow";
import { BiLogoGmail, BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";

export default function Footer() {
  return (
    <section>
      <ScrollArrow />
      <div className="flex flex-row items-center justify-center mx-8 my-4">
        <motion.div whileHover={{ scale: 1.1 }} className="mx-3">
          <a
            // href="https://www.instagram.com/v.i.v.e.k_c.h.o.w.d.a.r.y/"
            href="mailto:satyachiratla77@gmail.com"
            title="gmail"
            target="_blank"
          >
            <BiLogoGmail className="w-6 h-6" />
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="mx-3">
          <a
            href="https://github.com/satyachiratla"
            title="github profile"
            target="_blank"
          >
            <BiLogoGithub className="w-6 h-6" />
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="mx-3">
          <a
            href="https://www.linkedin.com/in/satya-chiratla-378b31165/"
            title="linkedin profile"
            target="_blank"
          >
            <BiLogoLinkedin className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
      <div className="text-center mb-8">
        <p className="text-lg tracking-wide font-lunasima">
          {" "}
          Made with ❤️ by Satya
        </p>
        <p className=""> © {new Date().getFullYear()} Reserved</p>
      </div>
    </section>
  );
}
