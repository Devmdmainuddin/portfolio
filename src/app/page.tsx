"use client";
import {Moon, Sun} from "lucide-react";
import {useTheme} from "next-themes";
import {Button} from "@/components/ui/button";
import {useEffect, useState} from "react";
import Contact from "@/components/shared/Contact";
import Hero from "@/components/shared/Hero";
import About from "./(public)/about/page";

export default function Home() {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Hero />
      <About/>
      <Contact />
      <Button
        variant="outline"
        size="icon"
        aria-label="Toggle Theme"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? (
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        ) : (
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        )}
      </Button>
    </div>
  );
}
