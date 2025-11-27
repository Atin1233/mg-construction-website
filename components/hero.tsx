'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
}

export default function Hero({ title, subtitle, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Serving New Jersey Since 1991
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            {title.includes('Since') ? (
              <>
                <span className="block text-white drop-shadow-lg">
                  {title.split('Since')[0]?.trim() || title}
                </span>
                <span className="block bg-gradient-to-r from-accent via-accent-400 to-accent bg-clip-text text-transparent">
                  Since {title.split('Since')[1]?.trim() || '1991'}
                </span>
              </>
            ) : (
              <span className="block text-white drop-shadow-lg">{title}</span>
            )}
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          {(primaryCta || secondaryCta) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              {primaryCta && (
                <Link 
                  href={primaryCta.href} 
                  className="group relative px-8 py-4 bg-accent text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/50"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {primaryCta.text}
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              )}
              {secondaryCta && (
                <Link 
                  href={secondaryCta.href} 
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl"
                >
                  {secondaryCta.text}
                </Link>
              )}
            </motion.div>
          )}

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/70 text-sm"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>30+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free Estimates</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-xs font-medium">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white/60 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
