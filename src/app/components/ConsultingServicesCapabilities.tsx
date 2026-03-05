import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Handshake, 
  Globe, 
  UserCheck, 
  TrendingUp, 
  FileText,
  Building,
  Lock,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  X,
  BarChart3,
  Network,
  Users,
  Target,
  Briefcase,
  Scale,
  ShieldCheck,
  MapPin,
  Shield
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
                    ? 'bg-gradient-to-br from-purple-600 to-purple-800 dark:from-purple-500 dark:to-purple-700 shadow-lg scale-110' 
                    : 'bg-card border-2 border-purple-600/30 dark:border-purple-400/30 group-hover:border-purple-600 dark:group-hover:border-purple-400 group-hover:bg-purple-600/5 dark:group-hover:bg-purple-400/5'
                  }
                `}>
                  <StepIcon className={`h-7 w-7 ${isActive ? 'text-white' : 'text-purple-600 dark:text-purple-400'} transition-colors duration-300`} />
                </div>
                
                {/* Step Number */}
                <div className={`text-xs font-bold mb-1 transition-colors duration-300 ${isActive ? 'text-purple-600 dark:text-purple-400' : 'text-muted-foreground dark:text-gray-300'}`}>
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
                    <div className="w-10 h-10 bg-purple-600/10 dark:bg-purple-400/10 rounded-lg flex items-center justify-center">
                      {(() => {
                        const IconComponent = deliveryModel[expandedStep].icon;
                        return <IconComponent className="h-5 w-5 text-purple-600 dark:text-purple-400" />;
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
    id: 'strategic-intermediation',
    icon: Handshake,
    title: 'Strategic Business Intermediation',
    subtitle: 'Facilitating high-value business connections and partnerships across jurisdictions',
    sections: {
      overview: {
        left: [
          'We act as a trusted intermediary between businesses, investors, and strategic partners across multiple jurisdictions.',
          'Our role is to identify opportunities, align interests, and structure mutually beneficial collaborations while preserving confidentiality and strategic positioning.',
          'With deep sector expertise and cross-border relationships, we facilitate connections that create sustainable value for all stakeholders.'
        ],
        right: [
          { label: 'Active Jurisdictions', value: '30+' },
          { label: 'Successful Engagements', value: '150+' },
          { label: 'Client Satisfaction', value: '95%' }
        ]
      },
      solutions: [
        {
          title: 'Partner Identification & Qualification',
          icon: Network,
          description: 'Systematic approach to identifying and qualifying potential partners aligned with your strategic objectives',
          features: [
            'Target market analysis',
            'Partner screening and due diligence',
            'Initial outreach and positioning',
            'Preliminary fit assessment'
          ]
        },
        {
          title: 'Interest Alignment & Structuring',
          icon: Target,
          description: 'Strategic alignment of commercial and institutional objectives with robust governance frameworks',
          features: [
            'Stakeholder mapping',
            'Objective harmonization',
            'Risk-reward structuring',
            'Governance framework design'
          ]
        },
        {
          title: 'Confidential Facilitation',
          icon: ShieldCheck,
          description: 'Secure management of sensitive business discussions with strict confidentiality protocols',
          features: [
            'NDA structuring and management',
            'Controlled information disclosure',
            'Trusted advisor positioning',
            'Relationship preservation'
          ]
        },
        {
          title: 'Transaction Execution Support',
          icon: FileText,
          description: 'End-to-end support through negotiation, documentation, and closing phases',
          features: [
            'Negotiation strategy and support',
            'Documentation coordination',
            'Deal structuring advisory',
            'Closing management'
          ]
        }
      ],
      deliveryModel: [
        {
          step: 'Discovery & Assessment',
          icon: Users,
          description: 'Understanding client objectives and identifying target opportunities',
          deliverables: [
            'Stakeholder objectives mapping',
            'Target market assessment',
            'Preliminary partner long-list',
            'Engagement strategy'
          ]
        },
        {
          step: 'Strategic Outreach',
          icon: Network,
          description: 'Strategic approach to potential partners',
          deliverables: [
            'Confidential introductions',
            'Preliminary discussions',
            'Interest validation',
            'Framework terms discussion'
          ]
        },
        {
          step: 'Structuring & Negotiation',
          icon: FileText,
          description: 'Developing collaboration frameworks and supporting negotiations',
          deliverables: [
            'Commercial terms outline',
            'Governance structure design',
            'Risk allocation framework',
            'Timeline and milestones'
          ]
        },
        {
          step: 'Closing & Transition',
          icon: CheckCircle2,
          description: 'Finalizing agreements and ensuring smooth handover',
          deliverables: [
            'Documentation review',
            'Final negotiations support',
            'Signing coordination',
            'Transition management'
          ]
        }
      ],
      technology: [
        'Secure communication platforms',
        'Virtual data rooms',
        'Stakeholder management systems',
        'Transaction tracking tools',
        'Encrypted document exchange'
      ],
      cta: {
        headline: 'Need a Trusted Intermediary for Your Business Initiative?',
        button: 'Discuss Your Opportunity'
      }
    }
  },
  {
    id: 'cross-border-deals',
    icon: Globe,
    title: 'Cross-Border Deal Facilitation',
    subtitle: 'Accelerating international transactions through coordinated stakeholder management and regulatory navigation',
    sections: {
      overview: {
        left: [
          'We facilitate cross-border business transactions by coordinating stakeholders, navigating regulatory environments, and streamlining decision-making processes.',
          'Our involvement ensures efficiency, clarity, and risk mitigation throughout the engagement lifecycle.',
          'With established relationships across jurisdictions and deep regulatory knowledge, we accelerate deal execution while protecting client interests.'
        ],
        right: [
          { label: 'Countries Covered', value: '30+' },
          { label: 'Deal Success Rate', value: '92%' },
          { label: 'Average Time Savings', value: '40%' }
        ]
      },
      solutions: [
        {
          title: 'Stakeholder Coordination',
          icon: Users,
          description: 'Managing complex multi-party transactions across borders',
          features: [
            'Multi-jurisdictional coordination',
            'Communication protocol management',
            'Decision-making facilitation',
            'Conflict resolution support'
          ]
        },
        {
          title: 'Regulatory Navigation',
          icon: Scale,
          description: 'Ensuring compliance across jurisdictions',
          features: [
            'Regulatory landscape mapping',
            'Compliance pathway identification',
            'Authority engagement support',
            'Documentation review'
          ]
        },
        {
          title: 'Risk Mitigation',
          icon: ShieldCheck,
          description: 'Identifying and managing transaction risks',
          features: [
            'Risk assessment and mapping',
            'Mitigation strategy development',
            'Contingency planning',
            'Insurance and guarantee structuring'
          ]
        },
        {
          title: 'Deal Execution Support',
          icon: Target,
          description: 'Supporting seamless deal implementation and closing',
          features: [
            'Project management',
            'Timeline coordination',
            'Milestone tracking',
            'Closing logistics'
          ]
        }
      ],
      deliveryModel: [
        {
          step: 'Assessment & Planning',
          icon: BarChart3,
          description: 'Comprehensive analysis of transaction landscape',
          deliverables: [
            'Regulatory requirements analysis',
            'Stakeholder identification',
            'Risk assessment report',
            'Transaction roadmap'
          ]
        },
        {
          step: 'Coordination & Alignment',
          icon: Network,
          description: 'Managing stakeholder alignment',
          deliverables: [
            'Communication protocols',
            'Meeting facilitation',
            'Progress tracking',
            'Issue resolution'
          ]
        },
        {
          step: 'Execution & Implementation',
          icon: Target,
          description: 'Supporting deal implementation',
          deliverables: [
            'Documentation coordination',
            'Regulatory submissions',
            'Approval tracking',
            'Closing support'
          ]
        },
        {
          step: 'Post-Closing Transition',
          icon: CheckCircle2,
          description: 'Ensuring smooth post-closing integration',
          deliverables: [
            'Handover documentation',
            'Integration support',
            'Relationship management',
            'Success metrics tracking'
          ]
        }
      ],
      technology: [
        'Project management platforms',
        'Regulatory compliance tools',
        'Secure document exchange',
        'Transaction milestone tracking',
        'Multi-party collaboration systems'
      ],
      cta: {
        headline: 'Planning a Cross-Border Transaction?',
        button: 'Get Expert Support'
      }
    }
  },
  {
    id: 'negotiation-representation',
    icon: UserCheck,
    title: 'Commercial Negotiation & Representation',
    subtitle: 'Expert representation in high-value commercial negotiations to secure optimal outcomes',
    sections: {
      overview: {
        left: [
          'We represent and support clients in high-value commercial negotiations, safeguarding their interests and strengthening their negotiating position.',
          'Our focus is on achieving optimal commercial terms, sustainable partnerships, and long-term value creation.',
          'With experienced negotiators and deep sector knowledge, we help clients secure favorable outcomes in complex commercial discussions.'
        ],
        right: [
          { label: 'Negotiations Supported', value: '200+' },
          { label: 'Value Secured', value: '$5B+' },
          { label: 'Client Win Rate', value: '88%' }
        ]
      },
      solutions: [
        {
          title: 'Negotiation Strategy',
          icon: Target,
          description: 'Developing winning negotiation approaches',
          features: [
            'Position analysis',
            'BATNA development',
            'Leverage identification',
            'Tactics planning'
          ]
        },
        {
          title: 'Client Representation',
          icon: Users,
          description: 'Direct representation in negotiations',
          features: [
            'Lead negotiator role',
            'Position advocacy',
            'Term optimization',
            'Agreement structuring'
          ]
        },
        {
          title: 'Value Protection',
          icon: ShieldCheck,
          description: 'Safeguarding client commercial interests',
          features: [
            'Risk identification',
            'Term protection',
            'Warranty negotiation',
            'Exit provision structuring'
          ]
        },
        {
          title: 'Documentation & Closing',
          icon: FileText,
          description: 'Securing agreements and managing execution',
          features: [
            'Term sheet development',
            'Agreement review',
            'Clause negotiation',
            'Signing coordination'
          ]
        }
      ],
      deliveryModel: [
        {
          step: 'Preparation & Strategy',
          icon: FileText,
          description: 'Comprehensive negotiation preparation',
          deliverables: [
            'Position paper development',
            'BATNA analysis',
            'Leverage mapping',
            'Strategy document'
          ]
        },
        {
          step: 'Active Negotiation',
          icon: Handshake,
          description: 'Active negotiation support or representation',
          deliverables: [
            'Session facilitation',
            'Position advocacy',
            'Term optimization',
            'Progress documentation'
          ]
        },
        {
          step: 'Documentation',
          icon: CheckCircle2,
          description: 'Securing agreed terms in binding documents',
          deliverables: [
            'Term sheet drafting',
            'Agreement review',
            'Clause negotiation',
            'Execution coordination'
          ]
        },
        {
          step: 'Implementation Support',
          icon: Users,
          description: 'Post-agreement implementation support',
          deliverables: [
            'Interpretation guidance',
            'Dispute resolution',
            'Amendment negotiation',
            'Relationship management'
          ]
        }
      ],
      technology: [
        'Negotiation management platforms',
        'Document version control',
        'Secure communication tools',
        'Term tracking systems',
        'Analytics and reporting'
      ],
      cta: {
        headline: 'Need Expert Support in Commercial Negotiations?',
        button: 'Engage Our Team'
      }
    }
  },
  {
    id: 'market-entry',
    icon: TrendingUp,
    title: 'Market Entry & Expansion Advisory',
    subtitle: 'Strategic support for successful international market entry and expansion',
    sections: {
      overview: {
        left: [
          'We advise companies entering new markets or expanding internationally by leveraging our regional expertise and global network.',
          'Services include partner identification, strategic positioning, and operational setup tailored to local market realities.',
          'Our approach combines market intelligence, network access, and execution support to accelerate successful market entry.'
        ],
        right: [
          { label: 'Markets Covered', value: '30+' },
          { label: 'Successful Entries', value: '80+' },
          { label: 'Time to Market', value: '-50%' }
        ]
      },
      solutions: [
        {
          title: 'Market Intelligence',
          icon: BarChart3,
          description: 'Comprehensive market analysis and opportunity assessment',
          features: [
            'Market sizing and segmentation',
            'Competitive landscape analysis',
            'Regulatory environment review',
            'Entry barrier assessment'
          ]
        },
        {
          title: 'Partner Identification',
          icon: Network,
          description: 'Identifying and qualifying local partners',
          features: [
            'Partner landscape mapping',
            'Capability assessment',
            'Cultural fit evaluation',
            'Commercial terms advisory'
          ]
        },
        {
          title: 'Operational Setup',
          icon: Building,
          description: 'Supporting local entity establishment',
          features: [
            'Entity structure design',
            'Licensing support',
            'Location selection',
            'Team recruitment advisory'
          ]
        },
        {
          title: 'Go-to-Market Strategy',
          icon: Target,
          description: 'Developing market entry and growth strategies',
          features: [
            'Positioning strategy',
            'Channel development',
            'Pricing framework',
            'Launch planning'
          ]
        }
      ],
      deliveryModel: [
        {
          step: 'Market Analysis',
          icon: BarChart3,
          description: 'Market opportunity assessment',
          deliverables: [
            'Market research report',
            'Entry strategy options',
            'Risk assessment',
            'Investment requirements'
          ]
        },
        {
          step: 'Strategy Development',
          icon: Target,
          description: 'Entry strategy development',
          deliverables: [
            'Market entry plan',
            'Partner strategy',
            'Positioning framework',
            'Go-to-market roadmap'
          ]
        },
        {
          step: 'Implementation',
          icon: CheckCircle2,
          description: 'Implementation support',
          deliverables: [
            'Partner engagement',
            'Entity setup support',
            'Team recruitment',
            'Launch coordination'
          ]
        },
        {
          step: 'Optimization',
          icon: TrendingUp,
          description: 'Post-entry performance enhancement',
          deliverables: [
            'Performance tracking',
            'Strategy refinement',
            'Network expansion',
            'Growth planning'
          ]
        }
      ],
      technology: [
        'Market intelligence platforms',
        'Partner matching systems',
        'Project tracking tools',
        'Performance analytics',
        'CRM and stakeholder management'
      ],
      cta: {
        headline: 'Ready to Enter New Markets?',
        button: 'Start Your Expansion'
      }
    }
  },
  {
    id: 'investment-structuring',
    icon: FileText,
    title: 'Investment & Partnership Structuring',
    subtitle: 'Designing robust investment structures and strategic alliances',
    sections: {
      overview: {
        left: [
          'We support the structuring of investments, joint ventures, and strategic alliances.',
          'Our approach balances commercial objectives, governance frameworks, and risk allocation to create robust and bankable structures.',
          'We bring financial structuring expertise, legal coordination, and commercial insight to optimize transaction outcomes.'
        ],
        right: [
          { label: 'Structures Created', value: '120+' },
          { label: 'Total Value', value: '$8B+' },
          { label: 'Success Rate', value: '94%' }
        ]
      },
      solutions: [
        {
          title: 'Financial Structuring',
          icon: BarChart3,
          description: 'Optimal capital and return structures',
          features: [
            'Capital structure design',
            'Return distribution modeling',
            'Tax optimization',
            'Exit scenario planning'
          ]
        },
        {
          title: 'Governance Design',
          icon: Users,
          description: 'Effective decision-making frameworks',
          features: [
            'Board composition design',
            'Decision rights allocation',
            'Deadlock resolution mechanisms',
            'Information rights structuring'
          ]
        },
        {
          title: 'Risk Allocation',
          icon: Scale,
          description: 'Fair and bankable risk distribution',
          features: [
            'Risk identification',
            'Responsibility allocation',
            'Warranty structuring',
            'Insurance coordination'
          ]
        },
        {
          title: 'Legal & Regulatory',
          icon: Shield,
          description: 'Compliance and documentation coordination',
          features: [
            'Regulatory compliance',
            'Documentation strategy',
            'Legal coordination',
            'Approval management'
          ]
        }
      ],
      deliveryModel: [
        {
          step: 'Scoping & Design',
          icon: FileText,
          description: 'Understanding transaction objectives',
          deliverables: [
            'Objective alignment',
            'Structure options',
            'Key terms outline',
            'Process roadmap'
          ]
        },
        {
          step: 'Structuring',
          icon: Network,
          description: 'Designing optimal structure',
          deliverables: [
            'Capital structure model',
            'Governance framework',
            'Risk allocation matrix',
            'Term sheet draft'
          ]
        },
        {
          step: 'Documentation',
          icon: CheckCircle2,
          description: 'Converting terms to binding agreements',
          deliverables: [
            'Agreement drafting coordination',
            'Document review',
            'Negotiation support',
            'Execution management'
          ]
        },
        {
          step: 'Implementation',
          icon: Target,
          description: 'Supporting structure activation',
          deliverables: [
            'Setup coordination',
            'Governance activation',
            'Operational handover',
            'Success monitoring'
          ]
        }
      ],
      technology: [
        'Financial modeling tools',
        'Document automation',
        'Governance platforms',
        'Cap table management',
        'Transaction management systems'
      ],
      cta: {
        headline: 'Need Help Structuring an Investment or Partnership?',
        button: 'Get Structuring Support'
      }
    }
  },
  {
    id: 'government-liaison',
    icon: Building,
    title: 'Institutional & Government Liaison',
    subtitle: 'Facilitating effective engagement with government bodies and public institutions',
    sections: {
      overview: {
        left: [
          'We facilitate engagement with public institutions, government bodies, and key stakeholders.',
          'Our services help clients navigate administrative frameworks, align with public-sector requirements, and advance strategic initiatives efficiently.',
          'With established relationships and deep understanding of public sector dynamics, we accelerate institutional engagement and approval processes.'
        ],
        right: [
          { label: 'Institutions Engaged', value: '100+' },
          { label: 'Approval Success Rate', value: '91%' },
          { label: 'Time Reduction', value: '45%' }
        ]
      },
      solutions: [
        {
          title: 'Stakeholder Mapping',
          icon: MapPin,
          description: 'Identifying key institutional decision-makers',
          features: [
            'Authority landscape mapping',
            'Decision-maker identification',
            'Influence mapping',
            'Engagement strategy'
          ]
        },
        {
          title: 'Institutional Engagement',
          icon: Handshake,
          description: 'Professional representation to government bodies',
          features: [
            'Introduction facilitation',
            'Proposal presentation',
            'Requirement clarification',
            'Feedback management'
          ]
        },
        {
          title: 'Approval Management',
          icon: CheckCircle2,
          description: 'Navigating regulatory and approval processes',
          features: [
            'Process mapping',
            'Documentation preparation',
            'Submission coordination',
            'Follow-up management'
          ]
        },
        {
          title: 'Relationship Maintenance',
          icon: Users,
          description: 'Sustaining productive institutional relationships',
          features: [
            'Ongoing communication',
            'Issue escalation',
            'Performance reporting',
            'Long-term engagement'
          ]
        }
      ],
      deliveryModel: [
        {
          step: 'Mapping & Planning',
          icon: MapPin,
          description: 'Understanding institutional landscape',
          deliverables: [
            'Stakeholder map',
            'Approval pathway',
            'Requirements checklist',
            'Engagement plan'
          ]
        },
        {
          step: 'Preparation',
          icon: FileText,
          description: 'Preparing for institutional engagement',
          deliverables: [
            'Documentation package',
            'Presentation materials',
            'Q&A preparation',
            'Timeline planning'
          ]
        },
        {
          step: 'Engagement',
          icon: Users,
          description: 'Active institutional liaison',
          deliverables: [
            'Meeting facilitation',
            'Proposal submission',
            'Feedback collection',
            'Issue resolution'
          ]
        },
        {
          step: 'Closure & Maintenance',
          icon: CheckCircle2,
          description: 'Securing approvals and maintaining relationships',
          deliverables: [
            'Approval tracking',
            'Follow-up coordination',
            'Documentation management',
            'Relationship maintenance'
          ]
        }
      ],
      technology: [
        'Stakeholder relationship management',
        'Document tracking systems',
        'Approval status dashboards',
        'Communication platforms',
        'Meeting management tools'
      ],
      cta: {
        headline: 'Need to Engage with Government or Public Institutions?',
        button: 'Get Liaison Support'
      }
    }
  },
  {
    id: 'private-advisory',
    icon: Lock,
    title: 'Private Advisory & Deal Support',
    subtitle: 'Confidential senior-level advisory during critical business phases',
    sections: {
      overview: {
        left: [
          'We provide discreet, senior-level advisory to founders, shareholders, and executives during critical business phases.',
          'Services include support during restructurings, exits, and strategic realignments, ensuring confidentiality and informed decision-making.',
          'Our advisors bring decades of experience in complex situations, providing judgment, perspective, and actionable guidance.'
        ],
        right: [
          { label: 'Advisory Engagements', value: '60+' },
          { label: 'Value Protected', value: '$3B+' },
          { label: 'Client Satisfaction', value: '98%' }
        ]
      },
      solutions: [
        {
          title: 'Strategic Advisory',
          icon: Target,
          description: 'Senior counsel on critical decisions',
          features: [
            'Situation assessment',
            'Option analysis',
            'Strategy development',
            'Decision support'
          ]
        },
        {
          title: 'Exit Planning',
          icon: TrendingUp,
          description: 'Optimizing shareholder exits',
          features: [
            'Exit readiness assessment',
            'Buyer identification',
            'Valuation optimization',
            'Negotiation support'
          ]
        },
        {
          title: 'Restructuring Support',
          icon: Network,
          description: 'Managing business restructuring',
          features: [
            'Stakeholder management',
            'Restructuring design',
            'Implementation planning',
            'Communication strategy'
          ]
        },
        {
          title: 'Crisis Management',
          icon: ShieldCheck,
          description: 'Navigating critical business situations',
          features: [
            'Rapid response',
            'Stakeholder communication',
            'Risk mitigation',
            'Reputation management'
          ]
        }
      ],
      deliveryModel: [
        {
          step: 'Assessment',
          icon: BarChart3,
          description: 'Understanding situation and objectives',
          deliverables: [
            'Situation analysis',
            'Stakeholder mapping',
            'Option identification',
            'Risk assessment'
          ]
        },
        {
          step: 'Strategy Development',
          icon: Target,
          description: 'Developing action plan',
          deliverables: [
            'Strategic recommendations',
            'Implementation roadmap',
            'Resource requirements',
            'Timeline planning'
          ]
        },
        {
          step: 'Execution Support',
          icon: Users,
          description: 'Supporting implementation',
          deliverables: [
            'Process management',
            'Stakeholder engagement',
            'Issue resolution',
            'Progress monitoring'
          ]
        },
        {
          step: 'Closure & Transition',
          icon: CheckCircle2,
          description: 'Ensuring successful outcome',
          deliverables: [
            'Transaction completion',
            'Transition management',
            'Documentation',
            'Success verification'
          ]
        }
      ],
      technology: [
        'Secure communication',
        'Confidential data rooms',
        'Decision analytics',
        'Document management',
        'Encrypted collaboration platforms'
      ],
      cta: {
        headline: 'Need Confidential Advisory for a Critical Business Phase?',
        button: 'Request Advisory Support'
      }
    }
  }
];

export function ConsultingServicesCapabilities() {
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
                    ? 'border-purple-600 dark:border-purple-400 shadow-lg shadow-purple-600/20 dark:shadow-purple-400/20' 
                    : 'border-border hover:border-purple-600/50 dark:hover:border-purple-400/50 hover:shadow-xl'
                }`}>
                  
                  {/* Top Section */}
                  <div className="flex items-start gap-4 mb-6">
                    {/* Icon Container */}
                    <div className="flex-shrink-0">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isSelected 
                          ? 'bg-gradient-to-br from-purple-600 to-purple-800 dark:from-purple-500 dark:to-purple-700 scale-105' 
                          : 'bg-gradient-to-br from-purple-600/10 to-purple-800/5 dark:from-purple-400/15 dark:to-purple-600/10 group-hover:scale-105'
                      }`}>
                        <Icon className={`h-7 w-7 transition-colors duration-300 ${
                          isSelected ? 'text-white' : 'text-purple-600 dark:text-purple-400'
                        }`} />
                      </div>
                    </div>
                    
                    {/* Number Badge */}
                    <div className={`ml-auto text-xs font-bold px-3 py-1 rounded-full transition-all duration-300 ${
                      isSelected 
                        ? 'bg-purple-600 dark:bg-purple-500 text-white' 
                        : 'bg-purple-600/10 dark:bg-purple-400/20 text-purple-600/60 dark:text-purple-400 group-hover:bg-purple-600/20 dark:group-hover:bg-purple-400/30 group-hover:text-purple-600 dark:group-hover:text-purple-400'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex-1 mb-6">
                    <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                      isSelected ? 'text-purple-600 dark:text-purple-400' : 'text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400'
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
                        ? 'text-purple-600 dark:text-purple-400' 
                        : 'text-purple-600/60 dark:text-purple-400 group-hover:text-purple-600 dark:group-hover:text-purple-400'
                    }`}>
                      {isSelected ? 'Selected' : 'View Details'}
                    </span>
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                      isSelected 
                        ? 'bg-purple-600 dark:bg-purple-500 text-white' 
                        : 'bg-purple-600/10 dark:bg-purple-400/20 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600/20 dark:group-hover:bg-purple-400/30 group-hover:translate-x-1'
                    }`}>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Selected Indicator */}
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-purple-600 dark:bg-purple-500 rounded-full flex items-center justify-center"
                    >
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </motion.div>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Selected Capability Detail Modal */}
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
                      <div className="w-16 h-16 bg-purple-600/10 dark:bg-purple-400/10 rounded-xl flex items-center justify-center">
                        <selectedData.icon className="h-8 w-8 text-purple-600 dark:text-purple-400" />
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
                        className="bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-500 dark:to-purple-700 hover:from-purple-700 hover:to-purple-900 dark:hover:from-purple-600 dark:hover:to-purple-800 text-white shadow-lg"
                      >
                        Discuss a Project
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-2"
                      >
                        Explore Consulting Services
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
                            <div className="w-1.5 h-1.5 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-muted-foreground">{item}</p>
                          </div>
                        ))}
                      </div>

                      {/* Right - KPIs */}
                      <div className="space-y-6">
                        {selectedData.sections.overview.right.map((stat, idx) => (
                          <div key={idx} className="border-l-4 border-purple-600/30 dark:border-purple-400/30 pl-6">
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
                      {selectedData.sections.solutions.map((solution, idx) => (
                        <div key={idx} className="bg-card border border-border rounded-xl p-6 hover:border-purple-600/30 dark:hover:border-purple-400/30 hover:shadow-md transition-all duration-300">
                          <div className="flex items-start gap-3 mb-3">
                            <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                            <h4 className="text-lg font-bold text-foreground dark:text-white">{solution.title}</h4>
                          </div>
                          <p className="text-muted-foreground dark:text-gray-300 text-sm pl-8">{solution.description}</p>
                          <div className="space-y-2 mt-4">
                            {solution.features.map((feature, fIdx) => (
                              <div key={fIdx} className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                                <span className="text-foreground dark:text-white">{feature}</span>
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
                  <div className="mb-20 bg-purple-600/5 dark:bg-purple-400/10 rounded-2xl p-10">
                    <h3 className="text-3xl font-bold text-foreground mb-10 text-center">Technology Foundation</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {selectedData.sections.technology.map((tech, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-purple-600/10 dark:bg-purple-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Lock className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                          </div>
                          <span className="text-foreground dark:text-white font-medium">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* SECTION 6 - FINAL CTA */}
                  <div className="text-center bg-gradient-to-br from-purple-600/10 to-purple-800/10 dark:from-purple-400/10 dark:to-purple-600/10 border border-purple-600/20 dark:border-purple-400/20 rounded-2xl p-12">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                      {selectedData.sections.cta.headline}
                    </h2>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-500 dark:to-purple-700 hover:from-purple-700 hover:to-purple-900 dark:hover:from-purple-600 dark:hover:to-purple-800 text-white shadow-lg text-lg px-8"
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
      </div>
    </section>
  );
}
