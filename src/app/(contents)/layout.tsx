import { Box } from "@chakra-ui/react";

export default function ContentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Box pt="16">{children}</Box>;
}
