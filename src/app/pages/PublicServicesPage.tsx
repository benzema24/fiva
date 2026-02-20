import { motion } from 'motion/react';
import { Building2, ArrowRight, Shield, Globe, Users, Target, CheckCircle2, Zap } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { useNavigate } from 'react-router';
import { PublicServicesCapabilities } from '@/app/components/PublicServicesCapabilities';

export function PublicServicesPage() {
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
            className="h-1 w-24 bg-gradient-to-r from-[#1E40AF] to-[#1E3A8A] mx-auto rounded-full mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8"
          >
            Partnering with governments worldwide to modernize service delivery and accelerate digital transformation.
          </motion.p>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <PublicServicesCapabilities />

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
              Why Governments Choose FIVA
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Trusted by governments and institutions worldwide for our proven track record in digital transformation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Security First',
                description: 'Enterprise-grade security with compliance to international standards including ISO 27001, SOC 2, and GDPR'
              },
              {
                icon: Globe,
                title: 'Global Expertise',
                description: 'Experience delivering solutions across 15+ countries with local knowledge and global best practices'
              },
              {
                icon: Zap,
                title: 'Rapid Deployment',
                description: 'Proven methodologies for fast implementation with minimal disruption to existing operations'
              },
              {
                icon: Users,
                title: 'Citizen-Centric',
                description: 'Solutions designed with end-users in mind, improving accessibility and satisfaction scores'
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
                  className="bg-card border border-border rounded-xl p-6 hover:border-[#1E40AF]/50 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1E40AF]/10 to-[#1E3A8A]/5 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-[#1E40AF]" />
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
              A proven methodology that ensures successful digital transformation
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
                title: 'Discovery & Assessment',
                description: 'Analysis of existing systems and institutional needs'
              },
              {
                title: 'Strategy & Design',
                description: 'Tailored solutions with secure architecture'
              },
              {
                title: 'Implementation',
                description: 'Phased deployment with rigorous testing'
              },
              {
                title: 'Training & Support',
                description: 'Comprehensive programs for sustained success'
              }
            ].map((phase, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 hover:border-[#1E40AF]/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A] rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4">
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
            className="bg-gradient-to-br from-[#1E40AF]/5 to-[#1E3A8A]/5 border border-[#1E40AF]/20 rounded-2xl p-8 lg:p-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-foreground">Key Success Factors</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 max-w-5xl mx-auto">
              {[
                'Stakeholder engagement at all levels',
                'Compliance with local and international regulations',
                'Scalable and future-proof architecture',
                'Data security and privacy protection',
                'Change management and user adoption',
                'Continuous monitoring and optimization'
              ].map((factor, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#1E40AF] flex-shrink-0 mt-0.5" />
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
            <div className="absolute -inset-1 bg-gradient-to-r from-[#1E40AF] to-[#1E3A8A] rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative bg-white border border-border rounded-3xl p-12 text-center shadow-sm">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                Ready to Transform Your Public Services?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Connect with our experts to discover how our digital government solutions can revolutionize citizen services.
              </p>
              <Button
                size="lg"
                onClick={() => navigate('/contact')}
                className="bg-gradient-to-r from-[#1E40AF] to-[#1E3A8A] hover:from-[#1E3A8A] hover:to-[#1E40AF] text-white shadow-lg text-lg px-8"
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