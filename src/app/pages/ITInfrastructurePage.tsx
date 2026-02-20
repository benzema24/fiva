import { motion } from 'motion/react';
import { 
  Server, Shield, Network, Database, Cloud, 
  Zap, CheckCircle2, Monitor, Activity, Globe
} from 'lucide-react';
import { Link } from 'react-router';

const features = [
  {
    icon: Server,
    title: 'Data Center Design & Management',
    description: 'Enterprise-grade data center solutions with redundancy, scalability, and 99.99% uptime guarantee.',
    color: '#6366F1'
  },
  {
    icon: Network,
    title: 'Network Architecture & Optimization',
    description: 'High-performance network design including LAN, WAN, SD-WAN, and multi-site connectivity.',
    color: '#8B5CF6'
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure Services',
    description: 'AWS, Azure, and GCP deployment with infrastructure-as-code and automated scaling.',
    color: '#6366F1'
  },
  {
    icon: Database,
    title: 'Database Management',
    description: 'Relational and NoSQL database solutions with high availability and performance optimization.',
    color: '#8B5CF6'
  },
  {
    icon: Shield,
    title: 'Infrastructure Security',
    description: 'Zero-trust network architecture with advanced firewalls, IDS/IPS, and DDoS protection.',
    color: '#6366F1'
  }
];

const capabilities = [
  {
    icon: Zap,
    title: 'Availability',
    description: 'Mission-critical uptime with redundant systems',
    metric: '99.99%'
  },
  {
    icon: Activity,
    title: 'Scalability',
    description: 'Elastic infrastructure that grows with demand',
    metric: 'Auto'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Multi-region deployment capabilities',
    metric: '50+'
  }
];

const processSteps = [
  {
    number: '01',
    title: 'Infrastructure Assessment',
    description: 'Detailed analysis of current infrastructure, capacity planning, and performance benchmarking',
    icon: Monitor
  },
  {
    number: '02',
    title: 'Design & Planning',
    description: 'Custom architecture design with network topology, hardware specifications, and migration strategy',
    icon: Network
  },
  {
    number: '03',
    title: 'Deployment & Migration',
    description: 'Phased rollout with minimal downtime, comprehensive testing, and seamless transition',
    icon: Server
  },
  {
    number: '04',
    title: 'Monitoring & Maintenance',
    description: '24/7 infrastructure monitoring, proactive maintenance, and continuous optimization',
    icon: Activity
  }
];

const techStack = [
  'Cisco', 'Juniper', 'HPE', 'Dell EMC', 'VMware', 'AWS', 
  'Azure', 'Google Cloud', 'Kubernetes', 'Terraform', 'Ansible', 'Docker'
];

export function ITInfrastructurePage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,122,204,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(0,163,224,0.05),transparent_50%)]"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#007ACC 1px, transparent 1px), linear-gradient(90deg, #007ACC 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
          >
            <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">IT Infrastructure & Networks</span>
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
                <Network className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Infrastructure Solutions</span>
              </motion.div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                IT Infrastructure & Networks
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We design, deploy, and manage advanced IT systems, data centers, and communication networks. Our infrastructure solutions ensure performance, scalability, and reliability across complex organizational environments.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-accent text-white rounded-xl font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Build Infrastructure
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary hover:bg-primary/5 rounded-xl font-medium transition-colors duration-300"
                >
                  Get Assessment
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
                {/* Animated Server Stack */}
                <div className="relative h-64 flex flex-col items-center justify-center gap-4">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        x: [0, i % 2 === 0 ? 10 : -10, 0],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ 
                        duration: 2 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.3
                      }}
                      className="w-full h-16 bg-primary/20 rounded-lg border-2 border-primary/30 flex items-center justify-center"
                    >
                      <Server className="w-8 h-8 text-primary" strokeWidth={1.5} />
                    </motion.div>
                  ))}
                </div>

                {/* Connection Lines */}
                <motion.div
                  animate={{ 
                    pathLength: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <svg className="w-full h-full">
                    <motion.line
                      x1="10%" y1="30%"
                      x2="90%" y2="30%"
                      stroke="#1A5F7A"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                    <motion.line
                      x1="10%" y1="50%"
                      x2="90%" y2="50%"
                      stroke="#2C8BA8"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                    <motion.line
                      x1="10%" y1="70%"
                      x2="90%" y2="70%"
                      stroke="#1A5F7A"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                  </svg>
                </motion.div>

                {/* Status Indicators */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-8 right-8 bg-white rounded-full p-3 shadow-lg border border-green-500/30"
                >
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
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
                  <capability.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </motion.div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {capability.metric}
                </div>
                <div className="font-semibold text-foreground mb-1">{capability.title}</div>
                <div className="text-sm text-muted-foreground">{capability.description}</div>
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
              Infrastructure Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              End-to-end solutions for modern IT infrastructure
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

      {/* Technology Stack */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Technology Partners
            </h2>
            <p className="text-lg text-muted-foreground">
              Industry-leading platforms and solutions
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-6 py-3 bg-card border border-border/50 rounded-xl hover:border-primary/30 transition-all duration-300"
              >
                <span className="text-foreground font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Implementation Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proven methodology for infrastructure deployment
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
            <Network className="w-16 h-16 text-primary mx-auto mb-6" strokeWidth={1.5} />
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Build Future-Ready Infrastructure
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's design an infrastructure solution that powers your business growth.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-accent text-white rounded-xl font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Request Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary hover:bg-primary/5 rounded-xl font-medium transition-colors duration-300"
                >
                  Contact Infrastructure Team
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}