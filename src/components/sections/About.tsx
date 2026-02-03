import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { aboutContent } from "@/lib/data";
import { CheckCircle, Terminal, Server, Cloud } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section section-alt">
      <div className="container-custom">
        <SectionHeader
          title="About Me"
          subtitle="Building the backbone of modern applications"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">{aboutContent.headline}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {aboutContent.description}
            </p>

            <ul className="space-y-3">
              {aboutContent.highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right side - Visual cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-card border border-border rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Terminal className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-1">Backend</h4>
              <p className="text-sm text-muted-foreground">APIs & Services</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-card border border-border rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Server className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-1">DevOps</h4>
              <p className="text-sm text-muted-foreground">CI/CD & Automation</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-card border border-border rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-1">Cloud</h4>
              <p className="text-sm text-muted-foreground">AWS & Infrastructure</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-card border border-border rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm0 2.18l8.5 4.9v9.84L12 21.82l-8.5-4.9V7.08L12 2.18z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-1">Linux</h4>
              <p className="text-sm text-muted-foreground">Systems & Admin</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
