import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: "var(--font-zen-kaku-gothic-new)" },
        body: { value: "var(--font-zen-kaku-gothic-new)" },
      },
      colors: {
        primary: {
          50: { value: "#F3F5F6" },
          100: { value: "#E5E8EB" },
          200: { value: "#CED4DA" },
          300: { value: "#B4BDC6" },
          400: { value: "#9CA9B4" },
          500: { value: "#8292A0" },
          600: { value: "#6C7E8E" },
          700: { value: "#586774" },
          800: { value: "#3B454E" },
          900: { value: "#1D2126" },
          950: { value: "#0F1214" },
        },
        secondary: {
          50: { value: "#F3F5F6" },
          100: { value: "#E5E8EB" },
          200: { value: "#CED4DA" },
          300: { value: "#B4BDC6" },
          400: { value: "#9CA9B4" },
          500: { value: "#8292A0" },
          600: { value: "#6C7E8E" },
          700: { value: "#586774" },
          800: { value: "#3B454E" },
          900: { value: "#1D2126" },
          950: { value: "#0F1214" },
        },
      },
    },
    semanticTokens: {
      colors: {
        primary: {
          solid: { value: "{colors.primary.500}" },
          contrast: { value: "{colors.primary.100}" },
          fg: { value: "{colors.primary.700}" },
          muted: { value: "{colors.primary.100}" },
          subtle: { value: "{colors.primary.200}" },
          emphasized: { value: "{colors.primary.300}" },
          focusRing: { value: "{colors.primary.500}" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
