"use client";
import React from "react";
import { IoIosArrowUp } from "react-icons/io";

import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/contexts/active-section-context";

const ScrollToTop = () => {
  const { activeSection } = useActiveSectionContext();
  if (
    activeSection !== "Projects" &&
    activeSection !== "Skills" &&
    activeSection !== "Experience" &&
    activeSection !== "Contact"
  ) {
    return null;
  }

  return (
    <motion.article
      className="sm:hidden fixed bottom-4 right-4 z-[999]"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}>
      <button
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className="p-1.5 bg-gray-50 bg-opacity-80 border-2 border-white rounded-full flex justify-center items-center shadow-lg shadow-black/[0.1]">
        <IoIosArrowUp size={20} />
      </button>
    </motion.article>
  );
};

export default ScrollToTop;
