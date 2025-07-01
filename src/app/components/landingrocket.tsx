// components/RocketLanding.tsx
'use client';
import React, { useEffect, useState } from 'react';

export default function RocketLanding() {
  const [hasLanded, setHasLanded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setHasLanded(true), 2000); // 2s descent
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative h-screen bg-gradient-to-b from-sky-900 to-slate-800 overflow-hidden">
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-[2000ms] ease-in-out text-6xl ${
          hasLanded ? 'bottom-10' : 'top-0'
        }`}
      >
        🚀
      </div>

      {hasLanded && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-yellow-300 text-3xl animate-ping">
          ☁️
        </div>
      )}
    </div>
  );
}