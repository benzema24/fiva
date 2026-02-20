import { About } from '@/app/components/About';
import { OurTeam } from '@/app/components/OurTeam';
import { motion } from 'motion/react';
import { useParallax } from '@/app/hooks/useParallax';
import { Building2 } from 'lucide-react';

export function AboutPage() {
  const scrollY = useParallax();

  return (
    <div className="pt-20">
      {/* Hero Section for About Page */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
        {/* Animated Background */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(30,64,175,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(30,64,175,0.05)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_40%,transparent_100%)]"
          style={{
            transform: `translateY(${scrollY * 0.03}px)`,
          }}
        ></div>

        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-600/20 via-blue-500/15 to-transparent rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-amber-600/20 via-orange-500/15 to-transparent rounded-full blur-3xl"
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border backdrop-blur-sm relative overflow-hidden group
                         bg-gradient-to-r from-blue-950/10 via-amber-500/5 to-blue-950/10 
                         dark:from-amber-600/20 dark:via-blue-600/15 dark:to-amber-600/20
                         border-blue-900/20 dark:border-amber-500/40
                         shadow-lg shadow-blue-900/10 dark:shadow-amber-500/20">
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000
                              bg-gradient-to-r from-transparent via-amber-500/10 to-transparent
                              dark:via-amber-400/20" 
              />
              <Building2 className="h-5 w-5 relative z-10 text-amber-600 dark:text-amber-400 drop-shadow-[0_0_8px_rgba(217,119,6,0.4)] dark:drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
              <span className="text-sm font-medium relative z-10 text-blue-950 dark:text-foreground">About FIVA Investment</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-foreground">Building the </span>
            <span className="text-[rgb(15,23,42)] dark:text-white">
              Future of Business
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            A global investment and business group building, operating, and scaling strategic ventures 
            across multiple regions and industries.
          </motion.p>
        </div>
      </section>

      {/* About Content */}
      <About />

      {/* Team Section */}
      <OurTeam />
    </div>
  );
}