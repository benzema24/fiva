import { motion } from 'motion/react';
import { 
  Radio, Leaf, BarChart3, Shield, Activity, Gauge,
  Globe2, Zap, Award, ArrowRight, CheckCircle2
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Link } from 'react-router';

const features = [
  {
    icon: Radio,
    title: 'IoT Monitoring & Automation',
    description: 'Real-time monitoring of mining operations and energy systems with intelligent automation for optimal efficiency.',
    color: '#115E67'
  },
  {
    icon: Leaf,
    title: 'Sustainability Tracking',
    description: 'Comprehensive carbon footprint monitoring, ESG compliance, and renewable energy integration metrics.',
    color: '#0D4A52'
  },
  {
    icon: BarChart3,
    title: 'Resource Optimization',
    description: 'AI-powered resource allocation, predictive maintenance, and yield optimization across mining and energy operations.',
    color: '#1A7580'
  },
  {
    icon: Shield,
    title: 'Safety & Compliance',
    description: 'Advanced safety monitoring systems with regulatory compliance automation and incident prevention protocols.',
    color: '#2C8C99'
  },
  {
    icon: Activity,
    title: 'Predictive Analytics',
    description: 'Machine learning models for equipment failure prediction, demand forecasting, and production planning.',
    color: '#115E67'
  },
  {
    icon: Gauge,
    title: 'Energy Management',
    description: 'Smart grid integration, load balancing, and renewable energy optimization for sustainable operations.',
    color: '#0D4A52'
  }
];

const capabilities = [
  { title: 'Mining Operations', items: ['Fleet Management', 'Drilling Optimization', 'Ore Grade Control', 'Underground Ventilation'] },
  { title: 'Energy Systems', items: ['Grid Management', 'Solar/Wind Integration', 'Battery Storage', 'Demand Response'] },
  { title: 'Environmental', items: ['Emissions Tracking', 'Water Management', 'Waste Monitoring', 'Biodiversity Protection'] },
  { title: 'Analytics & AI', items: ['Production Forecasting', 'Equipment Health', 'Supply Chain Optimization', 'Cost Analytics'] }
];

const useCases = [
  {
    industry: 'Open Pit Mining',
    challenge: 'Equipment downtime and maintenance costs',
    solution: 'Deployed IoT sensors and predictive analytics for proactive maintenance',
    result: '35% reduction in downtime, $5M annual savings'
  },
  {
    industry: 'Renewable Energy',
    challenge: 'Variable energy production and grid stability',
    solution: 'Smart grid management with AI-powered load balancing and storage optimization',
    result: '28% increase in grid efficiency'
  },
  {
    industry: 'Coal Mining',
    challenge: 'Environmental compliance and emissions reduction',
    solution: 'Real-time emissions monitoring with automated reporting and mitigation',
    result: '40% emissions reduction, full compliance'
  }
];

const stats = [
  { value: '200+', label: 'Mining Sites Monitored', icon: Globe2 },
  { value: '15 GW', label: 'Energy Capacity Managed', icon: Zap },
  { value: '45%', label: 'Avg. Efficiency Gain', icon: Award },
  { value: '99.8%', label: 'System Reliability', icon: Shield }
];

export function MiningEnergyPage() {
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
          className="absolute bottom-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
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
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Mining & Energy Solutions</span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-foreground">
              Sustainable Resource Management
              <br />
              <span className="text-primary">Through Smart Technology</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed">
              Advanced IoT, AI, and analytics platforms to optimize mining operations and energy systems while advancing sustainability goals.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-accent group">
                Request Demo
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
                Sustainability Report
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">Smart Technologies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge solutions for mining operations and energy management
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
              Comprehensive solutions across mining and energy operations
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">Real-World Impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proven results from mining and energy operations worldwide
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
              Ready to Optimize Your Operations?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect with our energy and mining experts to explore how smart technology can drive efficiency and sustainability.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-accent group">
                Schedule Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
                Download White Paper
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}