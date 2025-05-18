"use client";
import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { useSectionInView } from "@/lib/hooks";
import { experiencesData } from "@/lib/data";

const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28">
      <h1 className="sm:text-2xl text-xl font-bold text-center mb-4 sm:mb-8">
        Experience
      </h1>
      <article className="hidden sm:block">
        <VerticalTimeline lineColor="#c6d4ff">
          {experiencesData.map((exp, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                visible={true}
                contentStyle={{
                  background: "#f3f4f6",
                  color: "#020617",
                  boxShadow: "0 0 0 4px #f9fafb",
                  border: "0.5px solid white",
                  textAlign: "left",
                  padding: "1rem",
                }}
                contentArrowStyle={{
                  borderRight: "0.4rem solid #020617",
                  margin: "0 0.5rem",
                }}
                date={exp.date}
                dateClassName="!text-gray-700 !font-semibold !text-sm !capitalize"
                icon={exp.icon}
                iconStyle={{
                  padding: "0rem",
                  background: "#f3f4f6",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="!font-semibold !text-xl !capitalize">
                  {exp.title}
                </h3>
                <p className="!mt-0 !text-lg">{exp.company}</p>
                <p className="!text-sm !mt-0 !text-gray-500">{exp.location}</p>
                <p className="!mt-2 !leading-relaxed !text-gray-700">
                  {exp.description.length > 1 &&
                    exp.description.map((desc, index) => (
                      <React.Fragment key={index}>
                        {desc}
                        <br />
                        <br />
                      </React.Fragment>
                    ))}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </article>
      <article className="flex flex-col gap-y-4 sm:hidden">
        {experiencesData.map((exp, index) => (
          <React.Fragment key={index}>
            <div className="p-[1.5px] rounded-lg bg-gradient-to-b from-[#c6d4ff] to-[#a8ffe3] flex justify-center items-center">
              <div className="w-full h-full flex flex-col text-gray-950 p-4 bg-gray-100 hover:bg-gray-50 transition rounded-md">
                <h3 className="font-semibold capitalize">{exp.title}</h3>
                <p>{exp.company}</p>
                <p className="text-xs text-gray-500">{exp.location}</p>
                <p className="text-xs text-gray-500 font-bold">{exp.date}</p>
                <p className="text-xs font-medium mt-4 text-gray-500 leading-5">
                  {exp.description}
                </p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </article>
    </section>
  );
};

export default Experience;
