"use client";

import React, { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

type EducationCardProps = {
  degree: String;
  college: String;
  location: String;
  date: String;
};

const EducationCard = ({
  degree,
  college,
  location,
  date,
}: EducationCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <>
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
        className="hidden sm:block">
        <article className="p-[1.5px] rounded-lg bg-gradient-to-b from-[#c6d4ff] to-[#a8ffe3] flex justify-center items-center">
          <div className="w-full h-full flex flex-col p-4 sm:p-6 bg-gray-100 hover:bg-gray-50 transition rounded-md gap-y-2 sm:gap-y-4">
            <h2 className="text-lg sm:text-xl font-bold">{degree}</h2>
            <div className="flex flex-col">
              <h3 className="text-base sm:text-lg font-medium">{college}</h3>
              <p className="text-xs sm:text-xs font-medium">{location}</p>
            </div>
            <p className="text-sm sm:text-base font-semibold">{date}</p>
          </div>
        </article>
      </motion.div>
      <div className="sm:hidden">
        <article className="p-[1.5px] rounded-lg bg-gradient-to-b from-[#c6d4ff] to-[#a8ffe3] flex justify-center items-center">
          <div className="w-full h-full flex flex-col p-4 sm:p-6 bg-gray-100 hover:bg-gray-50 transition rounded-md gap-y-2 sm:gap-y-4">
            <h2 className="text-lg sm:text-xl font-bold">{degree}</h2>
            <div className="flex flex-col">
              <h3 className="text-base sm:text-lg font-medium">{college}</h3>
              <p className="text-xs sm:text-xs font-medium">{location}</p>
            </div>
            <p className="text-sm sm:text-base font-semibold">{date}</p>
          </div>
        </article>
      </div>
    </>
  );
};

export default EducationCard;
