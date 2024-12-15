import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import NextLink from "next/link";

export const Link = (
  props: Omit<ChakraLinkProps, "asChild"> & {
    href: string;
    children?: React.ReactNode | undefined;
    prefetch?: boolean | null;
  },
) => {
  const { href, children, prefetch, ...rest } = props;
  return (
    <ChakraLink {...rest} asChild>
      <NextLink href={href} prefetch={prefetch}>
        {children}
      </NextLink>
    </ChakraLink>
  );
};
