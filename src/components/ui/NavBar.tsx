"use client";

import { usePathname } from "next/navigation";
import { Nav } from "./Nav";
import { useCallback, useEffect, useState } from "react";
export const NavBar = () => {
  const pathname = usePathname();
  const isRoot = pathname === "/";

  const [isVisible, setIsVisible] = useState(true);

  const toggleVisible = useCallback(() => {
    setIsVisible(!isRoot || window.innerHeight * 0.2 < window.scrollY);
  }, [isRoot, setIsVisible]);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, [toggleVisible]);

  useEffect(() => {
    toggleVisible();
  }, [toggleVisible, isRoot]);

  return (
    <>
      <Nav visible={isVisible} />
    </>
  );
};
