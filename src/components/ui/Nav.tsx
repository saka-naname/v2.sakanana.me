import { Container, Flex, Heading, HStack, LinkProps } from "@chakra-ui/react";
import { Link } from "./Link";

type NavProps = {
  enableTransition?: boolean;
  visible?: boolean;
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
  const { enableTransition, visible = true } = props;

  return (
    <Flex
      inline
      alignItems="center"
      bg="primary.solid"
      pos="fixed"
      top={visible ? "0" : "-16"}
      left="0"
      w="full"
      p="4"
      h="16"
      transition={enableTransition ? "top .4s ease-out" : "none"}
    >
      <Container>
        <HStack justify="space-between">
          <Link href="/" {...navLinkStyles}>
            <Heading size="2xl">sakanana.me</Heading>
          </Link>
          <HStack>
            <Link href="/hoge" {...navLinkStyles}>
              <Heading size="xl">Hoge</Heading>
            </Link>
          </HStack>
        </HStack>
      </Container>
    </Flex>
  );
};
