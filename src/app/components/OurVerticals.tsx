import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  Zap, 
  Cpu, 
  Users, 
  ChevronDown,
  Globe,
  Plane,
  Building,
  MapPin,
  Mountain,
  Leaf,
  LineChart,
  Code,
  Heart,
  GraduationCap,
  Baby,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { useParallax } from '@/app/hooks/useParallax';

interface Stat {
  value: string;
  label: string;
}

interface Feature {
  text: string;
}

interface Benefit {
  text: string;
}

interface Vertical {
  id: string;
  icon: any;
  emoji?: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  stats: Stat[];
  features: Feature[];
  benefits: Benefit[];
}

const verticals: Vertical[] = [
  {
    id: 'public-services',
    icon: Building2,
    emoji: '🏛️',
    title: 'Public Services',
    subtitle: 'Modernizing governments through digital platforms, aviation systems, and smart public infrastructure.',
    tagline: 'Digital Government & Institutional Transformation',
    description: 'FIVA Investment partners with governments and public institutions to modernize service delivery, enhance regulatory efficiency, and accelerate digital transformation. We structure and deploy integrated platforms that improve transparency, operational performance, and citizen experience.',
    stats: [
      { value: '15+', label: 'Countries' },
      { value: '98%', label: 'Uptime SLA' },
      { value: '10M+', label: 'Citizens Served' }
    ],
    features: [
      { text: 'Digital Government Platforms' },
      { text: 'Aviation & E-Government Systems' },
      { text: 'Identity & Mobility Solutions' },
      { text: 'Smart City Frameworks' },
      { text: 'Public Infrastructure Digitalization' }
    ],
    benefits: [
      { text: 'Strategic advisory and system integration' },
      { text: 'Scalable, secure, and future-ready ecosystems' },
      { text: 'Operational deployment excellence' }
    ]
  },
  {
    id: 'energy-climate',
    icon: Zap,
    emoji: '⚡',
    title: 'Energy & Climate',
    subtitle: 'Structuring and deploying sustainable energy and infrastructure initiatives with long-term economic impact.',
    tagline: 'Sustainable Infrastructure & Energy Transformation',
    description: 'Within the Energy & Climate vertical, FIVA Investment develops and supports projects that strengthen energy resilience, sustainability, and long-term environmental performance. We operate across the full value chain — from project structuring and investment mobilization to operational optimization.',
    stats: [
      { value: '500MW+', label: 'Energy Capacity' },
      { value: '40%', label: 'Carbon Reduction' },
      { value: '25+', label: 'Climate Projects' }
    ],
    features: [
      { text: 'Mining & Energy Solutions' },
      { text: 'Sustainable Infrastructure Projects' },
      { text: 'Climate driven Initiatives' },
      { text: 'Resource Efficiency Optimization' },
      { text: 'Infrastructure Modernization' }
    ],
    benefits: [
      { text: 'Financial structuring and technical expertise' },
      { text: 'Environmental and economic sustainability' },
      { text: 'Full value chain integration' }
    ]
  },
  {
    id: 'technology-innovation',
    icon: Cpu,
    emoji: '💡',
    title: 'Technology & Innovation',
    subtitle: 'Driving scalable growth through advanced digital systems, investment technology, and secure data platforms.',
    tagline: 'Technology-Enabled Investment Platforms',
    description: 'Technology is embedded across all our verticals. Through our Technology & Innovation platform, we invest in and deploy advanced digital systems that enhance scalability, efficiency, and data-driven decision-making. Our objective is to enable digital acceleration while ensuring cybersecurity, interoperability, and long-term system resilience.',
    stats: [
      { value: '$2B+', label: 'Assets Managed' },
      { value: '99.9%', label: 'System Reliability' },
      { value: '100K+', label: 'Active Users' }
    ],
    features: [
      { text: 'Investment Technology Platforms' },
      { text: 'Enterprise & Advanced Technology Solutions' },
      { text: 'Digital Health Systems' },
      { text: 'Data & Analytics Infrastructure' },
      { text: 'Secure & Integrated IT Ecosystems' }
    ],
    benefits: [
      { text: 'Enhanced scalability and efficiency' },
      { text: 'Cybersecurity and interoperability' },
      { text: 'Long-term system resilience' }
    ]
  },
  {
    id: 'human-capital',
    icon: Users,
    emoji: '🧠',
    title: 'Human Capital & Society',
    subtitle: 'Talent, Workforce & Societal Enablement',
    tagline: 'Build · Manage · Scale',
    description: 'Human capital is a core driver of economic growth. Through this vertical, FIVA Investment delivers structured workforce, education, and capacity-building solutions aligned with national and private sector priorities. We align workforce strategies with industry demand, ensuring sustainable employability, institutional development, and long-term societal impact.',
    stats: [
      { value: '25K+', label: 'Placements' },
      { value: '94%', label: 'Success Rate' },
      { value: '50+', label: 'Countries' }
    ],
    features: [
      { text: 'Talent & Workforce Solutions' },
      { text: 'Strategic Recruitment Platforms' },
      { text: 'Digital Parenting & Family Support Systems' },
      { text: 'Education & Capacity Development Programs' }
    ],
    benefits: [
      { text: 'Sustainable employability focus' },
      { text: 'Institutional development support' },
      { text: 'Long-term societal impact' }
    ]
  }
];

