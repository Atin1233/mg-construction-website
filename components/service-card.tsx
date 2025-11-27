'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ServiceCardProps {
  category: string;
  description: string;
  items: string[];
  icon?: string;
  href?: string;
}

export default function ServiceCard({
  category,
  description,
  items,
  href = '/services',
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col"
    >
      {/* Gradient Header */}
      <div className="relative h-32 bg-gradient-to-br from-navy via-navy-600 to-navy-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-accent transition-colors duration-300">
          {category}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
          {description}
        </p>
        
        <ul className="space-y-3 mb-6">
          {items.slice(0, 4).map((item, index) => (
            <li key={index} className="flex items-start text-gray-700">
              <svg
                className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm font-medium">{item}</span>
            </li>
          ))}
          {items.length > 4 && (
            <li className="text-accent text-sm font-semibold pt-2">
              + {items.length - 4} more services
            </li>
          )}
        </ul>
        
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-600 transition-colors group/link mt-auto"
        >
          <span>Learn more</span>
          <svg className="w-5 h-5 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}
