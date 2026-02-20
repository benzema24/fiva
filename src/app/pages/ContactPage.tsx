import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/app/components/ui/button';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      content: 'info@fivainvestment.com',
      link: 'mailto:info@fivainvestment.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Mon-Fri, 9AM - 6PM',
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Simple Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(30,64,175,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(30,64,175,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(96,165,250,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-[rgb(15,23,42)] dark:text-white">
              Get In Touch
            </span>
          </h1>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Have a question or want to work together? Send us a message and we'll get back to you soon.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-3xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border border-border rounded-xl p-6 mb-10"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-8"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mb-3">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
                <p className="text-muted-foreground text-center text-sm">
                  We've received your message and will respond within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-sm"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-sm"
                    placeholder="john@company.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2.5 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 resize-none text-sm"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#f0b51d] to-[#d9a019] hover:from-[#d9a019] hover:to-[#c28f15] text-white font-semibold py-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <span>Send Message</span>
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex w-10 h-10 bg-primary/10 rounded-full items-center justify-center mb-2">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    {method.title}
                  </h3>
                  {method.link ? (
                    <a 
                      href={method.link}
                      className="text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      {method.content}
                    </a>
                  ) : (
                    <p className="text-xs text-muted-foreground">
                      {method.content}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Global Presence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-r from-blue-950/50 via-amber-500/10 to-blue-950/50 dark:from-amber-600/10 dark:via-blue-600/5 dark:to-amber-600/10 border border-blue-900/20 dark:border-amber-500/20 rounded-xl p-6 text-center"
          >
            <div className="inline-flex w-12 h-12 bg-gradient-to-br from-[#f0b51d] to-[#d9a019] rounded-full items-center justify-center mb-3">
              <Globe className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-xl font-bold text-foreground mb-2">
              Global Presence
            </h2>
            <p className="text-muted-foreground mb-5 max-w-xl mx-auto text-sm">
              With offices in Dubai, Doha, Riyadh, London, Zurich, New York, Nairobi, and Lagos, 
              we're strategically positioned to serve clients worldwide.
            </p>
            <Button
              variant="outline"
              className="border-primary/50 hover:bg-primary/5 group text-sm"
            >
              View All Locations
              <ArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}