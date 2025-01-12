import { NavBar } from "@/components/ui/NavBar";
import { Provider } from "@/components/ui/Provider";
import { Box } from "@chakra-ui/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New } from "next/font/google";

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ["400", "500", "700"],
  variable: "--font-zen-kaku-gothic-new",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "sakanana.me",
  description: "saka-naname's portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${zenKakuGothicNew.variable}`}
      suppressHydrationWarning
    >
      <body style={{ background: "#586774" }}>
        <Provider>
          <NavBar />
          <Box>{children}</Box>
        </Provider>
        <SpeedInsights />
      </body>
    </html>
  );
}
