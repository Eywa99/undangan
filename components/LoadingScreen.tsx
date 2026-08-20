"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { weddingData } from "@/data/wedding";

interface LoadingScreenProps {
  onFinish?: () => void;
}

export default function LoadingScreen({ onFinish }: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (onFinish) onFinish();
    }, 2200);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ivory text-olive select-none"
        >
          <div className="relative flex flex-col items-center justify-center p-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -45 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative flex items-center justify-center w-36 h-36 rounded-full border-2 border-gold/40 shadow-glass-gold"
            >
              <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke="#C8A45D"
                  strokeWidth="1.5"
                  strokeDasharray="15 10 5 10"
                />
              </svg>

              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="font-serif text-3xl md:text-4xl font-bold gold-gradient-text tracking-widest"
              >
                {weddingData.monogram}
              </motion.span>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-6 text-center"
            >
              <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-olive-dark font-medium">
                {weddingData.groom.shortName} & {weddingData.bride.shortName}
              </h2>
              <p className="text-xs uppercase tracking-[0.3em] text-gold font-light mt-1">
                The Wedding Celebration
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
