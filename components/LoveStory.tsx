"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";
import { weddingData } from "@/data/wedding";

export default function LoveStory() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-ivory via-champagne-light/20 to-ivory text-olive relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
            Perjalanan Cinta Kami
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-olive-dark mt-2 mb-4">
            Kisah Asmara
          </h2>
          <p className="text-sm md:text-base text-olive-light max-w-xl mx-auto font-light leading-relaxed">
            Setiap detik yang kami lalui adalah jejak keindahan yang membawa kami pada muara takdir suci ini.
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-gold/20 via-gold to-gold/20 hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {weddingData.loveStory.map((milestone, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: idx * 0.15 }}
                  className={`relative flex flex-col ${
                    isEven ? "md:flex-row-reverse" : "md:flex-row"
                  } items-center gap-8`}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-ivory border-2 border-gold shadow-glass-gold text-gold z-10">
                    <Heart className="w-4 h-4 fill-gold/20 text-gold" />
                  </div>

                  <div className="w-full md:w-1/2">
                    <div className="p-6 md:p-8 rounded-3xl glass-card border border-champagne shadow-luxury hover:border-gold transition-all duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 rounded-full bg-gold/15 text-gold-dark text-xs font-bold tracking-wider">
                          {milestone.year}
                        </span>
                        <span className="text-xs text-olive-light font-medium uppercase tracking-widest">
                          Langkah 0{idx + 1}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl font-bold text-olive-dark mb-2">
                        {milestone.title}
                      </h3>

                      <p className="text-xs md:text-sm text-olive/80 leading-relaxed font-light mb-4">
                        {milestone.story}
                      </p>

                      <div className="relative w-full h-44 rounded-2xl overflow-hidden shadow-sm border border-champagne/60">
                        <Image
                          src={milestone.image}
                          alt={milestone.title}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
