import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BrainCircuit, 
  Globe2, 
  Target, 
  Baby,
  ChevronRight,
  Lock,
  CheckCircle2,
  ArrowRight,
  X,
  BarChart3,
  Network,
  Shield,
  Users,
  GraduationCap,
  TrendingUp,
  Award,
  UserCheck,
  Zap,
  Database,
  Search,
  Heart
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
                    ? 'bg-gradient-to-br from-orange-600 to-amber-600 shadow-lg scale-110' 
                    : 'bg-card border-2 border-orange-500/30 group-hover:border-orange-500 group-hover:bg-orange-500/5'
                  }
                `}>
                  <StepIcon className={`h-7 w-7 ${isActive ? 'text-white' : 'text-orange-600 dark:text-orange-400'} transition-colors duration-300`} />
                </div>
                
                {/* Step Number */}
                <div className={`text-xs font-bold mb-1 transition-colors duration-300 ${isActive ? 'text-orange-600 dark:text-orange-400' : 'text-muted-foreground'}`}>
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
            <div className="bg-gradient-to-br from-orange-600/5 to-amber-600/5 border border-orange-600/20 rounded-2xl p-8">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
                  <h5 className="text-sm font-semibold text-orange-600 dark:text-orange-400 mb-4 uppercase tracking-wider">Key Deliverables</h5>
                  <div className="grid gap-3">
                    {deliveryModel[expandedStep].deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
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
    id: 'ai-talent-matching',
    icon: BrainCircuit,
    title: 'AI-Powered Talent Matching',
    subtitle: 'Leveraging advanced artificial intelligence and machine learning algorithms to optimize talent acquisition through intelligent skills mapping, cultural alignment assessment, and predictive career trajectory analysis.',
    sections: {
      overview: {
        left: [
          'AI-driven recruitment ecosystems enhancing precision in talent identification',
          'Intelligent skills analytics improving candidate-role alignment',
          'Predictive performance modeling reducing hiring risk and turnover',
          'Data-centric workforce planning supporting strategic HR transformation'
        ],
        right: [
          { label: 'Deployment', value: 'Enterprise & Government' },
          { label: 'Architecture', value: 'AI-Enabled & Data-Driven' },
          { label: 'Systems', value: 'Intelligent, Scalable & Performance-Oriented' }
        ]
      },
      solutions: [
        {
          title: 'Intelligent Candidate Screening',
          icon: Search,
          description: 'Automated AI screening engines analyzing competencies, experience patterns, behavioral indicators, and role compatibility in real time.',
          features: [
            'AI-powered competency analysis',
            'Experience pattern recognition',
            'Behavioral indicator assessment',
            'Real-time role compatibility scoring'
          ]
        },
        {
          title: 'Skills & Competency Mapping',
          icon: Target,
          description: 'Advanced skills taxonomy frameworks matching technical expertise, soft skills, certifications, and industry-specific capabilities to strategic workforce needs.',
          features: [
            'Technical expertise mapping',
            'Soft skills assessment',
            'Certification tracking',
            'Industry-specific capability matching'
          ]
        },
        {
          title: 'Cultural & Organizational Fit Analytics',
          icon: Users,
          description: 'AI-based cultural alignment assessment ensuring long-term integration, team cohesion, and leadership compatibility.',
          features: [
            'Cultural alignment scoring',
            'Long-term integration assessment',
            'Team cohesion analysis',
            'Leadership compatibility evaluation'
          ]
        },
        {
          title: 'Predictive Talent Performance Modeling',
          icon: TrendingUp,
          description: 'Data-driven forecasting tools evaluating career progression potential, performance sustainability, and retention probability.',
          features: [
            'Career progression forecasting',
            'Performance sustainability analysis',
            'Retention probability modeling',
            'Data-driven talent insights'
          ]
        }
      ],
      deliveryModel: [
        {
          step: 'Workforce & Skills Gap Assessment',
          icon: Shield,
          description: 'Comprehensive evaluation of current workforce composition, skills inventory, hiring needs, and talent strategy objectives.',
          deliverables: [
            'Workforce composition analysis',
            'Skills inventory and gap assessment',
            'Hiring needs identification',
            'Talent strategy roadmap'
          ]
        },
        {
          step: 'AI Matching Engine Configuration',
          icon: Zap,
          description: 'Customization of AI algorithms, skills taxonomy, cultural assessment parameters, and predictive models aligned with organizational needs.',
          deliverables: [
            'AI algorithm configuration',
            'Skills taxonomy customization',
            'Cultural assessment setup',
            'Predictive model calibration'
          ]
        },
        {
          step: 'Integration with HR Systems & ATS',
          icon: Network,
          description: 'Seamless integration with existing HR information systems, applicant tracking systems, and recruitment platforms.',
          deliverables: [
            'HRIS integration completion',
            'ATS connectivity setup',
            'Recruitment platform integration',
            'User training and onboarding'
          ]
        },
        {
          step: 'Continuous Learning & Optimization',
          icon: BarChart3,
          description: 'Ongoing refinement of AI models based on hiring outcomes, performance data, and evolving workforce requirements.',
          deliverables: [
            'Model performance monitoring',
            'Continuous algorithm refinement',
            'Hiring outcome analysis',
            'Strategic optimization reports'
          ]
        }
      ],
      technology: [
        'Machine learning algorithms & NLP engines',
        'AI-based scoring and ranking systems',
        'Secure HR data architecture',
        'Cloud-enabled recruitment platforms',
        'Advanced analytics dashboards'
      ],
      cta: {
        headline: 'Improving hiring accuracy, accelerating recruitment cycles, reducing workforce risk, and enabling strategic human capital optimization through intelligent talent ecosystems.',
        button: 'Transform Talent Acquisition'
      }
    }
  },
  {
    id: 'global-talent-pool',
    icon: Globe2,
    title: 'Global Talent Pool Access',
    subtitle: 'Providing structured access to extensive international talent ecosystems through advanced sourcing intelligence, global recruitment networks, and scalable workforce deployment frameworks.',
    sections: {
      overview: {
        left: [
          'Global workforce sourcing across multi-industry talent segments',
          'Cross-border recruitment frameworks aligned with regulatory compliance',
          'Strategic workforce expansion supporting rapid scaling initiatives',
          'Data-driven talent engagement and pipeline sustainability'
        ],
        right: [
          { label: 'Deployment', value: 'Global & Cross-Border' },
          { label: 'Architecture', value: 'Network-Integrated & Scalable' },
          { label: 'Systems', value: 'Multi-Source & Intelligence-Driven' }
        ]
      },
      solutions: [
        {
          title: 'International Talent Sourcing Networks',
          icon: Globe2,
          description: 'Access to diversified global talent databases across technical, executive, operational, and specialized sectors.',
          features: [
            'Global talent database access',
            'Multi-industry coverage',
            'Executive and technical sourcing',
            'Specialized sector expertise'
          ]
        },
        {
          title: 'Advanced Talent Search & Filtering Systems',
          icon: Search,
          description: 'AI-enhanced search engines enabling precision filtering by competencies, experience levels, certifications, and industry specialization.',
          features: [
            'AI-powered search capabilities',
            'Precision competency filtering',
            'Experience level segmentation',
            'Industry specialization matching'
          ]
        },
        {
          title: 'Cross-Border Recruitment & Mobility Management',
          icon: Network,
          description: 'Structured processes supporting visa coordination, relocation frameworks, workforce compliance, and onboarding integration.',
          features: [
            'Visa coordination services',
            'Relocation framework support',
            'Compliance management systems',
            'Onboarding integration programs'
          ]
        },
        {
          title: 'Talent Engagement & Pipeline Development',
          icon: Users,
          description: 'Long-term candidate engagement models ensuring continuous availability of qualified professionals for strategic workforce needs.',
          features: [
            'Long-term engagement strategies',
            'Continuous talent pipeline',
            'Qualified professional networks',
            'Strategic workforce readiness'
          ]
        }
      ],
      deliveryModel: [
        {
          step: 'Workforce Demand Mapping',
          icon: Shield,
          description: 'Comprehensive analysis of current and projected workforce needs, skills requirements, and international expansion strategies.',
          deliverables: [
            'Workforce demand analysis',
            'Skills requirements mapping',
            'International expansion assessment',
            'Talent acquisition strategy'
          ]
        },
        {
          step: 'Global Talent Identification & Pre-Qualification',
          icon: Search,
          description: 'Identification of qualified international candidates through global networks, AI matching, and comprehensive pre-screening.',
          deliverables: [
            'Candidate identification report',
            'Pre-qualification screening',
            'Skills verification process',
            'Cultural fit assessment'
          ]
        },
        {
          step: 'Cross-Border Compliance & Mobilization',
          icon: Lock,
          description: 'Management of immigration processes, regulatory compliance, relocation logistics, and employment contract frameworks.',
          deliverables: [
            'Immigration process management',
            'Regulatory compliance certification',
            'Relocation logistics coordination',
            'Employment contract finalization'
          ]
        },
        {
          step: 'Workforce Integration & Performance Tracking',
          icon: BarChart3,
          description: 'Onboarding support, integration monitoring, performance tracking, and continuous talent pipeline development.',
          deliverables: [
            'Onboarding execution',
            'Integration monitoring systems',
            'Performance tracking dashboards',
            'Pipeline development reports'
          ]
        }
      ],
      technology: [
        'AI-driven sourcing platforms',
        'Global recruitment CRM systems',
        'Secure candidate data management infrastructure',
        'Cross-border compliance tracking systems',
        'Real-time talent analytics dashboards'
      ],
      cta: {
        headline: 'Enabling organizations to scale internationally, secure specialized expertise, reduce time-to-hire, and build resilient global workforce ecosystems.',
        button: 'Access Global Talent'
      }
    }
  },
  {
    id: 'predictive-analytics',
    icon: Target,
    title: 'Predictive Workforce Analytics',
    subtitle: 'Leveraging advanced data intelligence, AI-driven workforce modeling, and predictive analytics to optimize talent performance, retention, and strategic workforce planning.',
    sections: {
      overview: {
        left: [
          'Data-driven workforce planning aligned with long-term organizational strategy',
          'Predictive retention modeling reducing turnover risk and talent loss',
          'Performance optimization through behavioral and productivity analytics',
          'Proactive talent management enabling executive-level decision support'
        ],
        right: [
          { label: 'Deployment', value: 'Enterprise & Multi-Region' },
          { label: 'Architecture', value: 'Data-Centric & AI-Driven' },
          { label: 'Systems', value: 'Predictive & Performance-Optimized' }
        ]
      },
      solutions: [
        {
          title: 'Workforce Forecasting & Capacity Planning',
          icon: TrendingUp,
          description: 'Advanced predictive models anticipating hiring needs, skills gaps, and workforce expansion requirements.',
          features: [
            'Hiring needs forecasting',
            'Skills gap prediction',
            'Workforce expansion planning',
            'Capacity optimization models'
          ]
        },
        {
          title: 'Retention Risk Modeling',
          icon: Shield,
          description: 'AI-powered analytics identifying attrition patterns, engagement gaps, and early warning indicators to reduce talent loss.',
          features: [
            'Attrition pattern identification',
            'Engagement gap analysis',
            'Early warning systems',
            'Talent loss prevention strategies'
          ]
        },
        {
          title: 'Performance & Productivity Analytics',
          icon: BarChart3,
          description: 'Real-time dashboards monitoring KPIs, workforce efficiency, and operational alignment across departments.',
          features: [
            'Real-time KPI monitoring',
            'Workforce efficiency tracking',
            'Operational alignment analysis',
            'Department performance insights'
          ]
        },
        {
          title: 'Strategic Talent Intelligence Platforms',
          icon: Database,
          description: 'Executive-level reporting systems delivering scenario modeling, workforce simulations, and data-backed HR strategy insights.',
          features: [
            'Executive reporting dashboards',
            'Scenario modeling tools',
            'Workforce simulation systems',
            'Data-backed strategy insights'
          ]
        }
      ],
      deliveryModel: [
        {
          step: 'Workforce Data Audit & Integration',
          icon: Shield,
          description: 'Comprehensive audit of HR data sources, quality assessment, integration of disparate systems, and establishment of data governance protocols.',
          deliverables: [
            'HR data audit report',
            'Data quality assessment',
            'System integration plan',
            'Data governance framework'
          ]
        },
        {
          step: 'Predictive Model Design & Customization',
          icon: Zap,
          description: 'Development of customized predictive models aligned with organizational goals, industry benchmarks, and workforce dynamics.',
          deliverables: [
            'Predictive model specifications',
            'Customization parameters',
            'Industry benchmark alignment',
            'Model validation protocols'
          ]
        },
        {
          step: 'Analytics Deployment & Dashboard Integration',
          icon: Network,
          description: 'Deployment of analytics platforms, integration with existing HR systems, and creation of executive-level dashboards.',
          deliverables: [
            'Analytics platform deployment',
            'HR system integration',
            'Executive dashboard creation',
            'User training programs'
          ]
        },
        {
          step: 'Continuous Monitoring & Strategic Optimization',
          icon: BarChart3,
          description: 'Ongoing monitoring of workforce metrics, model refinement, strategic insights delivery, and continuous optimization.',
          deliverables: [
            'Workforce metrics monitoring',
            'Model refinement protocols',
            'Strategic insights reports',
            'Optimization recommendations'
          ]
        }
      ],
      technology: [
        'AI & machine learning workforce models',
        'Secure HR data lake architecture',
        'Predictive analytics engines',
        'Executive decision-support dashboards',
        'Compliance-aligned data governance framework'
      ],
      cta: {
        headline: 'Empowering organizations to anticipate workforce risks, improve retention, optimize productivity, and drive sustainable human capital performance.',
        button: 'Enable Predictive Analytics'
      }
    }
  },
  {
    id: 'work-life-solutions',
    icon: Baby,
    title: 'Digital Parenting & Work-Life Solutions',
    subtitle: 'Designing intelligent, human-centric digital platforms that enhance work-life integration, employee wellbeing, and organizational culture through structured support systems and family-oriented solutions.',
    sections: {
      overview: {
        left: [
          'Workforce wellbeing enhancement aligned with organizational productivity objectives',
          'Digital support ecosystems strengthening employee engagement and retention',
          'Structured parenting and family coordination platforms reducing work-life friction',
          'Culture-driven HR innovation fostering sustainable and inclusive workplaces'
        ],
        right: [
          { label: 'Deployment', value: 'Corporate & Institutional' },
          { label: 'Architecture', value: 'Secure & User-Centric' },
          { label: 'Systems', value: 'Integrated & Engagement-Driven' }
        ]
      },
      solutions: [
        {
          title: 'Digital Work-Life Coordination Platforms',
          icon: Network,
          description: 'Smart scheduling and collaboration systems enabling seamless balance between professional responsibilities and family commitments.',
          features: [
            'Smart scheduling systems',
            'Collaboration tools',
            'Professional-family balance',
            'Seamless integration frameworks'
          ]
        },
        {
          title: 'Parenting Support & Resource Portals',
          icon: Baby,
          description: 'Centralized digital hubs providing curated parenting guidance, educational resources, and family coordination tools.',
          features: [
            'Curated parenting guidance',
            'Educational resource libraries',
            'Family coordination tools',
            'Centralized support portals'
          ]
        },
        {
          title: 'Employee Wellbeing & Engagement Programs',
          icon: Heart,
          description: 'Integrated digital frameworks delivering wellness initiatives, mental health support, and structured engagement tracking.',
          features: [
            'Wellness initiative programs',
            'Mental health support systems',
            'Engagement tracking platforms',
            'Integrated wellbeing frameworks'
          ]
        },
        {
          title: 'Culture & Retention Optimization Tools',
          icon: Award,
          description: 'Analytics-driven platforms measuring engagement levels, satisfaction metrics, and organizational culture performance indicators.',
          features: [
            'Engagement level measurement',
            'Satisfaction metrics tracking',
            'Culture performance indicators',
            'Analytics-driven insights'
          ]
        }
      ],
      deliveryModel: [
        {
          step: 'Organizational Culture & Workforce Assessment',
          icon: Shield,
          description: 'Comprehensive evaluation of organizational culture, employee satisfaction levels, wellbeing needs, and work-life balance challenges.',
          deliverables: [
            'Culture assessment report',
            'Employee satisfaction analysis',
            'Wellbeing needs evaluation',
            'Work-life balance study'
          ]
        },
        {
          step: 'Platform Architecture & Experience Design',
          icon: Zap,
          description: 'Design of user-centric digital platforms with intuitive interfaces, personalized content, and seamless mobile accessibility.',
          deliverables: [
            'Platform architecture design',
            'User experience specifications',
            'Interface design mockups',
            'Mobile accessibility framework'
          ]
        },
        {
          step: 'Deployment & HR System Integration',
          icon: Network,
          description: 'Integration with HR systems, deployment of digital platforms, communication rollout, and employee onboarding.',
          deliverables: [
            'HR system integration',
            'Platform deployment execution',
            'Communication campaign rollout',
            'Employee onboarding programs'
          ]
        },
        {
          step: 'Engagement Monitoring & Continuous Improvement',
          icon: BarChart3,
          description: 'Ongoing monitoring of employee engagement, platform usage analytics, feedback collection, and continuous enhancement.',
          deliverables: [
            'Engagement monitoring dashboards',
            'Usage analytics reports',
            'Feedback collection systems',
            'Continuous enhancement plans'
          ]
        }
      ],
      technology: [
        'Secure cloud-based employee platforms',
        'AI-driven engagement analytics',
        'Data privacy & compliance framework',
        'Mobile-first user experience architecture',
        'Real-time monitoring & reporting dashboards'
      ],
      cta: {
        headline: 'Strengthening workforce stability, enhancing employee satisfaction, and building resilient organizational cultures through intelligent work-life integration systems.',
        button: 'Enhance Work-Life Integration'
      }
    }
  }
];

export function HumanCapitalCapabilities() {
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
                    ? 'border-orange-600 shadow-lg shadow-orange-600/20' 
                    : 'border-border hover:border-orange-600/50 hover:shadow-xl'
                }`}>
                  
                  {/* Top Section */}
                  <div className="flex items-start gap-4 mb-6">
                    {/* Icon Container */}
                    <div className="flex-shrink-0">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isSelected 
                          ? 'bg-gradient-to-br from-orange-600 to-amber-600 scale-105' 
                          : 'bg-gradient-to-br from-orange-600/10 to-amber-600/5 group-hover:scale-105'
                      }`}>
                        <Icon className={`h-7 w-7 transition-colors duration-300 ${
                          isSelected ? 'text-white' : 'text-orange-600 dark:text-orange-400'
                        }`} />
                      </div>
                    </div>
                    
                    {/* Number Badge */}
                    <div className={`ml-auto text-xs font-bold px-3 py-1 rounded-full transition-all duration-300 ${
                      isSelected 
                        ? 'bg-orange-600 text-white' 
                        : 'bg-orange-600/10 text-orange-600/60 group-hover:bg-orange-600/20 group-hover:text-orange-600'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex-1 mb-6">
                    <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                      isSelected ? 'text-orange-600 dark:text-orange-400' : 'text-foreground group-hover:text-orange-600'
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
                        ? 'text-orange-600 dark:text-orange-400' 
                        : 'text-orange-600/60 group-hover:text-orange-600'
                    }`}>
                      {isSelected ? 'Selected' : 'View Details'}
                    </span>
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                      isSelected 
                        ? 'bg-orange-600 text-white' 
                        : 'bg-orange-600/10 text-orange-600 group-hover:bg-orange-600/20 group-hover:translate-x-1'
                    }`}>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Selected Indicator */}
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center"
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
                    <div className="w-16 h-16 bg-orange-600/10 rounded-xl flex items-center justify-center">
                      <capability.icon className="h-8 w-8 text-orange-600 dark:text-orange-400" />
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
                      className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg"
                    >
                      Discuss a Project
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2"
                    >
                      Explore Human Capital & Society
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
                          <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground">{item}</p>
                        </div>
                      ))}
                    </div>

                    {/* Right - KPIs */}
                    <div className="space-y-6">
                      {capability.sections.overview.right.map((stat, idx) => (
                        <div key={idx} className="border-l-4 border-orange-600/30 pl-6">
                          <div className="text-sm text-muted-foreground uppercase tracking-wide mb-1">
                            {stat.label}
                          </div>
                          <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
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
                          className="bg-card border border-border rounded-xl p-6 hover:border-orange-600/50 transition-all duration-300 group"
                        >
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-600/10 to-amber-600/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-orange-600/20 group-hover:to-amber-600/10 transition-all duration-300">
                              <SolutionIcon className="h-6 w-6 text-orange-600 dark:text-orange-400" />
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
                                <CheckCircle2 className="h-4 w-4 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
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
                        <CheckCircle2 className="h-5 w-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SECTION 6 - CTA */}
                <div className="text-center bg-gradient-to-br from-orange-600/5 to-amber-600/5 border border-orange-600/20 rounded-2xl p-10">
                  <p className="text-xl text-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
                    {capability.sections.cta.headline}
                  </p>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg text-lg px-8"
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