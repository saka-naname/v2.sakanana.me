import MotionWrapper from "@/components/ui/MotionWrapper";
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return <MotionWrapper>{children}</MotionWrapper>;
}
