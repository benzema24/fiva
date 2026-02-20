import { motion } from 'motion/react';
import { Sparkles, Building2, Leaf, Cpu, Users, ArrowRight } from 'lucide-react';
import { Box, Typography, ButtonBase } from '@mui/material';
import { useParallax } from '@/app/hooks/useParallax';
import { useNavigate } from 'react-router';

interface Vertical {
  name: string;
  description: string;
  path: string;
  icon: any;
  gradient: string;
  bgColor: string;
  iconColor: string;
}

const verticals: Vertical[] = [
  {
    name: 'Public Services',
    description: 'Transforming public sector delivery through strategic consulting and innovative solutions.',
    path: '/services/public-services',
    icon: Building2,
    gradient: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
    bgColor: 'rgba(59, 130, 246, 0.1)',
    iconColor: '#2563eb'
  },
  {
    name: 'Energy & Climate',
    description: 'Driving sustainable energy transition and climate-resilient infrastructure development.',
    path: '/services/energy-climate',
    icon: Leaf,
    gradient: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
    bgColor: 'rgba(16, 185, 129, 0.1)',
    iconColor: '#059669'
  },
  {
    name: 'Technology & Innovation',
    description: 'Advancing digital transformation and next-generation technology solutions.',
    path: '/services/technology-innovation',
    icon: Cpu,
    gradient: 'linear-gradient(135deg, #0891b2 0%, #3b82f6 100%)',
    bgColor: 'rgba(8, 145, 178, 0.1)',
    iconColor: '#0891b2'
  },
  {
    name: 'Human Capital & Society',
    description: 'Building resilient communities through workforce development and social innovation.',
    path: '/services/human-capital',
    icon: Users,
    gradient: 'linear-gradient(135deg, #ea580c 0%, #f59e0b 100%)',
    bgColor: 'rgba(245, 158, 11, 0.1)',
    iconColor: '#ea580c'
  }
];

