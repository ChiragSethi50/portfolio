import type { Metadata } from "next";
import "./globals.css";
import TorchEffect from "@/components/TorchEffect/TorchEffect";
import Navbar from "@/components/Navbar/Navbar";
import ThemeProviderWrapper from "@/theme/theme-provider";

export const metadata: Metadata = {
  title: "Chirag Sethi",
  description: "Portfolio website of Chirag Sethi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProviderWrapper>
          <TorchEffect />
          <Navbar />
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
