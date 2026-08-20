import InvitationView from "@/components/InvitationView";
import type { Metadata } from "next";
import { weddingData } from "@/data/wedding";

interface DynamicGuestPageProps {
  params: Promise<{ guest: string }>;
}

export async function generateMetadata({
  params,
}: DynamicGuestPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const guest = resolvedParams?.guest || "";
  const decodedGuest = guest ? decodeURIComponent(guest).replace(/-/g, " ") : "Bapak/Ibu/Saudara/i";

  return {
    title: `Kepada Yth. ${decodedGuest} - Undangan Pernikahan ${weddingData.groom.shortName} & ${weddingData.bride.shortName}`,
    description: `Tanpa Mengurangi Rasa Hormat, Kami Mengundang ${decodedGuest} Untuk Hadir Pada Acara Pernikahan Kami.`,
  };
}

export default async function DynamicGuestPage({ params }: DynamicGuestPageProps) {
  const resolvedParams = await params;
  const guest = resolvedParams?.guest || "";

  const formattedGuestName = guest
    ? decodeURIComponent(guest).replace(/-/g, " ")
    : "Bapak/Ibu/Saudara/i";

  return <InvitationView guestName={formattedGuestName} />;
}
