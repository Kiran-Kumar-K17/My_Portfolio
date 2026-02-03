import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { devOpsPipeline } from "@/lib/data";
import {
  Code,
  Package,
  TestTube,
  Shield,
  Rocket,
  Activity,
  ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Code,
  Package,
  TestTube,
  Shield,
  Rocket,
  Activity,
};

const DevOpsLab = () => {
  return (
    <section id="devops" className="section">
      <div className="container-custom">
        <SectionHeader
          title="DevOps Lab"
          subtitle="A visual walkthrough of my CI/CD pipeline workflow"
        />

        {/* Pipeline Visualization */}
        <div className="relative">
          {/* Desktop Pipeline */}
          <div className="hidden lg:flex items-center justify-between gap-4">
            {devOpsPipeline.map((stage, index) => {
              const Icon = iconMap[stage.icon] || Code;

              return (
                <motion.div
                  key={stage.stage}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="flex-1 relative"
                >
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-card border border-border rounded-xl p-6 text-center relative z-10"
                  >
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4"
                    >
                      <Icon className="w-7 h-7 text-primary" />
                    </motion.div>
                    <h3 className="font-bold text-lg mb-2">{stage.stage}</h3>
                    <p className="text-sm text-muted-foreground">
                      {stage.description}
                    </p>
                  </motion.div>

                  {/* Arrow connector */}
                  {index < devOpsPipeline.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                      className="absolute -right-4 top-1/2 -translate-y-1/2 z-20"
                    >
                      <ArrowRight className="w-6 h-6 text-primary pipeline-flow" />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Pipeline */}
          <div className="lg:hidden space-y-4">
            {devOpsPipeline.map((stage, index) => {
              const Icon = iconMap[stage.icon] || Code;

              return (
                <motion.div
                  key={stage.stage}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="relative">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    {index < devOpsPipeline.length - 1 && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-14 w-0.5 h-8 bg-border" />
                    )}
                  </div>
                  <div className="flex-1 pb-6">
                    <h3 className="font-bold text-lg mb-1">{stage.stage}</h3>
                    <p className="text-sm text-muted-foreground">
                      {stage.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Additional Visual: Infrastructure Flow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-card border border-border rounded-xl p-8"
        >
          <h3 className="text-xl font-bold text-center mb-8">
            Infrastructure as Code Flow
          </h3>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Define</h4>
              <p className="text-sm text-muted-foreground">
                Infrastructure defined in Terraform HCL configuration files
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Plan</h4>
              <p className="text-sm text-muted-foreground">
                Review changes before applying with terraform plan
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Apply</h4>
              <p className="text-sm text-muted-foreground">
                Provision cloud resources automatically and consistently
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DevOpsLab;
