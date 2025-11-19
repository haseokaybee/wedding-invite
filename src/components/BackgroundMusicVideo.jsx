import React, { useRef } from "react";

export default function BackgroundMusicVideo({ playAudio }) {
  const videoRef = useRef(null);

  // Called by parent when user clicks "Open Invitation"
  const startAudio = () => {
    const vid = videoRef.current;
    if (!vid) return;

    vid.muted = false;
    vid.play().catch(() => console.log("Still blocked"));
  };

  // Expose the function to parent
  React.useEffect(() => {
    if (playAudio) startAudio();
  }, [playAudio]);

  return (
    <video
      ref={videoRef}
      src="/goldenhour.mp4"
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
