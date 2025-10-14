"use client";
import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import FooterContent from "./footer-content";

export default function Footer() {
  const container = useRef<HTMLDivElement>(null);
  const paths = useRef<(SVGTextPathElement | null)[]>([]);
  const [offset, setOffset] = useState(["start end", "end end"] as
    | ["start end", "end end"]
    | ["start end", "center end"]);

  useEffect(() => {
    const updateOffset = () => {
      if (window.innerWidth <= 767) {
        // Adjust this value to your breakpoint
        setOffset(["start end", "center end"]);
      } else {
        setOffset(["start end", "end end"]);
      }
    };

    updateOffset(); // Call once to set the initial value
    window.addEventListener("resize", updateOffset); // Add resize event listener

    return () => {
      window.removeEventListener("resize", updateOffset); // Clean up on unmount
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: offset,
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      paths.current.forEach((path, i) => {
        if (path) {
          path.setAttribute("startOffset", `${-48 + i * 48 + e * 48}%`);
        }
      });
    });
  }, [scrollYProgress]);

  return (
    <div ref={container}>
      <svg className="w-full mb-20 sm:mb-40" viewBox="0 0 250 90">
        <path
          fill="none"
          id="curve"
          d="M0 88.5C61.37 88.5 61.5 20.5 126.5 20.5C184.5 20.5 177.5 88.5 249.5 88.5"
        />
        <text className="text-[5.5px] uppercase " style={{ fill: "#292929" }}>
          <textPath
            className="font-[Chillax]"
            ref={(ref) => {
              paths.current[0] = ref;
            }}
            startOffset="0%"
            href="#curve"
          >
            {Array(3)
              .fill("Designed & Created by Coding with Badryansah Bangsawan © ")
              .join("")}
          </textPath>
        </text>
      </svg>
      <FooterContent scrollProgress={scrollYProgress} />
    </div>
  );
}
