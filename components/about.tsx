"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode, useEffect, useRef } from "react";
import TextReveal from "./text-reveal";
import { useSectionInView } from "@/hooks/use-section-inview";

const phrase =
  "I'm a passionate and dedicated software developer with over 5 years of experience in creating elegant, scalable solutions. My expertise spans across modern web technologies including React, TypeScript, Node.js, and cloud platforms. I'm committed to crafting responsive, user-friendly applications that not only meet business objectives but also provide exceptional user experiences. Throughout my career, I've successfully delivered numerous projects, from small business websites to complex enterprise applications. When I'm not coding, I'm constantly learning and exploring new technologies to stay at the forefront of web development, participating in tech communities, and contributing to open-source projects. My goal is to create innovative solutions that make a meaningful impact in the digital world.";

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
      <TextReveal
        className="!font-[Chillax]"
        animateOnScroll
      >
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
