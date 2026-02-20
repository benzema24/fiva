import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LineChart, 
  Code, 
  Heart, 
  Sparkles,
  ChevronRight,
  Lock,
  CheckCircle2,
  ArrowRight,
  X,
  BarChart3,
  Network,
  Shield,
  Cpu,
  Database,
  Cloud,
  Smartphone,
  Bot,
  Zap
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
                    ? 'bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg scale-110' 
                    : 'bg-card border-2 border-purple-500/30 group-hover:border-purple-500 group-hover:bg-purple-500/5'
                  }
                `}>
                  <StepIcon className={`h-7 w-7 ${isActive ? 'text-white' : 'text-purple-600 dark:text-purple-400'} transition-colors duration-300`} />
                </div>
                
                {/* Step Number */}
                <div className={`text-xs font-bold mb-1 transition-colors duration-300 ${isActive ? 'text-purple-600 dark:text-purple-400' : 'text-muted-foreground'}`}>
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

      {/* Expanded Step Details */}
      <AnimatePresence mode="wait">
        {expandedStep !== null && (
          <motion.div
            key={expandedStep}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-gradient-to-br from-purple-600/5 to-blue-600/5 border border-purple-600/20 rounded-2xl p-8">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{expandedStep + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-foreground mb-2">
                      {deliveryModel[expandedStep].step}
                    </h4>
                    <p className="text-muted-foreground text-lg">
                      {deliveryModel[expandedStep].description}
                    </p>
                  </div>
                </div>
                
                <div className="ml-16">
                  <h5 className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-4 uppercase tracking-wider">Key Deliverables</h5>
                  <div className="grid gap-3">
                    {deliveryModel[expandedStep].deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
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
    id: 'investment-platforms',
    icon: LineChart,
    title: 'Investment Technology Platforms',
    subtitle: 'Designing institutional-grade investment technology ecosystems integrating AI-powered portfolio management, quantitative analytics, algorithmic trading systems, and secure financial infrastructure to optimize capital performance, risk governance, and operational efficiency.',
    sections: {
      overview: {
        left: [
          'AI-driven portfolio optimization frameworks enhancing asset allocation precision',
          'Institutional-grade risk management systems strengthening compliance and capital protection',
          'Algorithmic trading infrastructures improving execution speed and market responsiveness',
          'Integrated financial data ecosystems enabling real-time decision intelligence'
        ],
        right: [
          { label: 'Deployment', value: 'Institutional & Cross-Market' },
          { label: 'Architecture', value: 'Secure, Modular & API-Driven' },
          { label: 'Systems', value: 'High-Performance & Scalable' }
        ]
      },
      solutions: [
        {
          title: 'AI-Powered Portfolio Management Systems',
          icon: Sparkles,
          description: 'Advanced portfolio orchestration platforms leveraging machine learning models for asset allocation optimization, performance forecasting, and dynamic rebalancing strategies.',
          features: [
            'Machine learning asset allocation',
            'Performance forecasting models',
            'Dynamic rebalancing strategies',
            'Portfolio orchestration platforms'
          ]
        },
        {
          title: 'Quantitative Risk & Analytics Engines',
          icon: Shield,
          description: 'Real-time risk assessment systems integrating market data feeds, volatility modeling, stress testing simulations, and predictive analytics to enhance capital resilience.',
          features: [
            'Market data feed integration',
            'Volatility modeling systems',
            'Stress testing simulations',
            'Predictive analytics frameworks'
          ]
        },
        {
          title: 'Algorithmic Trading Infrastructure',
          icon: BarChart3,
          description: 'Low-latency trading architectures supporting automated execution strategies, high-frequency trading models, and intelligent order routing across global exchanges.',
          features: [
            'Automated execution strategies',
            'High-frequency trading models',
            'Intelligent order routing',
            'Global exchange integration'
          ]
        },
        {
          title: 'Institutional Financial Data Platforms',
          icon: Database,
          description: 'Secure data integration ecosystems aggregating multi-asset market data, alternative datasets, and financial intelligence dashboards for strategic investment oversight.',
          features: [
            'Multi-asset market data integration',
            'Alternative dataset aggregation',
            'Financial intelligence dashboards',
            'Strategic oversight platforms'
          ]
        }
      ],
      deliveryModel: [
        {
          step: 'Investment Strategy & Infrastructure Assessment',
          icon: Shield,
          description: 'Comprehensive evaluation of investment objectives, existing technology infrastructure, regulatory requirements, and strategic capital management goals.',
          deliverables: [
            'Investment strategy analysis',
            'Infrastructure assessment report',
            'Regulatory compliance mapping',
            'Technology roadmap development'
          ]
        },
        {
          step: 'System Architecture & Quantitative Model Design',
          icon: Lock,
          description: 'Development of scalable investment technology architecture with AI model design, risk frameworks, and secure API integrations.',
          deliverables: [
            'System architecture blueprints',
            'Quantitative model specifications',
            'Risk framework design',
            'API integration architecture'
          ]
        },
        {
          step: 'Platform Integration & Market Deployment',
          icon: Network,
          description: 'Integration with market data providers, trading venues, and financial systems with comprehensive testing and certification.',
          deliverables: [
            'Platform integration execution',
            'Market connectivity setup',
            'System testing and certification',
            'User training programs'
          ]
        },
        {
          step: 'Performance Monitoring, Risk Optimization & Continuous Calibration',
          icon: BarChart3,
          description: 'Ongoing monitoring of portfolio performance, risk metrics, trading execution, and continuous optimization of AI models and strategies.',
          deliverables: [
            'Real-time performance dashboards',
            'Risk monitoring systems',
            'Model calibration protocols',
            'Continuous optimization reports'
          ]
        }
      ],
      technology: [
        'AI & machine learning frameworks',
        'Low-latency cloud infrastructure',
        'Secure API-driven financial integrations',
        'Advanced encryption & cybersecurity protocols',
        'Real-time analytics & trading engines'
      ],
      cta: {
        headline: 'Enhancing capital performance, institutional transparency, and risk-adjusted returns through intelligent, secure, and scalable financial technology ecosystems.',
        button: 'Explore Investment Tech'
      }
    }
  },
  {
    id: 'enterprise-solutions',
    icon: Code,
    title: 'Advanced Enterprise Solutions',
    subtitle: 'Designing cloud-native enterprise ecosystems leveraging microservices architecture, API-first frameworks, scalable infrastructure, and intelligent automation to enable secure, resilient, and high-performance digital transformation at enterprise scale.',
    sections: {
      overview: {
        left: [
          'Cloud-native transformation enabling operational scalability and system resilience',
          'API-first architectures strengthening interoperability across complex enterprise environments',
          'Microservices-based system design improving agility, modularity, and rapid deployment',
          'Intelligent automation enhancing efficiency, cost optimization, and process governance'
        ],
        right: [
          { label: 'Deployment', value: 'Enterprise & Multi-Regional' },
          { label: 'Architecture', value: 'Cloud-Native & API-Driven' },
          { label: 'Systems', value: 'Modular, Scalable & Secure' }
        ]
      },
      solutions: [
        {
          title: 'Cloud-Native Infrastructure Platforms',
          icon: Cloud,
          description: 'Enterprise-grade cloud environments designed for scalability, high availability, disaster recovery, and secure workload orchestration.',
          features: [
            'Scalable cloud architecture',
            'High availability design',
            'Disaster recovery systems',
            'Secure workload orchestration'
          ]
        },
        {
          title: 'Microservices & API Architecture Design',
          icon: Network,
          description: 'Decoupled system frameworks enabling seamless integration between legacy systems, third-party platforms, and new digital services.',
          features: [
            'Microservices architecture',
            'API-first design patterns',
            'Legacy system integration',
            'Third-party platform connectivity'
          ]
        },
        {
          title: 'Intelligent Process Automation',
          icon: Bot,
          description: 'AI-driven automation engines optimizing workflows, reducing operational friction, and enhancing cross-departmental coordination.',
          features: [
            'AI-powered workflow automation',
            'Operational efficiency optimization',
            'Cross-departmental integration',
            'Process governance frameworks'
          ]
        },
        {
          title: 'Enterprise Integration & Digital Transformation Programs',
          icon: Cpu,
          description: 'Comprehensive transformation initiatives integrating ERP systems, CRM platforms, data lakes, and business intelligence frameworks into unified digital ecosystems.',
          features: [
            'ERP system integration',
            'CRM platform modernization',
            'Data lake architecture',
            'Business intelligence deployment'
          ]
        }
      ],
      deliveryModel: [
        {
          step: 'Enterprise Systems & Infrastructure Assessment',
          icon: Shield,
          description: 'Comprehensive analysis of existing enterprise architecture, legacy systems, integration points, and digital transformation objectives.',
          deliverables: [
            'Enterprise architecture assessment',
            'Legacy systems inventory',
            'Integration point analysis',
            'Transformation roadmap'
          ]
        },
        {
          step: 'Architecture Blueprint & Cloud Strategy Design',
          icon: Zap,
          description: 'Development of cloud-native architecture blueprints with microservices design, API frameworks, and migration strategies.',
          deliverables: [
            'Cloud architecture blueprints',
            'Microservices design specifications',
            'API framework documentation',
            'Migration strategy plan'
          ]
        },
        {
          step: 'Platform Migration & Integration Deployment',
          icon: Network,
          description: 'Phased migration of enterprise workloads to cloud platforms with system integration, testing, and validation.',
          deliverables: [
            'Phased migration execution',
            'System integration deployment',
            'Comprehensive testing protocols',
            'Validation and certification'
          ]
        },
        {
          step: 'Optimization, Governance & Continuous Scalability',
          icon: BarChart3,
          description: 'Ongoing optimization of cloud infrastructure, monitoring of system performance, and governance frameworks for continuous scalability.',
          deliverables: [
            'Performance optimization systems',
            'Monitoring dashboards',
            'Governance frameworks',
            'Scalability enhancement plans'
          ]
        }
      ],
      technology: [
        'Cloud-native orchestration (Kubernetes & containerization)',
        'Secure API management frameworks',
        'Enterprise DevOps pipelines',
        'Data integration & middleware layers',
        'Advanced cybersecurity & compliance controls'
      ],
      cta: {
        headline: 'Enhancing enterprise agility, operational resilience, digital scalability, and long-term technological sustainability through intelligent, future-ready architecture design.',
        button: 'Start Digital Transformation'
      }
    }
  },
  {
    id: 'digital-health',
    icon: Heart,
    title: 'Digital Health Innovation',
    subtitle: 'Building secure, interoperable, and AI-enabled digital health ecosystems designed to modernize healthcare delivery, enhance clinical decision-making, and improve patient outcomes through scalable and data-driven medical technologies.',
    sections: {
      overview: {
        left: [
          'Digital transformation of healthcare systems through secure and interoperable platforms',
          'AI-driven diagnostics and predictive healthcare analytics enhancing clinical accuracy',
          'Integrated patient data ecosystems enabling continuity of care',
          'Telemedicine and remote health infrastructure expanding accessibility and system resilience'
        ],
        right: [
          { label: 'Deployment', value: 'National & Institutional' },
          { label: 'Architecture', value: 'Secure, Interoperable & Patient-Centric' },
          { label: 'Systems', value: 'Integrated, Scalable & Compliant' }
        ]
      },
      solutions: [
        {
          title: 'Telemedicine & Remote Care Platforms',
          icon: Smartphone,
          description: 'Secure digital consultation environments enabling remote diagnostics, virtual consultations, e-prescriptions, and continuous patient monitoring.',
          features: [
            'Remote diagnostic systems',
            'Virtual consultation platforms',
            'E-prescription integration',
            'Continuous patient monitoring'
          ]
        },
        {
          title: 'Patient Data Management Systems',
          icon: Database,
          description: 'Unified electronic health record (EHR) ecosystems integrating hospitals, clinics, laboratories, and insurance providers within secure data governance frameworks.',
          features: [
            'Electronic health records (EHR)',
            'Hospital system integration',
            'Laboratory data connectivity',
            'Insurance provider integration'
          ]
        },
        {
          title: 'AI-Driven Diagnostic & Clinical Decision Support',
          icon: Sparkles,
          description: 'Machine learning models supporting radiology, pathology, predictive risk analysis, and real-time treatment optimization.',
          features: [
            'AI-powered radiology analysis',
            'Pathology diagnostic support',
            'Predictive risk assessment',
            'Real-time treatment optimization'
          ]
        },
        {
          title: 'Healthcare Systems Integration & Digital Modernization',
          icon: Network,
          description: 'End-to-end healthcare transformation programs integrating hospital management systems, digital workflows, health analytics dashboards, and regulatory compliance frameworks.',
          features: [
            'Hospital management integration',
            'Digital workflow optimization',
            'Health analytics dashboards',
            'Regulatory compliance frameworks'
          ]
        }
      ],
      deliveryModel: [
        {
          step: 'Healthcare Infrastructure & Regulatory Assessment',
          icon: Shield,
          description: 'Comprehensive evaluation of healthcare infrastructure, regulatory requirements, data security standards, and digital transformation goals.',
          deliverables: [
            'Healthcare infrastructure analysis',
            'Regulatory compliance assessment',
            'Data security evaluation',
            'Digital transformation roadmap'
          ]
        },
        {
          step: 'Secure Digital Architecture & Compliance Design',
          icon: Lock,
          description: 'Development of HIPAA/GDPR-compliant digital health architecture with interoperability standards and secure data frameworks.',
          deliverables: [
            'Compliance-driven architecture',
            'Interoperability design (FHIR, HL7)',
            'Secure data framework',
            'Privacy protection protocols'
          ]
        },
        {
          step: 'Platform Deployment & Institutional Integration',
          icon: Network,
          description: 'Deployment of digital health platforms with integration across healthcare institutions, testing, and clinical validation.',
          deliverables: [
            'Platform deployment execution',
            'Institutional integration',
            'Clinical testing and validation',
            'Healthcare provider training'
          ]
        },
        {
          step: 'Continuous Monitoring, Optimization & Capacity Building',
          icon: BarChart3,
          description: 'Ongoing monitoring of system performance, clinical outcomes, data security, and continuous optimization for healthcare excellence.',
          deliverables: [
            'Performance monitoring systems',
            'Clinical outcome tracking',
            'Security monitoring protocols',
            'Continuous improvement programs'
          ]
        }
      ],
      technology: [
        'HIPAA/GDPR-aligned data security frameworks',
        'Interoperability standards (FHIR, HL7)',
        'AI-powered diagnostic engines',
        'Secure cloud-based health data infrastructure',
        'Real-time analytics & patient monitoring systems'
      ],
      cta: {
        headline: 'Enhancing healthcare accessibility, improving clinical precision, strengthening system resilience, and enabling long-term digital health sustainability at institutional and national levels.',
        button: 'Transform Healthcare Delivery'
      }
    }
  },
  {
    id: 'ai-analytics',
    icon: Sparkles,
    title: 'AI & Analytics Tools',
    subtitle: 'Designing advanced artificial intelligence and analytics ecosystems that transform raw data into strategic intelligence, enabling predictive insights, operational efficiency, and evidence-based decision-making at scale.',
    sections: {
      overview: {
        left: [
          'Enterprise AI integration driving intelligent automation and performance optimization',
          'Predictive analytics enhancing forecasting, risk management, and strategic planning',
          'Business intelligence platforms transforming complex datasets into executive insights',
          'Data science frameworks enabling scalable, secure, and high-performance analytics'
        ],
        right: [
          { label: 'Deployment', value: 'Enterprise & Government' },
          { label: 'Architecture', value: 'AI-Driven & Cloud-Enabled' },
          { label: 'Systems', value: 'Intelligent, Scalable & Data-Centric' }
        ]
      },
      solutions: [
        {
          title: 'Machine Learning & Predictive Modeling',
          icon: Bot,
          description: 'Custom AI models supporting forecasting, anomaly detection, risk scoring, and performance optimization across sectors.',
          features: [
            'Forecasting and prediction models',
            'Anomaly detection systems',
            'Risk scoring algorithms',
            'Performance optimization AI'
          ]
        },
        {
          title: 'Business Intelligence & Executive Dashboards',
          icon: BarChart3,
          description: 'Interactive analytics platforms providing real-time KPIs, visualization tools, and decision-support systems for leadership teams.',
          features: [
            'Real-time KPI dashboards',
            'Interactive visualization tools',
            'Decision-support systems',
            'Executive reporting platforms'
          ]
        },
        {
          title: 'Data Engineering & Governance Frameworks',
          icon: Database,
          description: 'End-to-end data pipelines, secure data lakes, ETL orchestration, and structured governance ensuring data integrity and regulatory compliance.',
          features: [
            'End-to-end data pipelines',
            'Secure data lake architecture',
            'ETL orchestration systems',
            'Data governance frameworks'
          ]
        },
        {
          title: 'Intelligent Automation & AI Integration',
          icon: Cpu,
          description: 'AI-powered workflow automation, process optimization, and intelligent decision engines integrated within enterprise ecosystems.',
          features: [
            'AI workflow automation',
            'Process optimization engines',
            'Intelligent decision systems',
            'Enterprise AI integration'
          ]
        }
      ],
      deliveryModel: [
        {
          step: 'Data Audit & Use-Case Identification',
          icon: Shield,
          description: 'Comprehensive assessment of data assets, quality, governance practices, and identification of high-value AI/analytics use cases.',
          deliverables: [
            'Data asset inventory',
            'Data quality assessment',
            'Use-case identification',
            'Value opportunity analysis'
          ]
        },
        {
          step: 'AI Architecture & Model Design',
          icon: Zap,
          description: 'Design of AI architecture, machine learning models, data pipelines, and analytics frameworks tailored to business objectives.',
          deliverables: [
            'AI architecture blueprints',
            'Machine learning model design',
            'Data pipeline specifications',
            'Analytics framework documentation'
          ]
        },
        {
          step: 'Integration & Enterprise Deployment',
          icon: Network,
          description: 'Integration of AI systems with enterprise platforms, deployment of analytics tools, and comprehensive user training.',
          deliverables: [
            'AI system integration',
            'Analytics platform deployment',
            'Testing and validation',
            'User training programs'
          ]
        },
        {
          step: 'Continuous Learning, Monitoring & Optimization',
          icon: BarChart3,
          description: 'Ongoing monitoring of AI model performance, continuous learning and refinement, and optimization of analytics insights.',
          deliverables: [
            'Model performance monitoring',
            'Continuous learning protocols',
            'Optimization strategies',
            'Insights refinement programs'
          ]
        }
      ],
      technology: [
        'Scalable cloud infrastructure',
        'AI/ML frameworks (TensorFlow, PyTorch, enterprise AI stacks)',
        'Real-time data processing engines',
        'Secure data governance architecture',
        'Advanced analytics & visualization platforms'
      ],
      cta: {
        headline: 'Enabling data-driven leadership, predictive intelligence, operational optimization, and long-term digital competitiveness through scalable AI ecosystems.',
        button: 'Unlock AI Potential'
      }
    }
  }
];

export function TechnologyInnovationCapabilities() {
  const [selectedCapability, setSelectedCapability] = useState<string | null>(null);
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const capability = capabilities.find(c => c.id === selectedCapability);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            const isSelected = selectedCapability === cap.id;
            
            return (
              <motion.button
                key={cap.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => {
                  setSelectedCapability(cap.id);
                  setExpandedStep(0);
                }}
                className="group relative text-left"
              >
                {/* Card with Enhanced Hover */}
                <div className={`relative bg-card border-2 rounded-2xl p-8 transition-all duration-300 h-full flex flex-col ${
                  isSelected 
                    ? 'border-purple-600 shadow-lg shadow-purple-600/20' 
                    : 'border-border hover:border-purple-600/50 hover:shadow-xl'
                }`}>
                  
                  {/* Top Section */}
                  <div className="flex items-start gap-4 mb-6">
                    {/* Icon Container */}
                    <div className="flex-shrink-0">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isSelected 
                          ? 'bg-gradient-to-br from-purple-600 to-blue-600 scale-105' 
                          : 'bg-gradient-to-br from-purple-600/10 to-blue-600/5 group-hover:scale-105'
                      }`}>
                        <Icon className={`h-7 w-7 transition-colors duration-300 ${
                          isSelected ? 'text-white' : 'text-purple-600 dark:text-purple-400'
                        }`} />
                      </div>
                    </div>
                    
                    {/* Number Badge */}
                    <div className={`ml-auto text-xs font-bold px-3 py-1 rounded-full transition-all duration-300 ${
                      isSelected 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-purple-600/10 text-purple-600/60 group-hover:bg-purple-600/20 group-hover:text-purple-600'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex-1 mb-6">
                    <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                      isSelected ? 'text-purple-600 dark:text-purple-400' : 'text-foreground group-hover:text-purple-600'
                    }`}>
                      {cap.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {cap.subtitle}
                    </p>
                  </div>
                  
                  {/* Action Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <span className={`text-sm font-semibold transition-all duration-300 ${
                      isSelected 
                        ? 'text-purple-600 dark:text-purple-400' 
                        : 'text-purple-600/60 group-hover:text-purple-600'
                    }`}>
                      {isSelected ? 'Selected' : 'View Details'}
                    </span>
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                      isSelected 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-purple-600/10 text-purple-600 group-hover:bg-purple-600/20 group-hover:translate-x-1'
                    }`}>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Selected Indicator */}
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center"
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
        {selectedCapability && capability && (
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
                    <div className="w-16 h-16 bg-purple-600/10 rounded-xl flex items-center justify-center">
                      <capability.icon className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>
                  <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground">
                    {capability.title}
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                    {capability.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg"
                    >
                      Discuss a Project
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2"
                    >
                      Explore Technology & Innovation
                    </Button>
                  </div>
                </div>

                {/* SECTION 2 - STRATEGIC OVERVIEW */}
                <div className="mb-20 bg-card border border-border rounded-2xl p-10">
                  <div className="grid md:grid-cols-2 gap-12">
                    {/* Left - Description */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-foreground mb-6">Strategic Overview</h3>
                      {capability.sections.overview.left.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground">{item}</p>
                        </div>
                      ))}
                    </div>

                    {/* Right - KPIs */}
                    <div className="space-y-6">
                      {capability.sections.overview.right.map((stat, idx) => (
                        <div key={idx} className="border-l-4 border-purple-600/30 pl-6">
                          <div className="text-sm text-muted-foreground uppercase tracking-wide mb-1">
                            {stat.label}
                          </div>
                          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
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
                    {capability.sections.solutions.map((solution, idx) => {
                      const SolutionIcon = solution.icon;
                      return (
                        <div
                          key={idx}
                          className="bg-card border border-border rounded-xl p-6 hover:border-purple-600/50 transition-all duration-300 group"
                        >
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-600/10 to-blue-600/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-purple-600/20 group-hover:to-blue-600/10 transition-all duration-300">
                              <SolutionIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                            </div>
                            <h4 className="text-xl font-bold text-foreground flex-1">
                              {solution.title}
                            </h4>
                          </div>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {solution.description}
                          </p>
                          <div className="space-y-2">
                            {solution.features.map((feature, fIdx) => (
                              <div key={fIdx} className="flex items-start gap-2 text-sm">
                                <CheckCircle2 className="h-4 w-4 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* SECTION 4 - DELIVERY MODEL */}
                <DeliveryModelSection 
                  deliveryModel={capability.sections.deliveryModel}
                  expandedStep={expandedStep}
                  setExpandedStep={setExpandedStep}
                />

                {/* SECTION 5 - TECHNOLOGY FOUNDATION */}
                <div className="mb-20 bg-card border border-border rounded-2xl p-10">
                  <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Technology Foundation</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {capability.sections.technology.map((tech, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SECTION 6 - CTA */}
                <div className="text-center bg-gradient-to-br from-purple-600/5 to-blue-600/5 border border-purple-600/20 rounded-2xl p-10">
                  <p className="text-xl text-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
                    {capability.sections.cta.headline}
                  </p>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg text-lg px-8"
                  >
                    {capability.sections.cta.button}
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