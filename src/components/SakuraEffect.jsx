// SakuraEffect.jsx
import React, { useEffect } from "react";

export default function SakuraEffect() {
  useEffect(() => {
    console.log("🌸 Loading Sakura JS…");

    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/jhammann/sakura/dist/sakura.min.js";
    script.async = true;

    script.onload = () => {
      console.log("🌸 Sakura loaded:", window.Sakura);

      if (window.Sakura) {
        console.log("🌸 Initializing Sakura…");
        new window.Sakura("body");

      } else {
        console.log("❌ Sakura not found in window.");
      }
    };

    script.onerror = () => {
      console.log("❌ Failed to load sakura.min.js");
    };

    document.body.appendChild(script);

    return () => {
      const petals = document.querySelectorAll(".sakura");
      petals.forEach((p) => p.remove());
    };
  }, []);

  return null;
}
