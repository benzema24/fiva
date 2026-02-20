import image_7a1bcd6519b0eb7c091d66c43264317e4959d7c5 from '@/assets/7a1bcd6519b0eb7c091d66c43264317e4959d7c5.png';
import image_f28e527012ecc0bce9d045dbcef9bd83977854f0 from '@/assets/f28e527012ecc0bce9d045dbcef9bd83977854f0.png';
import { motion } from 'motion/react';
import { Target, Lightbulb, TrendingUp, Globe, Building2 } from 'lucide-react';
import { useParallax } from '@/app/hooks/useParallax';

const principles = [
  {
    icon: TrendingUp,
    title: 'Sustainability',
    description: 'Building long-term value through responsible business practices and sustainable growth strategies.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Embracing cutting-edge solutions and forward-thinking approaches to solve complex challenges.',
    gradient: 'from-blue-600 to-blue-500',
  },
  {
    icon: Target,
    title: 'Value Creation',
    description: 'Delivering measurable results and creating lasting value for our partners and stakeholders.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Leveraging international networks and expertise to connect opportunities across borders.',
    gradient: 'from-amber-600 to-orange-500',
  },
];

export function About() {
  const scrollY = useParallax();
  
  return (
    <section id="about" className="py-24 bg-secondary relative overflow-hidden">
      {/* Animated Background with Parallax */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(96,165,250,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.05)_1px,transparent_1px)] bg-[size:6rem_6rem]"
        style={{
          transform: `translateY(${(scrollY - 800) * 0.02}px)`,
        }}
      ></div>
      
      {/* Floating Gradient Orbs with Parallax */}
      <div 
        className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-full blur-3xl"
        style={{
          transform: `translate(${(scrollY - 800) * 0.015}px, ${(scrollY - 800) * 0.03}px)`,
        }}
      ></div>
      <div 
        className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-br from-amber-600/10 to-orange-500/10 rounded-full blur-3xl"
        style={{
          transform: `translate(${(scrollY - 800) * -0.015}px, ${(scrollY - 800) * -0.02}px)`,
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
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
              <span className="text-sm font-medium relative z-10 text-blue-950 dark:text-foreground">About Us</span>
            </div>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-[rgb(15,23,42)] dark:text-white">
              About FIVA Investment
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A global investment and business group building, operating, and scaling strategic ventures across multiple regions and industries.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-[rgb(15,23,42)] dark:text-white">
                Who We Are
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                FIVA Investment is a global investment and business group focused on building, operating, and scaling strategic ventures across multiple regions and industries.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With an international footprint spanning the Middle East, Europe, Africa, and North America, we combine global expertise with local execution to create sustainable value for governments, enterprises, and partners.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { value: '20+', label: 'Years Experience' },
                  { value: '15+', label: 'Countries' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 rounded-xl bg-gradient-to-br from-card to-card/50 border border-border backdrop-blur-sm hover:border-primary/50 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-[rgb(15,23,42)] dark:text-white group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-96 rounded-2xl overflow-hidden group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-cyan-500 to-blue-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <img
                src={image_f28e527012ecc0bce9d045dbcef9bd83977854f0}
                alt="FIVA Team"
                className="relative w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-80 rounded-2xl overflow-hidden order-2 md:order-1 group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-amber-600 to-orange-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <img
                src={image_7a1bcd6519b0eb7c091d66c43264317e4959d7c5}
                alt="Leadership"
                className="relative w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-amber-600 bg-clip-text text-[rgb(15,23,42)] dark:text-white">
                Leadership Excellence
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Under the guidance of our experienced leadership team, FIVA Investment has established 
                itself as a trusted partner for businesses seeking to expand their global footprint.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our Chairman and CEO bring decades of combined expertise in international business, 
                finance, and strategic development, ensuring every partnership is built on a foundation 
                of trust and proven success.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}