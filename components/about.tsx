"use client";

import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <section
      ref={ref}
      id="about"
      className="scroll-mt-28 flex flex-col items-center gap-y-4 sm:gap-y-8">
      <motion.div
        className="max-w-xl mt-4 sm:mt-0 flex flex-col gap-y-4 sm:gap-y-8"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.175,
        }}>
        <h1 className="sm:text-2xl text-xl font-bold text-center">About Me</h1>
        <p className="text-center text-sm sm:text-base font-medium leading-loose sm:leading-8 sm:[word-spacing:0.25rem]">
          I specialize in crafting professional websites using{" "}
          <strong>React</strong>, especially <strong>Next.js</strong>. My focus
          lies in delivering <em>seamless user experiences</em> with a keen eye
          for design and functionality. Continuously refining my skills keeps me
          ahead in the digital landscape, ensuring I deliver top-notch results
          that leave a lasting impression.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
