"use client";

import React from "react";

import { motion } from "framer-motion";

import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const fadeInAnimationVariants = {
  initial: { opacity: 0 },
  animate: (index: number) => ({
    opacity: 1,
    transition: { delay: index * 0.025 },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView("Skills", 1);

  return (
    <section ref={ref} id="skills" className="scroll-mt-28 sm:scroll-mt-56">
      <div className="sm:flex flex-col max-w-xl gap-y-4 sm:gap-y-8 hidden">
        <h1 className="sm:text-2xl text-xl font-bold text-center">Skills</h1>
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
          {skillsData?.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              custom={index}
              // viewport={{
              //   once: true,
              // }}
              className="bg-gray-700 sm:px-4 px-3 sm:py-2 py-1 sm:text-sm text-xs uppercase tracking-wider text-white rounded-full darktext-white/70 hover:bg-gray-950 transition">
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex flex-col max-w-xl gap-y-4 sm:gap-y-8 sm:hidden">
        <h1 className="sm:text-2xl text-xl font-bold text-center">Skills</h1>
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
          {skillsData?.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-700 sm:px-4 px-3 sm:py-2 py-1 sm:text-sm text-xs uppercase tracking-wider text-white rounded-full darktext-white/70 hover:bg-gray-950 transition">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
