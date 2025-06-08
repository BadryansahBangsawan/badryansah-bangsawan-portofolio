"use client";

import { useIsSmallScreen } from "@/hooks/use-is-small-screen";
import { EXPERIENCES } from "@/lib/data";
import React from "react";
import { useInView } from "react-intersection-observer";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TextReveal from "./text-reveal";
import { useSectionInView } from "@/hooks/use-section-inview";

interface TimelineItemProps {
  item: (typeof EXPERIENCES)[number];
  isSmallScreen: boolean;
}

function TimelineItem({ item, isSmallScreen }: TimelineItemProps) {
  const [inViewRef, inView] = useInView({
    threshold: 0.5,
  });
  const [hasBeenInView, setHasBeenInView] = React.useState(false);

  React.useEffect(() => {
    if (inView) {
      setHasBeenInView(true);
    }
  }, [inView]);

  return (
    <VerticalTimelineElement
      visible={isSmallScreen ? true : hasBeenInView}
      contentStyle={{
        background: "#292929",
        boxShadow: "none",
        border: "none",
        textAlign: "left",
        padding: "1.3rem 2rem",
      }}
      contentArrowStyle={{
        borderRight: "0.4rem solid #292929",
      }}
      date={item.date}
      icon={item.icon}
      iconStyle={{
        boxShadow: "none",
        background: "#f6f2e5",
        fontSize: "1.5rem",
        border: "0.25rem solid #292929",
        padding: "0",
        color: "#292929",
      }}
    >
      <h3 className="font-semibold uppercase underline underline-offset-4 text-[#f6f2e5]">
        {item.company}
      </h3>
      <h3 className="font-semibold capitalize text-[#f6f2e5]">{item.title}</h3>
      <p className="font-normal !mt-0 text-[#f6f2e5]">{item.location}</p>
      <ul className="!mt-1 !font-normal text-[#f6f2e5] list-disc pl-4">
        {item.description.map((desc, descIndex) => (
          <li key={descIndex} ref={descIndex === 0 ? inViewRef : undefined}>
            {desc}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}

export default function Experiences() {
  const { ref } = useSectionInView("Experiences", 0.5);

  const isSmallScreen = useIsSmallScreen();

  return (
    <>
      <section
        ref={ref}
        id="experiences"
        className="scroll-mt-28 text-[#bb843d]"
      >
        <TextReveal className="!font-[Chillax]" animateOnScroll>
          <h1 className="px-4 mb-4 uppercase font-bold text-5xl sm:text-7xl text-center text-[#292929]">
            Work Experiences
          </h1>
        </TextReveal>
        <VerticalTimeline lineColor="">
          {EXPERIENCES.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              isSmallScreen={isSmallScreen}
            />
          ))}
        </VerticalTimeline>
      </section>
    </>
  );
}
