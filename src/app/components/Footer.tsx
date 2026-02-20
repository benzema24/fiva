import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Linkedin, Facebook, Instagram, Twitter, Clock, Building2, Globe, ArrowUp } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import logoImage from '@/assets/a77b2fa456cdd05fb4b2465473c995357e5c2a77.png';

const locations = [
  {
    city: 'Prishtinë',
    country: 'Kosovo',
    address: 'Rr. Mark Isaku Lokali, Lagjja Tophane',
    secondLine: '10000 Prishtine, L1/A5',
    flag: '🇽🇰',
    email: 'info@fivainvestment.com',
    mapUrl: 'https://maps.google.com/?q=Mark+Isaku+Lokali,+Prishtinë,+Kosovo',
    officeType: 'Regional Office',
    timezone: 'CET (UTC+1)',
    region: 'Southeast Europe',
    phone: '+383 38 123 456',
  },
  {
    city: 'Abu Dhabi',
    country: 'UAE',
    address: '53th Floor, Office 5308, Addax Tower',
    secondLine: 'Reem Island, Abu Dhabi',
    flag: '🇦🇪',
    email: 'uae@fivainvestment.com',
    mapUrl: 'https://maps.google.com/?q=Addax+Tower,+Reem+Island,+Abu+Dhabi,+UAE',
    officeType: 'Regional Hub',
    timezone: 'GST (UTC+4)',
    region: 'Middle East',
    phone: '+971 2 123 4567',
  },
  {
    city: 'Birkirkara',
    country: 'Malta',
    address: 'Level 3 (Suite no. 3521), Tower Business Centre',
    secondLine: 'Triq It-Torri, Swatar, BKR 4013',
    flag: '🇲🇹',
    email: 'malta@fivainvestment.com',
    mapUrl: 'https://maps.google.com/?q=Tower+Business+Centre,+Swatar,+Birkirkara,+Malta',
    officeType: 'Headquarters',
    timezone: 'CET (UTC+1)',
    region: 'Southern Europe',
    phone: '+356 2123 4567',
  },
  {
    city: 'Dover',
    country: 'USA',
    address: '8 The Green, Suite A',
    secondLine: 'Dover 19901, Delaware',
    flag: '🇺🇸',
    email: 'usa@fivainvestment.com',
    mapUrl: 'https://maps.google.com/?q=8+The+Green,+Dover,+Delaware,+USA',
    officeType: 'Representative Office',
    timezone: 'EST (UTC-5)',
    region: 'North America',
    phone: '+1 302 123 4567',
  },
  {
    city: 'Benghazi',
    country: 'Libya',
    address: '6th Floor, Zaho Tower, Office 601',
    secondLine: '434F+GCC, Benghazi',
    flag: '🇱🇾',
    email: 'libya@fivainvestment.com',
    mapUrl: 'https://maps.google.com/?q=Zaho+Tower,+Benghazi,+Libya',
    officeType: 'Branch Office',
    timezone: 'EET (UTC+2)',
    region: 'North Africa',
    phone: '+218 61 123 4567',
  },
  {
    city: 'Dhaka',
    country: 'Bangladesh',
    address: 'Office 3-A, Nagar Bonolata, House 24, Road Sonargoan',
    secondLine: 'Janapath, Sector #11, Uttara Webst, Dhaka-1230',
    flag: '🇧🇩',
    email: 'bangladesh@fivainvestment.com',
    mapUrl: 'https://maps.google.com/?q=House+24,+Road+Sonargoan,+Uttara,+Dhaka,+Bangladesh',
    officeType: 'Regional Office',
    timezone: 'BST (UTC+6)',
    region: 'South Asia',
    phone: '+880 2 123 4567',
  },
  {
    city: 'Skopje',
    country: 'North Macedonia',
    address: 'QT Mavrovesja, Llamella 44,11',
    secondLine: 'Floor 1, Skopje',
    flag: '🇲🇰',
    email: 'macedonia@fivainvestment.com',
    mapUrl: 'https://maps.google.com/?q=QT+Mavrovesja,+Skopje,+North+Macedonia',
    officeType: 'Branch Office',
    timezone: 'CET (UTC+1)',
    region: 'Southeast Europe',
    phone: '+389 2 123 456',
  },
  {
    city: 'Tiranë',
    country: 'Albania',
    address: 'Rruga e Kavajës, Qendra "Sun Tower"',
    secondLine: 'Kati I, Tiranë',
    flag: '🇦🇱',
    email: 'albania@fivainvestment.com',
    mapUrl: 'https://maps.google.com/?q=Sun+Tower,+Rruga+e+Kavajës,+Tiranë,+Albania',
    officeType: 'Branch Office',
    timezone: 'CET (UTC+1)',
    region: 'Southeast Europe',
    phone: '+355 4 123 456',
  },
];

