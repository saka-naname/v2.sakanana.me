import { BlogMatter } from "@/types/article";
import { getArticleMatters } from "@/utils/article";
import {
  Box,
  Card,
  Center,
  Container,
  Flex,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { Metadata } from "next";
import Image from "next/image";
import path from "path";

export const metadata: Metadata = {
  title: "Blog | sakanana.me",
  alternates: {
    canonical: "https://sakanana.me/blog",
  },
};

const BlogIndexPage = async () => {
  const articles = (
    await getArticleMatters<BlogMatter>(
      path.resolve(process.cwd(), "src", "articles", "blog"),
    )
  )
    .filter((article) => !article.secret)
    .toSorted((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));

  return (
    <>
      <Box minH="100vh" pt="24" bg="bg.emphasized">
        <Container>
          <Flex
            direction="column"
            rounded="lg"
            w="full"
            bg="bg"
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
              Blog
            </Heading>
            {articles.length === 0 && <Center>記事がありません</Center>}
            <SimpleGrid columns={[1, null, 2, null, 3]} gap={["4", null, "8"]}>
              {articles.map((article) => (
                <Card.Root
                  key={article.title}
                  variant="outline"
                  overflow="clip"
                  size="sm"
                  flexDirection={["row", null, "column"]}
                  h={["24", null, "unset"]}
                >
                  <Box
                    w={["auto", null, "full"]}
                    h={["full", null, "auto"]}
                    aspectRatio="golden"
                    bg="bg.muted"
                    display={{
                      base: "none",
                      sm: "block",
                    }}
                  >
                    {article.image && (
                      <Image
                        src={article.image}
                        alt={article.title}
                        width={415}
                        height={256}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    )}
                  </Box>
                  <Card.Body gap="2">
                    <Card.Title lineClamp="1">{article.title}</Card.Title>
                    <Card.Description lineClamp="1">
                      {article.description}
                    </Card.Description>
                  </Card.Body>
                </Card.Root>
              ))}
            </SimpleGrid>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default BlogIndexPage;
