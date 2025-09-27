import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";

export function Hero() {
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
    <section className="min-h-screen flex items-center justify-center relative" id="hero">
      <div className="container mx-auto px-6 py-32 text-center max-w-4xl">
        <div className="space-y-6">
          <Badge variant="secondary" className="mx-auto w-fit">Available for work</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent">Mohamed Boutuil</span>
          </h1>
          <p className="text-xl text-muted-foreground">Software Engineer</p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Software Engineering student at <b>1337 Coding School (42 Network)</b>. Passionate about backend systems, scalable APIs, real-time applications, and DevOps. Skilled in <b>C, C++, Python, Django, React.js, and Docker</b>. Focused on solving complex problems, building reliable systems, and collaborating on impactful projects.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button asChild>
              {}
              <a href="resume.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Download CV
              </a>
            </Button>
            <Button variant="outline" onClick={() => scrollToSection('projects')}>View Projects</Button>
            <Button variant="outline" onClick={() => scrollToSection('contact')}>Contact</Button>
          </div>
          <div className="flex items-center justify-center gap-4 pt-2">
            {/* Fixed GitHub link */}
            <a href="https://github.com/Da-ghost42" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/mohamed-boutuil" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:mboutuil@gmail.com" aria-label="Email" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </button>
    </section>
  );
}