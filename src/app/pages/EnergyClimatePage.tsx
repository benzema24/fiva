import { motion } from 'motion/react';
import { Leaf, ArrowRight, Shield, Globe, Zap, Target, CheckCircle2, TrendingUp } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { useNavigate } from 'react-router';
import { EnergyClimateCapabilities } from '@/app/components/EnergyClimateCapabilities';

export function EnergyClimatePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Title */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-2"
          >
            <span className="text-foreground">Core Capabilities</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-24 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8"
          >
            Partnering with organizations worldwide to drive sustainable transformation through renewable energy, climate solutions, and environmental innovation.
          </motion.p>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <EnergyClimateCapabilities />

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
              Why Organizations Choose FIVA
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Trusted by leading organizations for our proven track record in sustainable energy and climate solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Proven Sustainability',
                description: 'Track record of reducing carbon footprint by 60%+ with renewable energy integration and ESG compliance'
              },
              {
                icon: Globe,
                title: 'Global Experience',
                description: 'Delivered 500MW+ renewable energy capacity across 20+ countries with local expertise'
              },
              {
                icon: Zap,
                title: 'Innovation First',
                description: 'Cutting-edge technology combining AI, IoT, and blockchain for optimal climate solutions'
              },
              {
                icon: TrendingUp,
                title: 'Measurable Impact',
                description: '2M+ tons CO2 offset annually with comprehensive monitoring and transparent reporting'
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-green-600/50 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-green-600/10 to-emerald-600/5 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Implementation Approach Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
              Our Implementation Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures successful sustainable transformation
            </p>
          </motion.div>

          {/* 4 Phases in Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {[
              {
                title: 'Sustainability Assessment',
                description: 'Analysis of environmental impact and energy requirements'
              },
              {
                title: 'Solution Design',
                description: 'Tailored renewable systems with climate-resilient architecture'
              },
              {
                title: 'Deployment',
                description: 'Phased implementation with rigorous testing and certification'
              },
              {
                title: 'Monitoring & Optimization',
                description: 'Continuous performance tracking for maximum efficiency'
              }
            ].map((phase, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 hover:border-green-600/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{phase.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Key Success Factors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-green-600/5 to-emerald-600/5 border border-green-600/20 rounded-2xl p-8 lg:p-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-foreground">Key Success Factors</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 max-w-5xl mx-auto">
              {[
                'Comprehensive environmental impact assessment',
                'Regulatory compliance and certification',
                'Scalable renewable energy infrastructure',
                'Advanced monitoring and analytics systems',
                'Stakeholder engagement and training',
                'Continuous optimization and reporting'
              ].map((factor, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{factor}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative bg-white dark:bg-card border border-border rounded-3xl p-12 text-center shadow-sm">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                Ready to Drive Sustainable Change?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Connect with our experts to discover how our energy and climate solutions can transform your operations.
              </p>
              <Button
                size="lg"
                onClick={() => navigate('/contact')}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-emerald-600 hover:to-green-600 text-white shadow-lg text-lg px-8"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}