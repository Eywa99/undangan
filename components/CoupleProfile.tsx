"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import Image from "next/image";
import { weddingData } from "@/data/wedding";

export default function CoupleProfile() {
  return (
    <section className="py-20 px-4 bg-ivory text-olive relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
            Assalamu’alaikum Wr. Wb.
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-olive-dark mt-2 mb-4">
            Mempelai Pernikahan
          </h2>
          <p className="text-sm md:text-base text-olive-light max-w-xl mx-auto font-light leading-relaxed">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan syukuran pernikahan putra-putri kami:
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-10 rounded-3xl glass-card text-center flex flex-col items-center justify-between shadow-luxury border border-champagne relative group hover:border-gold transition-all duration-300"
          >
            <div className="relative w-44 h-44 rounded-full p-2 mb-6 shadow-glass-gold">
              <div className="absolute inset-0 rounded-full border-2 border-gold animate-spin-slow opacity-60" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-ivory">
                <Image
                  src={weddingData.groom.photo}
                  alt={weddingData.groom.fullName}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            <div className="w-full flex flex-col items-center">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-olive-dark mb-1">
                {weddingData.groom.fullName}
              </h3>
              <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-4">
                Mempelai Pria
              </p>

              <div className="w-12 h-[1px] bg-champagne mb-4" />

              <p className="text-xs text-olive-light mb-1">Putra dari Pasangan:</p>
              <p className="text-sm font-semibold text-olive">
                {weddingData.groom.fatherName}
              </p>
              <p className="text-sm font-semibold text-olive mb-6">
                & {weddingData.groom.motherName}
              </p>

              <a
                href={weddingData.groom.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-champagne-light/60 hover:bg-gold hover:text-white text-olive-dark text-xs tracking-wider font-medium transition-all duration-300 border border-gold/30 shadow-sm"
              >
                <Instagram className="w-4 h-4" />
                <span>{weddingData.groom.instagram}</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-10 rounded-3xl glass-card text-center flex flex-col items-center justify-between shadow-luxury border border-champagne relative group hover:border-gold transition-all duration-300"
          >
            <div className="relative w-44 h-44 rounded-full p-2 mb-6 shadow-glass-gold">
              <div className="absolute inset-0 rounded-full border-2 border-gold animate-spin-slow opacity-60" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-ivory">
                <Image
                  src={weddingData.bride.photo}
                  alt={weddingData.bride.fullName}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            <div className="w-full flex flex-col items-center">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-olive-dark mb-1">
                {weddingData.bride.fullName}
              </h3>
              <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-4">
                Mempelai Wanita
              </p>

              <div className="w-12 h-[1px] bg-champagne mb-4" />

              <p className="text-xs text-olive-light mb-1">Putri dari Pasangan:</p>
              <p className="text-sm font-semibold text-olive">
                {weddingData.bride.fatherName}
              </p>
              <p className="text-sm font-semibold text-olive mb-6">
                & {weddingData.bride.motherName}
              </p>

              <a
                href={weddingData.bride.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-champagne-light/60 hover:bg-gold hover:text-white text-olive-dark text-xs tracking-wider font-medium transition-all duration-300 border border-gold/30 shadow-sm"
              >
                <Instagram className="w-4 h-4" />
                <span>{weddingData.bride.instagram}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
