import { Image } from "@/components/ui/Image";
import { LinkButton } from "@/components/ui/LinkButton";
import {
  Box,
  Card,
  CardRootProps,
  Flex,
  FlexProps,
  HStack,
  ImageProps,
  Portal,
  Tooltip,
} from "@chakra-ui/react";
import {
  IconBrandBluesky,
  IconBrandGithub,
  IconMail,
} from "@tabler/icons-react";
import { Metadata } from "next";

const heroImageStyles: ImageProps = {
  w: "full",
  h: "100svh",
  objectFit: "cover",
  objectPosition: {
    base: "29% 35%",
    sm: "50% 35%",
    md: "34% 35%",
    lg: "40% 35%",
    xl: "45% 35%",
    "2xl": "0 35%",
  },
  zoom: {
    smOnly: "1.7",
  },
  mt: {
    smOnly: "-6",
  },
  pos: "absolute",
  inset: "0",
};

const businessCardRootStyles: CardRootProps = {
  variant: "elevated",
  size: {
    base: "sm",
    md: "md",
  },
  w: {
    base: "full",
    sm: "64",
    md: "96",
  },
};

const businessCardContainerStyles: FlexProps = {
  w: "full",
  h: "100svh",
  pos: "absolute",
  left: "0",
  top: "0",
  p: "4",
  pr: {
    smOnly: "16",
  },
  justifyContent: {
    base: "flex-start",
    sm: "flex-end",
    md: "flex-start",
  },
  alignItems: {
    base: "flex-end",
    sm: "center",
    md: "flex-end",
  },
};

export const metadata: Metadata = {
  appleWebApp: {
    capable: true,
  },
};

export default function Home() {
  return (
    <main>
      <Box h="100svh" overflow="hidden" pos="relative">
        <Box h="100svh">
          <Image
            src="/images/0004_hero.webp"
            srcWidth={1920}
            srcHeight={1200}
            alt="Hero image"
            quality={100}
            priority
            {...heroImageStyles}
          />
          <Image
            src="/images/0004_hero_wosl.webp"
            srcWidth={1920}
            srcHeight={1200}
            alt="Hero image"
            quality={100}
            priority
            display={{
              base: "none",
              _dark: "block",
            }}
            {...heroImageStyles}
          />
        </Box>

        <BusinessCard />
      </Box>
    </main>
  );
}

const BusinessCard = () => {
  return (
    <Flex {...businessCardContainerStyles}>
      <Card.Root {...businessCardRootStyles}>
        <Card.Body>
          <Card.Title>さか (saka-naname)</Card.Title>
          <Card.Description>Student / Web Developer</Card.Description>
          <Card.Footer justifyContent="flex-end" p="0" mt="4">
            <HStack gap="2">
              <BusinessCardIconButton
                href="https://bsky.app/profile/sakanana.me"
                title="Bluesky"
                ariaLabel="See profile on Bluesky"
              >
                <IconBrandBluesky />
              </BusinessCardIconButton>
              <BusinessCardIconButton
                href="https://github.com/saka-naname"
                title="GitHub"
                ariaLabel="See profile on GitHub"
              >
                <IconBrandGithub />
              </BusinessCardIconButton>
              <BusinessCardIconButton
                href="mailto:reisuicupsoup@gmail.com"
                title="Contact"
                ariaLabel="Contact via email"
              >
                <IconMail />
              </BusinessCardIconButton>
            </HStack>
          </Card.Footer>
        </Card.Body>
      </Card.Root>
    </Flex>
  );
};

const BusinessCardIconButton = (props: {
  href: string;
  title?: string;
  children?: React.ReactNode | undefined;
  ariaLabel?: string;
}) => {
  return (
    <Tooltip.Root
      positioning={{ placement: "top" }}
      disabled={!props.title}
      openDelay={200}
      closeDelay={200}
    >
      <Tooltip.Trigger asChild>
        <LinkButton
          href={props.href}
          variant="outline"
          w="10"
          h="10"
          prefetch={false}
          aria-label={props.ariaLabel}
        >
          {props.children}
        </LinkButton>
      </Tooltip.Trigger>
      <Portal>
        <Tooltip.Positioner>
          <Tooltip.Content>{props.title}</Tooltip.Content>
        </Tooltip.Positioner>
      </Portal>
    </Tooltip.Root>
  );
};
