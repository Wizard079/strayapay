import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { AuroraBackground } from "@/components/ui/aurora-background";
interface RootLayoutProps {
  children: React.ReactNode;
}

const inter = Inter({
  subsets: ['latin'], 
  preload: true,
});
export const metadata: Metadata = {
  title: "Strayapay",
  description: "a payment gateway for all",
};
 
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={`${inter.className} `}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <AuroraBackground>
            {children}
            </AuroraBackground>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}