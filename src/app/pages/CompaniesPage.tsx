import { motion } from 'motion/react';
import { Sparkles, Building2, Leaf, Cpu, Users, ArrowRight, Award } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { useNavigate } from 'react-router';
import { useParallax } from '@/app/hooks/useParallax';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import sspLogo from '@/assets/2039c78195e975d926c2e792c415fa215c0733c9.png';
import streamlineSynergyLogo from '@/assets/db00baa0fbbf7d96883b2857d74836eb78aa7011.png';
import hyperEdgeSolutionsLogo from '@/assets/ed848c70bae20a003d755922f90abbbee51de7ad.png';
import sgssLogo from '@/assets/555322bafc5b081d65cba7bfb52d8a85b2e13033.png';
import globecoreHoldingLogo from '@/assets/45c0f4718c90e314189b4f2c703e109f8216a6af.png';
import healthifyTechnologiesLogo from '@/assets/aedb0be12f3414a759ad014be92144b0e1a7319a.png';
import parentcareLogo from '@/assets/5c1a2f1d83ba28a10a5a9d4d031050784b332105.png';
import fivaRecruitmentLogo from '@/assets/03ef0002056eaff8ba09e77b5f112e8c7042bf5e.png';

interface Company {
  name: string;
  description: string;
  website: string;
  gradient: string;
  logo?: string;
  industry: string;
  founded: string;
  employees: string;
  location: string;
  status: 'Growing' | 'Established' | 'Launch';
}

const companies: Company[] = [
  {
    name: 'FIVA Recruitment',
    description: 'Talent acquisition and workforce solutions across key strategic industries.',
    website: 'https://fivarecruitment.com/',
    gradient: 'from-blue-500 to-cyan-500',
    logo: fivaRecruitmentLogo,
    industry: 'Recruitment',
    founded: '2015',
    employees: '150',
    location: 'Global',
    status: 'Established'
  },
  {
    name: 'HYPER EDGE SOLUTIONS',
    description: 'Advanced technology solutions and enterprise digital transformation services.',
    website: 'http://hyperedgesolutions.net/',
    gradient: 'from-green-500 to-emerald-500',
    logo: hyperEdgeSolutionsLogo,
    industry: 'Technology',
    founded: '2018',
    employees: '100',
    location: 'Global',
    status: 'Growing'
  },
  {
    name: 'Healthify Technologies',
    description: 'Digital health platforms delivering innovative healthcare technology solutions.',
    website: 'http://hellocare.ai/',
    gradient: 'from-red-500 to-orange-500',
    logo: healthifyTechnologiesLogo,
    industry: 'Healthcare',
    founded: '2020',
    employees: '50',
    location: 'Global',
    status: 'Launch'
  },
  {
    name: 'Streamline Synergy',
    description: 'Business process optimization and operational excellence solutions.',
    website: 'https://streamlinesynergy.com/',
    gradient: 'from-indigo-500 to-blue-500',
    logo: streamlineSynergyLogo,
    industry: 'Consulting',
    founded: '2017',
    employees: '80',
    location: 'Global',
    status: 'Established'
  },
  {
    name: 'SGSS',
    description: 'Smart government solutions and digital transformation for public sector.',
    website: '#',
    gradient: 'from-teal-500 to-cyan-500',
    logo: sgssLogo,
    industry: 'Government',
    founded: '2012',
    employees: '120',
    location: 'Global',
    status: 'Established'
  },
  {
    name: 'GLOBECORE HOLDING',
    description: 'International investment holding company with diversified portfolio.',
    website: '#',
    gradient: 'from-amber-500 to-yellow-500',
    logo: globecoreHoldingLogo,
    industry: 'Investment',
    founded: '2008',
    employees: '300',
    location: 'Global',
    status: 'Established'
  },
  {
    name: 'SSP',
    description: 'Strategic services platform delivering integrated business solutions.',
    website: 'https://sspfz.com/',
    gradient: 'from-orange-600 to-amber-600',
    logo: sspLogo,
    industry: 'Consulting',
    founded: '2014',
    employees: '70',
    location: 'Global',
    status: 'Established'
  },
  {
    name: 'ParentCare',
    description: 'Digital parenting solutions and family support technology platforms.',
    website: '#',
    gradient: 'from-blue-500 to-cyan-500',
    logo: parentcareLogo,
    industry: 'Technology',
    founded: '2019',
    employees: '40',
    location: 'Global',
    status: 'Launch'
  }
];