export function Footer() {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  const scrollToSection = (sectionId: string) => {
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

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(96,165,250,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-amber-600/10 to-orange-500/10 rounded-full blur-3xl"></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <img 
              src={logoImage} 
              alt="FIVA Investment" 
              className="h-10 w-auto mb-4"
            />
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Connecting global businesses with opportunities across the world through strategic 
              partnerships and innovative solutions.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              <motion.a
                href="mailto:info@fivainvestment.com"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-foreground group-hover:text-primary transition-colors">
                    info@fivainvestment.com
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="https://instagram.com/fiva.investment"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-600/10 to-orange-500/10 flex items-center justify-center group-hover:from-amber-600/20 group-hover:to-orange-500/20 transition-colors duration-300">
                  <Instagram className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Instagram</p>
                  <p className="text-foreground group-hover:text-amber-600 transition-colors">
                    fiva.investment
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="https://linkedin.com/company/fivainvestment"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                  <Linkedin className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">LinkedIn</p>
                  <p className="text-foreground group-hover:text-blue-500 transition-colors">
                    fivainvestment
                  </p>
                </div>
              </motion.a>
            </div>

            {/* Quick Links */}
            <div className="pt-4 border-t border-border/50">
              <h4 className="text-sm font-bold mb-3 text-foreground">Quick Links</h4>
              <div className="flex flex-wrap gap-2">
                {['Home', 'Services', 'About', 'Testimonials', 'Contact'].map((item, index) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-1 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary text-sm text-muted-foreground transition-all duration-300"
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Global Locations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-6">
              <Globe className="h-5 w-5 text-primary" />
              <h4 className="text-xl font-bold text-foreground">Global Presence</h4>
              <span className="text-xs text-muted-foreground ml-2">({locations.length} Locations)</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
              {locations.map((location, index) => (
                <motion.div
                  key={location.city}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  whileHover={{ y: -6, scale: 1.05 }}
                  onHoverStart={() => setHoveredLocation(location.city)}
                  onHoverEnd={() => setHoveredLocation(null)}
                  className="group relative cursor-pointer"
                >
                  {/* Enhanced Glow Effect on Hover */}
                  {hoveredLocation === location.city && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute -inset-1 bg-gradient-to-r from-primary/40 via-cyan-500/40 to-primary/40 rounded-lg blur-md"
                    />
                  )}
                  
                  <div className="relative bg-background/60 backdrop-blur-sm border border-border/30 rounded-lg p-3 hover:border-primary/50 hover:bg-background/90 transition-all duration-300 overflow-hidden">
                    {/* Office Type Badge */}
                    <div className="absolute top-1 right-1">
                      <motion.span 
                        initial={{ scale: 0 }}
                        animate={{ scale: hoveredLocation === location.city ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-[8px] font-bold uppercase flex items-center gap-1"
                      >
                        <Building2 className="h-2 w-2" />
                        {location.officeType}
                      </motion.span>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <motion.span 
                        className="text-xl"
                        whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.4 }}
                      >
                        {location.flag}
                      </motion.span>
                      <div className="flex-1 min-w-0">
                        <h6 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                          {location.city}
                        </h6>
                        <p className="text-[10px] text-muted-foreground">{location.country}</p>
                      </div>
                    </div>

                    {/* Address */}
                    <p className="text-[10px] text-muted-foreground/70 mb-2 line-clamp-2">
                      {location.address}
                      {location.secondLine && ` ${location.secondLine}`}
                    </p>

                    {/* Expandable Details on Hover */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: hoveredLocation === location.city ? 'auto' : 0,
                        opacity: hoveredLocation === location.city ? 1 : 0 
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mb-2 space-y-1"
                    >
                      <div className="flex items-center gap-1 text-[9px] text-muted-foreground">
                        <Globe className="h-2.5 w-2.5 text-cyan-500" />
                        <span className="font-medium text-cyan-500">{location.region}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[9px] text-muted-foreground">
                        <Clock className="h-2.5 w-2.5 text-blue-500" />
                        <span>{location.timezone}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[9px] text-muted-foreground">
                        <Phone className="h-2.5 w-2.5 text-green-500" />
                        <a href={`tel:${location.phone}`} className="hover:text-primary transition-colors">
                          {location.phone}
                        </a>
                      </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <div className="flex gap-1">
                      <motion.a
                        href={location.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 px-2 py-1 rounded bg-primary/10 hover:bg-primary/20 text-primary text-[10px] font-medium transition-colors flex items-center justify-center gap-1"
                      >
                        <MapPin className="h-2.5 w-2.5" />
                        Map
                      </motion.a>
                      <motion.a
                        href={`mailto:${location.email}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                        className="px-2 py-1 rounded border border-primary/20 hover:border-primary/40 text-primary text-[10px] font-medium transition-colors flex items-center justify-center"
                      >
                        <Mail className="h-2.5 w-2.5" />
                      </motion.a>
                      <motion.a
                        href={`tel:${location.phone}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                        className="px-2 py-1 rounded border border-green-500/20 hover:border-green-500/40 text-green-500 text-[10px] font-medium transition-colors flex items-center justify-center"
                      >
                        <Phone className="h-2.5 w-2.5" />
                      </motion.a>
                    </div>

                    {/* Connection Line Indicator */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: hoveredLocation === location.city ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-cyan-500 to-primary origin-left"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-sm"
            >
              © All rights reserved, 2023 - FIVA Investment
            </motion.p>
            
            <div className="flex items-center gap-6">
              <div className="flex gap-6 text-sm">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                  <motion.a
                    key={item}
                    href="#"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-muted-foreground hover:text-primary transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </motion.a>
                ))}
              </div>
              
              {/* Scroll to Top Button */}
              <motion.div
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={scrollToTop}
                  className="rounded-full bg-gradient-to-r from-primary/10 to-cyan-500/10 hover:from-primary hover:to-cyan-500 hover:text-white transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  <ArrowUp className="h-4 w-4 relative z-10" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}