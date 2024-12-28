"use client";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import type {ThemeProviderProps} from "../../node_modules/next-themes/dist/index";
import {useEffect, useState} from "react";

export function ThemeProvider({children, ...props}: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <NextThemesProvider attribute="class" defaultTheme="light" {...props}>
      {children}
    </NextThemesProvider>
  );
}
