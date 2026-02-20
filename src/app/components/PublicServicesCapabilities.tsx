import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  Plane, 
  Building2, 
  Shield, 
  ChevronRight,
  Lock,
  CheckCircle2,
  ArrowRight,
  X,
  BarChart3,
  Network,
  Server,
  Users,
  FileText,
  Database,
  Zap,
  Settings,
  MapPin,
  Radio,
  Wifi,
  CloudCog
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
                    ? 'bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A] shadow-lg scale-110' 
                    : 'bg-card border-2 border-[#1E40AF]/30 group-hover:border-[#1E40AF] group-hover:bg-[#1E40AF]/5'
                  }
                `}>
                  <StepIcon className={`h-7 w-7 ${isActive ? 'text-white' : 'text-[#1E40AF]'} transition-colors duration-300`} />
                </div>
                
                {/* Step Number */}
                <div className={`text-xs font-bold mb-1 transition-colors duration-300 ${isActive ? 'text-[#1E40AF]' : 'text-muted-foreground'}`}>
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
                    <div className="w-10 h-10 bg-[#1E40AF]/10 rounded-lg flex items-center justify-center">
                      {(() => {
                        const IconComponent = deliveryModel[expandedStep].icon;
                        return <IconComponent className="h-5 w-5 text-[#1E40AF]" />;
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
                        <CheckCircle2 className="h-5 w-5 text-[#1E40AF] flex-shrink-0 mt-0.5" />
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
    id: 'digital-government',
    icon: Globe,
    title: 'Digital Government Platforms',
    subtitle: 'Transforming national governance ecosystems through secure, scalable, and interoperable digital government platforms designed to enhance institutional performance, regulatory compliance, and citizen trust.',
    sections: {
      overview: {
        left: [
          'Institutional modernization through sovereign and scalable digital governance frameworks',
          'Regulatory digitization strengthening transparency, compliance, and operational efficiency',
          'Cross-border interoperability enabling regional cooperation and secure data exchange',
          'Digital public service transformation enhancing accessibility and citizen engagement'
        ],
        right: [
          { label: 'Deployment', value: 'National & Cross-border' },
          { label: 'Architecture', value: 'Secure & Interoperable' },
          { label: 'Systems', value: 'Integrated & Scalable' }
        ]
      },
      solutions: [
        {
          title: 'National E-Government Frameworks',
          icon: Globe,
          description: 'Comprehensive digital infrastructure enabling seamless inter-agency collaboration, service orchestration, and centralized governance oversight.',
          features: [
            'Inter-agency collaboration',
            'Service orchestration',
            'Centralized governance oversight'
          ]
        },
        {
          title: 'Citizen Service Portals',
          icon: Globe,
          description: 'Unified digital platforms providing 24/7 access to public services with integrated payment systems, document management, and secure authentication.',
          features: [
            '24/7 access to public services',
            'Integrated payment systems',
            'Document management',
            'Secure authentication'
          ]
        },
        {
          title: 'Licensing & Regulatory Platforms',
          icon: Globe,
          description: 'Automated systems streamlining permits, renewals, inspections, and regulatory workflows while ensuring compliance traceability.',
          features: [
            'Automated permits, renewals, inspections',
            'Regulatory workflows',
            'Compliance traceability'
          ]
        },
        {
          title: 'Data Integration & Policy Analytics',
          icon: Globe,
          description: 'Real-time data aggregation and analytics dashboards supporting evidence-based decision-making and performance monitoring at ministerial level.',
          features: [
            'Real-time data aggregation',
            'Analytics dashboards',
            'Evidence-based decision-making',
            'Performance monitoring'
          ]
        }
      ],
      deliveryModel: [
        {
          step: 'Institutional & Regulatory Assessment',
          icon: Shield,
          description: 'Comprehensive evaluation of existing institutional frameworks, regulatory requirements, and governance structures to identify modernization opportunities and compliance gaps.',
          deliverables: [
            'Institutional readiness assessment report',
            'Regulatory compliance gap analysis',
            'Stakeholder engagement strategy'
          ]
        },
        {
          step: 'Secure System Architecture Design',
          icon: Lock,
          description: 'Design of secure, scalable, and interoperable system architecture aligned with international standards and best practices for digital government.',
          deliverables: [
            'Technical architecture blueprint',
            'Security framework documentation',
            'Integration specifications'
          ]
        },
        {
          step: 'Integration & National Deployment',
          icon: Network,
          description: 'Phased deployment and integration with existing infrastructure, ensuring seamless interoperability and minimal disruption to ongoing operations.',
          deliverables: [
            'Deployment roadmap and timeline',
            'Integration testing reports',
            'Training and capacity building programs'
          ]
        },
        {
          step: 'Performance Monitoring & Continuous Optimization',
          icon: BarChart3,
          description: 'Ongoing performance monitoring, system optimization, and continuous improvement to ensure sustained operational excellence and citizen satisfaction.',
          deliverables: [
            'Performance dashboard and KPIs',
            'Optimization recommendations',
            'Continuous improvement plan'
          ]
        }
      ],
      technology: [
        'Sovereign cloud infrastructure',
        'Interoperability standards & APIs',
        'Cybersecurity framework aligned with international standards',
        'Secure data governance architecture',
        'Real-time analytics & monitoring systems'
      ],
      cta: {
        headline: 'Enhancing institutional resilience, regulatory transparency, and long-term digital sovereignty.',
        button: 'Initiate Strategic Consultation'
      }
    }
  },
  {
    id: 'aviation-egovernment',
    icon: Plane,
    title: 'Aviation & E-Government',
    subtitle: 'Modernizing aviation ecosystems and border management infrastructures through secure, integrated digital platforms enabling operational excellence, passenger efficiency, and regulatory compliance.',
    sections: {
      overview: {
        left: [
          'Aviation digitization driving operational optimization and cost efficiency',
          'Border control system integration enhancing national security',
          'Passenger processing automation improving throughput and service experience',
          'Regulatory alignment with international aviation standards'
        ],
        right: [
          { label: 'Processing Optimization', value: 'Significant reduction' },
          { label: 'Operational Efficiency', value: 'Automated & Data-driven' },
          { label: 'System Architecture', value: 'Integrated & Secure' }
        ]
      },
      solutions: [
        {
          title: 'Aviation Operations Platforms',
          icon: Plane,
          description: 'Comprehensive flight management, scheduling, and resource optimization systems improving coordination across airports and aviation authorities.',
          features: [
            'Flight management',
            'Scheduling',
            'Resource optimization'
          ]
        },
        {
          title: 'Border & Immigration Systems',
          icon: Plane,
          description: 'Integrated biometric verification, automated border gates, and real-time database connectivity ensuring secure and efficient cross-border processing.',
          features: [
            'Biometric verification',
            'Automated border gates',
            'Real-time database connectivity'
          ]
        },
        {
          title: 'Passenger Identity Management',
          icon: Plane,
          description: 'Secure digital identity verification platforms enabling seamless passenger journeys while maintaining compliance with international aviation regulations.',
          features: [
            'Digital identity verification',
            'Seamless passenger journeys',
            'Compliance with international aviation regulations'
          ]
        },
        {
          title: 'Regulatory Compliance Systems',
          icon: Plane,
          description: 'Integrated compliance monitoring platforms ensuring adherence to ICAO and international aviation standards.',
          features: [
            'Compliance monitoring',
            'Adherence to ICAO and international aviation standards'
          ]
        }
      ],
      deliveryModel: [
        {
          step: 'Operational & Regulatory Assessment',
          icon: Shield,
          description: 'Thorough evaluation of aviation operations, border control processes, and regulatory compliance requirements to identify enhancement opportunities.',
          deliverables: [
            'Operational assessment report',
            'Regulatory compliance analysis',
            'Process optimization recommendations'
          ]
        },
        {
          step: 'Secure Architecture & Integration Design',
          icon: Lock,
          description: 'Design of secure, high-performance architecture integrating aviation operations, border control, and passenger processing systems.',
          deliverables: [
            'System architecture design',
            'Security protocols documentation',
            'Integration framework'
          ]
        },
        {
          step: 'System Deployment & Cross-Agency Integration',
          icon: Network,
          description: 'Coordinated deployment across aviation authorities, border agencies, and related stakeholders with seamless system integration.',
          deliverables: [
            'Phased deployment plan',
            'Cross-agency integration testing',
            'Operational readiness certification'
          ]
        },
        {
          step: 'Performance Monitoring & Continuous Optimization',
          icon: BarChart3,
          description: 'Real-time performance monitoring and continuous system optimization to maintain operational excellence and passenger satisfaction.',
          deliverables: [
            'Operational performance dashboard',
            'Service level agreements (SLAs)',
            'Continuous improvement framework'
          ]
        }
      ],
      technology: [
        'Biometric authentication systems',
        'Cybersecurity & data protection framework',
        'Compliance automation engines',
        'Interoperability with national and international systems',
        'Secure real-time data management'
      ],
      cta: {
        headline: 'Strengthening aviation infrastructure resilience, border security, and national operational efficiency.',
        button: 'Request Aviation Consultation'
      }
    }
  },
  {
    id: 'smart-cities',
    icon: Building2,
    title: 'Smart Cities Infrastructure',
    subtitle: 'Building connected urban ecosystems powered by IoT, AI analytics, and integrated management systems to enhance efficiency, sustainability, and quality of life.',
    sections: {
      overview: {
        left: [
          'Urban digitization through scalable smart infrastructure frameworks',
          'Integrated command and control systems for real-time city management',
          'Sustainable mobility, utilities, and public service optimization',
          'Data-driven governance for predictive urban planning'
        ],
        right: [
          { label: 'Deployment', value: 'Multi-city / Cross-border' },
          { label: 'Architecture', value: 'Modular & Scalable' },
          { label: 'Systems', value: 'Interoperable' }
        ]
      },
      solutions: [
        {
          title: 'Urban Command & Control Centers',
          icon: Building2,
          description: 'Centralized platforms integrating transportation, utilities, security, and emergency response systems into a unified operational dashboard.',
          features: [
            'Centralized platforms',
            'Transportation, utilities, security, and emergency response systems',
            'Unified operational dashboard'
          ]
        },
        {
          title: 'Smart Mobility Systems',
          icon: Building2,
          description: 'Intelligent traffic management, smart parking, and integrated public transport solutions improving urban flow and reducing congestion.',
          features: [
            'Intelligent traffic management',
            'Smart parking',
            'Integrated public transport solutions'
          ]
        },
        {
          title: 'Utilities & Resource Optimization',
          icon: Building2,
          description: 'Smart water, electricity, and waste management systems powered by IoT sensors and predictive analytics.',
          features: [
            'Smart water, electricity, and waste management systems',
            'IoT sensors',
            'Predictive analytics'
          ]
        },
        {
          title: 'Urban Data & Analytics Platforms',
          icon: Building2,
          description: 'Real-time data aggregation enabling evidence-based urban planning and operational optimization.',
          features: [
            'Real-time data aggregation',
            'Evidence-based urban planning',
            'Operational optimization'
          ]
        }
      ],
      deliveryModel: [
        {
          step: 'Urban Diagnostic & Strategic Assessment',
          icon: Shield,
          description: 'Comprehensive urban assessment covering infrastructure, services, and citizen needs to develop a strategic smart city roadmap.',
          deliverables: [
            'Urban diagnostic report',
            'Smart city strategy document',
            'Stakeholder consultation summary'
          ]
        },
        {
          step: 'System Architecture & Integration Design',
          icon: Lock,
          description: 'Design of modular, scalable smart city architecture integrating IoT sensors, data platforms, and operational systems.',
          deliverables: [
            'Smart city architecture blueprint',
            'IoT deployment strategy',
            'Data governance framework'
          ]
        },
        {
          step: 'Infrastructure Deployment & Integration',
          icon: Network,
          description: 'Phased deployment of smart infrastructure including sensors, networks, and integrated management platforms.',
          deliverables: [
            'Infrastructure deployment timeline',
            'System integration reports',
            'Operational training programs'
          ]
        },
        {
          step: 'Operational Optimization & Monitoring',
          icon: BarChart3,
          description: 'Continuous monitoring and optimization of urban systems to enhance efficiency, sustainability, and citizen services.',
          deliverables: [
            'Unified city dashboard',
            'Performance optimization reports',
            'Sustainability impact assessment'
          ]
        }
      ],
      technology: [
        'Secure cloud infrastructure',
        'IoT sensor networks',
        'Interoperability APIs',
        'Real-time analytics dashboards',
        'Cybersecurity framework'
      ],
      cta: {
        headline: 'Enable intelligent urban ecosystems through scalable smart infrastructure solutions.',
        button: 'Discuss Urban Infrastructure'
      }
    }
  },
  {
    id: 'identity-mobility',
    icon: Shield,
    title: 'Identity & Mobility Solutions',
    subtitle: 'Secure digital identity ecosystems and mobility platforms enabling trusted citizen interactions, cross-border interoperability, and regulatory compliance.',
    sections: {
      overview: {
        left: [
          'National digital identity framework design',
          'Biometric verification and authentication systems',
          'Cross-border identity interoperability',
          'Secure mobility and travel authorization platforms'
        ],
        right: [
          { label: 'Processing', value: 'Reduced verification time' },
          { label: 'Efficiency', value: 'Automated & Compliant' },
          { label: 'System', value: 'Integrated' }
        ]
      },
      solutions: [
        {
          title: 'National Digital Identity Platforms',
          icon: Shield,
          description: 'End-to-end digital ID systems including biometric enrollment, secure authentication, and citizen lifecycle management.',
          features: [
            'Biometric enrollment',
            'Secure authentication',
            'Citizen lifecycle management'
          ]
        },
        {
          title: 'Border & Immigration Systems',
          icon: Shield,
          description: 'Automated border control with biometric verification, e-gates, and integrated immigration databases.',
          features: [
            'Biometric verification',
            'E-gates',
            'Integrated immigration databases'
          ]
        },
        {
          title: 'Passenger Identity Management',
          icon: Shield,
          description: 'Secure identity verification systems enabling seamless passenger processing and compliance with international standards.',
          features: [
            'Identity verification systems',
            'Seamless passenger processing',
            'Compliance with international standards'
          ]
        },
        {
          title: 'Mobility & Travel Authorization Platforms',
          icon: Shield,
          description: 'Digital visa, entry authorization, and mobility clearance platforms supporting secure cross-border movement.',
          features: [
            'Digital visa, entry authorization, and mobility clearance platforms',
            'Secure cross-border movement'
          ]
        }
      ],
      deliveryModel: [
        {
          step: 'Institutional & Regulatory Assessment',
          icon: Shield,
          description: 'Assessment of institutional capacity, regulatory frameworks, and privacy requirements for national digital identity systems.',
          deliverables: [
            'Identity framework assessment',
            'Privacy and compliance analysis',
            'Stakeholder requirements document'
          ]
        },
        {
          step: 'System Architecture & Security Framework',
          icon: Lock,
          description: 'Design of secure, privacy-compliant identity architecture with multi-layer authentication and encryption protocols.',
          deliverables: [
            'Identity system architecture',
            'Security and encryption framework',
            'Privacy protection protocols'
          ]
        },
        {
          step: 'Integration with National & Cross-border Systems',
          icon: Network,
          description: 'Integration with government databases, border systems, and international identity verification networks.',
          deliverables: [
            'System integration plan',
            'Cross-border interoperability testing',
            'Enrollment and verification protocols'
          ]
        },
        {
          step: 'Performance Monitoring & Compliance Management',
          icon: BarChart3,
          description: 'Ongoing monitoring of system performance, security compliance, and privacy protection measures.',
          deliverables: [
            'Security monitoring dashboard',
            'Compliance audit reports',
            'System performance analytics'
          ]
        }
      ],
      technology: [
        'Biometric authentication systems',
        'Cybersecurity framework',
        'Compliance automation',
        'Interoperability standards',
        'Secure data management'
      ],
      cta: {
        headline: 'Deploy Trusted Identity Infrastructure',
        button: 'Initiate Identity Consultation'
      }
    }
  }
];

export function PublicServicesCapabilities() {
  const [selectedCapability, setSelectedCapability] = useState<string | null>(null);
  const [expandedStep, setExpandedStep] = useState<number | null>(0);
  const [expandedSolution, setExpandedSolution] = useState<number | null>(null);

  const selectedData = capabilities.find(c => c.id === selectedCapability);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Capabilities Grid - Clean & Organized */}
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
                    ? 'border-[#1E40AF] shadow-lg shadow-[#1E40AF]/20' 
                    : 'border-border hover:border-[#1E40AF]/50 hover:shadow-xl'
                }`}>
                  
                  {/* Top Section */}
                  <div className="flex items-start gap-4 mb-6">
                    {/* Icon Container */}
                    <div className="flex-shrink-0">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isSelected 
                          ? 'bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A] scale-105' 
                          : 'bg-gradient-to-br from-[#1E40AF]/10 to-[#1E3A8A]/5 group-hover:scale-105'
                      }`}>
                        <Icon className={`h-7 w-7 transition-colors duration-300 ${
                          isSelected ? 'text-white' : 'text-[#1E40AF]'
                        }`} />
                      </div>
                    </div>
                    
                    {/* Number Badge */}
                    <div className={`ml-auto text-xs font-bold px-3 py-1 rounded-full transition-all duration-300 ${
                      isSelected 
                        ? 'bg-[#1E40AF] text-white' 
                        : 'bg-[#1E40AF]/10 text-[#1E40AF]/60 group-hover:bg-[#1E40AF]/20 group-hover:text-[#1E40AF]'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex-1 mb-6">
                    <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                      isSelected ? 'text-[#1E40AF]' : 'text-foreground group-hover:text-[#1E40AF]'
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
                        ? 'text-[#1E40AF]' 
                        : 'text-[#1E40AF]/60 group-hover:text-[#1E40AF]'
                    }`}>
                      {isSelected ? 'Selected' : 'View Details'}
                    </span>
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                      isSelected 
                        ? 'bg-[#1E40AF] text-white' 
                        : 'bg-[#1E40AF]/10 text-[#1E40AF] group-hover:bg-[#1E40AF]/20 group-hover:translate-x-1'
                    }`}>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Selected Indicator */}
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-[#1E40AF] rounded-full flex items-center justify-center"
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

                {/* SECTION 1 - HERO */}
                <div className="mb-20 text-center">
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-16 h-16 bg-[#1E40AF]/10 rounded-xl flex items-center justify-center">
                      <selectedData.icon className="h-8 w-8 text-[#1E40AF]" />
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
                      className="bg-gradient-to-r from-[#1E40AF] to-[#1E3A8A] hover:from-[#1E3A8A] hover:to-[#1E40AF] text-white shadow-lg"
                    >
                      Discuss a Project
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2"
                    >
                      Explore Public Services
                    </Button>
                  </div>
                </div>

                {/* SECTION 2 - STRATEGIC OVERVIEW */}
                <div className="mb-20 bg-card border border-border rounded-2xl p-10">
                  <div className="grid md:grid-cols-2 gap-12">
                    {/* Left - Description */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-foreground mb-6">Strategic Overview</h3>
                      {selectedData.sections.overview.left.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-[#1E40AF] rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground">{item}</p>
                        </div>
                      ))}
                    </div>

                    {/* Right - KPIs */}
                    <div className="space-y-6">
                      {selectedData.sections.overview.right.map((stat, idx) => (
                        <div key={idx} className="border-l-4 border-[#1E40AF]/30 pl-6">
                          <div className="text-sm text-muted-foreground uppercase tracking-wide mb-1">
                            {stat.label}
                          </div>
                          <div className="text-2xl font-bold text-[#1E40AF]">
                            {stat.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* SECTION 3 - CORE SOLUTIONS GRID */}
                <div className="mb-20">
                  <h3 className="text-3xl font-bold text-foreground mb-10 text-center">Core Solutions</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {selectedData.sections.solutions.map((solution, idx) => (
                      <div key={idx} className="bg-card border border-border rounded-xl p-6 hover:border-[#1E40AF]/30 hover:shadow-md transition-all duration-300">
                        <div className="flex items-start gap-3 mb-3">
                          <CheckCircle2 className="h-5 w-5 text-[#1E40AF] flex-shrink-0 mt-0.5" />
                          <h4 className="text-lg font-bold text-foreground">{solution.title}</h4>
                        </div>
                        <p className="text-muted-foreground text-sm pl-8">{solution.description}</p>
                        <div className="space-y-2 mt-4">
                          {solution.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-[#1E40AF] flex-shrink-0 mt-0.5" />
                              <span className="text-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SECTION 4 - DELIVERY MODEL */}
                <DeliveryModelSection 
                  deliveryModel={selectedData.sections.deliveryModel}
                  expandedStep={expandedStep}
                  setExpandedStep={setExpandedStep}
                />

                {/* SECTION 5 - TECHNOLOGY FOUNDATION */}
                <div className="mb-20 bg-[#1E40AF]/5 dark:bg-[#1E40AF]/10 rounded-2xl p-10">
                  <h3 className="text-3xl font-bold text-foreground mb-10 text-center">Technology Foundation</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {selectedData.sections.technology.map((tech, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#1E40AF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Lock className="h-5 w-5 text-[#1E40AF]" />
                        </div>
                        <span className="text-foreground font-medium">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SECTION 6 - FINAL CTA */}
                <div className="text-center bg-gradient-to-br from-[#1E40AF]/10 to-[#1E3A8A]/10 border border-[#1E40AF]/20 rounded-2xl p-12">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                    {selectedData.sections.cta.headline}
                  </h2>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#1E40AF] to-[#1E3A8A] hover:from-[#1E3A8A] hover:to-[#1E40AF] text-white shadow-lg text-lg px-8"
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