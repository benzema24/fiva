import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, User, MessageSquare } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Card, CardContent } from '@/app/components/ui/card';
import { toast } from 'sonner';
import { useParallax } from '@/app/hooks/useParallax';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const scrollY = useParallax();

  // Check for URL parameters to pre-fill the subject
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const subjectParam = params.get('subject');
    if (subjectParam) {
      setFormData(prev => ({ ...prev, subject: decodeURIComponent(subjectParam) }));
      // Remove the parameter from URL without reloading
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Thank you for your inquiry! Our team will contact you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Animated Background with Parallax */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_30%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(96,165,250,0.1),transparent_30%)]"
        style={{
          transform: `translateY(${(scrollY - 3000) * 0.015}px)`,
        }}
      ></div>
      <div 
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-full blur-3xl"
        style={{
          transform: `translate(${(scrollY - 3000) * 0.02}px, ${(scrollY - 3000) * 0.025}px)`,
        }}
      ></div>
      <div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-600/10 to-orange-500/10 rounded-full blur-3xl"
        style={{
          transform: `translate(${(scrollY - 3000) * -0.015}px, ${(scrollY - 3000) * -0.02}px)`,
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
            <span className="text-sm font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/20 text-primary">
              Contact Us
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            If you have questions or would like to discuss about our services, feel free to contact us by email or by using the contact form below.
          </p>
        </motion.div>

        {/* Main Email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <motion.a
            href="mailto:info@fivainvestment.com"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary/10 to-cyan-500/10 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            <Mail className="h-6 w-6 text-primary relative z-10" />
            <span className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors relative z-10">
              info@fivainvestment.com
            </span>
          </motion.a>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-cyan-500 to-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            
            <Card className="border-border/50 shadow-2xl relative backdrop-blur-sm bg-card/80">
              <CardContent className="p-6 lg:p-8">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-10"
                >
                  <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                    Send Us A Message
                  </h3>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible
                  </p>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="relative group"
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                      <User className="h-4 w-4 text-primary" />
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full bg-background border-border focus:border-primary transition-all duration-300 h-12"
                    />
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="relative group"
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      Your Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john.smith@company.com"
                      className="w-full bg-background border-border focus:border-primary transition-all duration-300 h-12"
                    />
                  </motion.div>

                  {/* Subject Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="relative group"
                  >
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-primary" />
                      Your Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      className="w-full bg-background border-border focus:border-primary transition-all duration-300 h-12"
                    />
                  </motion.div>

                  {/* Message Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="relative group"
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-primary" />
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      className="w-full min-h-48 bg-background border-border focus:border-primary transition-all duration-300 resize-none"
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="pt-4"
                  >
                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-400 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 relative overflow-hidden group h-14 text-base"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                      <span className="relative flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5" />
                            <span>Send Message</span>
                          </>
                        )}
                      </span>
                    </Button>
                  </motion.div>
                </form>

                {/* Additional Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-8 pt-8 border-t border-border/50 text-center"
                >
                  <p className="text-sm text-muted-foreground">
                    We typically respond within <span className="text-primary font-semibold">24 hours</span>
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}