export function OurVerticals() {
  const [expandedVertical, setExpandedVertical] = useState<string | null>(null);
  const scrollY = useParallax();

  const toggleVertical = (id: string) => {
    setExpandedVertical(expandedVertical === id ? null : id);
  };

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(17,94,103,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(17,94,103,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"
          style={{
            transform: `translateY(${scrollY * 0.02}px)`,
          }}
        ></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Cpu className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">What We Do</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Our </span>
            <span className="text-primary">Verticals</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
            FIVA Investment operates across high-impact verticals where strategic investment, technology enablement, and operational execution converge.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
            Each vertical reflects our ability to structure, deploy, and scale initiatives that create measurable economic, institutional, and social value.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Through a disciplined investment approach and cross-border expertise, we transform complex challenges into sustainable growth platforms.
          </p>
        </motion.div>

        {/* Verticals - Stacked Cards */}
        <div className="space-y-6">
          {verticals.map((vertical, index) => (
            <motion.div
              key={vertical.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card with adaptive background and border */}
              <div className="relative backdrop-blur-sm bg-white/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 shadow-lg dark:shadow-none group-hover:bg-gradient-to-br group-hover:from-primary/5 group-hover:to-accent/5">
                
                {/* Header Section */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-start gap-4 flex-1">
                    {/* Emoji Icon */}
                    <div className="text-5xl">{vertical.emoji}</div>
                    
                    {/* Title & Subtitle */}
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                        {vertical.title}
                      </h3>
                      <p className="text-base text-foreground/80 dark:text-slate-300 mb-2">
                        {vertical.subtitle}
                      </p>
                      <p className="text-sm text-primary/70">
                        {vertical.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Expand/Collapse Button */}
                  <button
                    onClick={() => toggleVertical(vertical.id)}
                    className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                  >
                    <ChevronDown 
                      className={`h-5 w-5 text-primary transition-transform duration-300 ${
                        expandedVertical === vertical.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {vertical.stats.map((stat, statIndex) => (
                    <motion.div
                      key={statIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + statIndex * 0.05 }}
                      className="relative backdrop-blur-sm bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-xl p-6 text-center hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20 transition-all"
                    >
                      <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Description */}
                <p className="text-foreground/80 dark:text-slate-300 leading-relaxed mb-8">
                  {vertical.description}
                </p>

                {/* Expandable Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedVertical === vertical.id ? 'auto' : 0,
                    opacity: expandedVertical === vertical.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-8 border-t border-slate-200 dark:border-slate-700/50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      
                      {/* Key Features */}
                      <div>
                        <div className="flex items-center gap-2 mb-6">
                          <div className="h-1 w-1 bg-primary rounded-full"></div>
                          <h4 className="text-lg font-bold text-foreground">Key Features</h4>
                        </div>
                        <div className="space-y-3">
                          {vertical.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-foreground/80 dark:text-slate-300">{feature.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Benefits */}
                      <div>
                        <div className="flex items-center gap-2 mb-6">
                          <div className="h-1 w-1 bg-primary rounded-full"></div>
                          <h4 className="text-lg font-bold text-foreground">Key Benefits</h4>
                        </div>
                        <div className="space-y-3">
                          {vertical.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-start gap-3">
                              <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-foreground/80 dark:text-slate-300">{benefit.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}