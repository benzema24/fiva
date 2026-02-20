import { motion } from 'motion/react';
import { useState } from 'react';
import { MapPin, Building2, Globe2, Users, Globe } from 'lucide-react';

const locations = [
  {
    country: 'USA',
    city: 'United States',
    continent: 'North America',
    icon: '🇺🇸',
    description: 'Headquarters & Innovation Center',
    coordinates: { x: 25, y: 35 },
    stats: { offices: '3', employees: '150+' }
  },
  {
    country: 'Malta',
    city: 'Valletta',
    continent: 'Europe',
    icon: '🇲🇹',
    description: 'European Operations Hub',
    coordinates: { x: 52, y: 32 },
    stats: { offices: '1', employees: '50+' }
  },
  {
    country: 'Libya',
    city: 'Tripoli',
    continent: 'Africa',
    icon: '🇱🇾',
    description: 'Regional Development Center',
    coordinates: { x: 54, y: 45 },
    stats: { offices: '2', employees: '75+' }
  },
  {
    country: 'Senegal',
    city: 'Dakar',
    continent: 'Africa',
    icon: '🇸🇳',
    description: 'West Africa Operations',
    coordinates: { x: 48, y: 52 },
    stats: { offices: '1', employees: '40+' }
  }
];

export function GlobalPresence() {
  const [activeLocation, setActiveLocation] = useState<number | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border backdrop-blur-sm relative overflow-hidden group mb-6
                       bg-gradient-to-r from-blue-950/10 via-amber-500/5 to-blue-950/10 
                       dark:from-amber-600/20 dark:via-blue-600/15 dark:to-amber-600/20
                       border-blue-900/20 dark:border-amber-500/40
                       shadow-lg shadow-blue-900/10 dark:shadow-amber-500/20">
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000
                            bg-gradient-to-r from-transparent via-amber-500/10 to-transparent
                            dark:via-amber-400/20" 
            />
            <Globe className="h-5 w-5 relative z-10 text-amber-600 dark:text-amber-400 drop-shadow-[0_0_8px_rgba(217,119,6,0.4)] dark:drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
            <span className="text-sm font-medium relative z-10 text-blue-950 dark:text-foreground">Worldwide Operations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Global Presence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Serving clients across four continents with strategic offices positioned to deliver excellence worldwide
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive World Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#115E67]/5 to-[#115E67]/10 backdrop-blur-sm border border-[#115E67]/20 rounded-2xl">
              {/* World Map SVG Background */}
              <svg
                viewBox="0 0 1000 600"
                className="w-full h-full opacity-20"
                style={{ filter: 'drop-shadow(0 0 20px rgba(17, 94, 103, 0.3))' }}
              >
                {/* Simplified world map paths */}
                <path
                  d="M100,200 L150,180 L200,200 L250,190 L300,210 L350,200 L400,220 L450,200 L500,210 L550,190 L600,200 L650,180 L700,190 L750,200 L800,190 L850,200 L900,180"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-[#115E67]/30"
                />
                <path
                  d="M150,250 Q200,230 250,250 T350,260 T450,250 T550,260 T650,250 T750,260"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-[#115E67]/30"
                />
                <path
                  d="M200,350 L250,340 L300,360 L350,350 L400,370 L450,360 L500,380 L550,370 L600,390 L650,380 L700,390"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-[#115E67]/30"
                />
              </svg>

              {/* Location Markers */}
              {locations.map((location, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    left: `${location.coordinates.x}%`,
                    top: `${location.coordinates.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Pulse Effect */}
                  {(activeLocation === index || hoveredLocation === index) && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-[#115E67]"
                      initial={{ scale: 1, opacity: 0.5 }}
                      animate={{ scale: 2.5, opacity: 0 }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}

                  {/* Marker */}
                  <motion.button
                    className="relative z-10 w-12 h-12 rounded-full bg-[#115E67] shadow-lg flex items-center justify-center cursor-pointer border-2 border-white dark:border-gray-900"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveLocation(activeLocation === index ? null : index)}
                    onMouseEnter={() => setHoveredLocation(index)}
                    onMouseLeave={() => setHoveredLocation(null)}
                  >
                    <span className="text-xl">{location.icon}</span>
                  </motion.button>

                  {/* Connection Lines */}
                  {index > 0 && (
                    <svg
                      className="absolute top-1/2 right-full pointer-events-none"
                      style={{
                        width: `${Math.abs(locations[index].coordinates.x - locations[index - 1].coordinates.x) * 10}px`,
                        height: `${Math.abs(locations[index].coordinates.y - locations[index - 1].coordinates.y) * 10}px`
                      }}
                    >
                      <motion.line
                        x1="100%"
                        y1="50%"
                        x2="0%"
                        y2="50%"
                        stroke="#115E67"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        opacity="0.3"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 1 }}
                      />
                    </svg>
                  )}

                  {/* Location Tooltip */}
                  {(activeLocation === index || hoveredLocation === index) && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-48 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-[#115E67]/20 p-3 pointer-events-none z-20"
                    >
                      <div className="text-sm font-semibold text-[#115E67] mb-1">
                        {location.country}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {location.description}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Location Cards */}
          <div className="grid gap-4">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredLocation(index)}
                onMouseLeave={() => setHoveredLocation(null)}
                onClick={() => setActiveLocation(activeLocation === index ? null : index)}
                className="cursor-pointer"
              >
                <motion.div
                  className={`relative group p-6 rounded-xl backdrop-blur-md bg-white/50 dark:bg-gray-900/50 border transition-all duration-300 ${
                    activeLocation === index || hoveredLocation === index
                      ? 'border-[#115E67]/50'
                      : 'border-gray-200 dark:border-gray-800 hover:border-[#115E67]/50'
                  }`}
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  {/* Glassmorphism overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#115E67]/0 to-[#115E67]/0 group-hover:from-[#115E67]/5 group-hover:to-[#115E67]/10 rounded-xl transition-all duration-300" />
                  
                  <div className="relative flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-[#115E67]/10 flex items-center justify-center text-2xl">
                      {location.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-[#115E67] mb-1">
                            {location.country}
                          </h3>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {location.continent}
                          </p>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-3">
                        {location.description}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center gap-4 text-xs">
                        <div className="flex items-center gap-1 text-[#115E67]">
                          <Building2 className="w-3 h-3" />
                          <span>{location.stats.offices} Office{location.stats.offices !== '1' ? 's' : ''}</span>
                        </div>
                        <div className="flex items-center gap-1 text-[#115E67]">
                          <Users className="w-3 h-3" />
                          <span>{location.stats.employees} Team</span>
                        </div>
                      </div>
                    </div>

                    {/* Arrow Indicator */}
                    <motion.div
                      animate={{ x: activeLocation === index || hoveredLocation === index ? 4 : 0 }}
                      className="text-[#115E67] opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Countries', value: '4' },
            { label: 'Continents', value: '3' },
            { label: 'Total Offices', value: '7+' },
            { label: 'Global Team', value: '315+' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-xl backdrop-blur-md bg-white/50 dark:bg-gray-900/50 border border-[#115E67]/20"
            >
              <div className="text-3xl font-bold text-[#115E67] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}