// GlitterDrop.jsx
import React, { useEffect } from "react";

export default function GlitterDrop({ active, color = "gold" }) {
  useEffect(() => {
    if (!active) return;

    // 🎨 COLOR MAP
    const colorMap = {
      gold: "radial-gradient(circle, #f8e9b0, #d4b76e, #bfa46f)",
      pink: "radial-gradient(circle, #ffe1f1, #ff9fcb, #e36fa7)",
      silver: "radial-gradient(circle, #ffffff, #d6d6d6, #b5b5b5)",
      rosegold: "radial-gradient(circle, #fcd8d4, #d8a6a1, #b67a75)",
      white: "radial-gradient(circle, #ffffff, #eeeeee, #cccccc)"
    };

    const count = 80; // particle count
    const container = document.createElement("div");
    container.className = "glitter-container";

    for (let i = 0; i < count; i++) {
      const spark = document.createElement("div");
      spark.className = "glitter";

      // ⭐ APPLY COLOR
      spark.style.background = colorMap[color];

      spark.style.left = Math.random() * 100 + "vw";
      spark.style.animationDelay = Math.random() * 2 + "s";
      spark.style.opacity = 0.3 + Math.random() * 0.7;
      spark.style.transform = `scale(${0.4 + Math.random() * 0.8})`;

      container.appendChild(spark);
    }

    document.body.appendChild(container);

    return () => {
      container.remove();
    };
  }, [active, color]); // ⭐ re-generate when color changes

  return null;
}
