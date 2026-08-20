"use client";

import { motion } from "framer-motion";
import { MailOpen, Calendar } from "lucide-react";
import Image from "next/image";
import { weddingData } from "@/data/wedding";

interface CoverHeroProps {
  guestName?: string;
  isOpen: boolean;
  onOpen: () => void;
}

export default function CoverHero({ guestName = "Bapak/Ibu/Saudara/i", isOpen, onOpen }: CoverHeroProps) {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden select-none">
      <div className="absolute inset-0 z-0">
        <Image
          src={weddingData.loveStory[3].image || "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1600"}
          alt="Wedding Background"
          fill
          priority
          className="object-cover object-center scale-105 filter brightness-75 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-olive-dark/70 via-olive-dark/50 to-ivory" />
      </div>

      <div className="relative z-20 max-w-3xl mx-auto px-6 text-center text-ivory py-16 flex flex-col items-center justify-between min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="pt-8 flex flex-col items-center"
        >
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mb-4" />
          <span className="font-serif text-sm md:text-base tracking-[0.3em] uppercase text-champagne font-light">
            The Wedding Of
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="my-auto py-8 flex flex-col items-center"
        >
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-semibold tracking-wide text-ivory drop-shadow-md">
            {weddingData.groom.shortName}
          </h1>

          <div className="my-2 flex items-center justify-center gap-4">
            <span className="h-[1px] w-12 bg-gold/60" />
            <span className="font-serif text-3xl sm:text-4xl md:text-5xl gold-gradient-text italic font-normal">
              &
            </span>
            <span className="h-[1px] w-12 bg-gold/60" />
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-semibold tracking-wide text-ivory drop-shadow-md">
            {weddingData.bride.shortName}
          </h1>

          <div className="mt-6 flex items-center gap-2 px-4 py-1.5 rounded-full bg-ivory/10 backdrop-blur-md border border-gold/30 text-champagne text-xs sm:text-sm tracking-widest font-light">
            <Calendar className="w-3.5 h-3.5 text-gold" />
            <span>{weddingData.akad.day}, {weddingData.akad.date}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="pb-8 flex flex-col items-center w-full"
        >
          <div className="w-full max-w-md p-6 rounded-2xl glass-card text-olive-dark shadow-luxury border border-champagne/80 mb-6 flex flex-col items-center text-center">
            <span className="text-xs uppercase tracking-widest text-olive-light font-medium mb-1">
              Kepada Yth.
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold gold-gradient-text capitalize my-1">
              {guestName}
            </h2>
            <p className="text-xs text-olive/80 font-light max-w-xs mt-1">
              Kami Mengundang Bapak/Ibu/Saudara/i Untuk Hadir Pada Acara Pernikahan Kami.
            </p>
          </div>

          {!isOpen ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpen}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gold via-gold-accent to-gold-dark text-white font-medium text-base tracking-wider shadow-lg shadow-gold/30 hover:shadow-gold/50 transition-all duration-300 border border-ivory/30"
            >
              <MailOpen className="w-5 h-5 transition-transform group-hover:rotate-12" />
              <span>Buka Undangan</span>
            </motion.button>
          ) : (
            <div className="text-champagne text-xs tracking-widest uppercase flex items-center gap-2 animate-bounce">
              <span>Scroll Ke Bawah</span>
              <span>↓</span>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
