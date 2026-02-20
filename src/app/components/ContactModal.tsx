import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Send, User, MessageSquare, ChevronRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { toast } from 'sonner';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Thank you for your inquiry! Our team will contact you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, type: 'spring', damping: 30, stiffness: 300 }}
              className="relative w-full max-w-lg max-h-[90vh] overflow-hidden pointer-events-auto"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#1E40AF] via-[#f0b51d] to-[#1E40AF] rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
              
              {/* Modal Content */}
              <div className="relative bg-card border border-border/50 rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh]">
                {/* Header */}
                <div className="sticky top-0 z-10 bg-card/95 backdrop-blur-sm border-b border-border/50 px-6 py-5 rounded-t-2xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E40AF]/20 to-[#f0b51d]/20 flex items-center justify-center border border-[#1E40AF]/30 dark:border-[#f0b51d]/30">
                        <Mail className="h-6 w-6 text-[#1E40AF] dark:text-[#f0b51d]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#1E40AF] dark:text-white">
                          Get In Touch
                        </h3>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          We'll respond within 24 hours
                        </p>
                      </div>
                    </div>
                    
                    {/* Close Button */}
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={onClose}
                      className="w-9 h-9 rounded-xl bg-secondary/80 hover:bg-destructive/10 flex items-center justify-center transition-colors group border border-border/50"
                    >
                      <X className="h-5 w-5 text-muted-foreground group-hover:text-destructive transition-colors" />
                    </motion.button>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="px-6 pb-6 pt-12 space-y-5">
                  {/* Main Email Display */}
                  <motion.a
                    href="mailto:info@fivainvestment.com"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-[#1E40AF]/10 via-[#f0b51d]/5 to-[#1E40AF]/10 rounded-xl border border-[#1E40AF]/20 hover:border-[#f0b51d]/40 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#1E40AF]/10 dark:bg-[#f0b51d]/10 flex items-center justify-center group-hover:bg-[#f0b51d]/10 transition-colors">
                      <Mail className="h-5 w-5 text-[#1E40AF] dark:text-[#f0b51d] group-hover:text-[#f0b51d] transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-muted-foreground mb-0.5">Direct Email</p>
                      <p className="text-sm font-semibold text-[#1E40AF] dark:text-[#f0b51d] group-hover:text-[#f0b51d] truncate transition-colors">
                        info@fivainvestment.com
                      </p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-[#f0b51d] group-hover:translate-x-1 transition-all" />
                  </motion.a>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-border/50"></div>
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="bg-card px-3 py-0.5 text-muted-foreground font-medium rounded-full">or fill the form below</span>
                    </div>
                  </div>

                  {/* Name Field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <User className="h-4 w-4 text-[#1E40AF] dark:text-[#f0b51d]" />
                      Your Name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="h-12 bg-background/50 border-border focus:border-[#1E40AF] focus:ring-2 focus:ring-[#1E40AF]/20 transition-all duration-300 text-base"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <Mail className="h-4 w-4 text-[#1E40AF] dark:text-[#f0b51d]" />
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john.smith@company.com"
                      className="h-12 bg-background/50 border-border focus:border-[#1E40AF] focus:ring-2 focus:ring-[#1E40AF]/20 transition-all duration-300 text-base"
                    />
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-[#1E40AF] dark:text-[#f0b51d]" />
                      Subject <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      className="h-12 bg-background/50 border-border focus:border-[#1E40AF] focus:ring-2 focus:ring-[#1E40AF]/20 transition-all duration-300 text-base"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-[#1E40AF] dark:text-[#f0b51d]" />
                      Message <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      className="min-h-32 bg-background/50 border-border focus:border-[#1E40AF] focus:ring-2 focus:ring-[#1E40AF]/20 transition-all duration-300 resize-none text-base"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="pt-2"
                  >
                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={isSubmitting}
                      className="w-full bg-[#f0b51d] hover:bg-[#d9a019] text-white font-semibold shadow-lg shadow-[#f0b51d]/30 hover:shadow-[#f0b51d]/50 transition-all duration-300 relative overflow-hidden group h-14 text-base"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-[#d9a019] to-[#f0b51d] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
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
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}