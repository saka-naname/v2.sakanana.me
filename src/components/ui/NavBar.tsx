"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  LinkProps,
  Separator,
  Span,
  Stack,
} from "@chakra-ui/react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Link } from "./Link";
import { motion } from "motion/react";

const navLinkStyles: LinkProps = {
  color: "white",
  focusRing: "none",
  _focusVisible: {
    textDecoration: "underline",
    textDecorationColor: "primary.50",
    textUnderlineOffset: "3px",
  },
  _hover: {
    textDecoration: "underline",
    textDecorationColor: "primary.50",
    textUnderlineOffset: "3px",
  },
};

export const NavBar = () => {
  const pathname = usePathname();
  const isRoot = pathname === "/";

  const [isBgVisible, setIsBgVisible] = useState(false);
  const [open, setOpen] = useState(false);

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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <Flex
        inline
        alignItems="center"
        pos="fixed"
        zIndex="banner"
        top="0"
        left="0"
        w="full"
        h="16"
      >
        <Container>
          <HStack justify="space-between">
            <Box>
              <Link
                href="/"
                pointerEvents="auto"
                onClick={() => setOpen(false)}
                {...navLinkStyles}
              >
                <Heading
                  size={{
                    base: "xl",
                    md: "2xl",
                  }}
                >
                  sakanana.me
                </Heading>
              </Link>
            </Box>
            <Box>
              <HStack hideBelow="md" fontSize="xl" fontWeight="bold" gap="8">
                <Link href="/about" {...navLinkStyles}>
                  About
                </Link>
                <Separator
                  orientation="vertical"
                  height="4"
                  borderColor="white"
                />
                <Link href="https://v1.sakanana.me/blog" {...navLinkStyles}>
                  Blog<Span fontSize="xs">(v1)</Span>
                </Link>
              </HStack>
              <Box
                pos="fixed"
                zIndex="skipNav"
                top="0"
                left="0"
                w="full"
                pointerEvents="none"
                hideFrom="md"
              >
                <Container>
                  <Flex h="16" flexDir="row-reverse" alignItems="center">
                    <IconButton
                      variant="outline"
                      color="white"
                      borderColor="whiteAlpha.500"
                      pointerEvents="auto"
                      _hover={{
                        bg: "transparent",
                      }}
                      _focus={{
                        bg: "transparent",
                      }}
                      aria-label="Toggle menu"
                      onClick={() => setOpen(!open)}
                    >
                      {open ? <IconX /> : <IconMenu2 />}
                    </IconButton>
                  </Flex>
                </Container>
              </Box>
            </Box>
          </HStack>
        </Container>
        <Box
          bg={{ base: "secondary.900", _dark: "gray.900" }}
          pos="absolute"
          zIndex="-1"
          top={isBgVisible ? "0" : "-16"}
          left="0"
          w="full"
          h="16"
          transition="top .25s ease"
        ></Box>
        <Box
          pos="absolute"
          zIndex="-2"
          top="0"
          left="0"
          w="full"
          h="100svh"
          pointerEvents="none"
        >
          <motion.div
            initial={false}
            animate={open ? "open" : "closed"}
            transition={{ duration: 0.42, ease: "circOut" }}
            variants={{
              open: {
                y: "0svh",
              },
              closed: {
                y: "-100svh",
              },
            }}
          >
            <Box
              bg={{ base: "secondary.900", _dark: "gray.900" }}
              w="full"
              h="100svh"
              p="8"
              pt="20"
              pointerEvents="auto"
            >
              <motion.div
                initial={false}
                animate={open ? "open" : "closed"}
                variants={{
                  open: {
                    opacity: 1,
                  },
                  closed: {
                    opacity: 0,
                  },
                }}
                transition={{ duration: 0.42, ease: "circIn" }}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <Stack w="full" h="full" fontSize="2xl" fontWeight="bold">
                  <Link href="/about" color="white">
                    About
                  </Link>
                  <Separator />
                  <Link href="https://v1.sakanana.me/blog" color="white">
                    Blog <Span fontSize="xs">(v1)</Span>
                  </Link>
                </Stack>
              </motion.div>
            </Box>
          </motion.div>
        </Box>
      </Flex>
    </>
  );
};
