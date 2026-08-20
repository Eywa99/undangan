"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { weddingData } from "@/data/wedding";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const targetDate = new Date(weddingData.akadDateIso).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ];

  if (!isMounted) return null;

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-ivory via-champagne-light/30 to-ivory text-olive relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
            Save The Date
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-olive-dark mt-2 mb-8">
            Menghitung Hari Bahagia
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-2xl mx-auto">
          {timeBlocks.map((block, index) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-5 md:p-6 rounded-2xl glass-card-gold flex flex-col items-center justify-center shadow-luxury border border-gold/40 relative overflow-hidden group hover:scale-105 transition-transform duration-300"
            >
              <motion.span
                key={block.value}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold gold-gradient-text"
              >
                {String(block.value).padStart(2, "0")}
              </motion.span>
              <span className="text-xs uppercase tracking-widest text-olive-dark font-medium mt-2">
                {block.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
