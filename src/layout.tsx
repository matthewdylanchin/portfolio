import "./index.css";
import { ThemeProvider } from "./other-Components/theme-provider";
import { ModeToggle } from "./other-Components/mode-toggle";
import React from "react";

export const metadata = {
  title: "Matthew Dylan Chin - Software Engineer",
  description: "Portfolio of Matthew Dylan Chin, Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>
      {children}
    </ThemeProvider>
  );
}
