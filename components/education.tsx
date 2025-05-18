"use client";

import React from "react";

import { education } from "@/lib/data";

import EducationCard from "./education-card";
import { useSectionInView } from "@/lib/hooks";

const Education = () => {
  const { ref } = useSectionInView("Education", 1);

  return (
    <section ref={ref} id="education" className="scroll-mt-28">
      <div className="flex flex-col gap-y-4 sm:gap-y-8">
        <h1 className="sm:text-2xl text-xl font-bold text-center">Education</h1>
        <div className="flex flex-col gap-y-4 sm:gap-y-6">
          {education.map((edu, index) => (
            <React.Fragment key={index}>
              <EducationCard
                degree={edu.degree}
                college={edu.college}
                location={edu.location}
                date={edu.date}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
