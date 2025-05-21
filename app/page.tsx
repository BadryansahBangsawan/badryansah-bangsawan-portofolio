"use client";
import About from "@/components/about";
import BackgroundAnimation from "@/components/background-animated";
import Experiences from "@/components/experiences";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Preloader from "@/components/preloader";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 3000);
    })();
  }, []);

  return (
    <>
      <Header />
      <main className="flex flex-col items-center px-4">
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        <BackgroundAnimation />
        <Hero />
        <About />
        <SectionDivider />
        <Projects />
        <Skills />
        <Experiences />
      </main>
      <Footer />
    </>
  );
}
