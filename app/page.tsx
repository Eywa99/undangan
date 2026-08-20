"use client";

import InvitationView from "@/components/InvitationView";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function HomeContent() {
  const searchParams = useSearchParams();
  const rawGuest = searchParams.get("to");

  const formattedGuestName = rawGuest
    ? decodeURIComponent(rawGuest).replace(/-/g, " ")
    : "Bapak/Ibu/Saudara/i";

  return <InvitationView guestName={formattedGuestName} />;
}

export default function HomePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAF8F5]" />}>
      <HomeContent />
    </Suspense>
  );
}
