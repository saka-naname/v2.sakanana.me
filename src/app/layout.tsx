import { NavBar } from "@/components/ui/NavBar";
import { Provider } from "@/components/ui/Provider";
import { Box } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New } from "next/font/google";

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ["400", "500", "700"],
  variable: "--font-zen-kaku-gothic-new",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
      <body>
        <Provider>
          <NavBar />

          <Box>{children}</Box>
        </Provider>
      </body>
    </html>
  );
}
