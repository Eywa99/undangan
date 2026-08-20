export interface CouplePerson {
  shortName: string;
  fullName: string;
  fatherName: string;
  motherName: string;
  instagram: string;
  instagramUrl: string;
  photo: string;
}

export interface EventDetail {
  title: string;
  day: string;
  date: string;
  time: string;
  timezone: string;
  venueName: string;
  address: string;
  googleMapsUrl: string;
}

export interface Milestone {
  id: number;
  year: string;
  title: string;
  story: string;
  image: string;
}

export interface GalleryPhoto {
  id: number;
  url: string;
  caption: string;
}

export interface BankAccount {
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  logo: string;
}

export interface WeddingData {
  groom: CouplePerson;
  bride: CouplePerson;
  monogram: string;
  akadDateIso: string;
  akad: EventDetail;
  resepsi: EventDetail;
  mapsEmbedUrl: string;
  quranVerse: {
    surah: string;
    arabic: string;
    latin: string;
    translation: string;
  };
  loveStory: Milestone[];
  gallery: GalleryPhoto[];
  gift: {
    accounts: BankAccount[];
    qrisUrl: string;
  };
  musicUrl: string;
  whatsApp: {
    phoneNumber: string;
    defaultMessage: string;
  };
}

export const weddingData: WeddingData = {
  monogram: "W & R",
  groom: {
    shortName: "Wilian WL",
    fullName: "Wilian WL",
    fatherName: "Bpk. John WL",
    motherName: "Ibu Rahmawati",
    instagram: "@wilian_wl",
    instagramUrl: "https://instagram.com",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
  },
  bride: {
    shortName: "Rafikasari",
    fullName: "Rafikasari",
    fatherName: "Bpk. Hamzah",
    motherName: "Ibu Nuraeni",
    instagram: "@rafikasari",
    instagramUrl: "https://instagram.com",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
  },
  akadDateIso: "2026-10-24T08:00:00+07:00",
  akad: {
    title: "Akad Nikah",
    day: "Sabtu",
    date: "24 Oktober 2026",
    time: "08:00 - 10:00",
    timezone: "WIB",
    venueName: "Gedung 786",
    address: "Gedung 786, Lokasi Acara Pernikahan",
    googleMapsUrl: "https://maps.app.goo.gl/qcdb3c34qK48FpFp9",
  },
  resepsi: {
    title: "Resepsi Pernikahan",
    day: "Sabtu",
    date: "24 Oktober 2026",
    time: "11:00 - 14:00",
    timezone: "WIB",
    venueName: "Gedung 786",
    address: "Gedung 786, Lokasi Acara Pernikahan",
    googleMapsUrl: "https://maps.app.goo.gl/qcdb3c34qK48FpFp9",
  },
  mapsEmbedUrl: "https://maps.google.com/maps?q=https://maps.app.goo.gl/qcdb3c34qK48FpFp9&t=&z=15&ie=UTF8&iwloc=&output=embed",
  quranVerse: {
    surah: "QS. Ar-Rum Ayat 21",
    arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ",
    latin: "Wa min āyātihī an khalaqa lakum min anfusikum azwājal litaskunū ilaihā wa ja'ala bainakum mawaddataw wa raḥmah, inna fī ẓālika la'āyātil liqaumiy yatafakkarūn.",
    translation: "Dan di antara tanda-tanda (kebesaran-Nya) ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.",
  },
  loveStory: [
    {
      id: 1,
      year: "2021",
      title: "Pertama Bertemu",
      story: "Takdir mempertemukan kami pertama kali. Sebuah sapaan singkat menjadi awal dari kisah panjang kebahagiaan kami.",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 2,
      year: "2022",
      title: "Menjalin Hubungan",
      story: "Seiring berjalannya waktu, komitmen dan rasa saling memahami tumbuh semakin kuat mendampingi langkah bersama.",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 3,
      year: "2025",
      title: "Momen Lamaran",
      story: "Di hadapan kedua keluarga besar, kami mengikat niat suci melalui prosesi lamaran yang hangat dan penuh kebahagiaan.",
      image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 4,
      year: "2026",
      title: "Menuju Pernikahan",
      story: "Insya Allah, kami akan menyempurnakan separuh agama dalam ikatan suci pernikahan di Gedung 786.",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=600",
    },
  ],
  gallery: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
      caption: "Momen Bahagia Bersama",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1000",
      caption: "Senyuman Indah",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=1000",
      caption: "Cinta Dalam Kebersamaan",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&q=80&w=1000",
      caption: "Janji Suci",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=1000",
      caption: "Langkah Pertama",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=1000",
      caption: "Pelukan Hangat",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&q=80&w=1000",
      caption: "Kenangan Abadi",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000",
      caption: "Bahagia Selamanya",
    },
  ],
  gift: {
    accounts: [
      {
        bankName: "Bank BCA",
        accountNumber: "1234567890",
        accountHolder: "WILIAN WL",
        logo: "BCA",
      },
      {
        bankName: "Bank Mandiri",
        accountNumber: "9876543210",
        accountHolder: "RAFIKASARI",
        logo: "MANDIRI",
      },
    ],
    qrisUrl: "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=00020101021126580014ID.GO.QRIS.WWW011893600914000000000002030005204581253033605405100005802ID5915WEDDING%20GIFT6007JAKARTA61051211062070703A01630489A1",
  },
  musicUrl: "/music/violin.mp3",
  whatsApp: {
    phoneNumber: "6281234567890",
    defaultMessage: "Halo Wilian & Rafikasari, selamat atas pernikahan kalian! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah.",
  },
};
