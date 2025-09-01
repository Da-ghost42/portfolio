import { Badge } from "./ui/badge";

export function About() {
  const skills = [
    "C", "C++", "Python", "Django", "React.js", "Vite",
    "Docker", "Linux/Unix", "Networking", "Git", "PostgreSQL", "WebSockets"
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Software Engineering student at <b>1337 Coding School (42 Network)</b>. Passionate about
            backend systems, scalable APIs, real-time applications, and DevOps. Skilled in <b>C, C++, Python, Django,
            React.js, and Docker</b>. Focused on solving complex problems, building reliable systems, and collaborating
            on impactful projects.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-6 text-center">Skills</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="px-4 py-2">
                  {skill}
                </Badge>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}