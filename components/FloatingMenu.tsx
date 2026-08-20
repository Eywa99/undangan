"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Volume2, VolumeX, MessageCircle, ChevronUp, Menu, X } from "lucide-react";
import { weddingData } from "@/data/wedding";

interface FloatingMenuProps {
  isPlaying: boolean;
  onToggleMusic: () => void;
  guestName?: string;
}

export default function FloatingMenu({ isPlaying, onToggleMusic, guestName }: FloatingMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `Halo, saya mengundang Anda ke Pernikahan ${weddingData.groom.shortName} & ${weddingData.bride.shortName}.\n\n` +
      `Lihat undangan selengkapnya di sini:\nhttps://pernikahan-kami.vercel.app/to/${encodeURIComponent(guestName || "Tamu")}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 select-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-end gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleWhatsAppShare}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-green-600 text-white shadow-lg text-xs font-semibold tracking-wider hover:bg-green-700 transition-all border border-green-400/40"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Bagikan WA</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onToggleMusic}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full shadow-lg text-xs font-semibold tracking-wider transition-all border ${
                isPlaying
                  ? "bg-gold text-white border-gold-light"
                  : "bg-olive text-ivory border-olive-light"
              }`}
            >
              {isPlaying ? (
                <>
                  <Volume2 className="w-4 h-4 animate-pulse text-white" />
                  <span>Musik ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-ivory/70" />
                  <span>Musik OFF</span>
                </>
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="p-3 rounded-full bg-olive text-ivory shadow-lg hover:bg-olive-dark transition-all border border-champagne/40"
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-5 h-5 text-gold" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-gold via-gold-accent to-gold-dark text-white flex items-center justify-center shadow-xl shadow-gold/40 border-2 border-ivory transition-all duration-300 relative"
      >
        {isPlaying && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-light opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-gold-accent"></span>
          </span>
        )}
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </motion.button>
    </div>
  );
}
