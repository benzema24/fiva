import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { 
  Users, Megaphone, Plane, Heart, Droplet,
  ArrowRight, TrendingUp, Target, Shield, Award,
  CheckCircle2, Zap, MapPin, Building2, Globe2,
  Network, Radio, Gauge, ChevronRight, Activity, Video,
  Eye, Bell, Monitor, Stethoscope, Package, Cpu, Lock, Sparkles
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { HealthcareModule } from '@/app/components/HealthcareModule';

export function Services() {
  return (
    <section id="services" className="relative bg-background">
      {/* Section Header */}
      <div className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_70%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm font-medium text-primary">Strategic Services</span>
            </motion.div>
            
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-foreground">
              Digital Modules
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Forward-thinking solutions across recruitment, communications, aviation, and exclusive distribution networks
            </p>
          </motion.div>
        </div>
      </div>

      {/* Service Modules */}
      <div className="relative">
        <RecruitmentModule />
        <MarketingModule />
        <AviationModule />
        <HealthcareModule />
        <HygienicModule />
      </div>
    </section>
  );
}

// 1. RECRUITMENT - Intelligent talent matching
function RecruitmentModule() {
  const sectionRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeValue, setActiveValue] = useState(0);
  
  const coreValues = [
    { 
      title: 'Global Reach', 
      desc: 'Partners worldwide creating sustainable talent solutions',
      icon: Globe2,
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      title: 'Innovation', 
      desc: 'Cutting-edge recruitment technology and methodologies',
      icon: Zap,
      gradient: 'from-purple-500 to-blue-500'
    },
    { 
      title: 'Quality Matching', 
      desc: 'Precision talent-role alignment for optimal outcomes',
      icon: Target,
      gradient: 'from-cyan-500 to-blue-500'
    },
    { 
      title: 'Expertise', 
      desc: 'Deep industry knowledge across all sectors',
      icon: Award,
      gradient: 'from-blue-500 to-indigo-500'
    },
    { 
      title: 'Solid Partnership', 
      desc: 'Long-term relationships built on trust and results',
      icon: Users,
      gradient: 'from-indigo-500 to-purple-500'
    },
  ];

  const stats = [
    { label: 'Placements', value: '500+', suffix: '/year' },
    { label: 'Success Rate', value: '98', suffix: '%' },
    { label: 'Global Clients', value: '50', suffix: '+' },
    { label: 'Countries', value: '25', suffix: '+' },
  ];

  return (
    <div ref={sectionRef} className="py-32 relative overflow-hidden bg-gradient-to-b from-background to-slate-50/30 dark:to-slate-950/30">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center relative"
        >
          {/* Animated Background Glow */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 rounded-full blur-3xl -z-10"
          ></motion.div>

          {/* Interactive Header Badge */}
          <motion.div 
            className="flex items-center justify-center gap-3 mb-8 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {/* Animated Icon Container */}
            <motion.div 
              className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 flex items-center justify-center backdrop-blur-xl overflow-hidden"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {/* Inner Glow */}
              <motion.div
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500"
              ></motion.div>
              
              {/* Users Icon with Animation */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Users className="h-6 w-6 text-blue-400 dark:text-blue-400 relative z-10 dark:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
              </motion.div>

              {/* Orbital Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-blue-500/30 rounded-xl"
                style={{
                  background: 'conic-gradient(from 0deg, transparent, rgba(59,130,246,0.3), transparent)'
                }}
              ></motion.div>
            </motion.div>

            {/* Module Label with Glassmorphism */}
            <motion.div
              className="relative px-6 py-2.5 rounded-full bg-blue-500/5 border border-blue-500/20 backdrop-blur-xl overflow-hidden hover:border-blue-500/50 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
            >
              {/* Animated Background Shimmer */}
              <motion.div
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent"
              ></motion.div>
              
              <span className="text-sm font-semibold text-blue-400 relative z-10 tracking-wider">
                01 / RECRUITMENT SERVICES
              </span>

              {/* Pulse Dots */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-400"
              ></motion.div>
            </motion.div>
          </motion.div>

          {/* Main Title with Advanced Typography */}
          <motion.h3 
            className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.span 
              className="text-foreground dark:bg-gradient-to-b dark:from-foreground dark:via-foreground/90 dark:to-foreground/40 dark:bg-clip-text dark:text-transparent relative inline-block"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Intelligent Talent Matching
              
              {/* Underline Accent */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent rounded-full"
              ></motion.div>
            </motion.span>

            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
                className="absolute w-1 h-1 rounded-full bg-blue-400/60"
                style={{
                  left: `${10 + i * 15}%`,
                  top: `${Math.random() * 100}%`,
                }}
              ></motion.div>
            ))}
          </motion.h3>

          {/* Description with Icon Accents */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative inline-block"
          >
            {/* Connected Icons */}
            <div className="flex items-center justify-center gap-8 mb-4">
              {[Globe2, Target, Award].map((Icon, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="relative"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center backdrop-blur-sm">
                    <Icon className="h-4 w-4 text-blue-400" />
                  </div>
                  
                  {/* Connection Line */}
                  {i < 2 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
                      className="absolute top-1/2 left-full w-8 h-px bg-gradient-to-r from-blue-500/50 to-blue-500/20 origin-left"
                    ></motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              With <span className="text-blue-400 font-medium">partners all over the world</span>, we develop ambitious and quality recruitment solutions with a view to creating{' '}
              <span className="text-blue-400 font-medium">value and sustainability</span>, a vision that also applies on a daily basis to our talent acquisition activity.
            </p>

            {/* Tech Grid Pattern */}
            <div className="absolute inset-0 -z-10 opacity-[0.02]">
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
            </div>
          </motion.div>

          {/* Bottom Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex items-center justify-center gap-8 flex-wrap"
          >
            {[
              { label: 'Placements', value: '500+', icon: TrendingUp },
              { label: 'Success Rate', value: '98%', icon: Target },
              { label: 'Global Reach', value: '25+', icon: Globe2 }
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, y: -4 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/10 backdrop-blur-sm cursor-pointer"
              >
                <stat.icon className="h-4 w-4 text-blue-400" />
                <div className="text-left">
                  <div className="text-xs text-blue-400 font-medium">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Core Values - Circular Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                onHoverStart={() => setActiveValue(index)}
                className="group cursor-pointer"
              >
                <motion.div 
                  className="relative h-full"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  {/* Card Container */}
                  <div className="relative h-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 overflow-hidden transition-all duration-300">
                    {/* Background Gradient Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: activeValue === index ? 0.1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`absolute inset-0 bg-gradient-to-br ${value.gradient}`}
                    />
                    
                    {/* Animated Border Glow */}
                    {activeValue === index && (
                      <motion.div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${value.gradient} opacity-20 blur-xl`}
                        animate={{
                          scale: [1, 1.05, 1],
                          opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}

                    {/* Icon Container - Square */}
                    <div className="relative mb-4">
                      <motion.div
                        className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-background/80 to-background/40 border border-border/50 flex items-center justify-center overflow-hidden"
                        animate={{
                          borderColor: activeValue === index ? 'rgba(255,255,255,0.3)' : 'rgba(148,163,184,0.5)',
                          boxShadow: activeValue === index 
                            ? '0 0 30px rgba(255,255,255,0.1)' 
                            : '0 0 0px rgba(0,0,0,0)',
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Icon Background Glow */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: activeValue === index ? 0.2 : 0,
                          }}
                          className={`absolute inset-0 bg-gradient-to-br ${value.gradient}`}
                        />
                        
                        {/* Icon */}
                        <motion.div
                          animate={{
                            scale: activeValue === index ? 1.1 : 1,
                            rotate: activeValue === index ? [0, -10, 10, 0] : 0,
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          <value.icon 
                            className="h-8 w-8 relative z-10 text-foreground/80 group-hover:text-foreground transition-colors duration-300" 
                            strokeWidth={1.5}
                          />
                        </motion.div>

                        {/* Floating Particles */}
                        {activeValue === index && [
                          { x: 20, y: -15 },
                          { x: -18, y: 12 },
                          { x: 15, y: 18 }
                        ].map((particle, i) => (
                          <motion.div
                            key={i}
                            className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${value.gradient}`}
                            initial={{ x: 0, y: 0, opacity: 0 }}
                            animate={{
                              x: [0, particle.x],
                              y: [0, particle.y],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: i * 0.3,
                            }}
                          />
                        ))}
                      </motion.div>
                      
                      {/* Corner Accent Lines */}
                      {activeValue === index && (
                        <>
                          <motion.div
                            initial={{ width: 0, height: 0 }}
                            animate={{ width: 12, height: 2 }}
                            className={`absolute top-0 left-0 bg-gradient-to-r ${value.gradient}`}
                          />
                          <motion.div
                            initial={{ width: 0, height: 0 }}
                            animate={{ width: 2, height: 12 }}
                            className={`absolute top-0 left-0 bg-gradient-to-b ${value.gradient}`}
                          />
                          <motion.div
                            initial={{ width: 0, height: 0 }}
                            animate={{ width: 12, height: 2 }}
                            className={`absolute bottom-0 right-0 bg-gradient-to-l ${value.gradient}`}
                          />
                          <motion.div
                            initial={{ width: 0, height: 0 }}
                            animate={{ width: 2, height: 12 }}
                            className={`absolute bottom-0 right-0 bg-gradient-to-t ${value.gradient}`}
                          />
                        </>
                      )}
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Title */}
                      <h4 
                        className={`font-bold text-sm mb-2 transition-colors duration-300 ${
                          activeValue === index ? 'text-foreground' : 'text-foreground/80'
                        }`}
                      >
                        {value.title}
                      </h4>
                      
                      {/* Description with smooth expand */}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: activeValue === index ? 1 : 0,
                          height: activeValue === index ? 'auto' : 0,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {value.desc}
                        </p>
                      </motion.div>

                      {/* Active Indicator Bar */}
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{
                          width: activeValue === index ? '100%' : '0%',
                        }}
                        transition={{ duration: 0.3 }}
                        className={`h-0.5 bg-gradient-to-r ${value.gradient} rounded-full mt-3`}
                      />
                    </div>

                    {/* Shimmer Effect on Hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '200%' }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Active Value Detail Card */}
          <motion.div
            key={activeValue}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="p-6 bg-card/60 backdrop-blur-xl border-border/50 relative overflow-hidden">
              <motion.div
                animate={{
                  opacity: 0.05,
                }}
                className={`absolute inset-0 bg-gradient-to-br ${coreValues[activeValue].gradient}`}
              ></motion.div>
              
              <div className="relative z-10 text-center">
                {(() => {
                  const ActiveValueIcon = coreValues[activeValue].icon;
                  return (
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 bg-gradient-to-r ${coreValues[activeValue].gradient} bg-opacity-10 border border-current`}
                      style={{ 
                        borderColor: activeValue === 0 ? 'rgba(59, 130, 246, 0.3)' : 
                                    activeValue === 1 ? 'rgba(147, 51, 234, 0.3)' :
                                    activeValue === 2 ? 'rgba(6, 182, 212, 0.3)' :
                                    activeValue === 3 ? 'rgba(59, 130, 246, 0.3)' :
                                    'rgba(99, 102, 241, 0.3)'
                      }}
                    >
                      <ActiveValueIcon className="h-4 w-4" />
                      <span className="text-sm font-medium">{coreValues[activeValue].title}</span>
                    </div>
                  );
                })()}
                <p className="text-muted-foreground leading-relaxed">
                  {coreValues[activeValue].desc}
                </p>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="relative group"
            >
              {/* Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              <Card className="relative p-6 text-center bg-card/60 backdrop-blur-xl border-border/50 group-hover:border-blue-500/30 transition-all duration-500">
                <div className="text-4xl lg:text-5xl font-bold text-foreground dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-500 dark:bg-clip-text dark:text-transparent mb-2">
                  {stat.value}
                  <span className="text-2xl">{stat.suffix}</span>
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                
                {/* Bottom accent */}
                <motion.div
                  animate={{
                    width: hoveredCard === index ? '100%' : '0%',
                  }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"
                ></motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-4"
        >
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg shadow-blue-500/30 group">
            Explore Talent Solutions
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="border-blue-500/30 hover:bg-blue-500/10 group">
            View Success Stories
            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

// 2. MARKETING & PR - Signal amplification
function MarketingModule() {
  const sectionRef = useRef(null);
  const [activeService, setActiveService] = useState(0);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  
  const services = [
    { 
      title: 'Brand Strategy', 
      desc: 'Identity, clarity, and recognition that resonates with your audience',
      icon: Target,
      gradient: 'from-violet-500 to-purple-500',
      features: ['Brand Positioning', 'Visual Identity', 'Brand Guidelines', 'Market Research'],
      stats: { label: 'Brands Launched', value: '150+' }
    },
    { 
      title: 'Public Relations', 
      desc: 'Strategic media relations and reputation management at scale',
      icon: Megaphone,
      gradient: 'from-pink-500 to-rose-500',
      features: ['Media Relations', 'Crisis Management', 'Press Coverage', 'Thought Leadership'],
      stats: { label: 'Media Placements', value: '500+' }
    },
    { 
      title: 'Digital Campaigns', 
      desc: 'Multi-channel marketing excellence driving measurable growth',
      icon: Radio,
      gradient: 'from-blue-500 to-cyan-500',
      features: ['Social Media', 'Performance Marketing', 'SEO/SEM', 'Email Campaigns'],
      stats: { label: 'Campaign ROI', value: '320%' }
    },
    { 
      title: 'Content Creation', 
      desc: 'Compelling storytelling through visual and written narratives',
      icon: Zap,
      gradient: 'from-orange-500 to-amber-500',
      features: ['Copywriting', 'Video Production', 'Photography', 'Graphic Design'],
      stats: { label: 'Content Pieces', value: '1000+' }
    },
    { 
      title: 'Strategy & Consulting', 
      desc: 'Data-driven insights for sustainable business growth',
      icon: TrendingUp,
      gradient: 'from-emerald-500 to-green-500',
      features: ['Market Analysis', 'Growth Strategy', 'Competitive Intelligence', 'KPI Tracking'],
      stats: { label: 'Growth Rate', value: '+45%' }
    },
    { 
      title: 'Influencer Management', 
      desc: 'Authentic partnerships that amplify your brand message',
      icon: Users,
      gradient: 'from-indigo-500 to-purple-500',
      features: ['Influencer Matching', 'Campaign Management', 'Performance Tracking', 'Contract Negotiation'],
      stats: { label: 'Influencer Network', value: '5000+' }
    },
  ];

  const ActiveServiceIcon = services[activeService].icon;

  return (
    <div ref={sectionRef} className="py-32 relative overflow-hidden bg-gradient-to-b from-background via-purple-950/5 to-background dark:via-purple-950/10">
      {/* Dynamic Gradient Background */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(168,85,247,0.08), transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(236,72,153,0.08), transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(168,85,247,0.08), transparent 50%)',
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute inset-0"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center relative"
        >
          {/* Animated Background Glow */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-full blur-3xl -z-10"
          ></motion.div>

          {/* Interactive Header Badge */}
          <motion.div 
            className="flex items-center justify-center gap-3 mb-8 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {/* Animated Icon Container */}
            <motion.div 
              className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 flex items-center justify-center backdrop-blur-xl overflow-hidden"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {/* Inner Glow */}
              <motion.div
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500"
              ></motion.div>
              
              {/* Megaphone Icon with Animation */}
              <motion.div
                animate={{
                  rotate: [0, 15, -15, 0],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Megaphone className="h-6 w-6 text-purple-400 dark:text-purple-400 relative z-10 dark:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
              </motion.div>

              {/* Orbital Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-purple-500/30 rounded-xl"
                style={{
                  background: 'conic-gradient(from 0deg, transparent, rgba(168,85,247,0.3), transparent)'
                }}
              ></motion.div>
            </motion.div>

            {/* Module Label with Glassmorphism */}
            <motion.div
              className="relative px-6 py-2.5 rounded-full bg-purple-500/5 border border-purple-500/20 backdrop-blur-xl overflow-hidden hover:border-purple-500/50 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
            >
              {/* Animated Background Shimmer */}
              <motion.div
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent"
              ></motion.div>
              
              <span className="text-sm font-semibold text-purple-400 relative z-10 tracking-wider">
                02 / MARKETING & PR
              </span>

              {/* Pulse Dots */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-purple-400"
              ></motion.div>
            </motion.div>
          </motion.div>

          {/* Main Title with Advanced Typography */}
          <motion.h3 
            className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.span 
              className="text-foreground dark:bg-gradient-to-b dark:from-foreground dark:via-foreground/90 dark:to-foreground/40 dark:bg-clip-text dark:text-transparent relative inline-block"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Creative Excellence
              
              {/* Underline Accent */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent rounded-full"
              ></motion.div>
            </motion.span>

            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
                className="absolute w-1 h-1 rounded-full bg-purple-400/60"
                style={{
                  left: `${10 + i * 15}%`,
                  top: `${Math.random() * 100}%`,
                }}
              ></motion.div>
            ))}
          </motion.h3>

          {/* Description with Icon Accents */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative inline-block"
          >
            {/* Connected Icons */}
            <div className="flex items-center justify-center gap-8 mb-4">
              {[Megaphone, Zap, Radio].map((Icon, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="relative"
                >
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center backdrop-blur-sm">
                    <Icon className="h-4 w-4 text-purple-400" />
                  </div>
                  
                  {/* Connection Line */}
                  {i < 2 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
                      className="absolute top-1/2 left-full w-8 h-px bg-gradient-to-r from-purple-500/50 to-purple-500/20 origin-left"
                    ></motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Strategic services spanning <span className="text-purple-400 font-medium">branding, digital campaigns,</span> content creation, and{' '}
              <span className="text-purple-400 font-medium">influencer management</span> — delivering{' '}
              <span className="text-purple-400 font-medium">innovation, creativity,</span> and measurable results
            </p>

            {/* Tech Grid Pattern */}
            <div className="absolute inset-0 -z-10 opacity-[0.02]">
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
            </div>
          </motion.div>

          {/* Bottom Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex items-center justify-center gap-8 flex-wrap"
          >
            {[
              { label: 'Campaigns', value: '1000+', icon: Radio },
              { label: 'Brand Reach', value: '5M+', icon: TrendingUp },
              { label: 'ROI Growth', value: '320%', icon: Target }
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, y: -4 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/5 border border-purple-500/10 backdrop-blur-sm cursor-pointer"
              >
                <stat.icon className="h-4 w-4 text-purple-400" />
                <div className="text-left">
                  <div className="text-xs text-purple-400 font-medium">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Services Grid - Modular Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredService(index)}
              onHoverEnd={() => setHoveredService(null)}
              onClick={() => setActiveService(index)}
              className="relative group cursor-pointer"
            >
              {/* Glow Effect */}
              <motion.div
                animate={{
                  opacity: hoveredService === index ? 0.5 : 0,
                  scale: hoveredService === index ? 1.05 : 0.95,
                }}
                transition={{ duration: 0.3 }}
                className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl`}
              ></motion.div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`relative h-full rounded-3xl p-6 bg-card/60 backdrop-blur-xl border transition-all duration-500 ${
                  activeService === index 
                    ? 'border-purple-500/50 shadow-lg shadow-purple-500/20' 
                    : 'border-border/50 hover:border-purple-500/30'
                }`}
              >
                {/* Inner Gradient Overlay */}
                <motion.div
                  animate={{
                    opacity: hoveredService === index ? 0.08 : 0,
                  }}
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient}`}
                ></motion.div>

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    animate={{
                      rotate: hoveredService === index ? 360 : 0,
                      scale: hoveredService === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <service.icon className="h-7 w-7 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h4 className="text-xl font-bold mb-2 group-hover:text-purple-500 transition-colors">
                    {service.title}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Stat Badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${service.gradient} bg-opacity-10 border border-current`}
                    style={{ borderColor: 'rgba(168, 85, 247, 0.2)' }}
                  >
                    <span className={`text-xs font-bold text-foreground dark:bg-gradient-to-r dark:${service.gradient} dark:bg-clip-text dark:text-transparent`}>
                      {service.stats.value}
                    </span>
                    <span className="text-xs text-muted-foreground">{service.stats.label}</span>
                  </div>

                  {/* View More Indicator */}
                  <motion.div
                    animate={{
                      opacity: hoveredService === index ? 1 : 0,
                      y: hoveredService === index ? 0 : 10,
                    }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2 text-purple-500 text-sm font-medium mt-4"
                  >
                    <span>View Details</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>

                  {/* Bottom Accent */}
                  <motion.div
                    animate={{
                      width: hoveredService === index ? '100%' : '0%',
                    }}
                    transition={{ duration: 0.4 }}
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.gradient} rounded-b-3xl`}
                  ></motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Active Service Detail Panel */}
        <motion.div
          key={activeService}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Background Glow */}
          <div className={`absolute -inset-4 bg-gradient-to-r ${services[activeService].gradient} opacity-20 blur-3xl rounded-3xl`}></div>

          <Card className="relative p-8 lg:p-12 bg-card/80 backdrop-blur-xl border-border/50 rounded-3xl overflow-hidden">
            {/* Subtle Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03]">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, rgba(168,85,247,0.8) 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }}></div>
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${services[activeService].gradient} flex items-center justify-center shadow-2xl`}>
                      <ActiveServiceIcon className="h-10 w-10 text-white" />
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold mb-1">{services[activeService].title}</h4>
                      <p className={`text-sm font-medium text-foreground dark:bg-gradient-to-r dark:${services[activeService].gradient} dark:bg-clip-text dark:text-transparent`}>
                        {services[activeService].stats.value} {services[activeService].stats.label}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    {services[activeService].desc}
                  </p>

                  {/* Key Features Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {services[activeService].features.map((feature, i) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                        className="flex items-center gap-2 p-3 rounded-xl bg-secondary/50 border border-border/50"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${services[activeService].gradient}`}></div>
                        <span className="text-sm font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Button 
                    size="lg" 
                    className={`bg-gradient-to-r ${services[activeService].gradient} hover:opacity-90 shadow-lg group w-full sm:w-auto`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </div>

              {/* Right - Visual Element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="relative h-80 lg:h-96"
              >
                {/* Animated Background Shape */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${services[activeService].gradient} opacity-20 blur-2xl`}
                ></motion.div>

                {/* Center Visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Outer Ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className={`w-64 h-64 rounded-full border-2 border-dashed opacity-30`}
                      style={{ 
                        borderColor: activeService === 0 ? '#8b5cf6' : 
                                    activeService === 1 ? '#ec4899' :
                                    activeService === 2 ? '#06b6d4' :
                                    activeService === 3 ? '#f59e0b' :
                                    activeService === 4 ? '#10b981' :
                                    '#6366f1'
                      }}
                    ></motion.div>

                    {/* Middle Ring */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className={`absolute inset-8 rounded-full border opacity-20`}
                      style={{ 
                        borderColor: activeService === 0 ? '#8b5cf6' : 
                                    activeService === 1 ? '#ec4899' :
                                    activeService === 2 ? '#06b6d4' :
                                    activeService === 3 ? '#f59e0b' :
                                    activeService === 4 ? '#10b981' :
                                    '#6366f1'
                      }}
                    ></motion.div>

                    {/* Center Icon */}
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className={`absolute inset-0 flex items-center justify-center`}
                    >
                      <div className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${services[activeService].gradient} flex items-center justify-center shadow-2xl`}>
                        <ActiveServiceIcon className="h-16 w-16 text-white" strokeWidth={1.5} />
                      </div>
                    </motion.div>

                    {/* Floating Dots */}
                    {[0, 1, 2, 3].map((dot, i) => (
                      <motion.div
                        key={dot}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                        className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${services[activeService].gradient}`}
                        style={{
                          top: i === 0 || i === 1 ? '20%' : '80%',
                          left: i === 0 || i === 2 ? '20%' : '80%',
                        }}
                      ></motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </Card>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Ready to amplify your brand presence?
          </p>
          <Button size="lg" variant="outline" className="border-purple-500/30 hover:bg-purple-500/10 group">
            Schedule a Consultation
            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

// Sustainable Infrastructure Interactive Visualization Component
function SustainableInfrastructureViz() {
  const [hoveredSector, setHoveredSector] = useState<number | null>(null);
  const [activeMetric, setActiveMetric] = useState(0);

  const sectors = [
    {
      id: 0,
      name: 'Transport',
      icon: Plane,
      color: 'cyan',
      metrics: {
        value: '72%',
        label: 'Electric Fleet',
        detail: 'Ground vehicles electrified'
      },
      stats: [
        { label: 'EV Charging Stations', value: '150+' },
        { label: 'Emission Reduction', value: '34%' },
      ]
    },
    {
      id: 1,
      name: 'Energy',
      icon: Zap,
      color: 'blue',
      metrics: {
        value: '58%',
        label: 'Renewable Energy',
        detail: 'Solar & wind powered'
      },
      stats: [
        { label: 'Solar Panels', value: '8,500+' },
        { label: 'Energy Storage', value: '12 MWh' },
      ]
    },
    {
      id: 2,
      name: 'Buildings',
      icon: Building2,
      color: 'teal',
      metrics: {
        value: '85%',
        label: 'LEED Certified',
        detail: 'Green building standards'
      },
      stats: [
        { label: 'Water Saved', value: '40%' },
        { label: 'Smart Systems', value: '95%' },
      ]
    }
  ];

  const activeSector = sectors[activeMetric];
  const colorMap: Record<string, { primary: string; secondary: string; gradient: string }> = {
    cyan: { 
      primary: 'rgb(6, 182, 212)', 
      secondary: 'rgb(34, 211, 238)',
      gradient: 'from-cyan-500 to-blue-500'
    },
    blue: { 
      primary: 'rgb(59, 130, 246)', 
      secondary: 'rgb(96, 165, 250)',
      gradient: 'from-blue-500 to-indigo-500'
    },
    teal: { 
      primary: 'rgb(20, 184, 166)', 
      secondary: 'rgb(45, 212, 191)',
      gradient: 'from-teal-500 to-cyan-500'
    }
  };

  return (
    <div className="relative h-[500px] flex items-center justify-center">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(6,182,212,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      {/* Central Hub - Connected Thinking */}
      <div className="relative w-full h-full">
        {/* Animated Background Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-cyan-500/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Connection Lines with Energy Flow */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
          <defs>
            <linearGradient id="energyFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(6,182,212,0)" />
              <stop offset="50%" stopColor="rgba(6,182,212,0.8)" />
              <stop offset="100%" stopColor="rgba(6,182,212,0)" />
              <animate attributeName="x1" values="-100%;100%" dur="2s" repeatCount="indefinite" />
              <animate attributeName="x2" values="0%;200%" dur="2s" repeatCount="indefinite" />
            </linearGradient>
          </defs>
          {sectors.map((sector, i) => {
            const angle = (i * 120 - 90) * (Math.PI / 180);
            const radius = 140;
            const x = 50 + Math.cos(angle) * radius / 4;
            const y = 50 + Math.sin(angle) * radius / 4;
            
            return (
              <g key={i}>
                {/* Base Line */}
                <motion.line
                  x1="50%"
                  y1="50%"
                  x2={`${x}%`}
                  y2={`${y}%`}
                  stroke={activeMetric === i ? colorMap[sector.color].primary : 'rgba(100, 116, 139, 0.2)'}
                  strokeWidth={activeMetric === i ? "3" : "1"}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                />
                {/* Energy Flow Line */}
                {activeMetric === i && (
                  <motion.line
                    x1="50%"
                    y1="50%"
                    x2={`${x}%`}
                    y2={`${y}%`}
                    stroke="url(#energyFlow)"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
                {/* Data Flow Particles */}
                {activeMetric === i && [...Array(3)].map((_, particleIdx) => (
                  <motion.circle
                    key={particleIdx}
                    r="3"
                    fill={colorMap[sector.color].secondary}
                    initial={{ opacity: 0 }}
                    animate={{
                      cx: [`50%`, `${x}%`],
                      cy: [`50%`, `${y}%`],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: particleIdx * 0.6,
                      ease: "linear"
                    }}
                  />
                ))}
              </g>
            );
          })}
        </svg>

        {/* Center Core with Progress Ring */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          whileHover={{ scale: 1.1 }}
        >
          {/* Outer Progress Ring */}
          <svg className="w-40 h-40 -rotate-90">
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="rgba(100, 116, 139, 0.1)"
              strokeWidth="4"
              fill="none"
            />
            <motion.circle
              cx="80"
              cy="80"
              r="70"
              stroke={colorMap[activeSector.color].primary}
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: parseInt(activeSector.metrics.value) / 100 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{
                strokeDasharray: "440",
                strokeDashoffset: "440",
              }}
            />
          </svg>
          
          {/* Inner Core */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-card/90 backdrop-blur-xl border-2 border-border/50 flex items-center justify-center cursor-pointer"
            animate={{
              boxShadow: [
                `0 0 20px ${colorMap[activeSector.color].primary}40`,
                `0 0 40px ${colorMap[activeSector.color].primary}60`,
                `0 0 20px ${colorMap[activeSector.color].primary}40`,
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-center relative">
              <motion.div 
                key={activeMetric}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                className={`text-3xl font-bold bg-gradient-to-r ${activeSector.gradient} bg-clip-text text-transparent dark:bg-gradient-to-r dark:${activeSector.gradient} dark:bg-clip-text dark:text-transparent`}
              >
                {activeSector.metrics.value}
              </motion.div>
              <div className="text-xs text-muted-foreground mt-1">{activeSector.metrics.label}</div>
              
              {/* Orbiting Indicator Dots */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                  animate={{
                    x: [0, Math.cos((i * 120) * Math.PI / 180) * 50],
                    y: [0, Math.sin((i * 120) * Math.PI / 180) * 50],
                    rotate: 360,
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Orbital Sectors with Enhanced Interactivity */}
        {sectors.map((sector, i) => {
          const angle = (i * 120 - 90) * (Math.PI / 180);
          const radius = 35; // percentage
          const x = 50 + Math.cos(angle) * radius;
          const y = 50 + Math.sin(angle) * radius;
          const Icon = sector.icon;
          const isActive = activeMetric === i;
          const isHovered = hoveredSector === i;

          return (
            <motion.div
              key={sector.id}
              className="absolute z-20 cursor-pointer"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              onHoverStart={() => setHoveredSector(i)}
              onHoverEnd={() => setHoveredSector(null)}
              onClick={() => setActiveMetric(i)}
              whileHover={{ scale: 1.15 }}
              animate={{
                scale: isActive ? 1.15 : 1,
              }}
            >
              {/* Progress Circle Around Card */}
              <svg className="absolute -inset-2 w-32 h-32 -rotate-90 pointer-events-none">
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  stroke="rgba(100, 116, 139, 0.1)"
                  strokeWidth="2"
                  fill="none"
                />
                <motion.circle
                  cx="64"
                  cy="64"
                  r="60"
                  stroke={colorMap[sector.color].primary}
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ opacity: 0.3, pathLength: 0 }}
                  animate={{
                    pathLength: isActive ? parseInt(sector.metrics.value) / 100 : 0,
                    opacity: isActive ? 1 : 0.3,
                  }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  style={{
                    strokeDasharray: "377",
                    strokeDashoffset: "377",
                  }}
                />
              </svg>

              {/* Sector Card */}
              <motion.div
                className="relative w-28 h-28 rounded-2xl bg-card/90 backdrop-blur-xl border-2 transition-all duration-300"
                style={{
                  borderColor: isActive ? colorMap[sector.color].primary : 'rgba(148, 163, 184, 0.3)',
                }}
                animate={{
                  boxShadow: isActive 
                    ? `0 0 30px ${colorMap[sector.color].primary}40`
                    : '0 0 0px rgba(0,0,0,0)',
                }}
              >
                {/* Glow Effect */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl blur-xl"
                    style={{
                      background: `linear-gradient(135deg, ${colorMap[sector.color].primary}20, transparent)`
                    }}
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}

                {/* Shimmer Effect on Hover */}
                {isHovered && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl overflow-hidden"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                  </motion.div>
                )}

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center p-3 text-center">
                  <motion.div
                    className="relative"
                    animate={{
                      rotate: isHovered ? 360 : 0,
                      scale: isHovered ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon 
                      className="h-8 w-8 mb-2"
                      style={{ color: colorMap[sector.color].primary }}
                      strokeWidth={1.5}
                    />
                    {/* Icon Glow */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 blur-md"
                        style={{ 
                          background: colorMap[sector.color].primary,
                          opacity: 0.4 
                        }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.4, 0.7, 0.4],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </motion.div>
                  <div className="text-xs font-semibold text-foreground">{sector.name}</div>
                  
                  {/* Compact Percentage Display */}
                  <motion.div
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: isActive ? 1 : 0.5 }}
                    className="text-[10px] font-bold mt-1"
                    style={{ color: colorMap[sector.color].primary }}
                  >
                    {sector.metrics.value}
                  </motion.div>
                  
                  {/* Expanded Stats Panel */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, x: -10, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      className="absolute left-full top-1/2 -translate-y-1/2 ml-4 w-36 bg-card/95 backdrop-blur-xl border border-border/50 rounded-xl p-2.5 shadow-2xl z-30"
                      style={{
                        boxShadow: `0 10px 40px ${colorMap[sector.color].primary}20`
                      }}
                    >
                      {/* Panel Header */}
                      <div className="flex items-center gap-1.5 mb-1.5 pb-1.5 border-b border-border/30">
                        <div 
                          className="w-1.5 h-1.5 rounded-full animate-pulse"
                          style={{ backgroundColor: colorMap[sector.color].primary }}
                        />
                        <span className="text-[10px] font-bold text-foreground truncate">{sector.metrics.detail}</span>
                      </div>
                      
                      {/* Stats with Progress Bars */}
                      <div className="space-y-1.5">
                        {sector.stats.map((stat, idx) => (
                          <motion.div 
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <div className="flex justify-between items-center text-[10px] mb-0.5">
                              <span className="text-muted-foreground truncate">{stat.label}</span>
                              <span className="font-bold text-foreground ml-1">{stat.value}</span>
                            </div>
                            {/* Mini Progress Bar */}
                            <div className="h-0.5 bg-border/30 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full rounded-full"
                                style={{ 
                                  background: `linear-gradient(90deg, ${colorMap[sector.color].primary}, ${colorMap[sector.color].secondary})`
                                }}
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 1, delay: idx * 0.1 }}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Triangle Pointer - Left Side */}
                      <div 
                        className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-card/95 border-l border-b border-border/50 rotate-45"
                      />
                    </motion.div>
                  )}
                </div>

                {/* Pulse Ring for Active */}
                {isActive && (
                  <>
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2"
                      style={{ borderColor: colorMap[sector.color].primary }}
                      animate={{
                        scale: [1, 1.4],
                        opacity: [0.6, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut"
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2"
                      style={{ borderColor: colorMap[sector.color].secondary }}
                      animate={{
                        scale: [1, 1.3],
                        opacity: [0.4, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0.5,
                        ease: "easeOut"
                      }}
                    />
                  </>
                )}
              </motion.div>

              {/* Floating Data Points */}
              {isActive && [...Array(4)].map((_, particleIdx) => (
                <motion.div
                  key={particleIdx}
                  className="absolute w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor: colorMap[sector.color].secondary,
                    left: '50%',
                    top: '50%',
                  }}
                  animate={{
                    x: [0, (Math.random() - 0.5) * 60],
                    y: [0, (Math.random() - 0.5) * 60],
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: particleIdx * 0.5,
                    ease: "easeOut"
                  }}
                />
              ))}
            </motion.div>
          );
        })}

        {/* Interactive Selector Pills with Enhanced Design */}
        <motion.div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 bg-card/90 backdrop-blur-xl border border-border/50 rounded-full p-2 shadow-xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {sectors.map((sector, i) => (
            <motion.button
              key={sector.id}
              onClick={() => setActiveMetric(i)}
              className="relative px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-300 overflow-hidden"
              style={{
                backgroundColor: activeMetric === i ? `${colorMap[sector.color].primary}20` : 'transparent',
                color: activeMetric === i ? colorMap[sector.color].primary : 'rgb(148, 163, 184)',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: activeMetric === i ? `${colorMap[sector.color].primary}30` : 'transparent',
              }}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button Glow */}
              {activeMetric === i && (
                <motion.div
                  className="absolute inset-0 rounded-full blur-md"
                  style={{ backgroundColor: colorMap[sector.color].primary, opacity: 0.2 }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
              
              {/* Shimmer on Hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              
              <span className="relative z-10 flex items-center gap-2">
                {sector.name}
                {activeMetric === i && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="inline-block w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: colorMap[sector.color].primary }}
                  />
                )}
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// 3. AVIATION - Precision & systems
function AviationModule() {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    { title: 'Sustainable Infrastructure', desc: 'Ground operations environmental excellence', icon: Building2 },
    { title: 'Air Operations', desc: 'In-flight optimization and efficiency', icon: Plane },
    { title: 'Community Integration', desc: 'Local community collaboration', icon: Globe2 },
    { title: 'Digital Solutions', desc: 'Connected thinking and digital tools', icon: Zap },
  ];

  const ActiveStepIcon = steps[activeStep].icon;

  return (
    <div className="py-32 relative overflow-hidden bg-gradient-to-b from-background via-slate-950/5 to-background dark:via-slate-950/20">
      {/* Technical Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(6,182,212,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,0.8) 1px, transparent 1px),
            linear-gradient(rgba(6,182,212,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center relative"
        >
          {/* Animated Background Glow */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 rounded-full blur-3xl -z-10"
          ></motion.div>

          {/* Interactive Header Badge */}
          <motion.div 
            className="flex items-center justify-center gap-3 mb-8 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {/* Animated Icon Container */}
            <motion.div 
              className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 flex items-center justify-center backdrop-blur-xl overflow-hidden"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {/* Inner Glow */}
              <motion.div
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500"
              ></motion.div>
              
              {/* Plane Icon with Animation */}
              <motion.div
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Plane className="h-6 w-6 text-cyan-400 dark:text-cyan-400 relative z-10 dark:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
              </motion.div>

              {/* Orbital Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-cyan-500/30 rounded-xl"
                style={{
                  background: 'conic-gradient(from 0deg, transparent, rgba(6,182,212,0.3), transparent)'
                }}
              ></motion.div>
            </motion.div>

            {/* Module Label with Glassmorphism */}
            <motion.div
              className="relative px-6 py-2.5 rounded-full bg-cyan-500/5 border border-cyan-500/20 backdrop-blur-xl overflow-hidden hover:border-cyan-500/50 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
            >
              {/* Animated Background Shimmer */}
              <motion.div
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
              ></motion.div>
              
              <span className="text-sm font-semibold text-cyan-400 relative z-10 tracking-wider">
                03 / AVIATION INDUSTRY
              </span>

              {/* Pulse Dots */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400"
              ></motion.div>
            </motion.div>
          </motion.div>

          {/* Main Title with Advanced Typography */}
          <motion.h3 
            className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.span 
              className="text-foreground dark:bg-gradient-to-b dark:from-foreground dark:via-foreground/90 dark:to-foreground/40 dark:bg-clip-text dark:text-transparent relative inline-block"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Precision Engineering
              
              {/* Underline Accent */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent rounded-full"
              ></motion.div>
            </motion.span>

            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
                className="absolute w-1 h-1 rounded-full bg-cyan-400/60"
                style={{
                  left: `${10 + i * 15}%`,
                  top: `${Math.random() * 100}%`,
                }}
              ></motion.div>
            ))}
          </motion.h3>

          {/* Description with Icon Accents */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative inline-block"
          >
            {/* Connected Icons */}
            <div className="flex items-center justify-center gap-8 mb-4">
              {[Building2, Zap, Globe2].map((Icon, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="relative"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center backdrop-blur-sm">
                    <Icon className="h-4 w-4 text-cyan-400" />
                  </div>
                  
                  {/* Connection Line */}
                  {i < 2 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
                      className="absolute top-1/2 left-full w-8 h-px bg-gradient-to-r from-cyan-500/50 to-cyan-500/20 origin-left"
                    ></motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              <span className="text-cyan-400 font-medium">Connected thinking</span> across{' '}
              <span className="text-cyan-400 font-medium">transport, energy,</span> and{' '}
              <span className="text-cyan-400 font-medium">building sectors</span> for sustainable aviation
            </p>

            {/* Tech Grid Pattern */}
            <div className="absolute inset-0 -z-10 opacity-[0.02]">
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
            </div>
          </motion.div>

          {/* Bottom Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex items-center justify-center gap-8"
          >
            {[
              { label: 'Sustainability', value: '45%', icon: Heart },
              { label: 'Efficiency', value: '98%', icon: Gauge },
              { label: 'Innovation', value: '100%', icon: Zap }
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, y: -4 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/5 border border-cyan-500/10 backdrop-blur-sm cursor-pointer"
              >
                <stat.icon className="h-4 w-4 text-cyan-400" />
                <div className="text-left">
                  <div className="text-xs text-cyan-400 font-medium">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Horizontal Step Navigation */}
        <div className="mb-12 overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-4 min-w-max">
            {steps.map((step, index) => (
              <motion.button
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveStep(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative px-8 py-5 rounded-xl transition-all duration-500 min-w-[280px] ${
                  activeStep === index
                    ? 'bg-card/80 backdrop-blur-xl border-2 border-cyan-500/50 shadow-lg shadow-cyan-500/10'
                    : 'bg-card/40 backdrop-blur-sm border border-border/50 hover:border-cyan-500/30'
                }`}
              >
                {/* Active Indicator */}
                {activeStep === index && (
                  <motion.div
                    layoutId="activeStep"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl"
                  ></motion.div>
                )}

                <div className="relative z-10 text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <step.icon className={`h-5 w-5 ${activeStep === index ? 'text-cyan-500' : 'text-muted-foreground'}`} />
                    <span className={`text-xs font-medium ${activeStep === index ? 'text-cyan-500' : 'text-muted-foreground'}`}>
                      Step {index + 1}
                    </span>
                  </div>
                  <h4 className={`font-bold mb-1 ${activeStep === index ? 'text-foreground' : 'text-foreground/70'}`}>
                    {step.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Content Display */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-card/60 backdrop-blur-xl border border-border/50 rounded-3xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="inline-flex items-center gap-3 mb-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-xl">
                  <ActiveStepIcon className="h-8 w-8 text-white" />
                </div>
              </motion.div>

              <h4 className="text-3xl font-bold mb-4">{steps[activeStep].title}</h4>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                {steps[activeStep].desc}
              </p>

              <div className="space-y-3">
                {[
                  'Environmental & social responsibility',
                  'Navigate changing sector needs',
                  'Connected multi-sector thinking',
                  'Digital-enabled solutions'
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                    </div>
                    <span className="text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Interactive Sustainable Infrastructure Visualization */}
            <SustainableInfrastructureViz />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <Button variant="outline" size="lg" className="border-cyan-500/30 hover:bg-cyan-500/10">
            Discuss Aviation Solutions
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

// 5. HYGIENIC - Clean & protection
function HygienicModule() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const products = [
    { title: 'Sanitization Products', cert: 'FDA Approved', icon: Droplet },
    { title: 'Personal Protective Equipment', cert: 'CE Certified', icon: Shield },
    { title: 'Industrial Cleaning', cert: 'ISO 9001', icon: Zap },
    { title: 'Quality Assurance', cert: 'GMP Certified', icon: Award },
  ];

  return (
    <div className="py-32 relative overflow-hidden bg-gradient-to-b from-background to-emerald-50/5 dark:to-emerald-950/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_60%,rgba(16,185,129,0.05),transparent_60%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center relative"
        >
          {/* Animated Background Glow */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20 rounded-full blur-3xl -z-10"
          ></motion.div>

          {/* Interactive Header Badge */}
          <motion.div 
            className="flex items-center justify-center gap-3 mb-8 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {/* Animated Icon Container */}
            <motion.div 
              className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 flex items-center justify-center backdrop-blur-xl overflow-hidden"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {/* Inner Glow */}
              <motion.div
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500"
              ></motion.div>
              
              {/* Droplet Icon with Animation - Dripping Effect */}
              <motion.div
                animate={{
                  y: [0, 4, 0],
                  scale: [1, 0.95, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Droplet className="h-6 w-6 text-emerald-400 dark:text-emerald-400 relative z-10 dark:drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
              </motion.div>

              {/* Orbital Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-emerald-500/30 rounded-xl"
                style={{
                  background: 'conic-gradient(from 0deg, transparent, rgba(16,185,129,0.3), transparent)'
                }}
              ></motion.div>
            </motion.div>

            {/* Module Label with Glassmorphism */}
            <motion.div
              className="relative px-6 py-2.5 rounded-full bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-xl overflow-hidden hover:border-emerald-500/50 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
            >
              {/* Animated Background Shimmer */}
              <motion.div
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent"
              ></motion.div>
              
              <span className="text-sm font-semibold text-emerald-400 relative z-10 tracking-wider">
                05 / HYGIENIC PRODUCTS
              </span>

              {/* Pulse Dots */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-emerald-400"
              ></motion.div>
            </motion.div>
          </motion.div>

          {/* Main Title with Advanced Typography */}
          <motion.h3 
            className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.span 
              className="text-foreground dark:bg-gradient-to-b dark:from-foreground dark:via-foreground/90 dark:to-foreground/40 dark:bg-clip-text dark:text-transparent relative inline-block"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Premium Hygiene Solutions
              
              {/* Underline Accent */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent rounded-full"
              ></motion.div>
            </motion.span>

            {/* Floating Particles - Clean Theme */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
                className="absolute w-1 h-1 rounded-full bg-emerald-400/60"
                style={{
                  left: `${10 + i * 15}%`,
                  top: `${Math.random() * 100}%`,
                }}
              ></motion.div>
            ))}
          </motion.h3>

          {/* Description with Icon Accents */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative inline-block mb-6"
          >
            {/* Connected Icons - Hygiene Focus */}
            <div className="flex items-center justify-center gap-8 mb-4">
              {[Droplet, Sparkles, Shield].map((Icon, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="relative"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center backdrop-blur-sm">
                    <Icon className="h-4 w-4 text-emerald-400" />
                  </div>
                  
                  {/* Connection Line */}
                  {i < 2 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
                      className="absolute top-1/2 left-full w-8 h-px bg-gradient-to-r from-emerald-500/50 to-emerald-500/20 origin-left"
                    ></motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              <span className="text-emerald-400 font-medium">Certified protection</span> and{' '}
              <span className="text-emerald-400 font-medium">cleanliness</span> for the UAE market
            </p>

            {/* Tech Grid Pattern */}
            <div className="absolute inset-0 -z-10 opacity-[0.02]">
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(16,185,129,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.5) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
            </div>
          </motion.div>

          {/* Region Badge - Enhanced */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm cursor-pointer relative overflow-hidden group"
          >
            {/* Hover Background Effect */}
            <motion.div
              className="absolute inset-y-0 left-1/4 right-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></motion.div>

            {/* Pulsing Map Pin */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <MapPin className="h-4 w-4 text-emerald-400 relative z-10" />
            </motion.div>
            
            <span className="text-sm font-semibold text-emerald-400 relative z-10">Exclusive UAE Distribution</span>

            {/* Animated Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 right-3 -translate-y-1/2 w-2 h-2 rounded-full border border-emerald-400/30"
            ></motion.div>
          </motion.div>

          {/* Bottom Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex items-center justify-center gap-8 flex-wrap"
          >
            {[
              { label: 'Certified', value: '100%', icon: Award },
              { label: 'Products', value: '50+', icon: Package },
              { label: 'Protection', value: 'Premium', icon: Shield }
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, y: -4 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/10 backdrop-blur-sm cursor-pointer"
              >
                <stat.icon className="h-4 w-4 text-emerald-400" />
                <div className="text-left">
                  <div className="text-xs text-emerald-400 font-medium">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Product Grid with Hover Tooltips */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredProduct(index)}
              onHoverEnd={() => setHoveredProduct(null)}
              whileHover={{ y: -12 }}
              className="relative group"
            >
              {/* Soft Glow */}
              <motion.div
                animate={{
                  opacity: hoveredProduct === index ? 0.4 : 0,
                  scale: hoveredProduct === index ? 1.1 : 0.9,
                }}
                className="absolute -inset-2 bg-gradient-to-b from-emerald-500/50 to-green-500/50 rounded-3xl blur-2xl"
              ></motion.div>

              <Card className="relative h-full p-6 bg-card/80 backdrop-blur-xl border-border/50 hover:border-emerald-500/30 transition-all duration-500 text-center">
                {/* Icon */}
                <motion.div
                  animate={{
                    scale: hoveredProduct === index ? 1.2 : 1,
                    rotate: hoveredProduct === index ? 360 : 0,
                  }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-xl"
                >
                  <product.icon className="h-10 w-10 text-white" />
                </motion.div>

                <h4 className="font-bold mb-3 text-lg">{product.title}</h4>

                {/* Certification Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-500">
                  <CheckCircle2 className="h-3 w-3" />
                  {product.cert}
                </div>

                {/* Tooltip on Hover */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: hoveredProduct === index ? 1 : 0,
                    y: hoveredProduct === index ? 0 : 10,
                  }}
                  transition={{ duration: 0.2 }}
                  className="mt-4 text-sm text-muted-foreground"
                >
                  Click to view specifications
                </motion.div>

                {/* Accent Line */}
                <motion.div
                  animate={{
                    scaleX: hoveredProduct === index ? 1 : 0,
                  }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-green-500 origin-left"
                ></motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <Button variant="outline" size="lg" className="border-emerald-500/30 hover:bg-emerald-500/10">
            Request Distribution Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}