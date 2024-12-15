import { Image } from "@/components/ui/Image";
import { Box, ImageProps } from "@chakra-ui/react";
import { Metadata } from "next";

const heroImageStyles: ImageProps = {
  w: "full",
  h: "100svh",
  objectFit: "cover",
  objectPosition: {
    base: "29% 35%",
    sm: "32% 35%",
    md: "34% 35%",
    lg: "40% 35%",
    xl: "45% 35%",
    "2xl": "0 35%",
  },
};

export const metadata: Metadata = {
  appleWebApp: {
    capable: true,
  },
};

export default function Home() {
  return (
    <div>
      <main>
        <Box h="100svh">
          <Image
            src="/images/0004_hero.webp"
            srcWidth={1920}
            srcHeight={1200}
            alt="Hero image"
            quality={100}
            priority
            {...heroImageStyles}
          />
        </Box>
        <Box h="100svh" bg="primary.100"></Box>
      </main>
    </div>
  );
}
