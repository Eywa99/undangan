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
    photo: "/images/1.png",
  },
  bride: {
    shortName: "Rafikasari",
    fullName: "Rafikasari",
    fatherName: "Bpk. Hamzah",
    motherName: "Ibu Nuraeni",
    instagram: "@rafikasari",
    instagramUrl: "https://instagram.com",
    photo: "/images/2.png",
  },
  akadDateIso: "2026-10-24T08:00:00+07:00",
  akad: {
    title: "Akad Nikah",
    day: "Sabtu",
    date: "24 Oktober 2026",
    time: "08:00 - 10:00",
    timezone: "WITA",
    venueName: "Gedung 786",
    address: "Gedung 786, Kota Makassar, Sulawesi Selatan, Indonesia",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=-5.147665,119.432732",
  },
  resepsi: {
    title: "Resepsi Pernikahan",
    day: "Sabtu",
    date: "24 Oktober 2026",
    time: "11:00 - 14:00",
    timezone: "WITA",
    venueName: "Gedung 786",
    address: "Gedung 786, Kota Makassar, Sulawesi Selatan, Indonesia",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=-5.147665,119.432732",
  },
  mapsEmbedUrl: "https://maps.google.com/maps?q=-5.147665,119.432732+(Gedung%20786)&z=17&ie=UTF8&iwloc=&output=embed",
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
      image: "/images/1.png",
    },
    {
      id: 2,
      year: "2022",
      title: "Menjalin Hubungan",
      story: "Seiring berjalannya waktu, komitmen dan rasa saling memahami tumbuh semakin kuat mendampingi langkah bersama.",
      image: "/images/2.png",
    },
    {
      id: 3,
      year: "2025",
      title: "Momen Lamaran",
      story: "Di hadapan kedua keluarga besar, kami mengikat niat suci melalui prosesi lamaran yang hangat dan penuh kebahagiaan.",
      image: "/images/3.png",
    },
    {
      id: 4,
      year: "2026",
      title: "Menuju Pernikahan",
      story: "Insya Allah, kami akan menyempurnakan separuh agama dalam ikatan suci pernikahan di Gedung 786.",
      image: "/images/4.png",
    },
  ],
  gallery: [
    {
      id: 1,
      url: "/images/1.png",
      caption: "Momen Bahagia Bersama",
    },
    {
      id: 2,
      url: "/images/2.png",
      caption: "Senyuman Indah",
    },
    {
      id: 3,
      url: "/images/3.png",
      caption: "Cinta Dalam Kebersamaan",
    },
    {
      id: 4,
      url: "/images/4.png",
      caption: "Janji Suci",
    },
    {
      id: 5,
      url: "/images/5.png",
      caption: "Langkah Pertama",
    },
    {
      id: 6,
      url: "/images/1.png",
      caption: "Pelukan Hangat",
    },
    {
      id: 7,
      url: "/images/2.png",
      caption: "Kenangan Abadi",
    },
    {
      id: 8,
      url: "/images/3.png",
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
