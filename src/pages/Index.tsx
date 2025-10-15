import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="py-8 px-6 bg-darker-surface border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Mohannad Alsaker. Built with React,
            TypeScript & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
