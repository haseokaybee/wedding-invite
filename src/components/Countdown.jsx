// src/components/Countdown.jsx
import React, { useEffect, useState } from "react";

function calculateTimeLeft(targetDate) {
  const target = new Date(targetDate).getTime();
  const now = Date.now();
  const distance = target - now;

  if (distance <= 0) {
    return {
      finished: true,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    finished: false,
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / 1000 / 60) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  };
}

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(() =>
    calculateTimeLeft(targetDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.finished) {
    return (
      <p style={{ textAlign: "center", color: "#d58fa6", fontWeight: 600 }}>
        The big day has arrived! 💍
      </p>
    );
  }

  const boxStyle = {
    minWidth: "70px",
    padding: "10px",
    borderRadius: "16px",
    background: "linear-gradient(135deg, #fff8fb, #ffeaf3)",
    border: "1px solid #f0d7df",
    textAlign: "center",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        flexWrap: "wrap",
        marginTop: "10px",
      }}
    >
      <div style={boxStyle}>
        <div style={{ fontSize: "1.3rem", fontWeight: 600 }}>
          {timeLeft.days}
        </div>
        <div style={{ fontSize: "0.75rem", color: "#7a5c5c" }}>Days</div>
      </div>

      <div style={boxStyle}>
        <div style={{ fontSize: "1.3rem", fontWeight: 600 }}>
          {timeLeft.hours}
        </div>
        <div style={{ fontSize: "0.75rem", color: "#7a5c5c" }}>Hours</div>
      </div>

      <div style={boxStyle}>
        <div style={{ fontSize: "1.3rem", fontWeight: 600 }}>
          {timeLeft.minutes}
        </div>
        <div style={{ fontSize: "0.75rem", color: "#7a5c5c" }}>Minutes</div>
      </div>

      <div style={boxStyle}>
        <div style={{ fontSize: "1.3rem", fontWeight: 600 }}>
          {timeLeft.seconds}
        </div>
        <div style={{ fontSize: "0.75rem", color: "#7a5c5c" }}>Seconds</div>
      </div>
    </div>
  );
}
