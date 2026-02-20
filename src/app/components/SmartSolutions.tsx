import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, Sparkles, CheckCircle2, ChevronDown, ChevronUp
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { useParallax } from '@/app/hooks/useParallax';

interface Solution {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
  verbs: string;
  description: string;
  keyFeatures: string[];
  benefits: string[];
  useCases: string[];
  techApproach: string;
  stats: { label: string; value: string }[];
}

const solutions: Solution[] = [
  {
    id: 1,
    icon: '🧠',
    title: 'Talent Workforce Solutions',
    subtitle: 'Smart Workforce Management',
    verbs: 'Build · Manage · Scale',
    description: 'Transform your talent acquisition and management with AI-powered recruitment, intelligent workforce planning, and advanced people analytics. Connect with global talent while gaining data-driven insights for optimal team performance.',
    keyFeatures: [
      'AI-Powered Candidate Matching',
      'Global Talent Pool Access',
      'Predictive Analytics & Insights',
      'Automated Screening & Assessment',
      'Performance Tracking Dashboard',
      'Skills Gap Analysis Tools'
    ],
    benefits: [
      'Reduce hiring time by 60%',
      'Increase quality of hire by 45%',
      'Access to 50M+ global professionals',
      'Real-time workforce analytics'
    ],
    useCases: [
      'Enterprise Recruitment Campaigns',
      'Executive Search & Headhunting',
      'Contract & Temporary Staffing',
      'Remote Team Building'
    ],
    techApproach: 'Leveraging machine learning algorithms, natural language processing, and big data analytics to match talent with opportunities.',
    stats: [
      { label: 'Placements', value: '25K+' },
      { label: 'Success Rate', value: '94%' },
      { label: 'Countries', value: '50+' }
    ]
  },
  {
    id: 2,
    icon: '📈',
    title: 'Investment Technology',
    subtitle: 'Smart Investment Solutions',
    verbs: 'Analyze · Optimize · Grow',
    description: 'Sophisticated investment platforms powered by advanced analytics, real-time market intelligence, and AI-driven portfolio optimization. Make data-backed investment decisions with comprehensive risk assessment.',
    keyFeatures: [
      'Real-Time Market Analytics',
      'AI Portfolio Optimization',
      'Risk Assessment Engine',
      'Automated Trading Algorithms',
      'Multi-Asset Class Support',
      'ESG Investment Screening'
    ],
    benefits: [
      'Enhanced portfolio returns by 28%',
      'Reduced risk exposure by 35%',
      '24/7 market monitoring',
      'Automated rebalancing strategies'
    ],
    useCases: [
      'Institutional Portfolio Management',
      'Retail Investment Platforms',
      'Robo-Advisory Services',
      'Hedge Fund Operations'
    ],
    techApproach: 'Combining quantitative analysis, machine learning models, and real-time data processing to deliver intelligent investment insights.',
    stats: [
      { label: 'Assets Managed', value: '$2.5B+' },
      { label: 'ROI Increase', value: '+28%' },
      { label: 'Active Users', value: '15K+' }
    ]
  },
  {
    id: 3,
    icon: '⚡',
    title: 'Mining & Energy Solutions',
    subtitle: 'Sustainable Energy Systems',
    verbs: 'Sustain · Monitor · Innovate',
    description: 'Revolutionize mining and energy operations with IoT-enabled monitoring, predictive maintenance, and sustainability-focused solutions. Optimize resource extraction while reducing environmental impact.',
    keyFeatures: [
      'IoT Sensor Networks',
      'Predictive Maintenance AI',
      'Energy Consumption Optimization',
      'Environmental Impact Tracking',
      'Safety Monitoring Systems',
      'Resource Planning Analytics'
    ],
    benefits: [
      'Reduce downtime by 40%',
      'Lower energy costs by 25%',
      'Improve safety compliance by 90%',
      'Real-time operational visibility'
    ],
    useCases: [
      'Smart Mining Operations',
      'Renewable Energy Integration',
      'Grid Management & Optimization',
      'Equipment Health Monitoring'
    ],
    techApproach: 'Integrating IoT sensors, edge computing, and AI-powered analytics to create intelligent mining and energy systems.',
    stats: [
      { label: 'Energy Saved', value: '35M kWh' },
      { label: 'Downtime Cut', value: '-40%' },
      { label: 'Sites Managed', value: '120+' }
    ]
  },
  {
    id: 4,
    icon: '🏥',
    title: 'Digital Health',
    subtitle: 'Next-Gen Healthcare Platforms',
    verbs: 'Connect · Protect · Care',
    description: 'Next-generation healthcare platforms connecting patients, providers, and payers through secure, HIPAA-compliant technology. Enable telehealth, health records management, and AI-assisted diagnostics.',
    keyFeatures: [
      'Telemedicine Platform',
      'Electronic Health Records (EHR)',
      'AI-Assisted Diagnostics',
      'Patient Portal & Engagement',
      'Appointment Management',
      'Prescription & Pharmacy Integration'
    ],
    benefits: [
      'Reduce patient wait times by 65%',
      'Improve diagnostic accuracy by 35%',
      'HIPAA & GDPR compliant',
      '24/7 patient care access'
    ],
    useCases: [
      'Virtual Consultation Services',
      'Chronic Disease Management',
      'Mental Health Support',
      'Remote Patient Monitoring'
    ],
    techApproach: 'Secure cloud infrastructure with end-to-end encryption, AI-powered diagnostic tools, and seamless healthcare system integration.',
    stats: [
      { label: 'Consultations', value: '2M+' },
      { label: 'Patient Satisfaction', value: '96%' },
      { label: 'Healthcare Providers', value: '5K+' }
    ]
  },
  {
    id: 5,
    icon: '🤖',
    title: 'Advanced Technology',
    subtitle: 'Enterprise Technology Solutions',
    verbs: 'Deploy · Secure · Integrate',
    description: 'Enterprise-grade technology solutions encompassing AI/ML, blockchain, cybersecurity, and cloud infrastructure. Build scalable, secure, and intelligent systems that drive digital transformation.',
    keyFeatures: [
      'AI/ML Model Development',
      'Blockchain Integration',
      'Cybersecurity Solutions',
      'Cloud Architecture Design',
      'DevOps & Automation',
      'API Development & Integration'
    ],
    benefits: [
      'Accelerate time-to-market by 50%',
      'Reduce security incidents by 75%',
      'Scale infrastructure automatically',
      '99.99% uptime guarantee'
    ],
    useCases: [
      'Enterprise Digital Transformation',
      'Blockchain Supply Chain',
      'AI-Powered Customer Service',
      'Cloud Migration Projects'
    ],
    techApproach: 'Utilizing cutting-edge technologies including Kubernetes, microservices architecture, and zero-trust security models.',
    stats: [
      { label: 'Projects Delivered', value: '450+' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'Security Score', value: 'A+' }
    ]
  },
  {
    id: 6,
    icon: '👨‍👩‍👧',
    title: 'Digital Parenting',
    subtitle: 'Family Support Platforms',
    verbs: 'Support · Guide · Empower',
    description: 'Innovative digital platforms supporting modern families with parenting resources, child development tracking, educational content, and community engagement. Empower parents with expert guidance.',
    keyFeatures: [
      'Development Milestone Tracking',
      'Expert Parenting Resources',
      'Community Forums & Support',
      'Educational Content Library',
      'Activity Planning Tools',
      'Health & Wellness Monitoring'
    ],
    benefits: [
      'Access to certified experts',
      'Personalized recommendations',
      'Age-appropriate content',
      'Safe community environment'
    ],
    useCases: [
      'New Parent Guidance Programs',
      'Child Development Tracking',
      'Educational Content Delivery',
      'Parent Community Building'
    ],
    techApproach: 'Child-safe, privacy-focused platform with AI-powered content recommendations and expert-verified parenting resources.',
    stats: [
      { label: 'Active Families', value: '500K+' },
      { label: 'Expert Articles', value: '10K+' },
      { label: 'Satisfaction', value: '98%' }
    ]
  },
  {
    id: 7,
    icon: '🏗',
    title: 'Smart Infrastructure',
    subtitle: 'Intelligent Infrastructure Systems',
    verbs: 'Design · Finance · Operate',
    description: 'Comprehensive infrastructure development and management solutions combining smart sensors, predictive analytics, and sustainable design principles. Transform physical infrastructure into intelligent, connected systems.',
    keyFeatures: [
      'Infrastructure Planning Tools',
      'Smart Sensor Integration',
      'Asset Management Systems',
      'Predictive Maintenance',
      'Sustainability Metrics',
      'Investment ROI Analysis'
    ],
    benefits: [
      'Reduce maintenance costs by 35%',
      'Extend asset lifespan by 25%',
      'Real-time infrastructure monitoring',
      'Data-driven decision making'
    ],
    useCases: [
      'Smart Building Management',
      'Transportation Infrastructure',
      'Utilities & Water Management',
      'Public Works Projects'
    ],
    techApproach: 'Integrating IoT sensors, GIS mapping, BIM modeling, and predictive analytics to create intelligent infrastructure.',
    stats: [
      { label: 'Projects', value: '200+' },
      { label: 'Cost Savings', value: '35%' },
      { label: 'Asset Uptime', value: '98%' }
    ]
  },
  {
    id: 8,
    icon: '🏙',
    title: 'Smart City Solutions',
    subtitle: 'Urban Digital Transformation',
    verbs: 'Plan · Digitise · Govern',
    description: 'Holistic smart city solutions integrating IoT, AI, and data analytics to improve urban living. Optimize traffic, energy, waste management, and public services through connected systems.',
    keyFeatures: [
      'Integrated Urban Platform',
      'Traffic Management AI',
      'Waste Management Optimization',
      'Energy Grid Intelligence',
      'Public Safety Systems',
      'Citizen Engagement Portal'
    ],
    benefits: [
      'Reduce traffic congestion by 30%',
      'Lower energy consumption by 25%',
      'Improve emergency response times',
      'Enhanced quality of life'
    ],
    useCases: [
      'Smart Traffic Management',
      'Intelligent Street Lighting',
      'Digital Citizen Services',
      'Environmental Monitoring'
    ],
    techApproach: 'City-wide IoT infrastructure with centralized data platform, AI-powered optimization algorithms, and citizen-facing applications.',
    stats: [
      { label: 'Cities Deployed', value: '25+' },
      { label: 'Sensors Active', value: '1M+' },
      { label: 'Efficiency Gain', value: '+30%' }
    ]
  },
  {
    id: 9,
    icon: '✈️',
    title: 'Aviation & E-Government',
    subtitle: 'Digital Government Services',
    verbs: 'Modernise · Automate · Serve',
    description: 'Advanced digital platforms for aviation operations and government services. Streamline processes, enhance security, and improve citizen engagement through modern technology and intelligent automation.',
    keyFeatures: [
      'Digital Government Services',
      'Aviation Management Systems',
      'Automated Workflow Engine',
      'Secure Document Management',
      'Citizen Portal & Mobile Apps',
      'Compliance & Audit Tools'
    ],
    benefits: [
      'Reduce processing times by 70%',
      'Improve citizen satisfaction by 85%',
      'Enhanced security & compliance',
      '24/7 service availability'
    ],
    useCases: [
      'E-Visa & Immigration Systems',
      'Airport Operations Management',
      'Digital Licensing & Permits',
      'Flight Operations Optimization'
    ],
    techApproach: 'Secure, scalable cloud platforms with biometric authentication, blockchain for document verification, and AI-powered automation.',
    stats: [
      { label: 'Transactions/Year', value: '10M+' },
      { label: 'Processing Time', value: '-70%' },
      { label: 'User Rating', value: '4.8/5' }
    ]
  },
];

