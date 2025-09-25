import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mhndsaker@gmail.com",
      href: "mailto:mhndsaker@gmail.com",
      description: "Drop me a line anytime",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+963 994 697 185",
      href: "tel:+963994697185",
      description: "Available for calls",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "mohannad-alsaker",
      href: "https://www.linkedin.com/in/mohannad-alsaker-486604254/",
      description: "Let's connect professionally",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "mohannadsaker",
      href: "https://github.com/mohannadsaker",
      description: "Check out my code",
    },
  ];

  return (
    <section id="contact" className="py-20 md:px-6 px-4 bg-background">
      <div className="container mx-auto md:px-9 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground mx-auto">
            Ready to bring your ideas to life? I'm always open to discussing new
            opportunities and exciting projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 animate-slide-in-left">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <Send className="mr-3 h-6 w-6" />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <a
                      key={contact.label}
                      href={contact.href}
                      target={
                        contact.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        contact.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="block p-4 rounded-lg bg-light-surface hover:bg-secondary transition-all duration-300 group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                          <IconComponent className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {contact.label}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-1">
                            {contact.description}
                          </p>
                          <p className="font-medium text-primary">
                            {contact.value}
                          </p>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </CardContent>
            </Card>

            <Card
              className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 animate-slide-in-left"
              style={{ animationDelay: "0.4s" }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <MapPin className="mr-3 h-5 w-5" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">Syria</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Available for remote work worldwide
                </p>
                <div className="mt-4 text-sm text-muted-foreground">
                  <p>🌍 Remote-first mindset</p>
                  <p>⏰ Flexible with time zones</p>
                  <p>💬 Fluent in English & Arabic</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 h-full animate-slide-in-right">
              <CardContent className="p-8 h-full flex flex-col justify-center">
                <div className="text-center space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-foreground">
                      Ready to Start Your Project?
                    </h3>
                    <p className="text-lg text-muted-foreground max-w-lg mx-auto">
                      Whether you need a new website, want to improve an
                      existing application, or have an exciting project in mind,
                      I'd love to hear about it.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
                      <div className="text-center p-4 rounded-lg bg-light-surface">
                        <div className="text-2xl font-bold text-primary">
                          2+
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Years Experience
                        </div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-light-surface">
                        <div className="text-2xl font-bold text-primary">
                          8+
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Projects Completed
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        size="lg"
                        asChild
                        className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-electric"
                      >
                        <a href="mailto:mhndsaker@gmail.com">
                          <Mail className="mr-2 h-5 w-5" />
                          Send Email
                        </a>
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        asChild
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 rounded-full transition-all duration-300"
                      >
                        <a
                          href="https://www.linkedin.com/in/mohannad-alsaker-486604254/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="mr-2 h-5 w-5" />
                          Connect on LinkedIn
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      💡 <strong>Pro tip:</strong> Include details about your
                      project timeline, budget, and specific requirements to get
                      a faster response.
                    </p>
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

export default Contact;
