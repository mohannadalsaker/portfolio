import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Project Management System",
      description:
        "A fullstack app for organizing projects, assigning tasks, and tracking progress with user roles, real-time updates, and API integration.",
      image: "/api/placeholder/600/400",
      technologies: [
        "React.js",
        "TypeScript",
        "React Query",
        "Zustand",
        "Material UI",
        "Chart js",
        "PostgreSQL",
        "Prisma",
        "Nest.js",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Library Management System",
      description:
        "A fullstack app for managing book inventory and archiving, with secure user authentication and tools for organizing and tracking warehouse operations.",
      image: "/api/placeholder/600/400",
      technologies: [
        "React.js",
        "TypeScript",
        "React Query",
        "Zustand",
        "MongoDB",
        "Mongoosh",
        "Express.js",
        "Bun",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Balsam Tech SaaS Deployment",
      description:
        "This SaaS platform enables medical suppliers to manage a digital storefront, track inventory levels, and process orders through a custom-built warehouse management system.",
      image: "/api/placeholder/600/400",
      technologies: [
        "React.js",
        "TypeScript",
        "RTK",
        "RTK Query",
        "Material UI",
        "Chart js",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Luna Store SaaS E-commerce Dashboard",
      description:
        "Multi-vendor e-commerce dashboard with analytics, inventory management, and order processing capabilities.",
      image: "/api/placeholder/600/400",
      technologies: [
        "React.js",
        "TypeScript",
        "RTK",
        "RTK Query",
        "Material UI",
        "Chart js",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Glowy Salon ERP",
      description:
        "Comprehensive salon management system with appointment scheduling, inventory management, and customer relationship features.",
      image: "/api/placeholder/600/400",
      technologies: [
        "React",
        "TypeScript",
        "RTK",
        "RTK Query",
        "Material UI",
        "Chart js",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "QiranBook Website & Dashboard",
      description:
        "QiranBook is a premier Muslim matrimonial platform that helps users find compatible partners through advanced search filters, secure authentication, and real-time communication features like chat and notifications.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Axios", "Tailwind CSS"],
      liveUrl: "https://www.qiranbook.com/#/",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Car Showcase",
      description:
        "Interactive car showcase application with detailed specifications, comparison tools, and advanced filtering.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://car-showcase-nine-eta.vercel.app/",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Game Hub",
      description:
        "Gaming platform with game discovery, reviews, ratings, and community features for gamers.",
      image: "/api/placeholder/600/400",
      technologies: [
        "React",
        "TypeScript",
        "Chakra UI",
        "React Query",
        "RAWG API",
      ],
      liveUrl: "https://game-hub-silk-six.vercel.app/",
      githubUrl: "#",
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
      className="md:py-20 py-10 md:px-6 px-4 bg-background"
    >
      <div className="container mx-auto md:px-9 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground mx-auto">
            A collection of my recent work showcasing modern web development
            practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group bg-gradient-card border-border hover:shadow-card transition-all duration-500 hover:-translate-y-2 ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-4xl font-bold text-primary/50">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  {project.featured && (
                    <Badge className="bg-gradient-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-light-surface hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <a
              href="https://github.com/mohannadsaker"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
