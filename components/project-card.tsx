"use client";

import { useRef } from "react";

import Image, { StaticImageData } from "next/image";

import { BsGithub } from "react-icons/bs";

import { motion, useScroll, useTransform } from "framer-motion";

type ProjectCardProps = {
  index: number;
  title: String;
  description: String;
  tags: String[];
  imageUrl: StaticImageData;
  gitRepo: String;
  live: String;
};

const ProjectCard = ({
  index,
  title,
  description,
  tags,
  imageUrl,
  gitRepo,
  live,
}: ProjectCardProps) => {
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
        className="relative hidden sm:block">
        <article className="relative">
          <div
            className={`group bg-gray-50 bg-opacity-80 max-w-[42rem] border-2 border-white rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-opacity-100 transition ${
              index % 2 !== 0 ? "sm:pl-8" : ""
            } darktext-white darkbg-white/10 darkhover:bg-white/20`}>
            <div
              className={`pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full ${
                index % 2 !== 0 ? "sm:ml-[18rem]" : ""
              }`}>
              <div className="flex items-center gap-x-4">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <div className="flex items-center gap-x-2 sm:gap-x-4">
                  <a href={gitRepo as string} target="_blank">
                    <div className=" border-2 border-[#2b3137] shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] rounded-full hover:scale-110 transition duration-300">
                      <BsGithub size={24} fill="2b3137" />
                    </div>
                  </a>
                  <a href={live as string} target="_blank">
                    <div className="px-2 py-0.5 text-sm border-2 border-[#2b3137] shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] rounded-full hover:scale-110 transition duration-300">
                      Live
                    </div>
                  </a>
                </div>
              </div>
              <p className="mt-2 sm:leading-relaxed sm:text-base sm:text-gray-700 sm:font-normal text-xs font-medium text-gray-500 leading-5 darktext-white/70 line-clamp-4">
                {description}
              </p>
              <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                {tags.map((tag, index) => (
                  <li
                    className="bg-gray-700 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full darktext-white/70 hover:bg-gray-950 transition"
                    key={index}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <Image
              src={imageUrl}
              alt="Project I worked on"
              quality={75}
              className={`absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 ${
                index % 2 !== 0
                  ? "group-hover:translate-x-3 group-hover:translate-y-3 group-hover:rotate-2 right-[initial] -left-40"
                  : ""
              }`}
            />
          </div>
        </article>
      </motion.div>
      <div className="sm:hidden">
        <article className="relative">
          <div
            className={`group bg-gray-50 bg-opacity-80 max-w-[42rem] border-2 border-white rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-opacity-100 transition ${
              index % 2 !== 0 ? "sm:pl-8" : ""
            } darktext-white darkbg-white/10 darkhover:bg-white/20`}>
            <div
              className={`pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full ${
                index % 2 !== 0 ? "sm:ml-[18rem]" : ""
              }`}>
              <div className="flex items-center gap-x-4">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <div className="flex items-center gap-x-2 sm:gap-x-4">
                  <a href={gitRepo as string} target="_blank">
                    <div className=" border-2 border-[#2b3137] shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] rounded-full hover:scale-110 transition duration-300">
                      <BsGithub size={24} fill="2b3137" />
                    </div>
                  </a>
                  <a href={live as string} target="_blank">
                    <div className="px-2 py-0.5 text-sm border-2 border-[#2b3137] shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] rounded-full hover:scale-110 transition duration-300">
                      Live
                    </div>
                  </a>
                </div>
              </div>
              <p className="mt-2 sm:leading-relaxed sm:text-base sm:text-gray-700 sm:font-normal text-xs font-medium text-gray-500 leading-5 darktext-white/70 line-clamp-4">
                {description}
              </p>
              <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                {tags.map((tag, index) => (
                  <li
                    className="bg-gray-700 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full darktext-white/70 hover:bg-gray-950 transition"
                    key={index}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <Image
              src={imageUrl}
              alt="Project I worked on"
              quality={75}
              className={`absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 ${
                index % 2 !== 0
                  ? "group-hover:translate-x-3 group-hover:translate-y-3 group-hover:rotate-2 right-[initial] -left-40"
                  : ""
              }`}
            />
          </div>
        </article>
      </div>
    </>
  );
};

export default ProjectCard;
