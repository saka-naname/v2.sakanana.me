import { Button, ButtonProps } from "@chakra-ui/react";
import NextLink from "next/link";

export const LinkButton = (
  props: Omit<ButtonProps, "asChild"> & {
    href: string;
    children?: React.ReactNode | undefined;
    prefetch?: boolean | null;
  },
) => {
  const { href, children, prefetch, ...rest } = props;
  return (
    <Button {...rest} asChild>
      <NextLink href={href} prefetch={prefetch}>
        {children}
      </NextLink>
    </Button>
  );
};
