"use client";

import { useState, useRef } from "react";
import LoadingScreen from "./LoadingScreen";
import CoverHero from "./CoverHero";
import QuranVerse from "./QuranVerse";
import CoupleProfile from "./CoupleProfile";
import Countdown from "./Countdown";
import EventDetails from "./EventDetails";
import LoveStory from "./LoveStory";
import Gallery from "./Gallery";
import RsvpForm from "./RsvpForm";
import WeddingGift from "./WeddingGift";
import Closing from "./Closing";
import FloatingMenu from "./FloatingMenu";
import PetalsCanvas from "./PetalsCanvas";
import AudioPlayer from "./AudioPlayer";

interface InvitationViewProps {
  guestName: string;
}

export default function InvitationView({ guestName }: InvitationViewProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const mainContentRef = useRef<HTMLDivElement | null>(null);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    setIsPlaying(true);

    setTimeout(() => {
      if (mainContentRef.current) {
        mainContentRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleToggleMusic = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className={`relative min-h-screen bg-ivory text-olive ${isOpen ? "overflow-y-auto" : "overflow-hidden max-h-screen"}`}>
      <PetalsCanvas />
      <AudioPlayer isPlaying={isPlaying} />
      <LoadingScreen />

      <CoverHero
        guestName={guestName}
        isOpen={isOpen}
        onOpen={handleOpenInvitation}
      />

      <div ref={mainContentRef} className="relative z-20">
        <QuranVerse />
        <CoupleProfile />
        <Countdown />
        <EventDetails />
        <LoveStory />
        <Gallery />
        <RsvpForm defaultGuestName={guestName !== "Bapak/Ibu/Saudara/i" ? guestName : ""} />
        <WeddingGift />
        <Closing />
      </div>

      {isOpen && (
        <FloatingMenu
          isPlaying={isPlaying}
          onToggleMusic={handleToggleMusic}
          guestName={guestName}
        />
      )}
    </div>
  );
}
