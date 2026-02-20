import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Activity, Video, Eye, Bell, Monitor, Stethoscope, Package, Cpu, Lock,
  ArrowRight, CheckCircle2, ChevronRight, Shield, Award, Heart
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';

export function HealthcareModule() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      title: 'AI-Assisted Virtual Nursing',
      desc: 'Intelligent virtual care platform with AI-powered patient support',
      icon: Heart,
      gradient: 'from-blue-500 to-cyan-500',
      metrics: { value: '24/7', label: 'Availability' }
    },
    {
      title: 'Telehealth & Video Care',
      desc: 'Real-time audio/video consultations with healthcare providers',
      icon: Video,
      gradient: 'from-teal-500 to-blue-500',
      metrics: { value: '99.9%', label: 'Uptime' }
    },
    {
      title: 'AI Virtual Sitting',
      desc: 'Continuous patient observation with intelligent monitoring',
      icon: Eye,
      gradient: 'from-cyan-500 to-teal-500',
      metrics: { value: 'Real-time', label: 'Monitoring' }
    },
    {
      title: 'Workflow Management',
      desc: 'Alerting, communications & seamless care coordination',
      icon: Bell,
      gradient: 'from-blue-600 to-cyan-600',
      metrics: { value: '<30s', label: 'Response Time' }
    },
    {
      title: 'Remote Patient Monitoring',
      desc: 'Digital vitals tracking and continuous health assessment',
      icon: Activity,
      gradient: 'from-teal-600 to-blue-600',
      metrics: { value: '15+', label: 'Vital Signs' }
    },
    {
      title: 'Digital Clinic Solution',
      desc: 'Turnkey virtual care platform ready to deploy',
      icon: Monitor,
      gradient: 'from-cyan-600 to-teal-600',
      metrics: { value: 'Turnkey', label: 'Deployment' }
    },
    {
      title: 'Remote Examination Kit',
      desc: 'Multi-vital assessment tools for comprehensive exams',
      icon: Stethoscope,
      gradient: 'from-blue-500 to-teal-500',
      metrics: { value: '10+', label: 'Devices' }
    },
    {
      title: 'Telemedicine Carts',
      desc: 'Integrated mobile solutions for bedside virtual care',
      icon: Package,
      gradient: 'from-teal-500 to-cyan-500',
      metrics: { value: 'Mobile', label: 'Access' }
    },
    {
      title: 'Embedded AI Intelligence',
      desc: 'Behavioral monitoring, fall detection & privacy protection',
      icon: Cpu,
      gradient: 'from-cyan-500 to-blue-600',
      metrics: { value: 'AI-Powered', label: 'Detection' }
    },
    {
      title: 'Platform Integrations',
      desc: 'EHR compatibility with HIPAA, HITRUST, SOC, ISO compliance',
      icon: Lock,
      gradient: 'from-blue-600 to-teal-600',
      metrics: { value: '100%', label: 'Compliant' }
    },
  ];

  const complianceBadges = [
    { name: 'HIPAA', icon: Shield },
    { name: 'HITRUST', icon: CheckCircle2 },
    { name: 'SOC 2', icon: Lock },
    { name: 'ISO 27001', icon: Award },
  ];

  const ActiveFeatureIcon = features[activeFeature].icon;

  return (
    <div className="py-32 relative overflow-hidden bg-gradient-to-b from-background via-blue-950/5 to-background dark:via-blue-950/10">
      {/* Medical Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center relative"
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
              
              {/* Activity Icon with Animation - Heartbeat Effect */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1, 1.2, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.4, 0.6, 1] }}
              >
                <Activity className="h-6 w-6 text-blue-400 relative z-10 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
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
                04 / HEALTHCARE PLATFORM
              </span>

              {/* Pulse Dots - Heartbeat Style */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1, 1.5, 1],
                  opacity: [1, 0, 1, 0, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, times: [0, 0.2, 0.4, 0.6, 1] }}
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
              className="bg-gradient-to-b from-foreground via-foreground/90 to-foreground/40 bg-clip-text text-transparent relative inline-block"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              AI-Assisted Virtual Care
              
              {/* Underline Accent */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent rounded-full"
              ></motion.div>
            </motion.span>

            {/* Floating Particles - Medical Theme */}
            {[...Array(8)].map((_, i) => (
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
                  delay: i * 0.3,
                }}
                className="absolute w-1 h-1 rounded-full bg-cyan-400/60"
                style={{
                  left: `${5 + i * 12}%`,
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
            className="relative inline-block mb-8"
          >
            {/* Connected Icons - Healthcare Focus */}
            <div className="flex items-center justify-center gap-8 mb-4">
              {[Activity, Heart, Shield].map((Icon, i) => (
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
                    <Icon className="h-4 w-4 text-cyan-400" />
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
              Comprehensive <span className="text-cyan-400 font-medium">telehealth platform</span> powered by{' '}
              <span className="text-cyan-400 font-medium">artificial intelligence</span> for{' '}
              <span className="text-cyan-400 font-medium">real-time patient care</span>, monitoring, and clinical excellence
            </p>

            {/* Tech Grid Pattern */}
            <div className="absolute inset-0 -z-10 opacity-[0.02]">
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
            </div>
          </motion.div>

          {/* Compliance Badges - Enhanced Design */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {complianceBadges.map((badge, index) => (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/20 backdrop-blur-sm cursor-pointer overflow-hidden group"
              >
                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></motion.div>
                
                <badge.icon className="h-4 w-4 text-blue-400 relative z-10" />
                <span className="text-sm font-medium text-blue-400 relative z-10">{badge.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onHoverStart={() => setHoveredFeature(index)}
              onHoverEnd={() => setHoveredFeature(null)}
              onClick={() => setActiveFeature(index)}
              className="relative group cursor-pointer"
            >
              {/* Glow Effect */}
              <motion.div
                animate={{
                  opacity: hoveredFeature === index ? 0.4 : 0,
                  scale: hoveredFeature === index ? 1.05 : 0.95,
                }}
                transition={{ duration: 0.3 }}
                className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-lg`}
              ></motion.div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`relative h-full rounded-2xl p-4 bg-card/70 backdrop-blur-xl border transition-all duration-500 ${
                  activeFeature === index
                    ? 'border-blue-500/50 shadow-lg shadow-blue-500/20'
                    : 'border-border/50 hover:border-blue-500/30'
                }`}
              >
                {/* Inner Gradient Overlay */}
                <motion.div
                  animate={{
                    opacity: hoveredFeature === index ? 0.06 : 0,
                  }}
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient}`}
                ></motion.div>

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    animate={{
                      rotate: hoveredFeature === index ? 360 : 0,
                      scale: hoveredFeature === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-3 shadow-md`}
                  >
                    <feature.icon className="h-6 w-6 text-white" strokeWidth={2} />
                  </motion.div>

                  {/* Title */}
                  <h4 className="text-sm font-bold mb-1.5 leading-tight">
                    {feature.title}
                  </h4>

                  {/* Metric Badge */}
                  <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-gradient-to-r ${feature.gradient} bg-opacity-10 border border-current`}
                    style={{ borderColor: 'rgba(6, 182, 212, 0.2)' }}
                  >
                    <span className={`text-xs font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                      {feature.metrics.value}
                    </span>
                    <span className="text-[10px] text-muted-foreground">{feature.metrics.label}</span>
                  </div>

                  {/* Active Indicator */}
                  {activeFeature === index && (
                    <motion.div
                      layoutId="activeFeatureIndicator"
                      className={`absolute top-2 right-2 w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient}`}
                    ></motion.div>
                  )}

                  {/* Bottom Accent */}
                  <motion.div
                    animate={{
                      width: hoveredFeature === index ? '100%' : '0%',
                    }}
                    transition={{ duration: 0.4 }}
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${feature.gradient} rounded-b-2xl`}
                  ></motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Active Feature Detail Panel */}
        <motion.div
          key={activeFeature}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mb-12"
        >
          {/* Background Glow */}
          <div className={`absolute -inset-4 bg-gradient-to-r ${features[activeFeature].gradient} opacity-15 blur-3xl rounded-3xl`}></div>

          <Card className="relative p-8 lg:p-12 bg-card/80 backdrop-blur-xl border-border/50 rounded-3xl overflow-hidden">
            {/* Clinical Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.02]">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, rgba(6,182,212,0.8) 1px, transparent 1px)',
                backgroundSize: '24px 24px'
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
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${features[activeFeature].gradient} flex items-center justify-center shadow-2xl`}>
                      <ActiveFeatureIcon className="h-10 w-10 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold mb-1">{features[activeFeature].title}</h4>
                      <p className={`text-sm font-medium bg-gradient-to-r ${features[activeFeature].gradient} bg-clip-text text-transparent`}>
                        {features[activeFeature].metrics.value} {features[activeFeature].metrics.label}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    {features[activeFeature].desc}
                  </p>

                  {/* Key Benefits */}
                  <div className="space-y-3 mb-8">
                    {[
                      'HIPAA-compliant secure infrastructure',
                      'Real-time patient data synchronization',
                      'AI-powered clinical decision support',
                      'Seamless EHR integration'
                    ].map((benefit, i) => (
                      <motion.div
                        key={benefit}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${features[activeFeature].gradient} bg-opacity-20 flex items-center justify-center flex-shrink-0`}>
                          <CheckCircle2 className="h-3 w-3 text-blue-500" />
                        </div>
                        <span className="text-sm font-medium">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      size="lg" 
                      className={`bg-gradient-to-r ${features[activeFeature].gradient} hover:opacity-90 shadow-lg group`}
                    >
                      Request Demo
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-blue-500/30 hover:bg-blue-500/10"
                    >
                      Learn More
                    </Button>
                  </div>
                </motion.div>
              </div>

              {/* Right - Real-time Dashboard Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="relative h-96"
              >
                {/* Animated Pulse Background */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${features[activeFeature].gradient} blur-2xl`}
                ></motion.div>

                {/* Dashboard Mockup */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full max-w-md">
                    {/* Center Vital Monitor */}
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className={`w-48 h-48 rounded-3xl bg-gradient-to-br ${features[activeFeature].gradient} flex flex-col items-center justify-center shadow-2xl backdrop-blur-xl`}>
                        <Activity className="h-16 w-16 text-white mb-4" strokeWidth={1.5} />
                        <div className="text-white">
                          <motion.div
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="text-4xl font-bold mb-1"
                          >
                            98
                          </motion.div>
                          <div className="text-sm opacity-80">BPM</div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Floating Metric Cards */}
                    {[
                      { value: '120/80', label: 'BP', position: 'top-0 left-0' },
                      { value: '98%', label: 'SpO₂', position: 'top-0 right-0' },
                      { value: '36.6°C', label: 'Temp', position: 'bottom-0 left-0' },
                      { value: '16', label: 'RR', position: 'bottom-0 right-0' },
                    ].map((metric, i) => (
                      <motion.div
                        key={metric.label}
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                        className={`absolute ${metric.position} w-24 h-24 rounded-2xl bg-card/80 backdrop-blur-xl border border-blue-500/30 flex flex-col items-center justify-center shadow-lg`}
                      >
                        <div className={`text-xl font-bold bg-gradient-to-r ${features[activeFeature].gradient} bg-clip-text text-transparent mb-1`}>
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </motion.div>
                    ))}

                    {/* Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
                      <motion.line
                        x1="20%" y1="20%" x2="50%" y2="50%"
                        stroke="rgba(6,182,212,0.2)"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        animate={{ strokeDashoffset: [0, 8] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                      <motion.line
                        x1="80%" y1="20%" x2="50%" y2="50%"
                        stroke="rgba(6,182,212,0.2)"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        animate={{ strokeDashoffset: [0, 8] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                      <motion.line
                        x1="20%" y1="80%" x2="50%" y2="50%"
                        stroke="rgba(6,182,212,0.2)"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        animate={{ strokeDashoffset: [0, 8] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                      <motion.line
                        x1="80%" y1="80%" x2="50%" y2="50%"
                        stroke="rgba(6,182,212,0.2)"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        animate={{ strokeDashoffset: [0, 8] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </Card>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {[
            { value: '50K+', label: 'Virtual Visits/Month' },
            { value: '99.99%', label: 'Platform Uptime' },
            { value: '200+', label: 'Healthcare Facilities' },
            { value: '15s', label: 'Avg. Connection Time' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              <Card className="relative p-6 text-center bg-card/60 backdrop-blur-xl border-border/50 group-hover:border-blue-500/30 transition-all duration-500">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-4">
            Transform patient care with AI-powered telehealth
          </p>
          <Button size="lg" variant="outline" className="border-blue-500/30 hover:bg-blue-500/10 group">
            Schedule Platform Demo
            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}