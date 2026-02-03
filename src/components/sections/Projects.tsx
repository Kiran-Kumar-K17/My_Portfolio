import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/lib/data";
import { ExternalLink, Github, CheckCircle } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="section section-alt">
      <div className="container-custom">
        <SectionHeader
          title="Featured Projects"
          subtitle="Real-world solutions I've built to solve complex problems"
        />

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl overflow-hidden card-hover"
            >
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground">{project.problem}</p>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Solution & Architecture */}
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
                      Solution
                    </h4>
                    <p className="text-foreground text-sm mb-4">
                      {project.solution}
                    </p>

                    <h4 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
                      Architecture
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {project.architecture}
                    </p>
                  </div>

                  {/* Tech Stack & Highlights */}
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary text-sm rounded-full text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <h4 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
