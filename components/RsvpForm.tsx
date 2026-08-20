"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { CheckCircle2, Send, Users, HeartHandshake, MessageSquare, Loader2 } from "lucide-react";
import { RsvpEntry } from "@/lib/kv";

interface RsvpFormProps {
  defaultGuestName?: string;
}

export default function RsvpForm({ defaultGuestName }: RsvpFormProps) {
  const [name, setName] = useState(defaultGuestName || "");
  const [attendance, setAttendance] = useState<"hadir" | "tidak_hadir">("hadir");
  const [guestCount, setGuestCount] = useState<number>(1);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [wishesList, setWishesList] = useState<RsvpEntry[]>([]);
  const [loadingWishes, setLoadingWishes] = useState(true);

  const fetchWishes = async () => {
    try {
      const res = await fetch("/api/rsvp");
      const data = await res.json();
      if (data.success) {
        setWishesList(data.data || []);
      }
    } catch (err) {
      console.error("Failed to load wishes:", err);
    } finally {
      setLoadingWishes(false);
    }
  };

  useEffect(() => {
    fetchWishes();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg("Mohon masukkan nama Anda.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          attendance,
          guestCount: attendance === "hadir" ? guestCount : 0,
          message: message.trim(),
        }),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setSuccessMsg("Terima kasih! Konfirmasi kehadiran dan ucapan Anda telah berhasil terkirim.");
        setMessage("");
        fetchWishes();
      } else {
        setErrorMsg(result.message || "Gagal mengirim RSVP. Silakan coba lagi.");
      }
    } catch (err) {
      setErrorMsg("Terjadi kesalahan koneksi. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-ivory via-champagne-light/30 to-ivory text-olive relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
            Konfirmasi Kehadiran
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-olive-dark mt-2 mb-4">
            RSVP & Ucapan Doa
          </h2>
          <p className="text-sm md:text-base text-olive-light max-w-xl mx-auto font-light leading-relaxed">
            Mohon konfirmasikan kehadiran Anda serta sampaikan doa restu untuk kebahagiaan kami.
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 md:p-12 rounded-3xl glass-card-gold shadow-luxury border border-gold/40 mb-16 relative"
        >
          {successMsg ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-10 flex flex-col items-center justify-center space-y-4"
            >
              <div className="p-4 rounded-full bg-gold/20 text-gold-dark shadow-glass-gold">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-olive-dark">
                Terima Kasih!
              </h3>
              <p className="text-sm text-olive max-w-md leading-relaxed">
                {successMsg}
              </p>
              <button
                onClick={() => setSuccessMsg(null)}
                className="mt-4 px-6 py-2 rounded-full bg-gold text-white text-xs uppercase tracking-wider font-semibold hover:bg-gold-dark transition-all"
              >
                Kirim Ucapan Lain
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="p-4 rounded-xl bg-red-100/80 border border-red-300 text-red-700 text-xs text-center font-medium">
                  {errorMsg}
                </div>
              )}

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-olive-dark mb-2">
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan nama lengkap Anda"
                  className="w-full px-5 py-3.5 rounded-2xl bg-white/80 border border-champagne focus:border-gold focus:ring-2 focus:ring-gold/30 outline-none transition-all text-sm text-olive font-medium placeholder:text-olive-light/50"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-olive-dark mb-2">
                  Konfirmasi Kehadiran <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setAttendance("hadir")}
                    className={`py-3.5 px-4 rounded-2xl border text-xs sm:text-sm font-semibold tracking-wider transition-all flex items-center justify-center gap-2 ${
                      attendance === "hadir"
                        ? "bg-olive text-ivory border-olive shadow-md"
                        : "bg-white/60 text-olive-dark border-champagne hover:bg-white"
                    }`}
                  >
                    <HeartHandshake className="w-4 h-4 text-gold" />
                    <span>Hadir</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setAttendance("tidak_hadir")}
                    className={`py-3.5 px-4 rounded-2xl border text-xs sm:text-sm font-semibold tracking-wider transition-all flex items-center justify-center gap-2 ${
                      attendance === "tidak_hadir"
                        ? "bg-olive text-ivory border-olive shadow-md"
                        : "bg-white/60 text-olive-dark border-champagne hover:bg-white"
                    }`}
                  >
                    <span>Tidak Hadir</span>
                  </button>
                </div>
              </div>

              {attendance === "hadir" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <label className="block text-xs uppercase tracking-wider font-semibold text-olive-dark mb-2">
                    Jumlah Tamu (Orang)
                  </label>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-gold" />
                    <select
                      value={guestCount}
                      onChange={(e) => setGuestCount(Number(e.target.value))}
                      className="w-full px-5 py-3.5 rounded-2xl bg-white/80 border border-champagne focus:border-gold focus:ring-2 focus:ring-gold/30 outline-none transition-all text-sm text-olive font-medium cursor-pointer"
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                          {num} Orang
                        </option>
                      ))}
                    </select>
                  </div>
                </motion.div>
              )}

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-olive-dark mb-2">
                  Ucapan & Doa Restu
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tuliskan ucapan dan doa terbaik untuk kedua mempelai..."
                  className="w-full px-5 py-3.5 rounded-2xl bg-white/80 border border-champagne focus:border-gold focus:ring-2 focus:ring-gold/30 outline-none transition-all text-sm text-olive font-normal placeholder:text-olive-light/50 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-gold via-gold-accent to-gold-dark text-white font-semibold text-sm uppercase tracking-wider shadow-lg shadow-gold/25 hover:shadow-gold/40 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Mengirim...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Kirim Konfirmasi RSVP</span>
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>

        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="w-5 h-5 text-gold" />
            <h3 className="font-serif text-2xl font-bold text-olive-dark">
              Ucapan & Doa Tamu ({wishesList.length})
            </h3>
          </div>

          {loadingWishes ? (
            <div className="text-center py-8 text-olive-light flex items-center justify-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin text-gold" />
              <span className="text-xs uppercase tracking-wider">Memuat ucapan...</span>
            </div>
          ) : wishesList.length === 0 ? (
            <div className="text-center py-8 text-olive-light text-sm italic">
              Belum ada ucapan. Jadilah yang pertama memberikan doa!
            </div>
          ) : (
            <div className="max-h-[500px] overflow-y-auto space-y-4 pr-2">
              {wishesList.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-5 rounded-2xl glass-card border border-champagne/80 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-serif text-lg font-bold text-olive-dark">
                      {item.name}
                    </h4>
                    <span
                      className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                        item.attendance === "hadir"
                          ? "bg-green-100 text-green-800 border border-green-200"
                          : "bg-gray-100 text-gray-700 border border-gray-200"
                      }`}
                    >
                      {item.attendance === "hadir" ? `Hadir (${item.guestCount} orang)` : "Tidak Hadir"}
                    </span>
                  </div>
                  {item.message && (
                    <p className="text-xs md:text-sm text-olive/80 leading-relaxed font-light mt-1">
                      &quot;{item.message}&quot;
                    </p>
                  )}
                  <span className="text-[10px] text-olive-light/60 mt-2 block text-right">
                    {new Date(item.createdAt).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
