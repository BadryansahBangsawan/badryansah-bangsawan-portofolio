"use client";

import { useSectionInView } from "@/hooks/use-section-inview";
import { ANIMATION_DELAY } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import FloatingArrow from "./floating-arrow";
import TextReveal from "./text-reveal";

export default function Hero() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-col justify-center items-center text-center mb-28 max-w-[65rem] m:text-left sm:mb-0 scroll-mt-[100rem] h-[100vh] absolute gap-12"
    >
      <TextReveal
        className="!font-[Borel] py-10 font-extralight"
        delay={ANIMATION_DELAY}
      >
        <h1 className="px-4 mt-4 text-5xl sm:text-7xl text-center text-[#292929]">
          Badryansah Bangsawan
        </h1>
      </TextReveal>
      <TextReveal delay={ANIMATION_DELAY} className="font-extralight">
        <p className="px-4 text-xl sm:text-4xl">
          <span>
            <span className="font-bold">I&apos;m a Frontend Developer</span> and{" "}
            <span className="font-bold">2 years</span> of experience at Smk
            Telkom based in Makassar, Indonesia.
          </span>
        </p>
      </TextReveal>

      <motion.div
        className="three-d flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg sm:text-xl font-medium w-full"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: ANIMATION_DELAY + 0.2, ease: "easeIn" }}
      >
        <Link
          href="#contact"
          className=" group font-medium mx-3 my-3 flex flex-row items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition underline-hover-effect"
        >
          {" "}
          <BsArrowRight /> Contact me{" "}
        </Link>
        <a
          className="three-d group font-medium flex items-center mx-3 my-3 gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer underline-hover-effect"
          href="https://drive.google.com/drive/u/2/folders/1TcLKDJM07etyFmgvGcSlJfBGk3OAmGvw"
          target="_blank"
        >
          Instagram
        </a>
        <a
          className="group font-medium flex items-center mx-3 my-3 gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer underline-hover-effect"
          href="https://github.com/BadryansahBangsawan"
          target="_blank"
        >
          Github
        </a>
      </motion.div>
      <motion.div
        className=" three-d flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: ANIMATION_DELAY + 0.2 }}
      >
        <div className="pb-2"> Scroll to discover </div>
        <FloatingArrow />
      </motion.div>
    </section>
  );
}
