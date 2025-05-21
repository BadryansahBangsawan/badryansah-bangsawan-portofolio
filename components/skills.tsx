"use client";
import { SKILLS } from "@/lib/data";
import { motion } from "framer-motion";
import TextReveal from "./text-reveal";
import { useSectionInView } from "@/hooks/use-section-inview";

const fadeSlideinVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.5);

  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <TextReveal
        className="!font-[Chillax]"
        animateOnScroll
      >
        <h1 className="px-4 mb-4 uppercase font-bold text-5xl sm:text-7xl text-center text-[#292929]">
          Skills
        </h1>
      </TextReveal>
      <ul className="flex flex-wrap justify-center gap-2 text-lg group">
        {SKILLS.map((skill, index) => (
          <motion.li
            key={index}
            variants={fadeSlideinVariants}
            initial="initial"
            animate="animate"
            custom={index}
            viewport={{ once: true }}
            className="text-[#f6f2e5] bg-[#292929] border border-gray-500/[0.1] rounded-2xl py-2 px-3 focus:scale-110 group-hover:scale-110 transition duration-300 ease-in-out cursor-pointer"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
