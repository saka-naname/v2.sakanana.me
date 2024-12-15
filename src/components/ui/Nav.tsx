import { Container, Flex, Heading, HStack } from "@chakra-ui/react";
import { Link } from "./Link";

export const Nav = () => {
  return (
    <Flex inline alignItems="center" bg="primary.solid" pos="fixed" top="0" left="0" w="full" p="4" h="16">
      <Container>
        <HStack justify="space-between">
          <Link href="/" color="white">
            <Heading size="2xl">sakanana.me</Heading>
          </Link>
          <HStack>
            Item
          </HStack>
        </HStack>
      </Container>
    </Flex>
  );
};
