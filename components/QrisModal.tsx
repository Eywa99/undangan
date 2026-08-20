"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download } from "lucide-react";
import Image from "next/image";
import { weddingData } from "@/data/wedding";

interface QrisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QrisModal({ isOpen, onClose }: QrisModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 select-none"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-sm w-full bg-ivory rounded-3xl p-6 text-center shadow-2xl border-2 border-gold/40"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-champagne-light text-olive hover:bg-gold hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          <h3 className="font-serif text-2xl font-bold text-olive-dark mb-1">
            QRIS Wedding Gift
          </h3>
          <p className="text-xs text-olive-light mb-6">
            Scan QR Code di bawah menggunakan aplikasi M-Banking atau E-Wallet Anda (Gopay, OVO, Dana, LinkAja, ShopeePay).
          </p>

          <div className="relative w-64 h-64 mx-auto mb-6 p-3 bg-white rounded-2xl shadow-md border border-champagne">
            <Image
              src={weddingData.gift.qrisUrl}
              alt="QRIS Digital Gift"
              fill
              className="object-contain p-2"
            />
          </div>

          <p className="font-serif text-sm font-semibold text-olive-dark">
            a.n. Pernikahan {weddingData.groom.shortName} & {weddingData.bride.shortName}
          </p>

          <a
            href={weddingData.gift.qrisUrl}
            target="_blank"
            download="QRIS-Wedding-Gift.png"
            className="mt-4 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-olive text-ivory text-xs uppercase tracking-wider font-semibold hover:bg-olive-dark transition-all"
          >
            <Download className="w-4 h-4 text-gold" />
            <span>Simpan QRIS</span>
          </a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
