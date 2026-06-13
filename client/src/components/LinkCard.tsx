import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import React from 'react';

interface LinkCardProps {
  title: string;
  description?: string;
  url: string;
  icon?: React.ReactNode;
  delay?: number;
}

/**
 * LinkCard Component
 * 
 * Design Philosophy: Ethereal Minimalism (Permanent Dark Theme)
 * - Subtle hover effects with scale and shadow enhancement
 * - Soft lavender and sage green accents
 * - Smooth animations with fade-in and slide-up entrance
 */
export default function LinkCard({
  title,
  description,
  url,
  icon,
  delay = 0,
}: LinkCardProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="group relative block overflow-hidden rounded-xl bg-[#1E293B] p-6 border border-slate-800/50 transition-all duration-200"
      style={{
        boxShadow: '0 10px 30px -5px rgba(15, 23, 42, 0.3), 0 8px 12px -6px rgba(15, 23, 42, 0.2)',
      }}
    >
      {/* Background gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4C5F9]/5 to-[#A8C686]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative z-10 flex items-start gap-4">
        {/* Icon */}
        {icon && (
          <div className="flex-shrink-0 text-2xl text-[#60A5FA] transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
        )}

        {/* Text Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-[#F1F5F9] group-hover:text-[#60A5FA] transition-colors duration-200">
            {title}
          </h3>
          {description && (
            <p className="mt-1 text-sm text-slate-400 line-clamp-2">
              {description}
            </p>
          )}
        </div>

        {/* External Link Icon */}
        <div className="flex-shrink-0 text-[#60A5FA] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
          <ExternalLink size={18} />
        </div>
      </div>

      {/* Subtle border on hover */}
      <div className="absolute inset-0 rounded-xl border border-transparent transition-colors duration-300 group-hover:border-[#60A5FA]/30" />
    </motion.a>
  );
}
