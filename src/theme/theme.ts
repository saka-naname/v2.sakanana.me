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
          50: { value: "#F5F0F0" },
          100: { value: "#E2D6D5" },
          200: { value: "#CFBBBA" },
          300: { value: "#BCA09E" },
          400: { value: "#AA8583" },
          500: { value: "#976B68" },
          600: { value: "#795553" },
          700: { value: "#5B403E" },
          800: { value: "#3C2B2A" },
          900: { value: "#1E1515" },
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