export function CompaniesPage() {
  const scrollY = useParallax();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section with Same Design as Hero Component */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Clean Futuristic Background with Parallax */}
        <div className="absolute inset-0">
          {/* Subtle Grid Pattern */}
          <div 
            className="absolute inset-0 bg-[linear-gradient(rgba(30,64,175,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(30,64,175,0.05)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_40%,transparent_100%)]"
            style={{
              transform: `translateY(${scrollY * 0.03}px)`,
            }}
          ></div>
          
          {/* Animated Gradient Orb - Top with Parallax */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-blue-700/20 via-blue-600/15 to-transparent rounded-full blur-3xl"
            style={{
              transform: `translate(-50%, ${scrollY * 0.08}px)`,
            }}
          />
          
          {/* Animated Gradient Orb - Bottom Right */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-gradient-to-tl from-amber-600/20 via-orange-500/15 to-transparent rounded-full blur-3xl"
            style={{
              transform: `translate(50%, ${scrollY * -0.05}px)`,
            }}
          />

          {/* Third Orb - Cyan accent */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl"
          />

          {/* Floating Dots - Minimal */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: `${20 + i * 15}%`,
                y: `${30 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [`${30 + (i % 3) * 20}%`, `${30 + (i % 3) * 20 + 10}%`, `${30 + (i % 3) * 20}%`],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.5,
              }}
              className="absolute w-2 h-2 bg-primary/40 rounded-full"
              style={{
                filter: 'blur(1px)',
                transform: `translateY(${scrollY * (0.04 + i * 0.01)}px)`,
              }}
            />
          ))}

          {/* Horizontal Lines - Scanline Effect */}
          <motion.div
            animate={{
              y: ['-100%', '200%'],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
          />
          
          {/* Vertical Accent Lines */}
          <div className="absolute inset-0 flex justify-center gap-32 opacity-10">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  ease: 'easeOut',
                }}
                className="w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent"
                style={{
                  transform: `translateY(${scrollY * (0.05 + i * 0.02)}px)`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div 
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
          style={{
            transform: `translateY(${scrollY * -0.05}px)`,
            opacity: Math.max(0, 1 - scrollY / 800),
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 mb-8 rounded-full border backdrop-blur-sm relative overflow-hidden group
                         bg-gradient-to-r from-blue-950/10 via-amber-500/5 to-blue-950/10 
                         dark:from-amber-600/20 dark:via-blue-600/15 dark:to-amber-600/20
                         border-blue-900/20 dark:border-amber-500/40
                         shadow-lg shadow-blue-900/10 dark:shadow-amber-500/20"
            >
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000
                              bg-gradient-to-r from-transparent via-amber-500/10 to-transparent
                              dark:via-amber-400/20" 
              />
              <Sparkles className="h-5 w-5 relative z-10
                                   text-amber-600 dark:text-amber-400
                                   drop-shadow-[0_0_8px_rgba(217,119,6,0.4)] 
                                   dark:drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" 
              />
              <span className="text-base font-medium relative z-10 text-blue-950 dark:text-foreground">
                Who we operate through
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-foreground"
            >
              Our Companies
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[20px] sm:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              FIVA Investment operates and invests through specialized companies, each focused on a specific market and value chain.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Companies Grid Section */}
      <section className="relative py-32 overflow-hidden bg-muted/30">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-[linear-gradient(rgba(17,94,103,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(17,94,103,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"
            style={{
              transform: `translateY(${scrollY * 0.02}px)`,
            }}
          ></div>
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Companies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group relative"
              >
                {/* Soft Card Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${company.gradient} opacity-0 group-hover:opacity-10 rounded-2xl blur transition-opacity duration-500`}></div>
                
                {/* Card Content */}
                <div className="relative bg-card/80 border border-border/60 rounded-2xl overflow-hidden hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-500 h-full flex flex-col group-hover:shadow-lg">
                  {/* Status Badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <div className={`px-2.5 py-0.5 rounded-full text-[10px] font-medium backdrop-blur-sm ${
                      company.status === 'Growing' 
                        ? 'bg-emerald-50/80 text-emerald-600 border border-emerald-200/50 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-800/30' 
                        : company.status === 'Launch'
                        ? 'bg-sky-50/80 text-sky-600 border border-sky-200/50 dark:bg-sky-950/30 dark:text-sky-400 dark:border-sky-800/30'
                        : 'bg-amber-50/80 text-amber-600 border border-amber-200/50 dark:bg-amber-950/30 dark:text-amber-400 dark:border-amber-800/30'
                    }`}>
                      <div className="flex items-center gap-1">
                        <div className={`w-1 h-1 rounded-full ${
                          company.status === 'Growing' 
                            ? 'bg-emerald-500 animate-pulse' 
                            : company.status === 'Launch'
                            ? 'bg-sky-500 animate-pulse'
                            : 'bg-amber-500'
                        }`} />
                        {company.status}
                      </div>
                    </div>
                  </div>

                  {/* Header Section with Logo */}
                  <div className="p-5 pb-0">
                    <button
                      onClick={() => window.open(company.website, '_blank')}
                      className="mb-3 group/logo"
                      aria-label={`Visit ${company.name} website`}
                    >
                      <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${company.gradient} overflow-hidden shadow-sm group-hover/logo:shadow-md group-hover/logo:scale-105 transition-all duration-500 opacity-90`}>
                        {company.logo ? (
                          <ImageWithFallback
                            src={company.logo}
                            alt={`${company.name} logo`}
                            className="w-full h-full object-contain p-2 bg-white dark:bg-gray-900"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-white/90">
                            <span className="text-xl font-bold">
                              {company.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                            </span>
                          </div>
                        )}
                        {/* Animated Overlay */}
                        <motion.div
                          className="absolute inset-0 bg-white/0 group-hover/logo:bg-white/10"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </button>

                    {/* Company Name & Industry Tag */}
                    <div className="mb-2.5">
                      <h3 className="text-lg font-bold text-foreground mb-1.5 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                        {company.name}
                      </h3>
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100/80 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50">
                        <Building2 className="h-3 w-3 text-slate-500 dark:text-slate-400" />
                        <span className="text-[10px] font-medium text-slate-600 dark:text-slate-400">{company.industry}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                      {company.description}
                    </p>
                  </div>

                  {/* Stats Section */}
                  <div className="px-5 pb-3">
                    <div className="grid grid-cols-3 gap-2">
                      {/* Founded */}
                      <div className="bg-slate-50/50 dark:bg-slate-900/30 rounded-lg p-2 border border-slate-200/40 dark:border-slate-800/40 group-hover:border-slate-300/60 dark:group-hover:border-slate-700/60 transition-colors duration-300">
                        <div className="flex items-center gap-1 mb-0.5">
                          <Award className="h-3 w-3 text-slate-400 dark:text-slate-500" />
                          <span className="text-[9px] text-slate-500 dark:text-slate-500">Founded</span>
                        </div>
                        <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">{company.founded}</p>
                      </div>

                      {/* Employees */}
                      <div className="bg-slate-50/50 dark:bg-slate-900/30 rounded-lg p-2 border border-slate-200/40 dark:border-slate-800/40 group-hover:border-slate-300/60 dark:group-hover:border-slate-700/60 transition-colors duration-300">
                        <div className="flex items-center gap-1 mb-0.5">
                          <Users className="h-3 w-3 text-slate-400 dark:text-slate-500" />
                          <span className="text-[9px] text-slate-500 dark:text-slate-500">Team</span>
                        </div>
                        <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">{company.employees}+</p>
                      </div>

                      {/* Location */}
                      <div className="bg-slate-50/50 dark:bg-slate-900/30 rounded-lg p-2 border border-slate-200/40 dark:border-slate-800/40 group-hover:border-slate-300/60 dark:group-hover:border-slate-700/60 transition-colors duration-300">
                        <div className="flex items-center gap-1 mb-0.5">
                          <Leaf className="h-3 w-3 text-slate-400 dark:text-slate-500" />
                          <span className="text-[9px] text-slate-500 dark:text-slate-500">Reach</span>
                        </div>
                        <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">{company.location}</p>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="mx-5 border-t border-slate-200/50 dark:border-slate-800/50"></div>

                  {/* Footer with CTA */}
                  <div className="p-5 pt-3 mt-auto">
                    <Button
                      className="w-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 shadow-sm hover:shadow transition-all duration-300 group/btn border border-slate-200/50 dark:border-slate-700/50"
                      onClick={() => window.open(company.website, '_blank')}
                    >
                      <span className="flex items-center justify-center gap-2 text-xs">
                        <Leaf className="h-3.5 w-3.5" />
                        Visit Website
                        <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                      </span>
                    </Button>

                    {/* Learn More Link */}
                    <button
                      onClick={() => window.open(company.website, '_blank')}
                      className="w-full mt-2 text-[11px] text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors duration-300 flex items-center justify-center gap-0.5 group/link"
                    >
                      Learn more about {company.name.split(' ')[0]}
                      <ArrowRight className="h-3 w-3 group-hover/link:translate-x-0.5 transition-transform" />
                    </button>
                  </div>

                  {/* Soft Bottom Border */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${company.gradient} opacity-40 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                  />

                  {/* Soft Corner Accent */}
                  <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${company.gradient} opacity-3 rounded-bl-full`} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <p className="text-sm text-muted-foreground">
              Each company operates independently while leveraging the FIVA Investment network and resources.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}