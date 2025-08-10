import type { Metadata } from "next";
import "../styles/globals.css";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import {
  OutfitFont,
  MulishFont,
  SyneFont,
  PoppinsFont,
  RobotoFont,
  MontserratFont,
} from "@/utils/fonts";
import { Seo } from "@/components/seo/seo";

export const metadata: Metadata = {
  title: {
    default: "NEUROLOVER",
    template: "%s - NEUROLOVER",
  },
  description: "NEUROLOVER landing page.",
  keywords: "NEUROLOVER, onlyfans, extension",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Seo
        title="NEUROLOVER"
        description="NEUROLOVER landing page."
        keywords="NEUROLOVER, onlyfans, extension"
      />
      <body
        className={`
          ${OutfitFont.variable} 
          ${MulishFont.variable} 
          ${SyneFont.variable}
          ${PoppinsFont.variable}
          ${RobotoFont.variable}
          ${MontserratFont.variable}
        `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
