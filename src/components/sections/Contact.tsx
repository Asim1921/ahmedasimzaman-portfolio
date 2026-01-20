'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/moving-border';
import { Card, CardTitle, CardDescription } from '@/components/ui/modern-card';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  GlobeAltIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50, 'Name must be less than 50 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(100, 'Subject must be less than 100 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message must be less than 1000 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage(result.message || 'Thank you! Your message has been sent successfully.');
        reset();
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      label: 'Email',
      value: 'asimzaman2000@gmail.com',
      href: 'mailto:asimzaman2000@gmail.com',
      description: 'Send me an email anytime',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: '+92 3405735723',
      href: 'tel:+923405735723',
      description: 'Available Mon-Fri, 9AM-6PM',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      icon: MapPinIcon,
      label: 'Location',
      value: 'Islamabad, Pakistan',
      href: '#',
      description: 'Open to remote opportunities',
      gradient: 'from-purple-500 to-pink-600',
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Asim1921',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      gradient: 'from-gray-700 to-gray-900',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/asim-zaman-869053175/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      name: 'Twitter',
      url: 'https://x.com/Asimzaman190',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      gradient: 'from-blue-400 to-cyan-500',
    },
    {
      name: 'Website',
      url: 'https://ahmedasimzaman.com',
      icon: <GlobeAltIcon className="w-6 h-6" />,
      gradient: 'from-violet-500 to-purple-600',
    }
  ];

  return (
    <section id="contact" className="relative py-32 bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-purple-900/10 to-indigo-900/20"></div>
        
        <motion.div 
          className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -25, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/50">
                <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Get In Touch
              </h2>
            </motion.div>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to start a project together? I'd love to hear from you. Let's create something amazing and bring your vision to life.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Information with Modern Cards */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
                  Let's Start a Conversation
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Whether you have a project in mind, want to collaborate, or just want to say hello, 
                  I'm always excited to connect with fellow developers, potential clients, and interesting people.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="block"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="p-6 hover:border-violet-500/50 transition-all duration-500">
                      <div className="flex items-center gap-4">
                        <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-r ${info.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                          <info.icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-1">{info.label}</CardTitle>
                          <CardDescription className="text-white font-medium mb-1">{info.value}</CardDescription>
                          <CardDescription className="text-sm">{info.description}</CardDescription>
                        </div>
                      </div>
                    </Card>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <SparklesIcon className="w-5 h-5 text-violet-400" />
                  Connect With Me
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <Card className={`p-4 bg-gradient-to-r ${social.gradient} text-white border-0 hover:shadow-2xl transition-all duration-500`}>
                        <div className="flex items-center justify-center">
                          {social.icon}
                        </div>
                      </Card>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Status Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-green-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative">
                      <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 w-4 h-4 bg-green-400 rounded-full animate-ping opacity-75"></div>
                    </div>
                    <span className="text-green-400 font-bold text-lg">Available for Work</span>
                  </div>
                  <CardDescription className="text-white mb-4">
                    Currently open to new opportunities and exciting projects. Let's discuss how I can help bring your ideas to life.
                  </CardDescription>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <ClockIcon className="w-4 h-4" />
                    <span>Response time: Within 24 hours</span>
                  </div>
                </Card>
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <PaperAirplaneIcon className="w-6 h-6 text-violet-400" />
                  Send me a message
                </h3>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-2xl flex items-center gap-3 backdrop-blur-xl"
                  >
                    <CheckCircleIcon className="w-5 h-5 text-green-400" />
                    <p className="text-green-300">{submitMessage}</p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-2xl flex items-center gap-3 backdrop-blur-xl"
                  >
                    <ExclamationCircleIcon className="w-5 h-5 text-red-400" />
                    <p className="text-red-300">{submitMessage}</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-3">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register('name')}
                        className={`w-full px-4 py-4 bg-black/30 backdrop-blur-xl border rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 ${
                          errors.name ? 'border-red-500/50 bg-red-500/10' : 'border-white/10 hover:border-white/20'
                        }`}
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="mt-2 text-sm text-red-400"
                        >
                          {errors.name.message}
                        </motion.p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register('email')}
                        className={`w-full px-4 py-4 bg-black/30 backdrop-blur-xl border rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 ${
                          errors.email ? 'border-red-500/50 bg-red-500/10' : 'border-white/10 hover:border-white/20'
                        }`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="mt-2 text-sm text-red-400"
                        >
                          {errors.email.message}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-3">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      {...register('subject')}
                      className={`w-full px-4 py-4 bg-black/30 backdrop-blur-xl border rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 ${
                        errors.subject ? 'border-red-500/50 bg-red-500/10' : 'border-white/10 hover:border-white/20'
                      }`}
                      placeholder="What's this about?"
                    />
                    {errors.subject && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-2 text-sm text-red-400"
                      >
                        {errors.subject.message}
                      </motion.p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      {...register('message')}
                      className={`w-full px-4 py-4 bg-black/30 backdrop-blur-xl border rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 resize-vertical text-white placeholder-gray-500 ${
                        errors.message ? 'border-red-500/50 bg-red-500/10' : 'border-white/10 hover:border-white/20'
                      }`}
                      placeholder="Tell me about your project or just say hello!"
                    />
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-2 text-sm text-red-400"
                      >
                        {errors.message.message}
                      </motion.p>
                    )}
                  </div>

                  {/* Submit Button with Moving Border */}
                  <Button
                    as="button"
                    type="submit"
                    disabled={isSubmitting}
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-3">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-3">
                        <PaperAirplaneIcon className="w-5 h-5" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>

                {/* Form Footer */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-center text-gray-400 text-sm">
                    Your information is secure and will never be shared. I typically respond within 24 hours.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-violet-900/20 via-purple-900/20 to-indigo-900/20">
              <SparklesIcon className="w-12 h-12 text-violet-400 mx-auto mb-4" />
              <CardTitle className="text-2xl mb-4">
                Let's Build Something Amazing Together
              </CardTitle>
              <CardDescription className="text-gray-300 leading-relaxed">
                Whether it's a cutting-edge web application, a mobile solution, or an innovative idea that needs technical expertise, 
                I'm here to help turn your vision into reality.
              </CardDescription>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
