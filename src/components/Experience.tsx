import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Front-end Web Developer",
      company: "Uranus Link",
      location: "Syria",
      period: "2024 - Present",
      type: "Full-time",
      description:
        "Developed and maintained modern web applications using React, TypeScript, and modern development practices. Collaborated with cross-functional teams to deliver high-quality user experiences.",
      technologies: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Redux Toolkit",
        "Redux Toolkit Query",
        "React Query",
        "Material UI",
      ],
      current: true,
    },
    {
      title: "Frontend Developer",
      company: "Idea Code Reality",
      location: "Syria",
      period: "2024 - 2024",
      type: "Full-time",
      description:
        "Built responsive web applications and interactive user interfaces. Focused on performance optimization and accessibility standards while working closely with design and backend teams.",
      technologies: [
        "React",
        "JavaScript",
        "TypeScript",
        "CSS3",
        "HTML5",
        "Git",
        "Tailwind CSS",
        "React Query",
      ],
      current: false,
    },
  ];

  const education = [
    {
      degree: "Bachelor's Degree in Information Systems Engineering",
      institution: "Syrian Virtual University (SVU)",
      location: "Syria",
      period: "2021 - 2026",
      description:
        "Comprehensive study of software engineering principles, database management, system analysis, and web development technologies.",
      gpa: "3.3/4.0",
    },
  ];

  return (
    <section id="experience" className="py-20 md:px-6 px-4 bg-darker-surface">
      <div className="container mx-auto md:px-9 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground mx-auto">
            My professional journey and educational background
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-primary mb-8 flex items-center">
              <Building className="mr-3 h-6 w-6" />
              Professional Experience
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={exp.company}
                    className="relative animate-slide-in-left"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-2 w-4 h-4 rounded-full border-2 ${
                        exp.current
                          ? "bg-primary border-primary shadow-electric"
                          : "bg-background border-border"
                      }`}
                    ></div>

                    <Card className="ml-12 bg-gradient-card border-border hover:shadow-card transition-all duration-300">
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <CardTitle className="text-xl text-foreground">
                            {exp.title}
                          </CardTitle>
                          {exp.current && (
                            <Badge className="bg-gradient-primary text-primary-foreground w-fit">
                              Current
                            </Badge>
                          )}
                        </div>
                        <CardDescription className="space-y-2">
                          <div className="flex items-center text-primary font-medium">
                            <Building className="mr-2 h-4 w-4" />
                            {exp.company}
                          </div>
                          <div className="flex items-center text-muted-foreground text-sm">
                            <Calendar className="mr-2 h-4 w-4" />
                            {exp.period}
                            <span className="mx-2">•</span>
                            <MapPin className="mr-1 h-4 w-4" />
                            {exp.location}
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground mb-4">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
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
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-primary mb-8 flex items-center">
              <svg
                className="mr-3 h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
              </svg>
              Education
            </h3>

            {education.map((edu, index) => (
              <Card
                key={edu.institution}
                className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 animate-slide-in-right"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">
                    {edu.degree}
                  </CardTitle>
                  <CardDescription className="space-y-2">
                    <div className="flex items-center text-primary font-medium">
                      <Building className="mr-2 h-4 w-4" />
                      {edu.institution}
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="mr-2 h-4 w-4" />
                      {edu.period}
                      <span className="mx-2">•</span>
                      <MapPin className="mr-1 h-4 w-4" />
                      {edu.location}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-4">{edu.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">GPA:</span>
                    <span className="text-sm font-medium text-primary">
                      {edu.gpa}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Certifications Section */}
            <Card
              className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 animate-slide-in-right"
              style={{ animationDelay: "0.4s" }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  Certifications & Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">React & TypeScript</span>
                    <Badge variant="secondary" className="bg-light-surface">
                      Advanced
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">
                      Modern JavaScript (ES6+)
                    </span>
                    <Badge variant="secondary" className="bg-light-surface">
                      Expert
                    </Badge>
                  </div>
                  {/* <div className="flex justify-between items-center">
                    <span className="font-medium">UI/UX Design Principles</span>
                    <Badge variant="secondary" className="bg-light-surface">
                      Intermediate
                    </Badge>
                  </div> */}
                  <div className="flex justify-between items-center">
                    <span className="font-medium">
                      Performance Optimization
                    </span>
                    <Badge variant="secondary" className="bg-light-surface">
                      Advanced
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
