import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Home from "./page";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Hero from "./sections/Hero/page";
import Top from "./sections/Top/page";
import Footer from "./sections/Footer/page";
import Box from "./sections/Box/page";
import Features from "./sections/Feats/page";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className="bg-black">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Home />
          <Top />
          <Box />
          <Features />
          <Hero />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
