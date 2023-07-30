"use client";

import About from "@/components/About";
import Projects from "@/components/Projects";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  return (
    <main className="mt-20 px-8">
      <About />
      <Projects />
    </main>
  );
}
