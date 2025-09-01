import { Card, CardContent } from "./ui/card";

export function Projects() {
  const projects = [
    { title: "IRC Server (ft_irc)", description: "Built a multi-client IRC server in C++ with command parsing, connection multiplexing, and real-time messaging.", technologies: ["C++", "Networking", "Sockets", "kqueue"], githubUrl: "https://github.com/your-repo/ft_irc" },
    { title: "Astro Pong (ft_transcendence)", description: "Online multiplayer Pong game with matchmaking, chat, and real-time notifications. Backend with Django, frontend with React + Vite.", technologies: ["Django", "DRF", "React", "Vite", "WebSockets", "Docker"], githubUrl: "https://github.com/your-repo/ft_transcendence" },
    { title: "Inception", description: "Containerized web service infrastructure with Docker & Docker-Compose. Configured Nginx, MariaDB, Redis, WordPress, Grafana.", technologies: ["Docker", "Nginx", "MariaDB", "Redis", "Grafana"], githubUrl: "https://github.com/your-repo/inception" },
    { title: "cub3D", description: "Raycasting 3D engine inspired by Wolfenstein 3D. Implemented mini graphics engine with wall projection, textures, minimap, and player movement using the MLX library.", technologies: ["C", "Raycasting", "Math", "MLX", "Parsing"], githubUrl: "https://github.com/your-repo/cub3D" },
    { title: "minishell", description: "Unix-like shell supporting pipes, redirections, heredocs, environment variable expansion, builtins, and proper signal handling.", technologies: ["C", "Unix", "Signals", "Parsing", "Processes"], githubUrl: "https://github.com/your-repo/minishell" },
    { title: "NetPractice", description: "Interactive networking exercise configuring IP addressing & routing tables across small topologies. Strengthened understanding of subnetting and packet routing logic.", technologies: ["Networking", "Subnetting", "IP", "Routing"], githubUrl: "https://github.com/your-repo/netpractice" },
    { title: "push_swap", description: "Optimized stack-based sorting program producing minimal instruction sequences (push, swap, rotate) for arbitrary integer sets.", technologies: ["C", "Algorithms", "Sorting", "Stacks", "Data Structures"], githubUrl: "https://github.com/your-repo/push_swap" },
    { title: "fract-ol", description: "Real-time fractal renderer (Mandelbrot, Julia) with smooth zooming, pan, and dynamic color palettes using the MiniLibX graphics library.", technologies: ["C", "Graphics", "MLX", "Math", "Fractals"], githubUrl: "https://github.com/your-repo/fract-ol" }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Card key={i} className="shadow-md hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{p.description}</p>
                <p className="text-xs mt-3 text-muted-foreground/70">{p.technologies.join(', ')}</p>
                <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="text-primary text-sm mt-4 inline-block font-medium">View Project →</a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}