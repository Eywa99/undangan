"use client";

import { useEffect, useRef } from "react";
import { weddingData } from "@/data/wedding";

interface AudioPlayerProps {
  isPlaying: boolean;
}

export default function AudioPlayer({ isPlaying }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch((err) => {
        console.warn("Audio play warning:", err);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  return (
    <audio
      ref={audioRef}
      src={weddingData.musicUrl}
      loop
      preload="auto"
      className="hidden"
    />
  );
}
