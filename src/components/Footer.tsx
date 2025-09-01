import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-lg font-semibold mb-2">Let's connect</h3>
            <p className="text-muted-foreground mb-4">Feel free to reach out or follow my work.</p>
            <div className="flex gap-4">
              <a href="https://github.com/Da-ghost42" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors"><Github className="h-5 w-5" /></a>
              <a href="https://linkedin.com/in/mohamed-boutuil" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="mailto:mboutuil@gmail.com" aria-label="Email" className="text-muted-foreground hover:text-foreground transition-colors"><Mail className="h-5 w-5" /></a>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">© {currentYear} Mohamed Boutuil. Built with React & Tailwind.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}