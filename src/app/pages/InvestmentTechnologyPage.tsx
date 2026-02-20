import { motion } from 'motion/react';
import { 
  Brain, Shield, BarChart3, Activity, Target, Zap, 
  DollarSign, Globe2, TrendingUp, ArrowRight, CheckCircle2
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Link } from 'react-router';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Portfolio Optimization',
    description: 'Machine learning algorithms continuously analyze market conditions and rebalance portfolios for optimal returns.',
    color: '#115E67'
  },
  {
    icon: Shield,
    title: 'Advanced Risk Management',
    description: 'Real-time risk assessment with predictive analytics to identify and mitigate potential threats before they impact performance.',
    color: '#0D4A52'
  },
  {
    icon: BarChart3,
    title: 'Market Intelligence Platform',
    description: 'Comprehensive market data, trends analysis, and competitive intelligence in a unified dashboard.',
    color: '#1A7580'
  },
  {
    icon: Activity,
    title: 'Performance Analytics',
    description: 'Deep insights into investment performance with customizable metrics and benchmark comparisons.',
    color: '#2C8C99'
  },
  {
    icon: Target,
    title: 'Strategic Asset Allocation',
    description: 'Data-driven allocation strategies based on risk tolerance, time horizon, and investment objectives.',
    color: '#115E67'
  },
  {
    icon: Zap,
    title: 'Automated Trading Systems',
    description: 'High-frequency trading algorithms and smart execution strategies to maximize efficiency.',
    color: '#0D4A52'
  }
];

const capabilities = [
  { title: 'Portfolio Management', items: ['Multi-Asset Portfolios', 'Rebalancing Automation', 'Tax Optimization', 'ESG Integration'] },
  { title: 'Risk Analytics', items: ['VaR Modeling', 'Stress Testing', 'Scenario Analysis', 'Correlation Tracking'] },
  { title: 'Trading Solutions', items: ['Algorithmic Trading', 'Smart Order Routing', 'Execution Analytics', 'Dark Pool Access'] },
  { title: 'Reporting & Compliance', items: ['Regulatory Reporting', 'Client Statements', 'Performance Attribution', 'Audit Trails'] }
];

const useCases = [
  {
    industry: 'Asset Management',
    challenge: 'Manual portfolio rebalancing inefficiencies',
    solution: 'Deployed AI-driven rebalancing engine with real-time market data integration',
    result: '40% reduction in transaction costs'
  },
  {
    industry: 'Wealth Management',
    challenge: 'Personalized client reporting at scale',
    solution: 'Automated reporting system with customizable templates and insights',
    result: '5,000+ clients, 99% satisfaction'
  },
  {
    industry: 'Hedge Funds',
    challenge: 'Complex risk modeling across strategies',
    solution: 'Advanced analytics platform with multi-factor risk models',
    result: '35% improvement in risk-adjusted returns'
  }
];

const stats = [
  { value: '$150B+', label: 'Assets Under Management', icon: DollarSign },
  { value: '15K+', label: 'Active Users', icon: Globe2 },
  { value: '99.9%', label: 'Platform Uptime', icon: Zap },
  { value: '25%', label: 'Avg. ROI Improvement', icon: TrendingUp }
];

export function InvestmentTechnologyPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-slate-50/30 dark:to-slate-950/30">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(17,94,103,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(17,94,103,0.5) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Solutions
            </Link>

            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Investment Technology & Smart Solutions</span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-foreground">
              Optimize Capital, Manage Risk,
              <br />
              <span className="text-primary">Drive Smarter Investments</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed">
              Intelligent platforms powered by AI and real-time analytics to transform investment decision-making and portfolio management.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-accent group">
                Request Demo
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
                Platform Overview
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="p-6 text-center bg-card/60 backdrop-blur-xl border-border/50 hover:border-primary/30 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-background to-slate-50/30 dark:to-slate-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">Platform Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced technology solutions for institutional and retail investment management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="p-6 h-full bg-card/60 backdrop-blur-xl border-border/50 hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.05 }}
                    className="absolute inset-0 bg-gradient-to-br from-primary to-accent"
                  />
                  
                  <div className="relative z-10">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${feature.color}20` }}
                    >
                      <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">Comprehensive Capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              End-to-end investment management tools for every stage of the investment lifecycle
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-card/60 backdrop-blur-xl border-border/50">
                  <h3 className="text-lg font-bold mb-4 text-primary">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-gradient-to-b from-background to-slate-50/30 dark:to-slate-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">Client Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Driving measurable results for investment firms worldwide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="p-6 h-full bg-card/60 backdrop-blur-xl border-border/50 hover:border-primary/30 transition-all duration-300">
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                    {useCase.industry}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-foreground">{useCase.challenge}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{useCase.solution}</p>
                  <div className="pt-4 border-t border-border/50">
                    <div className="text-2xl font-bold text-primary">{useCase.result}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Ready to Elevate Your Investment Strategy?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover how our intelligent investment platform can help you optimize returns and manage risk more effectively.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-accent group">
                Schedule Demo
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
                View Pricing
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}