export function SmartSolutions() {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [hoveredStat, setHoveredStat] = useState<string | null>(null);
  const scrollY = useParallax();

  const toggleService = (id: number) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background with Parallax */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"
        style={{
          transform: `translateY(${(scrollY - 1500) * 0.015}px)`,
        }}
      ></div>

      {/* Floating Gradient Orbs */}
      <div 
        className="absolute top-40 left-10 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
        style={{
          transform: `translate(${(scrollY - 1500) * 0.02}px, ${(scrollY - 1500) * 0.03}px)`,
        }}
      ></div>
      <div 
        className="absolute bottom-40 right-10 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        style={{
          transform: `translate(${(scrollY - 1500) * -0.015}px, ${(scrollY - 1500) * -0.025}px)`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
          >
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Our Smart Solutions</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive Digital Solutions
          </h2>

          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Explore our nine specialized domains, each designed to transform industries through 
            cutting-edge technology and innovative approaches.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="space-y-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              {/* Service Card */}
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                {/* Main Card */}
                <div className="relative bg-card/80 backdrop-blur-sm border-2 border-border rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-500">
                  {/* Header - Always Visible */}
                  <div 
                    className="p-8 cursor-pointer"
                    onClick={() => toggleService(solution.id)}
                  >
                    <div className="flex items-start gap-6">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                        className="text-6xl md:text-7xl flex-shrink-0"
                      >
                        {solution.icon}
                      </motion.div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                              {solution.title}
                            </h3>
                            <p className="text-muted-foreground mb-2">
                              {solution.subtitle}
                            </p>
                            <p className="text-sm text-primary/70 font-medium">
                              {solution.verbs}
                            </p>
                          </div>
                          
                          {/* Expand Button */}
                          <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full hover:bg-primary/10 flex-shrink-0"
                          >
                            <motion.div
                              animate={{ rotate: expandedService === solution.id ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {expandedService === solution.id ? (
                                <ChevronUp className="h-6 w-6 text-primary" />
                              ) : (
                                <ChevronDown className="h-6 w-6 text-primary" />
                              )}
                            </motion.div>
                          </Button>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-3 gap-4 mt-6">
                          {solution.stats.map((stat, idx) => (
                            <motion.div
                              key={idx}
                              onHoverStart={() => setHoveredStat(`${solution.id}-${idx}`)}
                              onHoverEnd={() => setHoveredStat(null)}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className="bg-primary/10 rounded-xl p-4 text-center border border-primary/20 hover:border-primary/40 transition-all cursor-pointer"
                            >
                              <motion.div
                                animate={{ 
                                  scale: hoveredStat === `${solution.id}-${idx}` ? 1.1 : 1 
                                }}
                                className="text-2xl md:text-3xl font-bold text-primary mb-1"
                              >
                                {stat.value}
                              </motion.div>
                              <div className="text-xs text-muted-foreground">
                                {stat.label}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {expandedService === solution.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8 pt-4 border-t border-border/50">
                          {/* Description */}
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="mb-8"
                          >
                            <p className="text-lg text-foreground/90 leading-relaxed">
                              {solution.description}
                            </p>
                          </motion.div>

                          {/* Two Column Layout */}
                          <div className="grid md:grid-cols-2 gap-8 mb-8">
                            {/* Key Features */}
                            <motion.div
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.2 }}
                            >
                              <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-foreground">
                                <div className="w-1 h-6 bg-primary rounded-full"></div>
                                Key Features
                              </h4>
                              <div className="space-y-3">
                                {solution.keyFeatures.map((feature, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ x: -10, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 + idx * 0.05 }}
                                    whileHover={{ x: 4 }}
                                    className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10 hover:border-primary/30 transition-all cursor-pointer"
                                  >
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-foreground">{feature}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>

                            {/* Benefits */}
                            <motion.div
                              initial={{ x: 20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.2 }}
                            >
                              <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-foreground">
                                <div className="w-1 h-6 bg-green-500 rounded-full"></div>
                                Key Benefits
                              </h4>
                              <div className="space-y-3">
                                {solution.benefits.map((benefit, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ x: 10, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 + idx * 0.05 }}
                                    whileHover={{ x: 4 }}
                                    className="flex items-start gap-3 p-3 rounded-lg bg-green-500/5 border border-green-500/10 hover:border-green-500/30 transition-all cursor-pointer"
                                  >
                                    <Sparkles className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-foreground">{benefit}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          </div>

                          {/* Use Cases */}
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mb-8"
                          >
                            <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-foreground">
                              <div className="w-1 h-6 bg-accent rounded-full"></div>
                              Use Cases
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-3">
                              {solution.useCases.map((useCase, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ scale: 0.9, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  transition={{ delay: 0.5 + idx * 0.05 }}
                                  whileHover={{ scale: 1.02, y: -2 }}
                                  className="p-4 rounded-lg bg-accent/5 border border-accent/10 hover:border-accent/30 transition-all cursor-pointer"
                                >
                                  <span className="text-sm font-medium text-foreground">{useCase}</span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>

                          {/* Tech Approach */}
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 mb-6"
                          >
                            <h4 className="text-lg font-bold mb-3 text-foreground flex items-center gap-2">
                              <Sparkles className="h-5 w-5 text-primary" />
                              Technology Approach
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">
                              {solution.techApproach}
                            </p>
                          </motion.div>

                          {/* CTA Buttons */}
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="flex flex-col sm:flex-row gap-4"
                          >
                            <Button
                              size="lg"
                              className="flex-1 bg-primary hover:bg-primary/90 group"
                              onClick={() => {
                                const subject = `Demo Request: ${solution.title}`;
                                window.location.href = `#contact?subject=${encodeURIComponent(subject)}`;
                                const element = document.getElementById('contact');
                                if (element) {
                                  setTimeout(() => {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                  }, 100);
                                }
                              }}
                            >
                              Request a Demo
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button
                              size="lg"
                              variant="outline"
                              className="flex-1 border-primary/30 hover:bg-primary/10 group"
                              onClick={() => {
                                const element = document.getElementById('contact');
                                if (element) {
                                  element.scrollIntoView({ behavior: 'smooth' });
                                }
                              }}
                            >
                              Contact Sales
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground text-lg mb-6">
            Not sure which solution fits your needs?
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="group border-2 border-primary/30 hover:bg-primary/10"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Let's Discuss Your Project
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}