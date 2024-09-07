import { FloatingNav } from "@/components/ui/floating-navbar";
import React from "react";
import { AuroraBackgroundDemo } from "../AuroraBackgroundDemo/page";
import { motion } from "framer-motion";

export function FloatingNavDemo() {
  const [isAuroraCrossed, setIsAuroraCrossed] = React.useState(false);
  const auroraRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsAuroraCrossed(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (auroraRef.current) {
      observer.observe(auroraRef.current);
    }

    return () => {
      if (auroraRef.current) {
        observer.unobserve(auroraRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <FloatingNav navItems={[]} isAuroraCrossed={isAuroraCrossed} />
      </motion.div>
      <motion.div
        className="relative"
        ref={auroraRef}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <AuroraBackgroundDemo />
      </motion.div>
    </div>
  );
}