export function OurCompanies() {
  const scrollY = useParallax();
  const navigate = useNavigate();

  return (
    <Box
      component="section"
      id="companies"
      sx={{
        position: 'relative',
        py: 16,
        overflow: 'hidden',
        bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)',
      }}
    >
      {/* Background Effects */}
      <Box sx={{ position: 'absolute', inset: 0 }}>
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(17,94,103,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(17,94,103,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            transform: `translateY(${scrollY * 0.02}px)`,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '25%',
            left: 0,
            width: 384,
            height: 384,
            background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.1) 0%, transparent 100%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '25%',
            right: 0,
            width: 384,
            height: 384,
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, transparent 100%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
          }}
        />
      </Box>

      <Box sx={{ position: 'relative', zIndex: 10, maxWidth: 1280, mx: 'auto', px: { xs: 2, sm: 3, lg: 4 } }}>
        {/* Section Header */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: 'center', mb: 8 }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 3,
              py: 1.5,
              mb: 3,
              borderRadius: 100,
              border: '1px solid',
              backdropFilter: 'blur(8px)',
              position: 'relative',
              overflow: 'hidden',
              background: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'linear-gradient(to right, rgba(245, 158, 11, 0.2), rgba(30, 64, 175, 0.15), rgba(245, 158, 11, 0.2))'
                  : 'linear-gradient(to right, rgba(15, 23, 42, 0.1), rgba(245, 158, 11, 0.05), rgba(15, 23, 42, 0.1))',
              borderColor: (theme) =>
                theme.palette.mode === 'dark' ? 'rgba(245, 158, 11, 0.4)' : 'rgba(15, 23, 42, 0.2)',
              boxShadow: (theme) =>
                theme.palette.mode === 'dark'
                  ? '0 8px 16px -4px rgba(245, 158, 11, 0.2)'
                  : '0 8px 16px -4px rgba(15, 23, 42, 0.1)',
            }}
          >
            <Sparkles
              style={{
                width: 20,
                height: 20,
                color: '#f59e0b',
                filter: 'drop-shadow(0 0 8px rgba(217,119,6,0.4))',
              }}
            />
            <Typography
              sx={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: (theme) => theme.palette.mode === 'dark' ? 'text.primary' : 'rgb(15, 23, 42)',
              }}
            >
              Our Strategic Focus Areas
            </Typography>
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.25rem', sm: '3rem', lg: '3.75rem' },
              fontWeight: 700,
              textAlign: 'center',
              mb: 2,
            }}
          >
            <Box component="span" sx={{ color: 'text.primary' }}>Our </Box>
            <Box component="span" sx={{ color: (theme) => theme.palette.mode === 'dark' ? 'white' : 'rgb(15, 23, 42)' }}>
              Verticals
            </Box>
          </Typography>

          <Typography
            sx={{
              fontSize: '1.125rem',
              color: 'text.secondary',
              maxWidth: 768,
              mx: 'auto',
              lineHeight: 1.7,
            }}
          >
            Four specialized verticals delivering transformative impact across critical global sectors.
          </Typography>
        </Box>

        {/* Verticals Grid - 2x2 Layout */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 3,
            maxWidth: 1024,
            mx: 'auto',
            mb: 8,
          }}
        >
          {verticals.map((vertical, index) => {
            const Icon = vertical.icon;
            return (
              <Box
                key={vertical.name}
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                sx={{
                  position: 'relative',
                  '&:hover .card-glow': {
                    opacity: 0.2,
                  },
                  '&:hover .icon-container': {
                    transform: 'scale(1.1)',
                  },
                  '&:hover .icon-glow': {
                    opacity: 0.3,
                  },
                  '&:hover .arrow': {
                    transform: 'translateX(4px)',
                  },
                  '&:hover .learn-more': {
                    gap: 1.5,
                  },
                }}
              >
                {/* Card Glow Effect */}
                <Box
                  className="card-glow"
                  sx={{
                    position: 'absolute',
                    inset: -1,
                    background: vertical.gradient,
                    opacity: 0,
                    borderRadius: 6,
                    filter: 'blur(8px)',
                    transition: 'opacity 0.5s',
                  }}
                />

                {/* Card Content */}
                <ButtonBase
                  onClick={() => navigate(vertical.path)}
                  sx={{
                    position: 'relative',
                    width: '100%',
                    backdropFilter: 'blur(8px)',
                    bgcolor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 6,
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    textAlign: 'left',
                    transition: 'all 0.5s',
                    '&:hover': {
                      borderColor: 'primary.main',
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    },
                  }}
                >
                  {/* Icon Container */}
                  <Box
                    className="icon-container"
                    sx={{
                      position: 'relative',
                      width: 64,
                      height: 64,
                      bgcolor: vertical.bgColor,
                      borderRadius: 4,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                      transition: 'all 0.5s',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <Icon style={{ width: 32, height: 32, color: vertical.iconColor }} />
                    {/* Icon glow effect on hover */}
                    <Box
                      className="icon-glow"
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background: vertical.gradient,
                        opacity: 0,
                        borderRadius: 4,
                        filter: 'blur(24px)',
                        transition: 'opacity 0.5s',
                      }}
                    />
                  </Box>

                  {/* Vertical Name */}
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: 'text.primary',
                      mb: 2,
                      transition: 'color 0.3s',
                    }}
                  >
                    {vertical.name}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      fontSize: '1rem',
                      color: 'text.secondary',
                      lineHeight: 1.7,
                      mb: 3,
                      flex: 1,
                    }}
                  >
                    {vertical.description}
                  </Typography>

                  {/* Learn More Link */}
                  <Box
                    className="learn-more"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      color: 'primary.main',
                      fontWeight: 600,
                      transition: 'gap 0.3s',
                    }}
                  >
                    Learn More
                    <ArrowRight
                      className="arrow"
                      style={{
                        width: 20,
                        height: 20,
                        transition: 'transform 0.3s',
                      }}
                    />
                  </Box>
                </ButtonBase>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
