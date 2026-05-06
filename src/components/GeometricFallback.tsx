export const GeometricFallback = () => (
  <div className="aspect-[16/10] w-full overflow-hidden rounded-md bg-zinc-950">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="geo-grid"
          x="0"
          y="0"
          width="48"
          height="48"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 48 0 L 0 0 0 48"
            fill="none"
            stroke="#3f3f46"
            strokeWidth="0.7"
          />
        </pattern>
        <radialGradient
          id="geo-vignette"
          cx="50%"
          cy="50%"
          r="70%"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0%" stopColor="#09090b" stopOpacity="0" />
          <stop offset="100%" stopColor="#09090b" stopOpacity="0.95" />
        </radialGradient>
        <radialGradient
          id="geo-glow"
          cx="50%"
          cy="50%"
          r="45%"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="100%" height="100%" fill="url(#geo-grid)" />
      <rect width="100%" height="100%" fill="url(#geo-vignette)" />
      <rect width="100%" height="100%" fill="url(#geo-glow)" />

      <rect
        x="220"
        y="130"
        width="360"
        height="230"
        rx="6"
        fill="#18181b"
        stroke="#3f3f46"
        strokeWidth="1"
      />

      <line
        x1="221"
        y1="168"
        x2="579"
        y2="168"
        stroke="#3f3f46"
        strokeWidth="0.8"
      />

      <circle cx="247" cy="149" r="5" fill="#52525b" />
      <circle cx="263" cy="149" r="5" fill="#52525b" />
      <circle cx="279" cy="149" r="5" fill="#52525b" />

      <rect x="310" y="139" width="180" height="20" rx="10" fill="#27272a" />

      <rect x="248" y="190" width="260" height="8" rx="2" fill="#27272a" />
      <rect x="248" y="207" width="200" height="8" rx="2" fill="#27272a" />
      <rect x="248" y="224" width="230" height="8" rx="2" fill="#27272a" />
      <rect x="248" y="241" width="150" height="8" rx="2" fill="#27272a" />
      <rect x="248" y="270" width="304" height="56" rx="4" fill="#27272a" />
    </svg>
  </div>
);
