import { BusinessCard } from "@/components/ui/BusinessCard";
import { Box, Container } from "@chakra-ui/react";

export default function Hoge() {
  return (
    <Box minH="100vh" bg="secondary.700">
      <Container>
        <BusinessCard />
      </Container>
    </Box>
  );
}
