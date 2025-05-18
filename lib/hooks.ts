import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/contexts/active-section-context";
import { SectionName } from "./types";

export function useSectionInView(
  sectionName: SectionName,
  threshold: number | number[]
) {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold,
  });
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
