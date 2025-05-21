import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string;
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, tags, image, githubUrl } = project;

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-3 last:mb-0"
    >
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="text-[#292929] bg-[#e3dfd3] max-w-[42rem] rounded-xl overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gradient-to-r from-[#c3afcd] to-[#b99465] transition duration-300 ease-in-out sm:group-even:pl-8 shadow-lg border ring-inset ring-black border-[#292929]/50">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-xs uppercase tracking-wider text-[#e3dfd3] rounded-full flex items-center justify-center"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={image}
            alt={title}
            priority
            quality={95}
            width={500}
            height={500}
            className={cn(
              "absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg rounded-2xl",
              "transition duration-300 ease-in-out filter grayscale",
              "group-hover:scale-[1.04] group-hover:-translate-x-3",
              "group-hover:translate-y-3 group-hover:-rotate-2",
              "group-hover:grayscale-0",
              "group-even:group-hover:translate-x-3",
              "group-even:group-hover:translate-y-3",
              "group-even:group-hover:rotate-2",
              "group-even:group-hover:right-[initial] group-even:-left-40"
            )}
          />
        </div>
      </a>
    </motion.div>
  );
}
