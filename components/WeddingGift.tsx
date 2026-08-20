"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CreditCard, Copy, Check, QrCode, Gift } from "lucide-react";
import { weddingData } from "@/data/wedding";
import QrisModal from "./QrisModal";

export default function WeddingGift() {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);
  const [isQrisOpen, setIsQrisOpen] = useState(false);

  const handleCopy = (accountNumber: string) => {
    navigator.clipboard.writeText(accountNumber);
    setCopiedAccount(accountNumber);
    setTimeout(() => {
      setCopiedAccount(null);
    }, 2500);
  };

  return (
    <section className="py-20 px-4 bg-ivory text-olive relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
            Tanda Kasih
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-olive-dark mt-2 mb-4">
            Hadiah Pernikahan
          </h2>
          <p className="text-sm md:text-base text-olive-light max-w-xl mx-auto font-light leading-relaxed">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika Anda ingin memberikan tanda kasih, Anda dapat mengirimkannya melalui fitur cashless di bawah ini:
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {weddingData.gift.accounts.map((acc, idx) => (
            <motion.div
              key={acc.accountNumber}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 rounded-3xl glass-card flex flex-col justify-between shadow-luxury border border-champagne relative group hover:border-gold transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-4 py-1 rounded-full bg-olive text-ivory text-xs font-bold tracking-widest uppercase">
                    {acc.logo}
                  </span>
                  <CreditCard className="w-6 h-6 text-gold" />
                </div>

                <p className="text-xs uppercase tracking-wider text-olive-light mb-1">
                  Nomor Rekening {acc.bankName}
                </p>

                <h3 className="font-serif text-2xl md:text-3xl font-bold text-olive-dark tracking-wider mb-2">
                  {acc.accountNumber}
                </h3>

                <p className="text-xs text-olive-light">Atas Nama:</p>
                <p className="text-sm font-semibold text-olive uppercase tracking-wider mt-0.5 mb-6">
                  {acc.accountHolder}
                </p>
              </div>

              <button
                onClick={() => handleCopy(acc.accountNumber)}
                className="w-full py-3 px-4 rounded-2xl bg-champagne-light/70 hover:bg-gold hover:text-white text-olive-dark text-xs uppercase tracking-wider font-semibold transition-all duration-300 flex items-center justify-center gap-2 border border-gold/30 shadow-sm"
              >
                {copiedAccount === acc.accountNumber ? (
                  <>
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-green-700">Nomor Rekening Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-gold" />
                    <span>Salin Nomor Rekening</span>
                  </>
                )}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 md:p-10 rounded-3xl glass-card-gold text-center flex flex-col items-center justify-center shadow-luxury border border-gold/40 max-w-xl mx-auto"
        >
          <div className="p-3 rounded-full bg-gold/20 text-gold-dark mb-4">
            <QrCode className="w-8 h-8" />
          </div>

          <h3 className="font-serif text-2xl font-bold text-olive-dark mb-2">
            Amplop Digital (QRIS)
          </h3>
          <p className="text-xs text-olive-light max-w-md leading-relaxed mb-6">
            Dukung kemudahan pembayaran dompet digital (GoPay, OVO, DANA, LinkAja, BCA, Mandiri, dll).
          </p>

          <button
            onClick={() => setIsQrisOpen(true)}
            className="px-8 py-3.5 rounded-2xl bg-olive text-ivory text-xs uppercase tracking-wider font-semibold hover:bg-olive-dark transition-all flex items-center gap-2 shadow-md"
          >
            <Gift className="w-4 h-4 text-gold" />
            <span>Lihat Kode QRIS</span>
          </button>
        </motion.div>

        <QrisModal isOpen={isQrisOpen} onClose={() => setIsQrisOpen(false)} />
      </div>
    </section>
  );
}
