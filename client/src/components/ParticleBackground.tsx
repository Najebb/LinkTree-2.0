import { motion } from 'framer-motion';
import React, { useMemo } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

/**
 * ParticleBackground Component
 * 
 * Design Philosophy: Ethereal Minimalism
 * - Creates a magical atmosphere with floating particles
 * - Subtle animation that doesn't distract from content
 * - Uses lavender and blue colors for cohesion
 */
export default function ParticleBackground() {
  const particles: Particle[] = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 8 + 12,
      delay: Math.random() * 2,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: '#D4C5F9',
            opacity: 0.3,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Larger glowing orbs for accent */}
      {Array.from({ length: 3 }, (_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full blur-xl"
          style={{
            left: `${20 + i * 30}%`,
            top: `${15 + i * 20}%`,
            width: 60,
            height: 60,
            background: 'radial-gradient(circle, rgba(212, 197, 249, 0.4) 0%, rgba(212, 197, 249, 0.1) 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8 + i * 2,
            delay: i,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
