import { motion } from 'motion/react';
import { Box, Typography, Chip } from '@mui/material';
import { AutoAwesome } from '@mui/icons-material';
import { useParallax } from '@/app/hooks/useParallax';
import { useState, useEffect, useRef } from 'react';

export function Hero() {
  const scrollY = useParallax();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ x: number; y: number; vx: number; vy: number; id: number }>>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Initialize particles
  useEffect(() => {
    const initialParticles = Array.from({ length: 60 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.05,
      vy: (Math.random() - 0.5) * 0.05,
      id: Math.random(),
    }));
    setParticles(initialParticles);

    const interval = setInterval(() => {
      setParticles(prev => 
        prev.map(p => {
          let newX = p.x + p.vx;
          let newY = p.y + p.vy;
          let newVx = p.vx;
          let newVy = p.vy;

          // Bounce off edges
          if (newX <= 0 || newX >= 100) {
            newVx = -p.vx;
            newX = Math.max(0, Math.min(100, newX));
          }
          if (newY <= 0 || newY >= 100) {
            newVy = -p.vy;
            newY = Math.max(0, Math.min(100, newY));
          }

          return { ...p, x: newX, y: newY, vx: newVx, vy: newVy };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Draw hexagonal grid and connecting lines on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationFrame: number;
    let time = 0;

    const drawHexagon = (x: number, y: number, size: number, alpha: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const hx = x + size * Math.cos(angle);
        const hy = y + size * Math.sin(angle);
        if (i === 0) ctx.moveTo(hx, hy);
        else ctx.lineTo(hx, hy);
      }
      ctx.closePath();
      ctx.strokeStyle = `rgba(240, 181, 29, ${alpha})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const hexSize = 40;
      const hexHeight = hexSize * Math.sqrt(3);
      const hexWidth = hexSize * 2;
      
      // Draw hexagonal grid
      for (let row = -1; row < canvas.height / hexHeight + 1; row++) {
        for (let col = -1; col < canvas.width / (hexWidth * 0.75) + 1; col++) {
          const x = col * hexWidth * 0.75;
          const y = row * hexHeight + (col % 2 === 0 ? 0 : hexHeight / 2);
          
          const distFromCenter = Math.sqrt(
            Math.pow(x - canvas.width / 2, 2) + 
            Math.pow(y - canvas.height / 2, 2)
          );
          
          const wave = Math.sin(time * 0.001 + distFromCenter * 0.01) * 0.3 + 0.1;
          
          drawHexagon(x, y, hexSize, wave);
        }
      }

      // Draw flowing data lines
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        const yPos = (canvas.height / 6) * (i + 1);
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, 'rgba(30, 64, 175, 0)');
        gradient.addColorStop(0.5, `rgba(240, 181, 29, ${0.3 + Math.sin(time * 0.002 + i) * 0.2})`);
        gradient.addColorStop(1, 'rgba(30, 64, 175, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        
        for (let x = 0; x < canvas.width; x += 10) {
          const y = yPos + Math.sin((x + time + i * 100) * 0.01) * 30;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      time += 16;
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <Box
      component="section"
      id="home"
      ref={containerRef}
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Canvas Background */}
      <Box
        component="canvas"
        ref={canvasRef}
        sx={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.3,
          '@media (prefers-color-scheme: dark)': {
            opacity: 0.4,
          },
        }}
      />

      {/* Interactive Background */}
      <Box sx={{ position: 'absolute', inset: 0 }}>
        {/* Dynamic Gradient Orbs */}
        <Box
          component={motion.div}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          sx={{
            position: 'absolute',
            top: '25%',
            left: '33%',
            width: 600,
            height: 600,
            background: (theme) => 
              theme.palette.mode === 'dark'
                ? 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(30, 64, 175, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            transform: `translate(${mousePosition.x * 0.5 - 25}%, ${mousePosition.y * 0.5 - 25}%)`,
          }}
        />
        
        <Box
          component={motion.div}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          sx={{
            position: 'absolute',
            bottom: '25%',
            right: '33%',
            width: 700,
            height: 700,
            background: (theme) =>
              theme.palette.mode === 'dark'
                ? 'radial-gradient(circle, rgba(240, 181, 29, 0.45) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(240, 181, 29, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            transform: `translate(${mousePosition.x * -0.3}%, ${mousePosition.y * -0.3}%)`,
          }}
        />

        {/* Particle Network */}
        <Box component="svg" sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
          <defs>
            <radialGradient id="particleGlow">
              <stop offset="0%" stopColor="#f0b51d" stopOpacity="1" />
              <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.3" />
            </radialGradient>
            
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Connection Lines between nearby particles */}
          {particles.map((particle, i) => 
            particles.slice(i + 1).map((targetParticle, j) => {
              const distance = Math.sqrt(
                Math.pow(particle.x - targetParticle.x, 2) + 
                Math.pow(particle.y - targetParticle.y, 2)
              );
              
              const mouseDistP1 = Math.sqrt(
                Math.pow(particle.x - mousePosition.x, 2) + 
                Math.pow(particle.y - mousePosition.y, 2)
              );
              
              if (distance < 20) {
                const opacity = Math.max(0, 1 - distance / 20) * (mouseDistP1 < 15 ? 0.8 : 0.3);
                return (
                  <line
                    key={`${i}-${j}`}
                    x1={`${particle.x}%`}
                    y1={`${particle.y}%`}
                    x2={`${targetParticle.x}%`}
                    y2={`${targetParticle.y}%`}
                    stroke={mouseDistP1 < 15 ? "#f0b51d" : "#1E40AF"}
                    strokeWidth={mouseDistP1 < 15 ? "2" : "1"}
                    opacity={opacity}
                  />
                );
              }
              return null;
            })
          )}
          
          {/* Particles */}
          {particles.map((particle) => {
            const distanceFromMouse = Math.sqrt(
              Math.pow(particle.x - mousePosition.x, 2) + 
              Math.pow(particle.y - mousePosition.y, 2)
            );
            
            const isNearMouse = distanceFromMouse < 15;
            const size = isNearMouse ? 4 : 2.5;
            
            return (
              <g key={particle.id}>
                {/* Glow effect */}
                {isNearMouse && (
                  <circle
                    cx={`${particle.x}%`}
                    cy={`${particle.y}%`}
                    r={size * 3}
                    fill="url(#particleGlow)"
                    opacity="0.4"
                  />
                )}
                {/* Particle core */}
                <circle
                  cx={`${particle.x}%`}
                  cy={`${particle.y}%`}
                  r={size}
                  fill={isNearMouse ? "#f0b51d" : "#1E40AF"}
                  opacity={isNearMouse ? 1 : 0.6}
                  filter={isNearMouse ? "url(#glow)" : "none"}
                />
              </g>
            );
          })}
        </Box>

        {/* Floating Geometric Shapes */}
        {Array.from({ length: 8 }).map((_, i) => {
          const shapes = ['square', 'circle', 'triangle'];
          const shape = shapes[i % 3];
          
          return (
            <Box
              key={i}
              component={motion.div}
              sx={{
                position: 'absolute',
                pointerEvents: 'none',
                left: `${(i * 12 + 10)}%`,
                top: `${(i % 3) * 30 + 15}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 180, 360],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.3,
              }}
            >
              {shape === 'square' && (
                <Box sx={{
                  width: 64,
                  height: 64,
                  border: (theme) => `2px solid ${theme.palette.mode === 'dark' ? 'rgba(240, 181, 29, 0.4)' : 'rgba(30, 64, 175, 0.3)'}`,
                  transform: 'rotate(45deg)',
                  backdropFilter: 'blur(4px)',
                }} />
              )}
              {shape === 'circle' && (
                <Box sx={{
                  width: 64,
                  height: 64,
                  border: (theme) => `2px solid ${theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.4)' : 'rgba(240, 181, 29, 0.3)'}`,
                  borderRadius: '50%',
                  backdropFilter: 'blur(4px)',
                }} />
              )}
              {shape === 'triangle' && (
                <Box sx={{
                  width: 64,
                  height: 64,
                  border: (theme) => `2px solid ${theme.palette.mode === 'dark' ? 'rgba(240, 181, 29, 0.4)' : 'rgba(30, 64, 175, 0.3)'}`,
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                  borderRadius: 1,
                }} />
              )}
            </Box>
          );
        })}

        {/* Radial Pulse from Center */}
        {[0, 1, 2].map((i) => (
          <Box
            key={`pulse-${i}`}
            component={motion.div}
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={{
              width: ['0px', '800px'],
              height: ['0px', '800px'],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.3,
              ease: 'easeOut',
            }}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              border: (theme) => `1px solid ${theme.palette.mode === 'dark' ? 'rgba(240, 181, 29, 0.3)' : 'rgba(30, 64, 175, 0.2)'}`,
              borderRadius: '50%',
            }}
          />
        ))}

        {/* Mouse Reactive Glow */}
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          sx={{
            position: 'absolute',
            width: 256,
            height: 256,
            borderRadius: '50%',
            pointerEvents: 'none',
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(240, 181, 29, 0.2) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        {/* Digital Grid Overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            opacity: (theme) => theme.palette.mode === 'dark' ? 0.15 : 0.1,
            backgroundImage: `
              linear-gradient(rgba(30, 64, 175, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(30, 64, 175, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 100%)',
          }}
        />
      </Box>

      {/* Content with Parallax */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 10,
          maxWidth: 1280,
          mx: 'auto',
          px: { xs: 2, sm: 3, lg: 4 },
          py: 16,
          transform: `translateY(${scrollY * -0.05}px)`,
          opacity: Math.max(0, 1 - scrollY / 800),
        }}
      >
        <Box sx={{ maxWidth: 896, mx: 'auto', textAlign: 'center' }}>
          {/* Badge */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Chip
              icon={<AutoAwesome sx={{ color: 'secondary.main', filter: 'drop-shadow(0 0 8px rgba(217,119,6,0.4))' }} />}
              label="A Global Investment & Business Group"
              sx={{
                mb: 4,
                px: 3,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                backdropFilter: 'blur(12px)',
                background: (theme) =>
                  theme.palette.mode === 'dark'
                    ? 'linear-gradient(to right, rgba(245, 158, 11, 0.2), rgba(30, 64, 175, 0.15), rgba(245, 158, 11, 0.2))'
                    : 'linear-gradient(to right, rgba(30, 64, 175, 0.1), rgba(245, 158, 11, 0.05), rgba(30, 64, 175, 0.1))',
                border: (theme) =>
                  theme.palette.mode === 'dark'
                    ? '1px solid rgba(245, 158, 11, 0.4)'
                    : '1px solid rgba(30, 58, 138, 0.2)',
                boxShadow: (theme) =>
                  theme.palette.mode === 'dark'
                    ? '0 4px 6px -1px rgba(245, 158, 11, 0.2)'
                    : '0 4px 6px -1px rgba(30, 64, 175, 0.1)',
                '&:hover': {
                  background: (theme) =>
                    theme.palette.mode === 'dark'
                      ? 'linear-gradient(to right, rgba(245, 158, 11, 0.25), rgba(30, 64, 175, 0.2), rgba(245, 158, 11, 0.25))'
                      : 'linear-gradient(to right, rgba(30, 64, 175, 0.15), rgba(245, 158, 11, 0.1), rgba(30, 64, 175, 0.15))',
                },
              }}
            />
          </Box>

          {/* Main Heading */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '3rem', sm: '3.75rem', lg: '4.5rem', xl: '6rem' },
                fontWeight: 700,
                mb: 3,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              FIVA Investment
            </Typography>
          </Box>

          {/* Subtitle */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{
                fontSize: { xs: '1.25rem', sm: '1.5rem' },
                mb: 6,
                maxWidth: 768,
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Connecting governments, enterprises, and investors through strategic ventures, technology-driven solutions, and operational excellence.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Scroll Indicator */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        sx={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
        }}
      >
        <Box
          component={motion.div}
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          sx={{
            width: 24,
            height: 40,
            border: '2px solid',
            borderColor: 'primary.main',
            borderRadius: 100,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            p: 1,
            backdropFilter: 'blur(4px)',
            bgcolor: 'background.default',
            opacity: 0.2,
          }}
        >
          <Box
            component={motion.div}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            sx={{
              width: 6,
              height: 8,
              bgcolor: 'primary.main',
              borderRadius: 100,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
