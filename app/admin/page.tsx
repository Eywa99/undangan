"use client";

import { useState, useEffect } from "react";
import { Lock, LogOut, Download, Trash2, Users, CheckCircle, XCircle, Search, RefreshCw } from "lucide-react";
import { RsvpEntry } from "@/lib/kv";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState("");

  const [rsvpList, setRsvpList] = useState<RsvpEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "wilianrafikasari2026";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPassError("");
      fetchData();
    } else {
      setPassError("Password salah! Silakan coba lagi.");
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/rsvp");
      const data = await res.json();
      if (data.success) {
        setRsvpList(data.data || []);
      }
    } catch (err) {
      console.error("Failed to fetch RSVPs:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Apakah Anda yakin ingin menghapus data RSVP ini?")) return;
    setDeletingId(id);
    try {
      const res = await fetch(`/api/rsvp/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setRsvpList((prev) => prev.filter((item) => item.id !== id));
      } else {
        alert(data.message || "Gagal menghapus entry.");
      }
    } catch (err) {
      alert("Terjadi kesalahan server saat menghapus.");
    } finally {
      setDeletingId(null);
    }
  };

  const exportToCSV = () => {
    if (rsvpList.length === 0) return;

    const headers = ["Nama", "Kehadiran", "Jumlah Tamu", "Ucapan & Doa", "Tanggal"];
    const rows = rsvpList.map((item) => [
      `"${item.name.replace(/"/g, '""')}"`,
      `"${item.attendance}"`,
      item.guestCount,
      `"${(item.message || "").replace(/"/g, '""')}"`,
      `"${new Date(item.createdAt).toLocaleString("id-ID")}"`,
    ]);

    const csvContent = "data:text/csv;charset=utf-8,\uFEFF" + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Data-RSVP-Wedding-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const totalSubmissions = rsvpList.length;
  const attendingList = rsvpList.filter((item) => item.attendance === "hadir");
  const notAttendingList = rsvpList.filter((item) => item.attendance === "tidak_hadir");
  const totalAttendingGuests = attendingList.reduce((sum, item) => sum + (item.guestCount || 1), 0);

  const filteredList = rsvpList.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (item.message && item.message.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center p-4">
        <div className="max-w-md w-full p-8 rounded-3xl glass-card-gold shadow-2xl border border-gold/40 text-center">
          <div className="w-16 h-16 rounded-full bg-gold/20 text-gold-dark mx-auto flex items-center justify-center mb-6">
            <Lock className="w-8 h-8" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-olive-dark mb-2">
            Admin RSVP Portal
          </h1>
          <p className="text-xs text-olive-light mb-6">
            Masukkan password administrator untuk melihat seluruh data konfirmasi kehadiran tamu.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            {passError && (
              <div className="p-3 rounded-xl bg-red-100 text-red-700 text-xs font-medium border border-red-300">
                {passError}
              </div>
            )}
            <input
              type="password"
              placeholder="Masukkan Password Admin"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-3.5 rounded-2xl bg-white border border-champagne focus:border-gold focus:ring-2 focus:ring-gold/30 outline-none text-sm text-olive"
            />
            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-olive text-ivory font-semibold text-xs uppercase tracking-wider hover:bg-olive-dark transition-all shadow-md"
            >
              Masuk Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory text-olive p-4 sm:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-3xl glass-card border border-champagne shadow-md">
          <div>
            <span className="text-xs uppercase tracking-widest text-gold font-bold">
              Administrator Dashboard
            </span>
            <h1 className="font-serif text-3xl font-bold text-olive-dark">
              Manajemen RSVP & Tamu Undangan
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchData}
              disabled={loading}
              className="p-3 rounded-2xl bg-champagne-light/70 hover:bg-gold hover:text-white transition-all text-olive"
              title="Refresh Data"
            >
              <RefreshCw className={`w-5 h-5 ${loading ? "animate-spin" : ""}`} />
            </button>
            <button
              onClick={exportToCSV}
              className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gold text-white font-semibold text-xs uppercase tracking-wider hover:bg-gold-dark transition-all shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Export CSV</span>
            </button>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="p-3 rounded-2xl bg-red-100 text-red-700 hover:bg-red-200 transition-all"
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="p-6 rounded-3xl glass-card-gold border border-gold/40 flex items-center gap-4 shadow-sm">
            <div className="p-4 rounded-2xl bg-gold/20 text-gold-dark">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-olive-light font-medium">Total RSVP</p>
              <p className="font-serif text-3xl font-bold text-olive-dark">{totalSubmissions}</p>
            </div>
          </div>

          <div className="p-6 rounded-3xl glass-card border border-green-200 flex items-center gap-4 shadow-sm">
            <div className="p-4 rounded-2xl bg-green-100 text-green-700">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-olive-light font-medium">Hadir</p>
              <p className="font-serif text-3xl font-bold text-green-700">{attendingList.length}</p>
            </div>
          </div>

          <div className="p-6 rounded-3xl glass-card border border-red-200 flex items-center gap-4 shadow-sm">
            <div className="p-4 rounded-2xl bg-red-100 text-red-700">
              <XCircle className="w-8 h-8" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-olive-light font-medium">Tidak Hadir</p>
              <p className="font-serif text-3xl font-bold text-red-700">{notAttendingList.length}</p>
            </div>
          </div>

          <div className="p-6 rounded-3xl glass-card border border-gold/30 flex items-center gap-4 shadow-sm">
            <div className="p-4 rounded-2xl bg-champagne-light text-gold-dark">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-olive-light font-medium">Total Orang Hadir</p>
              <p className="font-serif text-3xl font-bold text-gold-dark">{totalAttendingGuests} Pax</p>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-3xl glass-card border border-champagne shadow-md space-y-6">
          <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-champagne">
            <Search className="w-5 h-5 text-gold" />
            <input
              type="text"
              placeholder="Cari berdasarkan nama atau isi ucapan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent outline-none text-sm text-olive placeholder:text-olive-light/50"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-olive border-collapse">
              <thead>
                <tr className="border-b border-champagne text-xs uppercase tracking-wider font-semibold text-olive-light bg-champagne-light/30">
                  <th className="py-4 px-4">Nama Tamu</th>
                  <th className="py-4 px-4">Status Kehadiran</th>
                  <th className="py-4 px-4">Jumlah Tamu</th>
                  <th className="py-4 px-4">Ucapan & Doa</th>
                  <th className="py-4 px-4">Waktu Dikirim</th>
                  <th className="py-4 px-4 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-champagne/40">
                {filteredList.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-olive-light italic">
                      Tidak ada data RSVP yang ditemukan.
                    </td>
                  </tr>
                ) : (
                  filteredList.map((item) => (
                    <tr key={item.id} className="hover:bg-champagne-light/20 transition-colors">
                      <td className="py-4 px-4 font-semibold text-olive-dark">
                        {item.name}
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                            item.attendance === "hadir"
                              ? "bg-green-100 text-green-800 border border-green-300"
                              : "bg-red-100 text-red-800 border border-red-300"
                          }`}
                        >
                          {item.attendance === "hadir" ? "Hadir" : "Tidak Hadir"}
                        </span>
                      </td>
                      <td className="py-4 px-4 font-medium">
                        {item.attendance === "hadir" ? `${item.guestCount} Orang` : "-"}
                      </td>
                      <td className="py-4 px-4 max-w-xs truncate text-xs text-olive/80" title={item.message}>
                        {item.message || "-"}
                      </td>
                      <td className="py-4 px-4 text-xs text-olive-light whitespace-nowrap">
                        {new Date(item.createdAt).toLocaleString("id-ID")}
                      </td>
                      <td className="py-4 px-4 text-center">
                        <button
                          onClick={() => handleDelete(item.id)}
                          disabled={deletingId === item.id}
                          className="p-2 rounded-xl text-red-600 hover:bg-red-100 transition-colors disabled:opacity-40"
                          title="Hapus Entry"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
