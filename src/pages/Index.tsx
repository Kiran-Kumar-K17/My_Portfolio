import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import DevOpsLab from "@/components/sections/DevOpsLab";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <DevOpsLab />
      <Resume />
      <Contact />
    </main>
  );
};

export default Index;
