"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { weddingData } from "@/data/wedding";

export default function Closing() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-ivory via-champagne-light/30 to-olive-dark text-olive relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 md:p-12 rounded-3xl glass-card border border-champagne shadow-luxury mb-12"
        >
          <div className="w-12 h-12 rounded-full bg-gold/20 text-gold mx-auto flex items-center justify-center mb-6">
            <Heart className="w-6 h-6 fill-gold" />
          </div>

          <h2 className="font-serif text-3xl md:text-5xl font-bold text-olive-dark mb-4">
            Terima Kasih
          </h2>

          <p className="text-sm md:text-base text-olive-light max-w-xl mx-auto font-light leading-relaxed mb-8">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai.
          </p>

          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium block mb-2">
            Kami Yang Berbahagia
          </span>

          <h3 className="font-serif text-3xl md:text-5xl font-bold gold-gradient-text">
            {weddingData.groom.shortName} & {weddingData.bride.shortName}
          </h3>

          <p className="text-xs text-olive-light mt-4 font-light">
            Beserta Seluruh Keluarga Besar Kedua Mempelai
          </p>
        </motion.div>

        <div className="text-ivory/80 text-xs font-light tracking-wider space-y-2 pt-6">
          <p>© {new Date().getFullYear()} {weddingData.groom.shortName} & {weddingData.bride.shortName} Wedding Invitation.</p>
          <p className="opacity-60 text-[11px]">Crafted with Luxury & Perfection for Vercel Deployment.</p>
        </div>
      </div>
    </section>
  );
}
