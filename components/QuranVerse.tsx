"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding";

export default function QuranVerse() {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-ivory text-olive">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="p-8 md:p-12 rounded-3xl glass-card-gold shadow-luxury relative border border-gold/30"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-champagne-light/70 text-olive-dark text-xs uppercase tracking-[0.25em] font-medium mb-8 border border-gold/20">
            {weddingData.quranVerse.surah}
          </span>

          <p className="font-serif text-2xl md:text-3xl text-olive-dark leading-relaxed font-bold mb-6 tracking-wide dir-rtl" style={{ lineHeight: "2.2" }}>
            {weddingData.quranVerse.arabic}
          </p>

          <p className="italic text-xs md:text-sm text-olive-light mb-6 font-light max-w-2xl mx-auto leading-relaxed">
            &quot;{weddingData.quranVerse.latin}&quot;
          </p>

          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />

          <p className="text-sm md:text-base text-olive font-normal leading-relaxed max-w-2xl mx-auto">
            {weddingData.quranVerse.translation}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
