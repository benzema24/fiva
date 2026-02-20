import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function StickyContactButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, type: 'spring' }}
          className="fixed bottom-8 right-8 z-40"
        >
          {/* Pulsing Glow Effect */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-500 rounded-full blur-xl"
          />
          
          {/* Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="rounded-full shadow-2xl h-14 px-6 bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-400 border-0 relative overflow-hidden group cursor-pointer"
            >
              {/* Animated Glow Ring */}
              <motion.div
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-cyan-500 to-primary opacity-0 group-hover:opacity-100 blur-lg"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>

              {/* Rotating Border Gradient */}
              <motion.div
                className="absolute -inset-[2px] rounded-full opacity-0 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(90deg, rgba(59,130,246,0.8), rgba(6,182,212,0.8), rgba(139,92,246,0.8), rgba(59,130,246,0.8))',
                  backgroundSize: '300% 100%',
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '300% 0%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              ></motion.div>

              {/* Main Background Gradient Slide */}
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
              
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                initial={{ x: '-100%', skewX: -20 }}
                animate={{ x: '200%' }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                  ease: 'easeInOut',
                }}
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                  width: '50%',
                }}
              ></motion.div>

              {/* Floating Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-60"
                  style={{
                    left: `${20 + i * 12}%`,
                    top: '50%',
                  }}
                  animate={{
                    y: [-10, -25, -10],
                    x: [0, Math.sin(i) * 10, 0],
                    opacity: [0, 0.6, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                ></motion.div>
              ))}

              {/* Pulse Ring on Hover */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white/30"
                initial={{ scale: 1, opacity: 0 }}
                whileHover={{
                  scale: [1, 1.2, 1.4],
                  opacity: [0.5, 0.3, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              ></motion.div>

              <span className="relative flex items-center gap-3 z-10">
                {/* Animated Icon Container */}
                <motion.div
                  className="relative"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
                  whileHover={{ 
                    rotate: [0, -15, 15, -15, 15, 0],
                    scale: [1, 1.2, 1],
                  }}
                >
                  {/* Icon Background Glow */}
                  <motion.div
                    className="absolute -inset-2 bg-white/20 rounded-full blur-md opacity-0 group-hover:opacity-100"
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  ></motion.div>
                  
                  <MessageCircle className="h-5 w-5 relative z-10" />
                  
                  {/* Notification Badge */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white shadow-lg"
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-green-400 rounded-full"
                      animate={{
                        scale: [1, 2, 2],
                        opacity: [0.8, 0, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    ></motion.div>
                  </motion.div>
                </motion.div>

                {/* Text with Letter Animation */}
                <span className="hidden sm:inline font-medium relative">
                  <motion.span
                    className="inline-block"
                    whileHover={{
                      scale: 1.05,
                    }}
                  >
                    Request Consultation
                  </motion.span>
                  
                  {/* Underline Animation */}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white/50 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                </span>
                
                <span className="sm:hidden font-medium relative">
                  <motion.span
                    className="inline-block"
                    whileHover={{
                      scale: 1.05,
                    }}
                  >
                    Contact
                  </motion.span>
                  
                  {/* Underline Animation */}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white/50 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                </span>

                {/* Arrow Indicator */}
                <motion.div
                  className="opacity-0 group-hover:opacity-100"
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </motion.div>
              </span>

              {/* Click Ripple Effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-white/30"
                initial={{ scale: 0, opacity: 0.5 }}
                whileTap={{
                  scale: 2,
                  opacity: 0,
                }}
                transition={{ duration: 0.6 }}
              ></motion.div>

              {/* Energy Lines */}
              <div className="absolute inset-0 rounded-full overflow-hidden opacity-0 group-hover:opacity-30">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute h-px bg-gradient-to-r from-transparent via-white to-transparent"
                    style={{
                      top: `${30 + i * 20}%`,
                      width: '100%',
                    }}
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: 'linear',
                    }}
                  ></motion.div>
                ))}
              </div>
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}