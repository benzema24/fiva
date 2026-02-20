import { motion } from 'motion/react';
import { Shield, Network, Building2, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const techServices = [
  {
    id: 1,
    icon: Shield,
    title: 'Cybersecurity & Data Protection',
    descriptions: [
      'Streamline Synergy Limited delivers cybersecurity strategies and compliance solutions aligned with international standards.',
      'We protect digital assets through proactive monitoring, threat prevention, and secure data management.'
    ],
    color: '#6366F1',
    link: '/services/cybersecurity'
  },
  {
    id: 2,
    icon: Cpu,
    title: 'Systems Integration & Technology Consulting',
    descriptions: [
      'We provide strategic guidance and seamless integration of technologies across multiple systems.',
      'Our consultants help organizations adopt digital solutions that improve interoperability, efficiency, and long-term sustainability.'
    ],
    color: '#8B5CF6',
    link: '/services/systems-integration'
  },
  {
    id: 3,
    icon: Network,
    title: 'IT Infrastructure & Networks',
    descriptions: [
      'We design, deploy, and manage advanced IT systems, data centers, and communication networks.',
      'Our infrastructure solutions ensure performance, scalability, and reliability across complex organizational environments.'
    ],
    color: '#EC4899',
    link: '/services/it-infrastructure'
  },
  {
    id: 4,
    icon: Building2,
    title: 'Smart City & e-Governance Platforms',
    descriptions: [
      'We develop and integrate digital platforms that enable intelligent urban management and efficient public administration.',
      'Our solutions empower governments to enhance transparency, accessibility, and citizen engagement.'
    ],
    color: '#3B82F6',
    link: '/services/smart-city'
  }
];

export function TechnologyServicesGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
            <span className="text-sm font-medium text-primary">Technology Solutions</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Enterprise Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions for modern organizations
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {techServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative h-full bg-card border border-border/50 rounded-2xl p-8 overflow-hidden hover:border-primary/30 transition-colors duration-300"
              >
                {/* Background Gradient on Hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.03 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-br from-primary to-accent"
                />

                {/* Top Accent Line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.4 }}
                  className="absolute top-0 left-0 h-1 rounded-full"
                  style={{ backgroundColor: service.color }}
                />

                {/* Icon */}
                <div className="relative mb-6">
                  <motion.div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-xl border border-border/50 bg-background/50 group-hover:border-primary/30 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <service.icon 
                      className="w-7 h-7 text-foreground/70 group-hover:text-primary transition-colors duration-300" 
                      strokeWidth={1.5}
                    />
                  </motion.div>

                  {/* Icon Glow Effect */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 0.2, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 rounded-xl blur-xl"
                    style={{ backgroundColor: service.color }}
                  />
                </div>

                {/* Content */}
                <div className="relative">
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Descriptions */}
                  <div className="space-y-3">
                    {service.descriptions.map((desc, idx) => (
                      <motion.p
                        key={idx}
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                        className="text-sm text-muted-foreground leading-relaxed"
                      >
                        {desc}
                      </motion.p>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <Link to={service.link} className="block mt-6">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" strokeWidth={2} />
                    </motion.div>
                  </Link>
                </div>

                {/* Corner Decorations */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.15 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full"
                  style={{ 
                    background: `radial-gradient(circle at bottom right, ${service.color}, transparent 70%)`
                  }}
                />

                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Need a custom technology solution for your organization?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-accent text-white rounded-xl font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Get Consultation
            <ArrowRight className="w-5 h-5" strokeWidth={2} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}