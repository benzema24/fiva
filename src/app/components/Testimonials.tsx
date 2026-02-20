import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/app/components/ui/card';

const testimonials = [
  {
    name: 'Sarah Al-Mansouri',
    role: 'CEO, Emirates Trade Group',
    rating: 5,
    comment: 'FIVA Investment transformed our recruitment process. Their expertise in finding top-tier talent for our aviation division was exceptional. Professional, efficient, and truly understanding of our needs.',
    company: 'Emirates Trade Group',
  },
  {
    name: 'Michael Chen',
    role: 'Director of Operations, Global Tech Solutions',
    rating: 5,
    comment: 'Working with FIVA on our market expansion in the UAE was a game-changer. Their strategic insights and local connections opened doors we didn\'t know existed. Highly recommended.',
    company: 'Global Tech Solutions',
  },
  {
    name: 'Fatima Abdullah',
    role: 'Marketing Director, Luxury Retail International',
    rating: 5,
    comment: 'The marketing and PR strategies developed by FIVA elevated our brand presence across the region. Their team understands the nuances of both local and international markets perfectly.',
    company: 'Luxury Retail International',
  },
  {
    name: 'James Richardson',
    role: 'VP of Business Development, AeroConsult',
    rating: 5,
    comment: 'FIVA\'s aviation consulting services provided invaluable guidance during our regulatory compliance project. Their depth of knowledge and professional approach exceeded expectations.',
    company: 'AeroConsult',
  },
];

const stats = [
  { number: '500+', label: 'Global Clients', gradient: 'from-blue-500 to-cyan-500' },
  { number: '15+', label: 'Countries Served', gradient: 'from-purple-500 to-pink-500' },
  { number: '98%', label: 'Client Satisfaction', gradient: 'from-green-500 to-emerald-500' },
  { number: '20+', label: 'Years Experience', gradient: 'from-orange-500 to-yellow-500' },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_50%,rgba(96,165,250,0.1),transparent_50%)]"></div>
      
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
            <span className="text-sm font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/20 text-primary">
              Client Success
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from organizations that have transformed their business with FIVA Investment
          </p>
        </motion.div>

        {/* Trust Metrics with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group cursor-pointer"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
              
              <div className="relative text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border group-hover:border-transparent transition-all duration-500">
                <motion.div
                  className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Subtle Glow on Hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-cyan-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              <Card className="h-full border border-border/50 backdrop-blur-sm bg-card/50 dark:bg-card/30 group-hover:border-primary/50 transition-all duration-500 relative overflow-hidden">
                {/* Animated Background Pattern */}
                <motion.div
                  className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                <CardContent className="p-8 relative z-10">
                  {/* Quote Icon */}
                  <motion.div
                    className="mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Quote className="h-10 w-10 text-primary/30" />
                  </motion.div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                      >
                        <Star className="h-5 w-5 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.comment}"
                  </p>

                  {/* Author with Gradient Border */}
                  <div className="border-t border-border/50 pt-4 relative">
                    <motion.div
                      className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-primary to-cyan-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                    <div className="font-bold text-foreground mt-2">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent font-medium mt-1">
                      {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Client Logos with Hover Effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground mb-8">Trusted by leading organizations worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {['Emirates', 'GlobalTech', 'AeroConsult', 'Luxury Retail'].map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-2xl font-bold text-muted-foreground/50 hover:text-primary transition-all duration-300 cursor-pointer"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
