import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import NextLink from "next/link";

export const Link = (
  props: Omit<ChakraLinkProps, "asChild"> & {
    href: string;
    children?: React.ReactNode | undefined;
  },
) => {
  const { href, children, ...rest } = props;
  return (
    <ChakraLink {...rest} asChild>
      <NextLink href={href}>{children}</NextLink>
    </ChakraLink>
  );
};
