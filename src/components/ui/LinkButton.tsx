import { Button, ButtonProps } from "@chakra-ui/react";
import NextLink from "next/link";

export const LinkButton = (
  props: Omit<ButtonProps, "asChild"> & {
    href: string;
    children?: React.ReactNode | undefined;
  },
) => {
  const { href, children, ...rest } = props;
  return (
    <Button {...rest} asChild>
      <NextLink href={href}>{children}</NextLink>
    </Button>
  );
};
