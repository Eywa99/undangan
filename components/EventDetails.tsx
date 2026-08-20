"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";
import { weddingData } from "@/data/wedding";

export default function EventDetails() {
  const events = [weddingData.akad, weddingData.resepsi];

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
            Waktu & Lokasi
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-olive-dark mt-2 mb-4">
            Rangkaian Acara
          </h2>
          <p className="text-sm md:text-base text-olive-light max-w-xl mx-auto font-light leading-relaxed">
            Kehadiran dan doa restu Anda merupakan kehormatan dan kebahagiaan terbesar bagi kami.
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-16">
          {events.map((evt, idx) => (
            <motion.div
              key={evt.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="p-8 md:p-10 rounded-3xl glass-card flex flex-col justify-between shadow-luxury border border-champagne relative group hover:border-gold transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="px-4 py-1.5 rounded-full bg-gold/15 text-gold-dark text-xs uppercase tracking-widest font-semibold border border-gold/30">
                  {evt.title}
                </span>
                <span className="text-xs text-olive-light font-light">{evt.timezone}</span>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-champagne-light/70 text-gold-dark">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-olive-light">Hari & Tanggal</p>
                    <p className="font-serif text-xl font-bold text-olive-dark">
                      {evt.day}, {evt.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-champagne-light/70 text-gold-dark">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-olive-light">Waktu Acara</p>
                    <p className="font-serif text-xl font-bold text-olive-dark">
                      Pukul {evt.time} {evt.timezone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-champagne-light/70 text-gold-dark">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-olive-light">Lokasi Tempat</p>
                    <p className="font-serif text-lg font-bold text-olive-dark">
                      {evt.venueName}
                    </p>
                    <p className="text-xs text-olive-light leading-relaxed mt-1">
                      {evt.address}
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={evt.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-xl bg-olive text-ivory font-medium text-xs uppercase tracking-wider hover:bg-olive-dark transition-all duration-300 flex items-center justify-center gap-2 shadow-md group-hover:shadow-gold/20"
              >
                <MapPin className="w-4 h-4 text-gold" />
                <span>Buka Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden shadow-luxury border-2 border-champagne/80 p-2 glass-card"
        >
          <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden">
            <iframe
              src={weddingData.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Lokasi Pernikahan"
              className="w-full h-full filter contrast-[1.02]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
