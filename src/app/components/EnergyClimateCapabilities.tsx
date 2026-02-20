import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mountain, 
  Wind, 
  Leaf, 
  Sun,
  ChevronRight,
  Lock,
  CheckCircle2,
  ArrowRight,
  X,
  BarChart3,
  Network,
  Shield,
  Zap,
  Battery,
  CloudRain,
  Droplets,
  Factory
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface Capability {
  id: string;
  icon: any;
  title: string;
  subtitle: string;
  sections: {
    overview: {
      left: string[];
      right: { label: string; value: string }[];
    };
    solutions: {
      title: string;
      icon: any;
      description: string;
      features: string[];
    }[];
    deliveryModel: {
      step: string;
      icon: any;
      description: string;
      deliverables: string[];
    }[];
    technology: string[];
    cta: {
      headline: string;
      button: string;
    };
  };
}

// Delivery Model Component
function DeliveryModelSection({ 
  deliveryModel, 
  expandedStep, 
  setExpandedStep 
}: { 
  deliveryModel: { step: string; icon: any; description: string; deliverables: string[]; }[];
  expandedStep: number | null;
  setExpandedStep: (step: number | null) => void;
}) {
  return (
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-foreground mb-10 text-center">Delivery Model</h3>
      
      {/* Visual Progress Line */}
      <div className="relative mb-12">
        <div className="absolute top-8 left-0 right-0 h-0.5 bg-border"></div>
        <div className="relative flex justify-between items-start">
          {deliveryModel.map((model, idx) => {
            const StepIcon = model.icon;
            const isActive = expandedStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setExpandedStep(isActive ? null : idx)}
                className="flex flex-col items-center group relative z-10"
                style={{ flex: 1 }}
              >
                {/* Icon Circle */}
                <div className={`
                  w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 mb-3
                  ${isActive 
                    ? 'bg-gradient-to-br from-green-600 to-emerald-600 shadow-lg scale-110' 
                    : 'bg-card border-2 border-green-500/30 group-hover:border-green-500 group-hover:bg-green-500/5'
                  }
                `}>
                  <StepIcon className={`h-7 w-7 ${isActive ? 'text-white' : 'text-green-600 dark:text-green-400'} transition-colors duration-300`} />
                </div>
                
                {/* Step Number */}
                <div className={`text-xs font-bold mb-1 transition-colors duration-300 ${isActive ? 'text-green-600 dark:text-green-400' : 'text-muted-foreground'}`}>
                  STEP {idx + 1}
                </div>
                
                {/* Step Title */}
                <div className={`text-sm font-semibold text-center max-w-[140px] transition-colors duration-300 ${isActive ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'}`}>
                  {model.step}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Expandable Content */}
      <AnimatePresence mode="wait">
        {expandedStep !== null && deliveryModel[expandedStep] && (
          <motion.div
            key={expandedStep}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-card border border-border rounded-2xl p-8 mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left - Description */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                      {(() => {
                        const IconComponent = deliveryModel[expandedStep].icon;
                        return <IconComponent className="h-5 w-5 text-green-600 dark:text-green-400" />;
                      })()}
                    </div>
                    <h4 className="text-xl font-bold text-foreground">{deliveryModel[expandedStep].step}</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {deliveryModel[expandedStep].description}
                  </p>
                </div>

                {/* Right - Deliverables */}
                <div>
                  <h5 className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-4">Key Deliverables</h5>
                  <div className="space-y-3">
                    {deliveryModel[expandedStep].deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const capabilities: Capability[] = [
  {
    id: 'renewable-energy',
    icon: Sun,
    title: 'Renewable Energy Systems',
    subtitle: 'Transforming national and industrial energy ecosystems through scalable renewable power infrastructure designed to enhance energy security, operational efficiency, and long-term sustainability.',
    sections: {
      overview: {
        left: [
          'Deployment of integrated solar, wind, and hybrid energy systems aligned with national energy transition strategies',
          'Intelligent grid integration enabling stable, optimized, and decentralized power distribution',
          'Advanced energy storage solutions strengthening reliability and load balancing',
          'Infrastructure modernization reducing carbon intensity while improving long-term energy resilience'
        ],
        right: [
          { label: 'Deployment', value: 'Utility-Scale & Industrial' },
          { label: 'Architecture', value: 'Intelligent & Grid-Integrated' },
          { label: 'Systems', value: 'Scalable & Resilient' }
        ]
      },
      solutions: [
        {
          title: 'Solar & Wind Power Infrastructure',
          icon: Sun,
          description: 'End-to-end renewable generation systems including design, engineering, installation, and commissioning of utility-scale solar farms and wind energy assets.',
          features: [
            'Utility-scale solar farm design',
            'Wind energy asset engineering',
            'Installation and commissioning',
            'Performance optimization'
          ]
        },
        {
          title: 'Hybrid Energy Systems',
          icon: Wind,
          description: 'Integrated renewable ecosystems combining solar, wind, storage, and conventional backup systems to ensure continuous and optimized power delivery.',
          features: [
            'Solar and wind integration',
            'Energy storage systems',
            'Conventional backup integration',
            'Optimized power delivery'
          ]
        },
        {
          title: 'Smart Grid Integration',
          icon: Network,
          description: 'Digital grid management platforms enabling demand forecasting, load optimization, distributed energy management, and real-time performance monitoring.',
          features: [
            'Demand forecasting systems',
            'Load optimization platforms',
            'Distributed energy management',
            'Real-time performance monitoring'
          ]
        },
        {
          title: 'Advanced Energy Storage',
          icon: Battery,
          description: 'Battery energy storage systems (BESS) and hybrid storage architectures ensuring grid stability, peak shaving, and renewable intermittency management.',
          features: [
            'Battery energy storage systems (BESS)',
            'Hybrid storage architectures',
            'Grid stability management',
            'Peak shaving and intermittency control'
          ]
        }
      ],
      deliveryModel: [
        {
          step: 'Energy & Site Feasibility Assessment',
          icon: Shield,
          description: 'Comprehensive evaluation of location suitability, environmental impact, energy yield potential, and regulatory requirements for renewable energy deployment.',
          deliverables: [
            'Site feasibility analysis',
            'Energy yield projections',
            'Environmental impact assessment',
            'Regulatory compliance roadmap'
          ]
        },
        {
          step: 'System Architecture & Grid Integration Design',
          icon: Zap,
          description: 'Detailed engineering design of renewable energy infrastructure, storage systems, and grid integration architecture for optimal performance.',
          deliverables: [
            'System architecture blueprints',
            'Grid integration design',
            'Storage system specifications',
            'Performance optimization framework'
          ]
        },
        {
          step: 'Engineering, Procurement & Deployment',
          icon: Network,
          description: 'Professional installation and deployment of renewable energy systems with comprehensive testing, certification, and grid connection.',
          deliverables: [
            'Engineering execution',
            'Equipment procurement',
            'System deployment and installation',
            'Grid connection certification'
          ]
        },
        {
          step: 'Performance Monitoring & Optimization',
          icon: BarChart3,
          description: 'Continuous performance monitoring, predictive maintenance, and efficiency optimization for maximum renewable energy output and reliability.',
          deliverables: [
            'Real-time monitoring systems',
            'Performance analytics dashboards',
            'Predictive maintenance programs',
            'Continuous optimization reports'
          ]
        }
      ],
      technology: [
        'Intelligent grid management systems',
        'IoT-enabled performance monitoring',
        'Predictive maintenance analytics',
        'Advanced battery storage technologies',
        'Renewable asset management platforms',
        'Cybersecure energy infrastructure'
      ],
      cta: {
        headline: 'Strengthening national energy independence, reducing carbon emissions, and enabling scalable renewable infrastructure aligned with long-term sustainability objectives.',
        button: 'Discuss Renewable Energy Project'
      }
    }
  },
  {
    id: 'mining-energy',
    icon: Mountain,
    title: 'Mining & Energy Operations',
    subtitle: 'Transforming resource extraction and energy operations through intelligent, data-driven mining and energy management systems designed to enhance operational efficiency, safety performance, regulatory compliance, and long-term environmental sustainability.',
    sections: {
      overview: {
        left: [
          'Operational modernization through smart mining and digitally integrated energy extraction ecosystems',
          'Real-time monitoring improving safety, productivity, and environmental performance',
          'Data-driven asset optimization reducing downtime and maximizing resource efficiency',
          'Regulatory alignment ensuring transparent reporting and sustainable operations'
        ],
        right: [
          { label: 'Deployment', value: 'Industrial & National Scale' },
          { label: 'Architecture', value: 'Intelligent & Integrated' },
          { label: 'Systems', value: 'Automated & Data-Driven' }
        ]
      },
      solutions: [
        {
          title: 'Smart Mining Infrastructure',
          icon: Mountain,
          description: 'Digitally enabled extraction environments integrating IoT sensors, automation systems, and centralized operational dashboards to enhance productivity, safety compliance, and asset visibility across sites.',
          features: [
            'IoT sensor integration',
            'Automation system deployment',
            'Centralized operational dashboards',
            'Safety compliance monitoring'
          ]
        },
        {
          title: 'Operational Performance Optimization',
          icon: BarChart3,
          description: 'AI-driven analytics platforms identifying inefficiencies, predicting equipment failure, and optimizing production cycles through predictive maintenance and performance modeling.',
          features: [
            'AI-driven analytics',
            'Equipment failure prediction',
            'Production cycle optimization',
            'Predictive maintenance systems'
          ]
        },
        {
          title: 'Energy Extraction & Asset Monitoring',
          icon: Zap,
          description: 'Integrated systems overseeing drilling, processing, and energy distribution assets with real-time operational intelligence and environmental tracking.',
          features: [
            'Drilling and processing oversight',
            'Energy distribution monitoring',
            'Real-time operational intelligence',
            'Environmental tracking systems'
          ]
        },
        {
          title: 'Environmental & Risk Management Platforms',
          icon: Leaf,
          description: 'Comprehensive monitoring frameworks enabling emissions tracking, water usage control, environmental impact reporting, and risk mitigation aligned with ESG standards.',
          features: [
            'Emissions tracking systems',
            'Water usage control',
            'Environmental impact reporting',
            'ESG-aligned risk mitigation'
          ]
        }
      ],
      deliveryModel: [
        {
          step: 'Operational & Risk Assessment',
          icon: Shield,
          description: 'Comprehensive analysis of current mining operations, equipment inventory, safety protocols, environmental compliance, and operational risk factors.',
          deliverables: [
            'Operations audit and assessment',
            'Equipment inventory analysis',
            'Safety protocol evaluation',
            'Environmental compliance review'
          ]
        },
        {
          step: 'Intelligent System Architecture Design',
          icon: Lock,
          description: 'Design of IoT sensor networks, automation systems, monitoring platforms, and data infrastructure tailored to mining and energy operations.',
          deliverables: [
            'IoT infrastructure blueprint',
            'Automation system design',
            'Data architecture framework',
            'Safety systems specifications'
          ]
        },
        {
          step: 'Deployment & Industrial Integration',
          icon: Network,
          description: 'Installation of smart mining infrastructure with seamless integration into existing operations, equipment, and workflows.',
          deliverables: [
            'System deployment and installation',
            'Operational integration',
            'Safety certification',
            'Personnel training programs'
          ]
        },
        {
          step: 'Performance Monitoring & Continuous Optimization',
          icon: BarChart3,
          description: 'Ongoing monitoring and optimization of mining operations for maximum efficiency, safety, and environmental performance.',
          deliverables: [
            'Real-time operations dashboards',
            'Performance analytics',
            'Continuous optimization',
            'Sustainability reporting'
          ]
        }
      ],
      technology: [
        'Industrial IoT infrastructure',
        'AI-powered predictive analytics',
        'SCADA and automated control systems',
        'Cloud-based operational dashboards',
        'ESG compliance and environmental monitoring tools'
      ],
      cta: {
        headline: 'Enhancing operational resilience, maximizing resource efficiency, strengthening safety performance, and aligning energy operations with global sustainability standards.',
        button: 'Explore Smart Mining Solutions'
      }
    }
  },
  {
    id: 'climate-esg',
    icon: Leaf,
    title: 'Climate & ESG Solutions',
    subtitle: 'Empowering organizations to integrate environmental, social, and governance excellence through data-driven climate intelligence platforms, ESG compliance systems, and sustainability governance frameworks designed to strengthen transparency, resilience, and long-term value creation.',
    sections: {
      overview: {
        left: [
          'Enterprise-wide ESG integration through structured governance and reporting frameworks',
          'Climate risk intelligence enabling proactive mitigation and regulatory alignment',
          'Carbon tracking and sustainability analytics improving environmental accountability',
          'Transparent performance monitoring strengthening investor and stakeholder confidence'
        ],
        right: [
          { label: 'Deployment', value: 'Enterprise & Multi-Jurisdictional' },
          { label: 'Architecture', value: 'Data-Centric & Compliance-Driven' },
          { label: 'Systems', value: 'Integrated & Audit-Ready' }
        ]
      },
      solutions: [
        {
          title: 'Carbon Tracking & Emissions Management Platforms',
          icon: CloudRain,
          description: 'Comprehensive digital systems enabling Scope 1, 2, and 3 emissions monitoring, automated carbon accounting, and real-time sustainability dashboards aligned with international climate standards.',
          features: [
            'Scope 1, 2, and 3 emissions monitoring',
            'Automated carbon accounting',
            'Real-time sustainability dashboards',
            'International standards alignment'
          ]
        },
        {
          title: 'ESG Reporting & Regulatory Compliance',
          icon: CheckCircle2,
          description: 'Structured reporting frameworks supporting alignment with global ESG standards (GRI, TCFD, IFRS Sustainability, CSRD), ensuring transparency, auditability, and regulatory conformity.',
          features: [
            'GRI, TCFD, IFRS compliance',
            'CSRD reporting alignment',
            'Transparency and auditability',
            'Regulatory conformity frameworks'
          ]
        },
        {
          title: 'Climate Risk & Scenario Modeling',
          icon: Shield,
          description: 'Advanced analytics tools assessing physical and transitional climate risks through predictive modeling, stress testing, and scenario-based impact simulations.',
          features: [
            'Physical risk assessment',
            'Transitional risk analysis',
            'Predictive modeling tools',
            'Scenario-based impact simulations'
          ]
        },
        {
          title: 'Sustainability Performance & Governance Platforms',
          icon: Network,
          description: 'Integrated systems consolidating environmental data, social metrics, governance indicators, and compliance workflows into centralized executive dashboards.',
          features: [
            'Environmental data consolidation',
            'Social metrics tracking',
            'Governance indicator monitoring',
            'Centralized executive dashboards'
          ]
        }
      ],
      deliveryModel: [
        {
          step: 'ESG & Climate Baseline Assessment',
          icon: Shield,
          description: 'Comprehensive evaluation of current ESG performance, carbon footprint, climate risk exposure, and regulatory compliance status.',
          deliverables: [
            'ESG performance baseline',
            'Carbon footprint analysis',
            'Climate risk assessment',
            'Compliance gap analysis'
          ]
        },
        {
          step: 'Sustainability Architecture & Data Framework Design',
          icon: Lock,
          description: 'Customization of ESG platform architecture aligned with organizational goals, reporting requirements, and international standards.',
          deliverables: [
            'Sustainability architecture design',
            'Data framework specifications',
            'Reporting framework alignment',
            'Governance structure setup'
          ]
        },
        {
          step: 'Platform Integration & Reporting Deployment',
          icon: Network,
          description: 'Integration with enterprise systems for automated ESG data collection, real-time monitoring, and regulatory reporting.',
          deliverables: [
            'System integration execution',
            'Automated data collection',
            'Reporting platform deployment',
            'Training and onboarding'
          ]
        },
        {
          step: 'Continuous Monitoring & Performance Optimization',
          icon: BarChart3,
          description: 'Ongoing ESG performance tracking, climate risk monitoring, reporting automation, and continuous improvement optimization.',
          deliverables: [
            'Real-time ESG monitoring',
            'Automated reporting systems',
            'Performance insights delivery',
            'Continuous optimization strategies'
          ]
        }
      ],
      technology: [
        'Carbon accounting engines',
        'AI-driven climate analytics',
        'Regulatory reporting automation',
        'Secure data governance frameworks',
        'Real-time ESG performance dashboards'
      ],
      cta: {
        headline: 'Strengthening regulatory compliance, enhancing investor trust, mitigating climate risk exposure, and embedding sustainability as a core driver of long-term enterprise resilience.',
        button: 'Start ESG Transformation'
      }
    }
  },
  {
    id: 'sustainable-infrastructure',
    icon: Wind,
    title: 'Sustainable Infrastructure',
    subtitle: 'Designing and delivering resilient, climate-adaptive infrastructure ecosystems integrating renewable energy, water management, green construction standards, and smart urban systems to support long-term environmental sustainability and economic growth.',
    sections: {
      overview: {
        left: [
          'Climate-resilient infrastructure planning aligned with national sustainability objectives',
          'Integration of renewable energy within urban and industrial infrastructure projects',
          'Water, waste, and resource efficiency systems strengthening environmental performance',
          'Smart urban development frameworks enhancing livability and operational efficiency'
        ],
        right: [
          { label: 'Deployment', value: 'Urban, Industrial & National' },
          { label: 'Architecture', value: 'Resilient & Climate-Adaptive' },
          { label: 'Systems', value: 'Integrated & Future-Ready' }
        ]
      },
      solutions: [
        {
          title: 'Green Urban Development',
          icon: Factory,
          description: 'Sustainable city planning integrating renewable microgrids, smart mobility systems, low-carbon transport corridors, and eco-district development aligned with international green standards.',
          features: [
            'Renewable microgrid integration',
            'Smart mobility systems',
            'Low-carbon transport corridors',
            'Eco-district development'
          ]
        },
        {
          title: 'Climate-Adaptive Infrastructure Design',
          icon: CloudRain,
          description: 'Infrastructure engineered for environmental resilience, incorporating flood mitigation systems, heat-adaptive materials, coastal protection, and climate-responsive construction standards.',
          features: [
            'Flood mitigation systems',
            'Heat-adaptive materials',
            'Coastal protection infrastructure',
            'Climate-responsive construction'
          ]
        },
        {
          title: 'Water & Resource Management Systems',
          icon: Droplets,
          description: 'Advanced water treatment, desalination integration, smart irrigation, and circular waste management systems improving resource efficiency and environmental sustainability.',
          features: [
            'Advanced water treatment',
            'Desalination integration',
            'Smart irrigation systems',
            'Circular waste management'
          ]
        },
        {
          title: 'Green Building Technologies & Standards',
          icon: Leaf,
          description: 'Implementation of LEED-aligned and international green certification frameworks, incorporating energy-efficient materials, smart building systems, and carbon-reduction strategies.',
          features: [
            'LEED certification alignment',
            'Energy-efficient materials',
            'Smart building systems',
            'Carbon-reduction strategies'
          ]
        }
      ],
      deliveryModel: [
        {
          step: 'Environmental & Infrastructure Impact Assessment',
          icon: Shield,
          description: 'Comprehensive evaluation of project requirements, environmental context, climate risks, and sustainability goals for infrastructure development.',
          deliverables: [
            'Environmental impact analysis',
            'Infrastructure assessment',
            'Climate risk evaluation',
            'Sustainability goal definition'
          ]
        },
        {
          step: 'Sustainable Engineering & System Design',
          icon: Zap,
          description: 'Development of climate-adaptive, resource-efficient infrastructure design incorporating green technologies and renewable energy integration.',
          deliverables: [
            'Sustainable design blueprints',
            'Engineering specifications',
            'Green technology integration',
            'Renewable energy design'
          ]
        },
        {
          step: 'Phased Construction & Integration',
          icon: Network,
          description: 'Sustainable construction practices with green materials, waste reduction protocols, quality assurance, and phased deployment.',
          deliverables: [
            'Phased construction execution',
            'Green material implementation',
            'Quality control protocols',
            'System commissioning'
          ]
        },
        {
          step: 'Monitoring, Optimization & Lifecycle Management',
          icon: BarChart3,
          description: 'Ongoing monitoring of infrastructure performance, energy efficiency, environmental impact, and lifecycle optimization.',
          deliverables: [
            'Performance monitoring systems',
            'Energy efficiency tracking',
            'Environmental impact analysis',
            'Lifecycle optimization strategies'
          ]
        }
      ],
      technology: [
        'Smart infrastructure sensors & IoT systems',
        'Renewable integration frameworks',
        'Advanced building management systems (BMS)',
        'Environmental impact monitoring platforms',
        'Predictive maintenance & asset optimization tools'
      ],
      cta: {
        headline: 'Enhancing long-term infrastructure resilience, reducing environmental footprint, strengthening resource efficiency, and enabling sustainable urban and industrial transformation.',
        button: 'Explore Sustainable Infrastructure'
      }
    }
  }
];

export function EnergyClimateCapabilities() {
  const [selectedCapability, setSelectedCapability] = useState<string | null>(null);
  const [expandedStep, setExpandedStep] = useState<number | null>(0);
  const [expandedSolution, setExpandedSolution] = useState<number | null>(null);

  const selectedData = capabilities.find(c => c.id === selectedCapability);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Capabilities Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            const isSelected = selectedCapability === capability.id;
            
            return (
              <motion.button
                key={capability.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => {
                  setSelectedCapability(capability.id);
                  setExpandedSolution(null);
                  setExpandedStep(0);
                }}
                className="group relative text-left"
              >
                {/* Card with Enhanced Hover */}
                <div className={`relative bg-card border-2 rounded-2xl p-8 transition-all duration-300 h-full flex flex-col ${
                  isSelected 
                    ? 'border-green-600 shadow-lg shadow-green-600/20' 
                    : 'border-border hover:border-green-500/50 hover:shadow-xl'
                }`}>
                  
                  {/* Top Section */}
                  <div className="flex items-start gap-4 mb-6">
                    {/* Icon Container */}
                    <div className="flex-shrink-0">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isSelected 
                          ? 'bg-gradient-to-br from-green-600 to-emerald-600 scale-105' 
                          : 'bg-gradient-to-br from-green-500/10 to-emerald-500/5 group-hover:scale-105'
                      }`}>
                        <Icon className={`h-7 w-7 transition-colors duration-300 ${
                          isSelected ? 'text-white' : 'text-green-600 dark:text-green-400'
                        }`} />
                      </div>
                    </div>
                    
                    {/* Number Badge */}
                    <div className={`ml-auto text-xs font-bold px-3 py-1 rounded-full transition-all duration-300 ${
                      isSelected 
                        ? 'bg-green-600 text-white' 
                        : 'bg-green-500/10 text-green-600 dark:text-green-400/60 group-hover:bg-green-500/20 group-hover:text-green-600 dark:group-hover:text-green-400'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex-1 mb-6">
                    <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                      isSelected ? 'text-green-600 dark:text-green-400' : 'text-foreground group-hover:text-green-600 dark:group-hover:text-green-400'
                    }`}>
                      {capability.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {capability.subtitle}
                    </p>
                  </div>
                  
                  {/* Action Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <span className={`text-sm font-semibold transition-all duration-300 ${
                      isSelected 
                        ? 'text-green-600 dark:text-green-400' 
                        : 'text-green-600/60 dark:text-green-400/60 group-hover:text-green-600 dark:group-hover:text-green-400'
                    }`}>
                      {isSelected ? 'Selected' : 'View Details'}
                    </span>
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                      isSelected 
                        ? 'bg-green-600 text-white' 
                        : 'bg-green-500/10 text-green-600 dark:text-green-400 group-hover:bg-green-500/20 group-hover:translate-x-1'
                    }`}>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Selected Indicator */}
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center"
                    >
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </motion.div>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Full-Screen Modal for Selected Capability */}
      <AnimatePresence>
        {selectedCapability && selectedData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedCapability(null)}
          >
            <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4 }}
                className="max-w-6xl mx-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCapability(null)}
                  className="fixed top-8 right-8 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors duration-200 shadow-lg z-10"
                >
                  <X className="h-5 w-5 text-foreground" />
                </button>

                {/* Hero Section */}
                <div className="mb-20 text-center">
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-16 h-16 bg-green-500/10 rounded-xl flex items-center justify-center">
                      <selectedData.icon className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                  <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground">
                    {selectedData.title}
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                    {selectedData.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white shadow-lg"
                    >
                      Discuss a Project
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2"
                    >
                      Explore Energy & Climate
                    </Button>
                  </div>
                </div>

                {/* Strategic Overview */}
                <div className="mb-20 bg-card border border-border rounded-2xl p-10">
                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-foreground mb-6">Strategic Overview</h3>
                      {selectedData.sections.overview.left.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-green-600 dark:bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground">{item}</p>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-6">
                      {selectedData.sections.overview.right.map((stat, idx) => (
                        <div key={idx} className="border-l-4 border-green-500/30 pl-6">
                          <div className="text-sm text-muted-foreground uppercase tracking-wide mb-1">
                            {stat.label}
                          </div>
                          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                            {stat.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Core Solutions */}
                <div className="mb-20">
                  <h3 className="text-3xl font-bold text-foreground mb-10 text-center">Core Solutions</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {selectedData.sections.solutions.map((solution, idx) => (
                      <div key={idx} className="bg-card border border-border rounded-xl p-6 hover:border-green-500/30 hover:shadow-md transition-all duration-300">
                        <div className="flex items-start gap-3 mb-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                          <h4 className="text-lg font-bold text-foreground">{solution.title}</h4>
                        </div>
                        <p className="text-muted-foreground text-sm pl-8 mb-4">{solution.description}</p>
                        <div className="space-y-2 pl-8">
                          {solution.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-green-600/50 dark:bg-green-400/50 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Delivery Model */}
                <DeliveryModelSection 
                  deliveryModel={selectedData.sections.deliveryModel}
                  expandedStep={expandedStep}
                  setExpandedStep={setExpandedStep}
                />

                {/* Technology Foundation */}
                <div className="mb-20 bg-green-500/5 dark:bg-green-500/10 rounded-2xl p-10">
                  <h3 className="text-3xl font-bold text-foreground mb-10 text-center">Technology Foundation</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {selectedData.sections.technology.map((tech, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Lock className="h-5 w-5 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-foreground font-medium">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Final CTA */}
                <div className="text-center bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-12">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                    {selectedData.sections.cta.headline}
                  </h2>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white shadow-lg text-lg px-8"
                  >
                    {selectedData.sections.cta.button}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
