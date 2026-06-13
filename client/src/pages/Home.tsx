import { motion } from 'framer-motion';
import {
  Calendar,
  Github,
  Instagram,
  Mail,
  MessageCircle,
} from 'lucide-react';
import LinkCard from '@/components/LinkCard';
import ParticleBackground from '@/components/ParticleBackground';

/**
 * Home Page - Alfaizie Hub
 * 
 * Design Philosophy: Ethereal Minimalism with Magical Realism (Permanent Dark Mode)
 * - Soft color palette with ambient glows
 * - Smooth animations and micro-interactions
 * - Typography: Playfair Display for headings, Poppins for body
 */
export default function Home() {
  const links = [
    {
      title: 'Fitur Absen Kuliah',
      description: 'Sistem Absen Kuliah Otomatis.(Tahap Development)',
      url: 'https://absensi.najeb.id', // Easily editable by the user
      icon: <Calendar size={24} />,
    },
    {
      title: 'WhatsApp',
      description: 'Hubungi saya langsung via WhatsApp',
      url: 'https://wa.me/6285275281166', // User can append their phone number
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.706 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
    {
      title: 'Instagram',
      description: 'My Daily Activitys',
      url: 'https://www.instagram.com/alfaizie_',
      icon: <Instagram size={24} />,
    },
    {
      title: 'Discord Server',
      description: 'Join our community',
      url: 'https://discord.gg/TRBsaHxe3',
      icon: <MessageCircle size={24} />,
    },
    {
      title: 'GitHub Projects',
      description: 'Check out my coding projects and contributions',
      url: 'https://github.com/Najebb',
      icon: <Github size={24} />,
    },
    {
      title: 'Contact Me',
      description: 'Get in touch via email',
      url: 'mailto:akhmadnajibalfaizi@gmail.com',
      icon: <Mail size={24} />,
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A] text-[#F1F5F9] transition-colors duration-300">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Ambient top-left background glow */}
      <div className="fixed -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none opacity-15 bg-[radial-gradient(circle,rgba(212,197,249,0.35)_0%,transparent_70%)] blur-3xl transition-opacity duration-300" />

      {/* Ambient center-left background glow */}
      <div className="fixed top-1/3 -left-60 w-[500px] h-[500px] rounded-full pointer-events-none opacity-10 bg-[radial-gradient(circle,rgba(74,144,226,0.25)_0%,transparent_75%)] blur-3xl transition-opacity duration-300" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center mb-12"
          >
            {/* Profile Picture */}
            <div className="mb-8 flex justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
                className="relative w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-[#4A90E2] via-[#D4C5F9] to-[#A8C686] shadow-xl"
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-[#1E293B] transition-colors duration-300">
                  <img
                    src="/avatar.jpg"
                    alt="Stark Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative outer glow */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#4A90E2] via-[#D4C5F9] to-[#A8C686] opacity-30 blur-sm -z-10 animate-pulse" />
              </motion.div>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold mb-3">
              <span className="bg-gradient-to-r from-[#4A90E2] to-[#D4C5F9] bg-clip-text text-transparent">
                Akhmad Najib Alfaizi
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-[#94A3B8] mb-2 font-light transition-colors duration-200">
              LinkTree
            </p>

            {/* Description */}
            <p className="text-base text-[#94A3B8] max-w-lg mx-auto leading-relaxed transition-colors duration-200">
              Selamat datang di Alfaizie Hub
              <br />
              Pusat informasi, portofolio, proyek digital, media sosial, dan berbagai karya yang saya bangun. Terhubung dengan saya melalui tautan di bawah.
            </p>
          </motion.div>

          {/* Links Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 mb-12"
          >
            {links.map((link, index) => (
              <LinkCard
                key={index}
                title={link.title}
                description={link.description}
                url={link.url}
                icon={link.icon}
                delay={0.3 + index * 0.05}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Premium CSS-based bottom-right accent glow */}
      <div className="fixed -bottom-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none opacity-15 bg-[radial-gradient(circle,rgba(168,198,134,0.35)_0%,transparent_70%)] blur-3xl transition-opacity duration-300" />
    </div>
  );
}
