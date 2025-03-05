import "./index.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/other-Components/theme-provider";
import { ModeToggle } from "@/other-Components/mode-toggle";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Matthew Dylan Chin - Software Engineer",
  description:
    "Portfolio of Usman Zafar, a MERN Stack Developer specializing in full-stack web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="fixed top-4 right-4 z-50">
            <ModeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
