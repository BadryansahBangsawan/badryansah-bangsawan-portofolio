"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode, useEffect, useRef } from "react";
import TextReveal from "./text-reveal";
import { useSectionInView } from "@/hooks/use-section-inview";

const phrase =
  "Halo! Saya adalah seorang Front-End Web Developer yang berdedikasi dan bersemangat dalam menciptakan pengalaman digital yang menarik dan responsif. Saya menguasai berbagai teknologi modern seperti React, TypeScript, Next.js, Node.js, JavaScript, HTML, CSS, Git, GitHub, serta memiliki kemampuan desain antarmuka menggunakan Figma. Selain itu, saya juga memiliki keahlian di bidang videografi, editing video, pilot drone, dan desain grafis. Dengan perpaduan antara kemampuan teknis dan kreativitas, saya siap memberikan solusi digital yang efektif dan estetis.";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  const refs = useRef<HTMLSpanElement[]>([]);

  const body = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerEffect(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: "top bottom",
        end: "center center",
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    });
  };

  const splitWords = (phrase: string): ReactNode[] => {
    const body: ReactNode[] = [];

    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);

      body.push(
        <p
          className="font-2xl m-0 mr-[1.5vw] sm:mr-[0.5vw]"
          key={word + "_" + i}
        >
          {letters}
        </p>
      );
    });

    return body;
  };

  const splitLetters = (word: string): ReactNode[] => {
    const letters: ReactNode[] = [];

    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={letter + "_" + i}
          ref={(el) => {
            if (el) refs.current.push(el);
          }}
          className="opacity-0"
        >
          {letter}
        </span>
      );
    });

    return letters;
  };

  return (
    <section
      ref={ref}
      id="about"
      className="flex flex-col gap-2 mt-28 max-w-[65rem] text-center leading-0 scroll-mt-28"
    >
      <TextReveal className="!font-[Chillax]" animateOnScroll>
        <h1 className="px-4 uppercase font-bold text-5xl sm:text-7xl text-center text-[#292929]">
          About Me
        </h1>
      </TextReveal>
      <div
        ref={container}
        className="mb-3 text-base sm:text-2xl flex flex-wrap justify-center"
      >
        <div
          ref={body}
          className="mb-3 text-base sm:text-2xl flex flex-wrap justify-center font-normal"
        >
          {splitWords(phrase)}
        </div>
      </div>
    </section>
  );
}
