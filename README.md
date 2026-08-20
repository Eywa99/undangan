# Undangan Pernikahan Digital Premium (Clean Setup)

Website **Undangan Pernikahan Digital Premium** baru yang dibangun 100% dari nol menggunakan **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, dan **Vercel KV**.

---

## 🌟 Fitur Utama

1. **Personalization Nama Tamu Dinamis**
   - Rute URL: `/to/nama-tamu` (Contoh: `https://pernikahan-kami.vercel.app/to/ikhwatul`)
   - Tampilan Cover:
     ```
     Kepada Yth.
     Ikhwatul
     ```

2. **12 Fitur Lengkap**:
   - **Cover Fullscreen**: Tombol "Buka Undangan" (membuka scroll & memutar musik).
   - **Musik Latar & Floating Menu**: Tombol ON/OFF musik, Bagikan WA, & Scroll ke atas.
   - **QS Ar-Rum 21**: Teks Arab, Latin, dan Terjemahan Indonesia.
   - **Profil Mempelai**: Card Pria & Wanita (Foto, nama orang tua, & tombol Instagram).
   - **Realtime Countdown**: Hitung mundur waktu Akad Nikah.
   - **Detail Acara**: Schedule Akad & Resepsi + Google Maps CTA & Embed Map.
   - **Love Story Timeline**: 4 tahapan perjalanan cinta dengan foto & cerita.
   - **Galeri Foto**: Masonry photo grid dengan Lightbox modal zoom & navigasi.
   - **Form RSVP & Ucapan**: Input nama, status kehadiran, jumlah tamu, doa restu, tersimpan di database.
   - **Wedding Gift**: Kartu rekening bank dengan tombol Salin Nomor & Preview QRIS modal.
   - **Penutup & Footer**: Gratitude message, signatures, & footer.
   - **Admin Portal (`/admin`)**: Password portal (default: `syafriaisyah2026`), statistik, search, & Export CSV.

---

## 🛠️ Cara Mengubah Data Undangan

Seluruh konfigurasi data undangan berpusat pada 1 file:

```text
data/wedding.ts
```

### 1. Mengubah Nama & Orang Tua
Edit properti `groom` & `bride` pada `data/wedding.ts`:
```typescript
groom: {
  shortName: "Muh. Syafri",
  fullName: "Muhammad Syafri, S.Kom.",
  fatherName: "Bpk. H. Ahmad Syukri",
  motherName: "Ibu Hj. Aminah Hasan",
  instagramUrl: "https://instagram.com",
  photo: "URL_FOTO_PRIA",
}
```

### 2. Mengubah Tanggal & Lokasi
Edit `akadDateIso`, `akad`, dan `resepsi` pada `data/wedding.ts`:
```typescript
akadDateIso: "2026-10-24T08:00:00+07:00",
akad: {
  day: "Sabtu",
  date: "24 Oktober 2026",
  time: "08:00 - 10:00",
  venueName: "Grand Ballroom Royal Palace",
  address: "Alamat Lokasi Pernikahan",
  googleMapsUrl: "https://maps.google.com",
}
```

### 3. Mengubah Rekening Bank & QRIS
Edit `gift.accounts` dan `gift.qrisUrl` pada `data/wedding.ts`:
```typescript
gift: {
  accounts: [
    {
      bankName: "Bank BCA",
      accountNumber: "1234567890",
      accountHolder: "NAMA PEMILIK",
      logo: "BCA",
    },
  ],
  qrisUrl: "URL_GAMBAR_QRIS",
}
```

### 4. Mengubah Musik
Edit `musicUrl` pada `data/wedding.ts`:
```typescript
musicUrl: "URL_FILE_AUDIO_MP3",
```
