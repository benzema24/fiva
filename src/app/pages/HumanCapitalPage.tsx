import { motion } from 'motion/react';
import { Users, ArrowRight, Shield, Globe, Zap, Target, CheckCircle2, TrendingUp } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { useNavigate } from 'react-router';
import { HumanCapitalCapabilities } from '@/app/components/HumanCapitalCapabilities';

export function HumanCapitalPage() {
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
            className="h-1 w-24 bg-gradient-to-r from-orange-600 to-amber-600 mx-auto rounded-full mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8"
          >
            Partnering with organizations worldwide to transform workforce management through AI-powered talent solutions, global recruitment, and comprehensive human capital development.
          </motion.p>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <HumanCapitalCapabilities />

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
              Trusted by leading organizations for our proven expertise in strategic talent management and human capital solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Proven Success',
                description: '25K+ successful placements globally with 94% retention rate and exceptional candidate satisfaction'
              },
              {
                icon: Globe,
                title: 'Global Talent Network',
                description: 'Access to 50M+ verified professionals across 50+ countries and diverse industries'
              },
              {
                icon: Zap,
                title: 'AI-Powered Matching',
                description: 'Advanced machine learning for 60% faster hiring with superior candidate-role fit'
              },
              {
                icon: TrendingUp,
                title: 'Measurable Impact',
                description: '35% improvement in retention and 85% career advancement rate for placed candidates'
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
                  className="bg-card border border-border rounded-xl p-6 hover:border-orange-600/50 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-600/10 to-amber-600/5 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-orange-600 dark:text-orange-400" />
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
              A proven methodology that ensures successful talent transformation
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
                title: 'Talent Strategy',
                description: 'Analysis of workforce needs and organizational culture'
              },
              {
                title: 'Platform Configuration',
                description: 'AI model setup with customized matching algorithms'
              },
              {
                title: 'Sourcing & Matching',
                description: 'Global talent search with intelligent candidate ranking'
              },
              {
                title: 'Performance Tracking',
                description: 'Continuous monitoring with optimization and insights'
              }
            ].map((phase, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 hover:border-orange-600/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-amber-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4">
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
            className="bg-gradient-to-br from-orange-600/5 to-amber-600/5 border border-orange-600/20 rounded-2xl p-8 lg:p-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-foreground">Key Success Factors</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 max-w-5xl mx-auto">
              {[
                'Deep understanding of organizational culture',
                'AI-powered bias reduction in hiring',
                'Comprehensive candidate assessment',
                'Global talent network and local expertise',
                'Ongoing performance monitoring and optimization',
                'Employee wellness and retention programs'
              ].map((factor, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
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
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative bg-white dark:bg-card border border-border rounded-3xl p-12 text-center shadow-sm">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                Ready to Transform Your Talent Strategy?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Connect with our experts to discover how our human capital solutions can revolutionize your workforce management.
              </p>
              <Button
                size="lg"
                onClick={() => navigate('/contact')}
                className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg text-lg px-8"
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