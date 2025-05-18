import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Header from "@/components/header";
import MobileMenu from "@/components/mobile-menu";
import ActiveSectionContextProvider from "@/contexts/active-section-context";

import "./globals.css";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arvind | Portfolio",
  description:
    "Arvind Kumar, Full Stack Developer, Web Designer, Software Engineer",
    
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative`}>
        <div className="bg-[#c6d4ff] darkbg-[#676394] blur-[15rem] fixed -z-10 rounded-full w-[30rem] h-[30rem] md:w-[40rem] md:h-[40rem] md:top-[-8rem] top-[-4rem] sm:left-[-8rem] xl:left-[8rem] md:left-[-8rem] left-[-12rem]"></div>
        <div className="bg-[#a8ffe3] darkbg-[#589380] blur-[15rem] fixed -z-10 rounded-full w-[30rem] h-[30rem] md:w-[40rem] md:h-[40rem] md:top-[-8rem] bottom-[-4rem] sm:right-[-8rem] xl:right-[8rem] md:right-[-8rem] right-[-12rem]"></div>

        <ActiveSectionContextProvider>
          <Header />
          <MobileMenu />
          {children}
          <ScrollToTop />
          <Footer />
        </ActiveSectionContextProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
