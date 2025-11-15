// src/components/BackgroundMusicVideo.jsx
import React, { useEffect, useRef } from "react";

export default function BackgroundMusicVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const vid = videoRef.current;

    if (!vid) return;

    // Start muted autoplay (allowed)
    vid.muted = true;
    vid.play().catch(() => {
      console.log("Muted autoplay blocked; waiting for interaction...");
    });

    // Enable sound after any user click
    const enableSound = () => {
      vid.muted = false;

      vid.play().catch((err) => {
        console.log("Still blocked:", err);
      });

      console.log("Sound enabled.");
      window.removeEventListener("click", enableSound);
      window.removeEventListener("touchstart", enableSound);
    };

    window.addEventListener("click", enableSound);
    window.addEventListener("touchstart", enableSound);

    return () => {
      window.removeEventListener("click", enableSound);
      window.removeEventListener("touchstart", enableSound);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src="/scientist.mp4"
      loop
      playsInline
      preload="auto"
      muted
      style={{
        position: "fixed",
        width: "1px",
        height: "1px",
        opacity: 0,
        pointerEvents: "none",
        zIndex: -999,
      }}
    />
  );
}
