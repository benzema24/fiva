import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function InteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dots, setDots] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    // Generate grid of dots
    const newDots = [];
    const spacing = 40;
    const cols = Math.ceil(window.innerWidth / spacing);
    const rows = Math.ceil(window.innerHeight / spacing);

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        newDots.push({
          id: i * cols + j,
          x: j * spacing,
          y: i * spacing
        });
      }
    }
    setDots(newDots);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated gradient orb that follows mouse */}
      <motion.div
        className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 100 }}
      />

      {/* Interactive dot grid */}
      <svg className="w-full h-full">
        {dots.map((dot) => {
          const dx = mousePosition.x - dot.x;
          const dy = mousePosition.y - dot.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 200;
          const opacity = Math.max(0, 1 - distance / maxDistance) * 0.5;
          const scale = 1 + Math.max(0, 1 - distance / maxDistance) * 2;

          return (
            <motion.circle
              key={dot.id}
              cx={dot.x}
              cy={dot.y}
              r="1"
              fill="currentColor"
              className="text-primary"
              animate={{
                opacity: distance < maxDistance ? opacity : 0.1,
                r: distance < maxDistance ? scale : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          );
        })}
      </svg>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
