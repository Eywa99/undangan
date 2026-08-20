"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { GalleryPhoto } from "@/data/wedding";

interface LightboxModalProps {
  photos: GalleryPhoto[];
  selectedIndex: number | null;
  onClose: () => void;
  onSelect: (index: number) => void;
}

export default function LightboxModal({
  photos,
  selectedIndex,
  onClose,
  onSelect,
}: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onSelect((selectedIndex - 1 + photos.length) % photos.length);
      if (e.key === "ArrowRight") onSelect((selectedIndex + 1) % photos.length);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, photos.length, onClose, onSelect]);

  if (selectedIndex === null) return null;

  const currentPhoto = photos[selectedIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 select-none"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect((selectedIndex - 1 + photos.length) % photos.length);
          }}
          className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200"
          aria-label="Previous Photo"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect((selectedIndex + 1) % photos.length);
          }}
          className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200"
          aria-label="Next Photo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <motion.div
          key={selectedIndex}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-4xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center p-2"
        >
          <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src={currentPhoto.url}
              alt={currentPhoto.caption}
              fill
              className="object-contain"
              priority
            />
          </div>

          <p className="mt-4 text-center text-ivory font-serif text-lg md:text-xl font-light tracking-wide">
            {currentPhoto.caption} ({selectedIndex + 1} / {photos.length})
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
