import { Box, ImageProps } from "@chakra-ui/react";
import { Image } from "./Image";

const heroImageStyles: ImageProps = {
  w: "full",
  h: "100svh",
  objectFit: "cover",
  objectPosition: "30% 35%",
  pos: "absolute",
  inset: "0",
};

export default function HeroImage() {
  return (
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
  );
}
