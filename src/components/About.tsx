import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SQL",
    "Tailwind CSS",
    "Material UI",
    "Shadcn UI",
    "React Context API",
    "i18next Language",
    "Redux Toolkit",
    "Redux Toolkit Query",
    "Zustand",
    "React Query",
    "Node.js",
    "Express",
    "Nest js",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Firebase",
    "Git",
    "CI/CD",
    "Chart js",
    "Lazy Loading",
    "Data Visualization",
    "Responsive Design",
    "API Integration",
    "Performance Optimization",
  ];

  return (
    <section id="about" className="py-20 md:px-6 px-4 bg-darker-surface">
      <div className="container mx-auto md:px-9 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground mx-auto">
            Passionate developer with a strong focus on creating exceptional
            user experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-lg text-foreground leading-relaxed">
              I'm a dedicated Front-end Web Developer with expertise in modern
              JavaScript frameworks and a keen eye for UI/UX design. I
              specialize in building scalable, performant web applications that
              deliver exceptional user experiences.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              With strong skills in React, TypeScript, and modern development
              tools, I focus on creating responsive, accessible, and visually
              appealing interfaces. I'm passionate about clean code, performance
              optimization, and staying up-to-date with the latest web
              technologies.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              My experience includes working with state management libraries
              like Redux Toolkit and Zustand, implementing efficient API
              integrations with React Query, and building comprehensive web
              applications from concept to deployment.
            </p>
          </div>

          <Card className="p-8 bg-gradient-card border-border hover:shadow-card transition-all duration-300 animate-slide-in-right">
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-3 py-1 bg-light-surface hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">
                  Frontend Development
                </span>
                <span className="text-sm text-primary">95%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-gradient-primary h-2 rounded-full w-[95%] transition-all duration-1000"></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Performance</span>
                <span className="text-sm text-primary">90%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-gradient-primary h-2 rounded-full w-[90%] transition-all duration-1000"></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">API Integration</span>
                <span className="text-sm text-primary">95%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-gradient-primary h-2 rounded-full w-[95%] transition-all duration-1000"></div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
