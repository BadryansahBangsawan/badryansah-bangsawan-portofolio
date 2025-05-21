"use client";

import { PROJECTS } from "@/lib/data";
import ProjectCard from "./project-card";
import TextReveal from "./text-reveal";
import { useSectionInView } from "@/hooks/use-section-inview";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28 mt-28 sm:mt-0"
    >
      <TextReveal
        className="!font-[Chillax]"
        animateOnScroll
      >
        <h1 className="px-4 mb-4 uppercase font-bold text-5xl sm:text-7xl text-center text-[#292929]">
          Projects
        </h1>
      </TextReveal>
      <div>
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}
