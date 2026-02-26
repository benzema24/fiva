import { motion, useScroll, useTransform } from 'motion/react';
import { Box, Typography, Button, Container } from '@mui/material';
import { AutoAwesome, TrendingUp, ArrowForward } from '@mui/icons-material';
import { useState, useEffect } from 'react';

export function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Box
      component="section"
      id="home"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #0A1628 0%, #11203A 50%, #0A1628 100%)'
            : 'linear-gradient(135deg, #FDFCFA 0%, #F7F5F0 50%, #FDFCFA 100%)',
      }}
    >
      {/* Animated Background Elements */}
      <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        {/* Floating Gradient Orbs */}
        <Box
          component={motion.div}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          sx={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: (theme) =>
              theme.palette.mode === 'dark'
                ? 'radial-gradient(circle, rgba(196, 153, 59, 0.15) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(196, 153, 59, 0.1) 0%, transparent 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
          }}
        />

        <Box
          component={motion.div}
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          sx={{
            position: 'absolute',
            bottom: '15%',
            right: '15%',
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: (theme) =>
              theme.palette.mode === 'dark'
                ? 'radial-gradient(circle, rgba(62, 80, 104, 0.2) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(34, 58, 92, 0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
          }}
        />

        {/* Subtle Grid Pattern */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: (theme) =>
              theme.palette.mode === 'dark'
                ? 'linear-gradient(rgba(196, 153, 59, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(196, 153, 59, 0.05) 1px, transparent 1px)'
                : 'linear-gradient(rgba(34, 58, 92, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 58, 92, 0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            opacity: 0.5,
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          }}
        />

        {/* Animated Lines */}
        {[...Array(3)].map((_, i) => (
          null
        ))}

        {/* Floating Icons/Shapes */}
        {[
          { Icon: TrendingUp, delay: 0, x: '15%', y: '20%' },
          { Icon: AutoAwesome, delay: 2, x: '85%', y: '30%' },
          { Icon: TrendingUp, delay: 4, x: '10%', y: '75%' },
          { Icon: AutoAwesome, delay: 6, x: '90%', y: '70%' },
        ].map((item, i) => (
          <Box
            key={i}
            component={motion.div}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 10, -10, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: item.delay,
            }}
            sx={{
              position: 'absolute',
              left: item.x,
              top: item.y,
            }}
          >
            <item.Icon
              sx={{
                fontSize: 40,
                color: 'secondary.main',
                opacity: 0.3,
                filter: 'blur(1px)',
              }}
            />
          </Box>
        ))}

        {/* Mouse-Following Gradient */}
        <Box
          sx={{
            position: 'absolute',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: (theme) =>
              theme.palette.mode === 'dark'
                ? 'radial-gradient(circle, rgba(196, 153, 59, 0.08) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(196, 153, 59, 0.05) 0%, transparent 70%)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'left 0.3s ease-out, top 0.3s ease-out',
          }}
        />
      </Box>

      {/* Content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        <Box
          component={motion.div}
          style={{ opacity, scale }}
          sx={{
            textAlign: 'center',
            px: { xs: 2, sm: 4 },
            py: { xs: 8, md: 12 },
          }}
        >
          {/* Main Heading with Stagger Animation */}
          <Box sx={{ mb: 3 }}>
            {['FIVA', 'Investment'].map((word, i) => (
              <Box
                key={word}
                component={motion.div}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
                sx={{ display: 'inline-block', mx: 1 }}
              >
                <Typography
                  variant="h1"
                  component="span"
                  sx={{
                    fontSize: { xs: '3rem', sm: '4.5rem', md: '5.5rem', lg: '6.5rem' },
                    fontWeight: 800,
                    lineHeight: 1.1,
                    letterSpacing: '-0.03em',
                    background: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'linear-gradient(135deg, #FFFFFF 0%, #FFFFFF 100%)'
                        : 'linear-gradient(135deg, #0F2A4A 0%, #223A5C 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    position: 'relative',
                  }}
                >
                  {word}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Subtitle */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Typography className="text-[20px]"
              variant="h5"
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.35rem', md: '1.5rem' },
                mb: 6,
                maxWidth: 800,
                mx: 'auto',
                lineHeight: 1.7,
                color: 'text.secondary',
                fontWeight: 400,
              }}
            >
              FIVA Investment is a diversified holding company investing in digitalisation, real estate, health industry, and high-potential startups — creating sustainable value through strategic investments and operational excellence.
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Scroll Indicator */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
        }}
      >
        <Box
          component={motion.div}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          sx={{
            width: 28,
            height: 45,
            border: (theme) =>
              theme.palette.mode === 'dark'
                ? '2px solid rgba(196, 153, 59, 0.5)'
                : '2px solid rgba(34, 58, 92, 0.3)',
            borderRadius: 100,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            p: 1,
            backdropFilter: 'blur(10px)',
          }}
        >
          <Box
            component={motion.div}
            animate={{ opacity: [1, 0.3, 1], y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            sx={{
              width: 4,
              height: 8,
              bgcolor: (theme) =>
                theme.palette.mode === 'dark' ? 'secondary.main' : 'primary.main',
              borderRadius: 100,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}