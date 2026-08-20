"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";
import { weddingData } from "@/data/wedding";
import LightboxModal from "./LightboxModal";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-ivory text-olive relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
            Momen Kebersamaan
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-olive-dark mt-2 mb-4">
            Galeri Foto
          </h2>
          <p className="text-sm md:text-base text-olive-light max-w-xl mx-auto font-light leading-relaxed">
            Galeri kenangan indah yang mengabadikan setiap detik penuh senyuman dan kehangatan.
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </motion.div>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {weddingData.gallery.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              onClick={() => setSelectedIndex(idx)}
              className="relative group cursor-pointer overflow-hidden rounded-2xl border border-champagne/80 shadow-md bg-ivory/50 break-inside-avoid transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative w-full aspect-[4/5]">
                <Image
                  src={photo.url}
                  alt={photo.caption}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-olive-dark/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                  <div className="self-end p-2 rounded-full bg-gold/80 text-white shadow-md">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                  <p className="text-ivory font-serif text-base font-medium drop-shadow-md">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <LightboxModal
          photos={weddingData.gallery}
          selectedIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onSelect={(idx) => setSelectedIndex(idx)}
        />
      </div>
    </section>
  );
}
