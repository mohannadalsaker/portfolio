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
          <h2 className="text-4xl md:text-5xl font-bold pb-4 bg-gradient-primary bg-clip-text text-transparent">
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
              I'm a dedicated Fullstack Web Developer with a strong foundation
              in modern JavaScript frameworks and a passion for crafting
              seamless user experiences from front to back. I specialize in
              building scalable, performant web applications that integrate
              intuitive UI/UX design with robust backend architecture.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              My frontend expertise includes React, TypeScript, and responsive
              design principles, while my backend experience spans Node.js,
              Express, and API development using REST and GraphQL. I work with
              databases like MongoDB and PostgreSQL, and I’m proficient in
              deploying fullstack apps using platforms like Vercel and Docker.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              I’ve built comprehensive applications from concept to deployment,
              integrating state management tools like Redux Toolkit and Zustand,
              and optimizing data fetching with React Query. Whether it's
              designing clean, accessible interfaces or architecting efficient
              server-side logic, I bring a holistic approach to web development.
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
                <span className="text-sm font-medium">Backend Development</span>
                <span className="text-sm text-primary">70%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-gradient-primary h-2 rounded-full w-[70%] transition-all duration-1000"></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Database</span>
                <span className="text-sm text-primary">75%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-gradient-primary h-2 rounded-full w-[75%] transition-all duration-1000"></div>
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
