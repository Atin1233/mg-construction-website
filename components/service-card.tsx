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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-concrete-200"
    >
      <div className="p-6">
        <h3 className="text-2xl font-bold text-navy mb-3">{category}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <ul className="space-y-2 mb-6">
          {items.slice(0, 4).map((item, index) => (
            <li key={index} className="flex items-start text-gray-700">
              <svg
                className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
          {items.length > 4 && (
            <li className="text-gray-500 text-sm">
              + {items.length - 4} more services
            </li>
          )}
        </ul>
        
        <Link
          href={href}
          className="inline-block text-accent font-semibold hover:text-accent-600 transition-colors"
        >
          Learn more →
        </Link>
      </div>
    </motion.div>
  );
}

