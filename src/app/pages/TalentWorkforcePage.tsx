import { motion } from 'motion/react';
import { Users, BookOpen, Award, Globe2, Target, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Link } from 'react-router';

const features = [
  {
    icon: BookOpen,
    title: 'AI-Powered Talent Matching',
    description: 'Advanced machine learning algorithms analyze skills, experience, and cultural fit to match candidates with optimal opportunities.',
    color: '#115E67'
  },
  {
    icon: Award,
    title: 'Workforce Analytics & Insights',
    description: 'Real-time dashboards and predictive analytics help organizations make data-driven talent decisions.',
    color: '#0D4A52'
  },
  {
    icon: Globe2,
    title: 'Skills Development Platform',
    description: 'Personalized learning paths and upskilling programs to build future-ready workforce capabilities.',
    color: '#1A7580'
  },
  {
    icon: Target,
    title: 'Global Talent Ecosystem',
    description: 'Access a worldwide network of pre-vetted professionals across all industries and skill levels.',
    color: '#2C8C99'
  },
  {
    icon: CheckCircle2,
    title: 'Strategic Workforce Planning',
    description: 'Forecast talent needs, identify skill gaps, and develop long-term hiring strategies.',
    color: '#115E67'
  },
  {
    icon: ArrowRight,
    title: 'Compliance & Risk Management',
    description: 'Ensure regulatory compliance across multiple jurisdictions with automated verification systems.',
    color: '#0D4A52'
  }
];

const capabilities = [
  { title: 'Talent Acquisition', items: ['Executive Search', 'Volume Recruitment', 'Contract Staffing', 'RPO Services'] },
  { title: 'Workforce Management', items: ['Performance Tracking', 'Engagement Analytics', 'Succession Planning', 'Retention Strategies'] },
  { title: 'Learning & Development', items: ['Skills Assessment', 'Training Programs', 'Career Pathing', 'Mentorship Matching'] },
  { title: 'HR Technology', items: ['ATS Integration', 'HRIS Systems', 'Payroll Integration', 'Mobile Apps'] }
];

const useCases = [
  {
    industry: 'Technology',
    challenge: 'Rapid scaling with specialized talent',
    solution: 'AI-powered matching reduced time-to-hire by 60% while improving quality of hire scores',
    result: '250+ tech roles filled in 6 months'
  },
  {
    industry: 'Healthcare',
    challenge: 'Critical nursing shortage',
    solution: 'Global talent network and credential verification system deployed',
    result: '500+ qualified nurses placed across 15 facilities'
  },
  {
    industry: 'Finance',
    challenge: 'Skills gap in emerging technologies',
    solution: 'Custom upskilling programs with AI-driven learning paths',
    result: '85% internal mobility rate, $2M+ savings'
  }
];

const stats = [
  { value: '50K+', label: 'Placements Annually', icon: Users },
  { value: '98%', label: 'Client Satisfaction', icon: Award },
  { value: '45 Days', label: 'Avg. Time to Hire', icon: ArrowRight },
  { value: '85%', label: 'Retention Rate', icon: CheckCircle2 }
];

export function TalentWorkforcePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-slate-50/30 dark:to-slate-950/30">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(17,94,103,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(17,94,103,0.5) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Solutions
            </Link>

            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Talent Workforce Solutions</span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-foreground">
              Build Agile, Future-Ready
              <br />
              <span className="text-primary">Workforces</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed">
              Powered by data, AI, and smart talent ecosystems to transform how organizations attract, develop, and retain top talent.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-accent group">
                Request Demo
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="p-6 text-center bg-card/60 backdrop-blur-xl border-border/50 hover:border-primary/30 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-background to-slate-50/30 dark:to-slate-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">Core Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools and technologies to power your talent strategy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="p-6 h-full bg-card/60 backdrop-blur-xl border-border/50 hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.05 }}
                    className="absolute inset-0 bg-gradient-to-br from-primary to-accent"
                  />
                  
                  <div className="relative z-10">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${feature.color}20` }}
                    >
                      <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">Platform Capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              End-to-end workforce solutions across the talent lifecycle
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-card/60 backdrop-blur-xl border-border/50">
                  <h3 className="text-lg font-bold mb-4 text-primary">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-gradient-to-b from-background to-slate-50/30 dark:to-slate-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from organizations transforming their workforce strategies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="p-6 h-full bg-card/60 backdrop-blur-xl border-border/50 hover:border-primary/30 transition-all duration-300">
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                    {useCase.industry}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-foreground">{useCase.challenge}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{useCase.solution}</p>
                  <div className="pt-4 border-t border-border/50">
                    <div className="text-2xl font-bold text-primary">{useCase.result}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Ready to Transform Your Workforce?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect with our talent experts to explore how our AI-powered platform can help you build a future-ready workforce.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-accent group">
                Schedule Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}