import { motion } from 'motion/react';
import { 
  Shield, Lock, Eye, AlertTriangle, CheckCircle2, 
  Zap, Network, Database, FileCheck, Users,
  ArrowRight, ChevronRight, Activity, Bell, ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router';

const features = [
  {
    icon: Lock,
    title: 'Advanced Threat Protection',
    description: 'Real-time monitoring and prevention of cyber threats using AI-powered security systems.',
    color: '#6366F1'
  },
  {
    icon: Database,
    title: 'Data Encryption & Privacy',
    description: 'End-to-end encryption solutions ensuring complete data privacy and regulatory compliance.',
    color: '#8B5CF6'
  },
  {
    icon: Eye,
    title: 'Security Audits & Assessments',
    description: 'Comprehensive vulnerability assessments and penetration testing to identify security gaps.',
    color: '#6366F1'
  },
  {
    icon: ShieldCheck,
    title: 'Compliance Management',
    description: 'Ensure adherence to GDPR, ISO 27001, SOC 2, and other international security standards.',
    color: '#8B5CF6'
  },
  {
    icon: Bell,
    title: '24/7 Security Monitoring',
    description: 'Round-the-clock surveillance with instant alerts and rapid incident response protocols.',
    color: '#6366F1'
  },
  {
    icon: Network,
    title: 'Network Security Solutions',
    description: 'Firewall management, intrusion detection systems, and secure network architecture design.',
    color: '#8B5CF6'
  }
];

const processSteps = [
  {
    number: '01',
    title: 'Security Assessment',
    description: 'Comprehensive evaluation of your current security posture and infrastructure',
    icon: FileCheck
  },
  {
    number: '02',
    title: 'Strategy Development',
    description: 'Custom security roadmap aligned with your business objectives and compliance needs',
    icon: Activity
  },
  {
    number: '03',
    title: 'Implementation',
    description: 'Deployment of advanced security solutions with minimal business disruption',
    icon: Zap
  },
  {
    number: '04',
    title: 'Monitoring & Support',
    description: 'Continuous monitoring, updates, and proactive threat management',
    icon: Eye
  }
];

const stats = [
  { value: '99.9%', label: 'Threat Prevention Rate' },
  { value: '24/7', label: 'Security Monitoring' },
  { value: '<15min', label: 'Incident Response Time' },
  { value: '100%', label: 'Compliance Adherence' }
];

export function CybersecurityPage() {
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
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">Cybersecurity & Data Protection</span>
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
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Enterprise Security</span>
              </motion.div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Cybersecurity & Data Protection
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Streamline Synergy Limited delivers comprehensive cybersecurity strategies and compliance solutions aligned with international standards. We protect your digital assets through proactive monitoring, threat prevention, and secure data management.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-accent text-white rounded-xl font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Protected Now
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary hover:bg-primary/5 rounded-xl font-medium transition-colors duration-300"
                >
                  Schedule Assessment
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
                {/* Animated Shield Icon */}
                <motion.div
                  animate={{ 
                    rotate: [0, 5, 0, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  <Shield className="w-full h-auto text-primary/20" strokeWidth={0.5} />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Lock className="w-24 h-24 text-primary" strokeWidth={1.5} />
                  </motion.div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-8 right-8 bg-white rounded-xl p-4 shadow-lg border border-primary/20"
                >
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-8 left-8 bg-white rounded-xl p-4 shadow-lg border border-primary/20"
                >
                  <AlertTriangle className="w-6 h-6 text-orange-500" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2, type: "spring" }}
                  className="text-4xl lg:text-5xl font-bold text-primary mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
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
              Comprehensive Security Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade protection for your digital infrastructure
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
              Our Security Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to safeguarding your organization
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
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" strokeWidth={1.5} />
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Ready to Secure Your Organization?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a free security assessment and discover how we can protect your digital assets.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-accent text-white rounded-xl font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Request Free Assessment
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary hover:bg-primary/5 rounded-xl font-medium transition-colors duration-300"
                >
                  Contact Security Team
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}