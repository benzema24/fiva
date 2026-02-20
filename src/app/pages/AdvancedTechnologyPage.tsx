import { motion } from 'motion/react';
import { ArrowLeft, Cpu, Smartphone, Database, Cloud, Brain, Zap } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Link } from 'react-router';

const features = [
  {
    icon: Cloud,
    title: 'Cloud Infrastructure Design',
    description: 'Multi-cloud and hybrid architecture design with AWS, Azure, and GCP for maximum flexibility and performance.',
    color: '#115E67'
  },
  {
    icon: Brain,
    title: 'Advanced Cybersecurity',
    description: 'Zero-trust architecture, threat intelligence, and AI-powered security operations for comprehensive protection.',
    color: '#0D4A52'
  },
  {
    icon: Cpu,
    title: 'AI/ML Systems Integration',
    description: 'Custom machine learning models, neural networks, and AI-powered automation for intelligent decision-making.',
    color: '#1A7580'
  },
  {
    icon: Database,
    title: 'Big Data & Analytics',
    description: 'Distributed data lakes, real-time processing, and advanced analytics platforms for actionable insights.',
    color: '#2C8C99'
  },
  {
    icon: Smartphone,
    title: 'Edge Computing Solutions',
    description: 'Low-latency edge infrastructure for IoT, 5G applications, and distributed processing needs.',
    color: '#115E67'
  }
];

const capabilities = [
  { title: 'Cloud & Infrastructure', items: ['Multi-Cloud Strategy', 'Kubernetes/Docker', 'Serverless Architecture', 'Infrastructure as Code'] },
  { title: 'AI & Machine Learning', items: ['Deep Learning', 'NLP/Computer Vision', 'Predictive Analytics', 'Model Deployment'] },
  { title: 'Security & Compliance', items: ['Zero Trust Security', 'SOC 2/ISO 27001', 'Penetration Testing', 'Security Automation'] },
  { title: 'DevOps & Automation', items: ['CI/CD Pipelines', 'GitOps', 'Monitoring & Logging', 'Chaos Engineering'] }
];

const useCases = [
  {
    industry: 'Financial Services',
    challenge: 'Legacy monolith preventing innovation',
    solution: 'Microservices migration to cloud-native architecture with containerization',
    result: '10x deployment velocity, 60% cost savings'
  },
  {
    industry: 'E-Commerce',
    challenge: 'Scaling during peak traffic events',
    solution: 'Auto-scaling infrastructure with edge CDN and caching layers',
    result: 'Zero downtime during 50x traffic spikes'
  },
  {
    industry: 'Manufacturing',
    challenge: 'Real-time quality control automation',
    solution: 'Edge AI with computer vision for defect detection',
    result: '99.2% defect detection accuracy'
  }
];

const stats = [
  { value: '500+', label: 'Systems Deployed', icon: Cpu },
  { value: '99.99%', label: 'Average Uptime', icon: Zap },
  { value: '200+', label: 'Enterprise Clients', icon: Cloud },
  { value: '100%', label: 'Security Compliance', icon: Brain }
];

export function AdvancedTechnologyPage() {
  return (
    <div className="pt-20">
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-slate-50/30 dark:to-slate-950/30">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(17,94,103,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(17,94,103,0.5) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Solutions
            </Link>

            <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6" whileHover={{ scale: 1.05 }}>
              <Cpu className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Advanced Technology & Systems</span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-foreground">
              Next-Generation Technologies
              <br />
              <span className="text-primary">Mission-Critical Infrastructure</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed">
              Deploy cutting-edge cloud, AI, and cybersecurity solutions for organizations requiring the highest levels of performance and reliability.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-accent group">
                Request Demo
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
                Technology Stack
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -5, scale: 1.02 }}>
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

      <section className="py-24 bg-gradient-to-b from-background to-slate-50/30 dark:to-slate-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">Technology Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade technology infrastructure and intelligent systems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -8 }} className="group">
                <Card className="p-6 h-full bg-card/60 backdrop-blur-xl border-border/50 hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 0.05 }} className="absolute inset-0 bg-gradient-to-br from-primary to-accent" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${feature.color}20` }}>
                      <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">Technical Capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete technology stack for digital transformation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((category, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
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

      <section className="py-24 bg-gradient-to-b from-background to-slate-50/30 dark:to-slate-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">Implementation Success</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proven results from enterprise technology deployments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -8 }}>
                <Card className="p-6 h-full bg-card/60 backdrop-blur-xl border-border/50 hover:border-primary/30 transition-all duration-300">
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">{useCase.industry}</div>
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

      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Ready to Deploy Advanced Technology?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect with our technology architects to design and implement your next-generation infrastructure.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-accent group">
                Schedule Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
                Architecture Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}