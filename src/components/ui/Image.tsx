import {
  Image as ChakraImage,
  ImageProps as ChakraImageProps,
} from "@chakra-ui/react";
import NextImage from "next/image";

export const Image = (
  props: Omit<ChakraImageProps, "asChild"> & {
    srcWidth?: number | `${number}`;
    srcHeight?: number | `${number}`;
    src: string;
    alt: string;
    priority?: boolean;
    loading?: "eager" | "lazy";
    quality?: number;
  },
) => {
  const { srcWidth, srcHeight, src, alt, priority, loading, quality, ...rest } =
    props;
  return (
    <ChakraImage {...rest} asChild>
      <NextImage
        width={srcWidth}
        height={srcHeight}
        src={src}
        alt={alt}
        priority={priority}
        loading={loading}
        quality={quality}
      />
    </ChakraImage>
  );
};
