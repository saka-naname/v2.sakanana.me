"use client";

import { usePathname } from "next/navigation";
import { Nav } from "./Nav";
import { useCallback, useEffect, useState } from "react";
export const NavBar = () => {
  const pathname = usePathname();
  const isRoot = pathname === "/";

  const [isBgVisible, setIsBgVisible] = useState(true);

  const toggleBgVisible = useCallback(() => {
    setIsBgVisible(!isRoot || window.innerHeight * 0.2 < window.scrollY);
  }, [isRoot, setIsBgVisible]);

  useEffect(() => {
    window.addEventListener("scroll", toggleBgVisible);
    return () => window.removeEventListener("scroll", toggleBgVisible);
  }, [toggleBgVisible]);

  useEffect(() => {
    toggleBgVisible();
  }, [toggleBgVisible, isRoot]);

  return (
    <>
      <Nav showBg={isBgVisible} />
    </>
  );
};
