import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { Logo } from "./Logo";

export function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    try {
      // Check if we're in a browser environment
      if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        return;
      }
      
      const theme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (theme === 'dark' || (!theme && prefersDark)) {
        setIsDark(true);
        document.documentElement.classList.add('dark');
      }
    } catch (error) {
      // Silently handle localStorage access errors
      console.warn('Unable to access localStorage:', error);
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    try {
      if (!isDark) {
        document.documentElement.classList.add('dark');
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('theme', 'dark');
        }
      } else {
        document.documentElement.classList.remove('dark');
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('theme', 'light');
        }
      }
    } catch (error) {
      // Silently handle localStorage access errors
      console.warn('Unable to save theme preference:', error);
    }
  };

  const scrollToSection = (sectionId: string) => {
    try {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      console.warn('Unable to scroll to section:', error);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between min-w-0">
        <Logo className="shrink-0 max-w-full" />
        {/* Added a spacer to avoid name truncation when mobile sheet opens */}
        <div className="flex-1 min-w-0" />
        <nav className="hidden md:flex items-center space-x-8 flex-shrink-0">
          <button 
            onClick={() => scrollToSection('about')}
            className="hover:text-primary transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="hover:text-primary transition-colors"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="hover:text-primary transition-colors"
          >
            Contact
          </button>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="ml-2 sm:ml-4 flex-shrink-0"
        >
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>
    </header>
  );
}