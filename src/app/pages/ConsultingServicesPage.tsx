import { motion } from 'motion/react';
import { Briefcase, ArrowRight, Shield, Globe, Users, Target, CheckCircle2, Handshake, TrendingUp, FileText, UserCheck, Building, Lock } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { useNavigate } from 'react-router';
import { ConsultingServicesCapabilities } from '@/app/components/ConsultingServicesCapabilities';

export function ConsultingServicesPage() {
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
            className="h-1 w-24 bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600 mx-auto rounded-full mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8"
          >
            Strategic advisory and intermediation services for complex business transactions, market expansion, and institutional engagement.
          </motion.p>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <ConsultingServicesCapabilities />

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
              Why Choose FIVA Consulting
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Trusted advisor for complex business transactions and strategic initiatives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Discretion & Confidentiality',
                description: 'Absolute confidentiality in all engagements with secure communication protocols and trusted advisor relationships'
              },
              {
                icon: Globe,
                title: 'Global Network',
                description: 'Extensive network across 30+ jurisdictions with established relationships in government, corporate, and investment sectors'
              },
              {
                icon: Target,
                title: 'Results-Oriented',
                description: 'Focus on tangible outcomes and value creation with proven track record in complex, high-stake transactions'
              },
              {
                icon: Users,
                title: 'Senior-Level Expertise',
                description: 'Direct access to experienced advisors with deep sector knowledge and strategic decision-making capability'
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
                  className="bg-card border border-border rounded-xl p-6 hover:border-purple-600/50 dark:hover:border-purple-400/50 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600/10 to-purple-800/5 dark:from-purple-400/10 dark:to-purple-600/5 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground dark:text-white">{feature.title}</h3>
                  <p className="text-muted-foreground dark:text-gray-300 leading-relaxed">{feature.description}</p>
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
              Our Engagement Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A structured approach to delivering strategic advisory services
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
                title: 'Initial Consultation',
                description: 'Confidential discussion to understand objectives and assess fit'
              },
              {
                title: 'Situation Analysis',
                description: 'Strategic assessment and stakeholder mapping'
              },
              {
                title: 'Strategy Development',
                description: 'Tailored approach design and execution planning'
              },
              {
                title: 'Implementation Support',
                description: 'Ongoing advisory and transaction facilitation'
              }
            ].map((phase, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 hover:border-purple-600/50 dark:hover:border-purple-400/50 transition-all duration-300 relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-purple-600 dark:bg-purple-400 text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground dark:text-white mt-2">{phase.title}</h3>
                <p className="text-muted-foreground dark:text-gray-300 leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Key Differentiators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-purple-600/5 to-purple-800/5 dark:from-purple-400/5 dark:to-purple-600/5 rounded-2xl p-8 border border-purple-600/20 dark:border-purple-400/20"
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Key Differentiators</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Cross-Border Expertise',
                  description: 'Deep understanding of regulatory frameworks and business practices across multiple jurisdictions'
                },
                {
                  title: 'Sector Specialization',
                  description: 'Focused expertise in technology, infrastructure, energy, and public-private partnerships'
                },
                {
                  title: 'Value Creation Focus',
                  description: 'Structured approach to identifying and unlocking commercial value in complex transactions'
                }
              ].map((diff, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{diff.title}</h4>
                    <p className="text-sm text-muted-foreground">{diff.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
              Ready to Discuss Your Strategic Objectives?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Contact our advisory team for a confidential consultation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => navigate('/about')}
                size="lg"
                variant="outline"
                className="border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-600 dark:hover:bg-purple-500 hover:text-white dark:hover:text-white transition-all duration-300"
              >
                Learn More About FIVA
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}