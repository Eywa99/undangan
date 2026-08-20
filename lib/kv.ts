import { kv } from "@vercel/kv";

export interface RsvpEntry {
  id: string;
  name: string;
  attendance: "hadir" | "tidak_hadir";
  guestCount: number;
  message: string;
  createdAt: string;
}

const RSVP_KEY = "wedding_rsvp_entries";

let memoryStorage: RsvpEntry[] = [
  {
    id: "sample-1",
    name: "Budi Santoso",
    attendance: "hadir",
    guestCount: 2,
    message: "Selamat atas pernikahannya Syafri & Aisyah! Semoga menjadi keluarga sakinah mawaddah warahmah.",
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
  },
  {
    id: "sample-2",
    name: "Dewi Lestari",
    attendance: "hadir",
    guestCount: 1,
    message: "Barakallahu lakuma wa baraka 'alaikuma wa jama'a bainakuma fii khair. Selamat yaa!",
    createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
  },
];

function isKvConfigured(): boolean {
  return Boolean(
    process.env.KV_REST_API_URL &&
    process.env.KV_REST_API_TOKEN
  );
}

export async function getRsvpList(): Promise<RsvpEntry[]> {
  if (isKvConfigured()) {
    try {
      const data = await kv.get<RsvpEntry[]>(RSVP_KEY);
      return data || [];
    } catch (err) {
      console.warn("Vercel KV fetch fallback to memory:", err);
      return memoryStorage;
    }
  }
  return memoryStorage;
}

export async function addRsvpEntry(entry: Omit<RsvpEntry, "id" | "createdAt">): Promise<RsvpEntry> {
  const newEntry: RsvpEntry = {
    ...entry,
    id: "rsvp_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7),
    createdAt: new Date().toISOString(),
  };

  if (isKvConfigured()) {
    try {
      const currentList = (await kv.get<RsvpEntry[]>(RSVP_KEY)) || [];
      const updated = [newEntry, ...currentList];
      await kv.set(RSVP_KEY, updated);
      return newEntry;
    } catch (err) {
      console.warn("Vercel KV write fallback to memory:", err);
    }
  }

  memoryStorage = [newEntry, ...memoryStorage];
  return newEntry;
}

export async function deleteRsvpEntry(id: string): Promise<boolean> {
  if (isKvConfigured()) {
    try {
      const currentList = (await kv.get<RsvpEntry[]>(RSVP_KEY)) || [];
      const updated = currentList.filter((item) => item.id !== id);
      await kv.set(RSVP_KEY, updated);
      return true;
    } catch (err) {
      console.warn("Vercel KV delete fallback:", err);
    }
  }

  memoryStorage = memoryStorage.filter((item) => item.id !== id);
  return true;
}
