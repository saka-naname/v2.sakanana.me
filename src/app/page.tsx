import { BusinessCard } from "@/components/ui/BusinessCard";
import HeroImage from "@/components/ui/HeroImage";
import { Box } from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  appleWebApp: {
    capable: true,
  },
  alternates: {
    canonical: "https://sakanana.me",
  },
};

export default function Home() {
  return (
    <main>
      <Box h="100svh" overflow="hidden" pos="relative">
        <HeroImage />
        <BusinessCard />
      </Box>
    </main>
  );
}
