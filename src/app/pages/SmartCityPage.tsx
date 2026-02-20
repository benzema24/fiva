import { motion } from 'motion/react';
import { 
  Activity, Database, Users, Wifi, Building2, Radio,
  MapPin, Zap, Globe2, ArrowRight, CheckCircle2
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Link } from 'react-router';

const features = [
  { icon: Activity, title: 'Urban Analytics & Intelligence', description: 'Real-time data collection and analysis from sensors, cameras, and IoT devices for data-driven urban management decisions.', color: '#115E67' },
  { icon: Database, title: 'Smart Cadastral Systems', description: 'Digital land registry with blockchain integration, GIS mapping, and automated property rights management for transparent governance.', color: '#0D4A52' },
  { icon: Users, title: 'Citizen Services Portal', description: 'Unified digital platform for permits, licenses, payments, and public service requests with AI-powered chatbot support.', color: '#1A7580' },
  { icon: Wifi, title: 'IoT Infrastructure', description: 'Connected sensor networks for traffic management, environmental monitoring, waste collection, and energy optimization.', color: '#2C8C99' },
  { icon: Building2, title: 'Digital Twin Technology', description: '3D city modeling and simulation for urban planning, infrastructure management, and emergency response optimization.', color: '#115E67' },
  { icon: Radio, title: 'Integrated Command Center', description: 'Centralized operations dashboard integrating data from transportation, utilities, safety, and emergency services.', color: '#0D4A52' }
];

const capabilities = [
  { title: 'Smart Governance', items: ['E-Services', 'Digital Payments', 'Permit Management', 'Citizen Engagement'] },
  { title: 'Land Management', items: ['Cadastral Registry', 'GIS Integration', 'Property Valuation', 'Planning Tools'] },
  { title: 'Urban Systems', items: ['Traffic Management', 'Parking Solutions', 'Public Transport', 'Energy Grid'] },
  { title: 'Data & Analytics', items: ['IoT Platform', 'Predictive Analytics', 'Dashboards', 'Open Data Portal'] }
];

const stats = [
  { value: '25+', label: 'Smart Cities Deployed', icon: MapPin },
  { value: '5M+', label: 'Citizens Served', icon: Users },
  { value: '40%', label: 'Efficiency Improvement', icon: Zap },
  { value: '100%', label: 'Digital Coverage', icon: Globe2 }
];

export function SmartCityPage() {
  return (
    <div className="pt-20">
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-slate-50/30 dark:to-slate-950/30">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(17,94,103,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(17,94,103,0.5) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Solutions
            </Link>
            <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6" whileHover={{ scale: 1.05 }}>
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Smart City, Digitalisation & Smart Cadastral Systems</span>
            </motion.div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-foreground">
              Enable Data-Driven Cities
              <br />
              <span className="text-primary">With Integrated Urban Systems</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed">
              Digital land management, citizen services, and intelligent urban systems for modern, sustainable cities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-accent group">
                Request Demo
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
                Smart City Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -5, scale: 1.02 }}>
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

      <section className="py-24 bg-gradient-to-b from-background to-slate-50/30 dark:to-slate-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">Smart City Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Intelligent systems for connected, efficient, and livable urban environments
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -8 }} className="group">
                <Card className="p-6 h-full bg-card/60 backdrop-blur-xl border-border/50 hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 0.05 }} className="absolute inset-0 bg-gradient-to-br from-primary to-accent" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${feature.color}20` }}>
                      <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">Platform Capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive urban management and digital governance solutions
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((category, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
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

      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Ready to Build Your Smart City?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect with our urban innovation experts to transform your city with intelligent digital systems.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-accent group">
                Schedule Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}