"use client";

import { useTheme } from "next-themes";
import Image from "next/legacy/image";
import { useEffect, useState } from "react";
import Logo from '@/public/images/logo.png'
import { motion } from "framer-motion";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <nav className="fixed z-50 top-0 left-0 right-0 flex justify-between lg:pr-28 lg:pl-16 items-center py-4 pr-4 backdrop-blur">
      <div className="relative h-10 w-60">
        <Image src={Logo} alt="logo" layout="fill" objectFit="cover" priority />
      </div>
      <ul className="flex items-center">
        <li onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="mr-8">
          {theme !== "dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          )}
        </li>
        <motion.li initial={{ y: "-100vh" }} animate={{ y: 0 }} whileHover={{ scale: 1.2 }}>
          <a href="https://drive.google.com/file/d/1QhiQ1U-hGHlg0F5T9sJ-Lg6pMhkoRAyV/view?usp=drive_link" className="text-white tracking-wide bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-teal-500 hover:to-cyan-500 rounded-md px-4 py-2 cursor-pointer">
            Resume
          </a>
        </motion.li>
      </ul>
    </nav>
  );
}
