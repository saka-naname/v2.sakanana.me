"use client";

import { AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "motion/react";

export default function MotionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
