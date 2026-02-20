import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Building2, Leaf, Cpu, Users } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/app/components/ui/button';
import { ContactModal } from '@/app/components/ContactModal';
import logoImage from '@/assets/a77b2fa456cdd05fb4b2465473c995357e5c2a77.png';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVerticalsDropdownOpen, setIsVerticalsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['services', 'companies', 'about', 'news'];
      const headerOffset = 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= headerOffset && rect.bottom >= headerOffset) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        scrollToElement(sectionId);
      }, 100);
    } else {
      scrollToElement(sectionId);
    }
  };

  const scrollToElement = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Height of fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { name: 'Our Companies', path: '/companies' },
    { name: 'Why Fiva', path: '/about' },
    { name: 'News', id: 'news' },
    { name: 'Careers', id: 'careers' },
  ];

  const verticalServices = [
    { name: 'Public Services', path: '/services/public-services', icon: Building2 },
    { name: 'Energy & Climate', path: '/services/energy-climate', icon: Leaf },
    { name: 'Technology & Innovation', path: '/services/technology-innovation', icon: Cpu },
    { name: 'Human Capital & Society', path: '/services/human-capital', icon: Users },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: 'spring' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-xl shadow-lg border-b border-border' 
          : 'bg-background/60 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button 
              onClick={() => scrollToSection('home')}
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src={logoImage} 
                alt="FIVA Investment" 
                className="h-8 w-auto"
              />
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Our Verticals Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="relative"
              onMouseEnter={() => setIsVerticalsDropdownOpen(true)}
              onMouseLeave={() => setIsVerticalsDropdownOpen(false)}
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('services');
                }}
                className={`px-4 py-2 transition-all duration-300 relative group flex items-center gap-1 ${
                  activeSection === 'services' || location.pathname.includes('/services/')
                    ? 'text-primary' 
                    : 'text-foreground/80 hover:text-primary'
                }`}
              >
                Our Verticals
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isVerticalsDropdownOpen ? 'rotate-180' : ''}`} />
                <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-cyan-400 transition-all duration-300 ${
                  activeSection === 'services' || location.pathname.includes('/services/') ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                }`}></span>
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isVerticalsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-card/95 backdrop-blur-xl border border-border rounded-lg shadow-xl overflow-hidden"
                  >
                    {verticalServices.map((service, index) => {
                      const Icon = service.icon;
                      const colorClasses = 
                        service.name === 'Public Services' 
                          ? 'text-primary group-hover:text-primary' 
                          : service.name === 'Energy & Climate'
                          ? 'text-green-600 dark:text-green-400 group-hover:text-green-600 dark:group-hover:text-green-400'
                          : service.name === 'Technology & Innovation'
                          ? 'text-blue-600 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                          : 'text-orange-600 dark:text-orange-400 group-hover:text-orange-600 dark:group-hover:text-orange-400';
                      
                      const bgColorClasses =
                        service.name === 'Public Services' 
                          ? 'bg-primary/10' 
                          : service.name === 'Energy & Climate'
                          ? 'bg-green-500/10'
                          : service.name === 'Technology & Innovation'
                          ? 'bg-blue-500/10'
                          : 'bg-orange-500/10';
                      
                      return (
                        <motion.button
                          key={service.path}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                          onClick={() => {
                            navigate(service.path);
                            setIsVerticalsDropdownOpen(false);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className={`w-full text-left px-4 py-3.5 transition-all duration-300 relative overflow-hidden group flex items-center gap-3 ${
                            location.pathname === service.path
                              ? 'bg-primary/10 text-primary'
                              : 'text-foreground hover:bg-muted/50'
                          }`}
                        >
                          <div className={`relative flex-shrink-0 w-10 h-10 ${bgColorClasses} rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                            <Icon className={`h-5 w-5 ${colorClasses}`} />
                          </div>
                          <span className="relative text-sm font-medium">{service.name}</span>
                        </motion.button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              >
                {item.path ? (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(item.path);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`px-4 py-2 transition-all duration-300 relative group ${
                      location.pathname === item.path
                        ? 'text-primary' 
                        : 'text-foreground/80 hover:text-primary'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-cyan-400 transition-all duration-300 ${
                      location.pathname === item.path ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                    }`}></span>
                  </button>
                ) : item.id === 'careers' || item.id === 'news' ? (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/${item.id}`);
                    }}
                    className={`px-4 py-2 transition-all duration-300 relative group ${
                      location.pathname === `/${item.id}`
                        ? 'text-primary' 
                        : 'text-foreground/80 hover:text-primary'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-cyan-400 transition-all duration-300 ${
                      location.pathname === `/${item.id}` ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                    }`}></span>
                  </button>
                ) : (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className={`px-4 py-2 transition-all duration-300 relative group ${
                      activeSection === item.id 
                        ? 'text-primary' 
                        : 'text-foreground/80 hover:text-primary'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-cyan-400 transition-all duration-300 ${
                      activeSection === item.id ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                    }`}></span>
                  </button>
                )}
              </motion.div>
            ))}
            
            {/* Theme Toggle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <ThemeToggle />
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                onClick={() => navigate('/contact')}
                className="ml-2 bg-[#f0b51d] hover:bg-[#d9a019] text-white font-semibold shadow-lg shadow-[#f0b51d]/30 hover:shadow-[#f0b51d]/50 transition-all duration-300"
              >
                Get in Touch
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="md:hidden overflow-hidden bg-card/95 backdrop-blur-xl border-t border-border"
      >
        <div className="px-4 py-6 space-y-2">
          {/* Our Verticals in Mobile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : -20 }}
            transition={{ duration: 0.3, delay: 0 }}
          >
            <div className="text-sm font-semibold text-muted-foreground px-4 py-2">Our Verticals</div>
            {verticalServices.map((service, index) => {
              const Icon = service.icon;
              const colorClasses = 
                service.name === 'Public Services' 
                  ? 'text-primary' 
                  : service.name === 'Energy & Climate'
                  ? 'text-green-600 dark:text-green-400'
                  : service.name === 'Technology & Innovation'
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-orange-600 dark:text-orange-400';
              
              const bgColorClasses =
                service.name === 'Public Services' 
                  ? 'bg-primary/10' 
                  : service.name === 'Energy & Climate'
                  ? 'bg-green-500/10'
                  : service.name === 'Technology & Innovation'
                  ? 'bg-blue-500/10'
                  : 'bg-orange-500/10';
              
              return (
                <button
                  key={service.path}
                  onClick={() => {
                    navigate(service.path);
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg transition-all duration-300 relative overflow-hidden group ${
                    location.pathname === service.path
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground/80 hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-cyan-400/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  <div className={`relative flex-shrink-0 w-9 h-9 ${bgColorClasses} rounded-lg flex items-center justify-center`}>
                    <Icon className={`h-4 w-4 ${colorClasses}`} />
                  </div>
                  <span className="relative text-sm font-medium">{service.name}</span>
                </button>
              );
            })}
          </motion.div>

          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : -20 }}
              transition={{ duration: 0.3, delay: (index + 1) * 0.05 }}
            >
              {item.path ? (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(item.path);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 relative overflow-hidden group ${
                    location.pathname === item.path
                      ? 'bg-primary/10 text-primary' 
                      : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-cyan-400/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  <span className="relative">{item.name}</span>
                </button>
              ) : item.id === 'careers' || item.id === 'news' ? (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/${item.id}`);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 relative overflow-hidden group ${
                    location.pathname === `/${item.id}`
                      ? 'bg-primary/10 text-primary' 
                      : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-cyan-400/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  <span className="relative">{item.name}</span>
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 relative overflow-hidden group ${
                    activeSection === item.id 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-cyan-400/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  <span className="relative">{item.name}</span>
                </button>
              )}
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : 20 }}
            transition={{ duration: 0.3, delay: 0.25 }}
          >
            <Button
              onClick={() => navigate('/contact')}
              className="w-full mt-4 bg-gradient-to-r from-[#f0b51d] to-[#d9a019] hover:from-[#d9a019] hover:to-[#c28f15] shadow-lg shadow-[#f0b51d]/30"
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </motion.nav>
  );
}