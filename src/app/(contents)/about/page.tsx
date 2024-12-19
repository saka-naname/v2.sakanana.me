import { Image } from "@/components/ui/Image";
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Highlight,
  ListItem,
  ListRoot,
} from "@chakra-ui/react";

export default function Hoge() {
  return (
    <Box minH="100vh" pt="24">
      <Container>
        <Flex
          wrap="wrap"
          rounded="lg"
          w="full"
          bg="white"
          p={{
            base: "4",
            md: "8",
          }}
          gap="8"
        >
          <Heading
            size={{
              base: "2xl",
              md: "4xl",
            }}
            textAlign="start"
            w="full"
          >
            About
          </Heading>
          <Center w="full">
            <Flex wrap="wrap" gapX="8" gapY="4" justifyContent="center">
              <Image
                src="/images/avatar.webp"
                alt="Avatar"
                srcWidth={500}
                srcHeight={500}
                rounded="full"
                width={{
                  base: "32",
                  md: "48",
                }}
                border="4px solid"
                borderColor="secondary.200"
              />
              <Flex direction="column" justify="center" gap="2">
                <Heading
                  size={{
                    base: "xl",
                    md: "3xl",
                  }}
                  smDown={{
                    textAlign: "center",
                  }}
                >
                  <Highlight
                    query="saka-naname"
                    styles={{
                      color: "primary.600",
                      fontSize: {
                        base: "sm",
                        md: "xl",
                      },
                    }}
                  >
                    さか saka-naname
                  </Highlight>
                </Heading>
                <ListRoot>
                  <ListItem>多趣味な情報系学生</ListItem>
                  <ListItem>
                    Webフロントエンドを中心とした開発を行っています
                  </ListItem>
                  <ListItem>自らの手で何かを作り上げるのが好きです</ListItem>
                </ListRoot>
              </Flex>
            </Flex>
          </Center>
        </Flex>
      </Container>
    </Box>
  );
}
