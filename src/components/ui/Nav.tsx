import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  LinkProps,
} from "@chakra-ui/react";
import { Link } from "./Link";

type NavProps = {
  showBg?: boolean;
};

const navLinkStyles: LinkProps = {
  color: "white",
  focusRing: "none",
  _focusVisible: {
    textDecoration: "underline",
    textDecorationColor: "whiteAlpha.500",
    textUnderlineOffset: "3px",
  },
};

export const Nav = (props: NavProps) => {
  const { showBg = true } = props;

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
            <Link href="/" {...navLinkStyles}>
              <Heading
                size={{
                  base: "xl",
                  md: "2xl",
                }}
              >
                sakanana.me
              </Heading>
            </Link>
            <HStack hideBelow="md">
              <Link href="/hoge" {...navLinkStyles}>
                <Heading size="xl">Hoge</Heading>
              </Link>
            </HStack>
          </HStack>
        </Container>
        <Box
          bg="primary.solid"
          pos="fixed"
          zIndex="-1"
          top={showBg ? "0" : "-16"}
          left="0"
          w="full"
          h="16"
          transition="top .4s ease-out"
        ></Box>
      </Flex>
    </>
  );
};
