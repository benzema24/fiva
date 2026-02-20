import { motion } from 'motion/react';
import { 
  Network, Puzzle, Database, Layers, Cloud, Code,
  Settings, CheckCircle2, TrendingUp, Share2, Layers as LayersAlt, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router';

const features = [
  {
    icon: Network,
    title: 'Legacy System Integration',
    description: 'Seamlessly connect legacy applications with modern cloud-based platforms without disrupting operations.',
    color: '#6366F1'
  },
  {
    icon: Cloud,
    title: 'Cloud Migration & Hybrid Solutions',
    description: 'Strategic cloud adoption with hybrid architecture design for optimal performance and flexibility.',
    color: '#8B5CF6'
  },
  {
    icon: Puzzle,
    title: 'API Development & Management',
    description: 'Custom API solutions enabling smooth data exchange across diverse technology ecosystems.',
    color: '#6366F1'
  },
  {
    icon: Database,
    title: 'Data Integration & ETL',
    description: 'Automated data pipelines ensuring accurate, real-time information flow across systems.',
    color: '#8B5CF6'
  },
  {
    icon: Layers,
    title: 'Enterprise Architecture Design',
    description: 'Scalable architecture blueprints aligned with business goals and future growth strategies.',
    color: '#6366F1'
  },
  {
    icon: Share2,
    title: 'IoT & Device Integration',
    description: 'Connect sensors, devices, and smart systems into unified operational frameworks.',
    color: '#8B5CF6'
  }
];

const benefits = [
  {
    icon: CheckCircle2,
    title: 'Operational Efficiency',
    description: 'Reduce manual processes and improve workflow automation by up to 60%',
    metric: '60%'
  },
  {
    icon: TrendingUp,
    title: 'Cost Optimization',
    description: 'Lower IT maintenance costs through streamlined system architecture',
    metric: '40%'
  },
  {
    icon: TrendingUp,
    title: 'Scalability',
    description: 'Future-proof infrastructure that grows with your business needs',
    metric: '∞'
  },
  {
    icon: CheckCircle2,
    title: 'Interoperability',
    description: 'Seamless data exchange across all business applications',
    metric: '100%'
  }
];

const processSteps = [
  {
    number: '01',
    title: 'System Analysis',
    description: 'Comprehensive audit of existing systems, identifying integration opportunities and challenges',
    icon: Settings
  },
  {
    number: '02',
    title: 'Architecture Planning',
    description: 'Design integration roadmap with clear milestones, timelines, and ROI projections',
    icon: Puzzle
  },
  {
    number: '03',
    title: 'Integration Deployment',
    description: 'Phased implementation with rigorous testing and minimal operational disruption',
    icon: Network
  },
  {
    number: '04',
    title: 'Optimization & Support',
    description: 'Continuous monitoring, performance tuning, and ongoing technical support',
    icon: TrendingUp
  }
];

export function SystemsIntegrationPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,122,204,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(0,163,224,0.05),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
          >
            <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
            <ArrowRight className="w-4 h-4" />
            <span className="text-foreground">Systems Integration & Technology Consulting</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6"
              >
                <Code className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Technology Consulting</span>
              </motion.div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Systems Integration & Technology Consulting
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We provide strategic guidance and seamless integration of technologies across multiple systems. Our consultants help organizations adopt digital solutions that improve interoperability, efficiency, and long-term sustainability.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-accent text-white rounded-xl font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Start Integration
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary hover:bg-primary/5 rounded-xl font-medium transition-colors duration-300"
                >
                  Consult Expert
                </motion.button>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 backdrop-blur-sm border border-primary/20">
                {/* Animated Network Visualization */}
                <div className="relative h-64">
                  <motion.div
                    animate={{ 
                      rotate: 360
                    }}
                    transition={{ 
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Network className="w-full h-auto text-primary/20" strokeWidth={0.5} />
                  </motion.div>
                  
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Code className="w-20 h-20 text-primary" strokeWidth={1.5} />
                  </motion.div>
                </div>

                {/* Floating Connection Nodes */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      y: [0, -20, 0],
                      x: [0, i % 2 === 0 ? 10 : -10, 0]
                    }}
                    transition={{ 
                      duration: 3 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5
                    }}
                    className="absolute bg-white rounded-lg p-3 shadow-lg border border-primary/20"
                    style={{
                      top: i < 2 ? '10%' : 'auto',
                      bottom: i >= 2 ? '10%' : 'auto',
                      left: i % 2 === 0 ? '5%' : 'auto',
                      right: i % 2 === 1 ? '5%' : 'auto'
                    }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4"
                >
                  <benefit.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </motion.div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {benefit.metric}
                </div>
                <div className="font-semibold text-foreground mb-1">{benefit.title}</div>
                <div className="text-sm text-muted-foreground">{benefit.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Integration Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for connecting your technology ecosystem
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <feature.icon 
                    className="w-6 h-6"
                    style={{ color: feature.color }}
                    strokeWidth={1.5}
                  />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.05 }}
                  className="absolute inset-0 rounded-2xl"
                  style={{ backgroundColor: feature.color }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Integration Methodology
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven approach to seamless technology integration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -z-10" />
                )}

                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full"
                >
                  {/* Step Number */}
                  <div className="text-6xl font-bold text-primary/10 mb-4">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4"
                  >
                    <step.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Code className="w-16 h-16 text-primary mx-auto mb-6" strokeWidth={1.5} />
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Transform Your Technology Landscape
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our integration expertise can unlock efficiency and innovation.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-accent text-white rounded-xl font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary hover:bg-primary/5 rounded-xl font-medium transition-colors duration-300"
                >
                  Contact Integration Team
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}