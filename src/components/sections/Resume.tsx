import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { personalInfo, resumeContent } from "@/lib/data";
import { Download, CheckCircle } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="section section-alt">
      <div className="container-custom">
        <SectionHeader title="Resume" />

        <div className="max-w-3xl mx-auto">
          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground mb-8"
          >
            {resumeContent.summary}
          </motion.p>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-xl p-6 mb-8"
          >
            <ul className="grid gap-3 sm:grid-cols-2">
              {resumeContent.highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Download Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <a
              href={personalInfo.resumeUrl}
              download
              className="btn-primary inline-flex items-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
