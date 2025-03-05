
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  name: string;
  magnitude: number;
  color: string;
}

interface StarMapProps {
  stars: Star[];
}

export function StarMap({ stars }: StarMapProps) {
  const [hoveredStar, setHoveredStar] = useState<string | null>(null);

  return (
    <div className="w-full aspect-square relative bg-black rounded-2xl overflow-hidden backdrop-blur-xl border border-white/10">
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full"
      >
        {/* Background grid */}
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)" />

        {/* Main body of Orion */}
        <g className="stroke-white/20 fill-none" strokeWidth="0.5">
          {/* Right shoulder (Betelgeuse) to belt */}
          <path d="M 29,43 L 39,75" />
          <path d="M 29,43 L 43,38" />

          {/* Left shoulder (Bellatrix) to belt */}
          <path d="M 50,48 L 45,67" />
          <path d="M 50,48 L 72,36" />

          {/* Belt stars */}
          <path d="M 39,75 L 42,71 L 45,67" />
          
          {/* Right leg (Rigel) */}
          <path d="M 45,67 L 58,93" />
          
          {/* Left leg (Saiph) */}
          <path d="M 39,75 L 33,98" />
          
          {/* Head (Meissa) */}
          <path d="M 50,48 L 43,38" />
        </g>

        {/* Club lines */}
        <path 
          d="M 29,43 L 23,36 L 21,20 L 19,21 L 31,3 L 25,3 L 19,21 L 23,36"
          className="stroke-white/20 fill-none"
          strokeWidth="0.5"
        />

        {/* Shield lines */}
        <path 
          d="M 62,32 L 67,32 L 72,36 L 74,40 L 79,49 L 83,58"
          className="stroke-white/20 fill-none"
          strokeWidth="0.5"
        />

        {/* Stars */}
        {stars.map((star) => (
          <g key={star.name} className="star-glow">
            <motion.circle
              cx={star.x}
              cy={star.y}
              r={3 - star.magnitude * 0.5}
              fill={star.color || 'white'}
              whileHover={{ scale: 1.5 }}
              onHoverStart={() => setHoveredStar(star.name)}
              onHoverEnd={() => setHoveredStar(null)}
            />
          </g>
        ))}
      </svg>
      
      {/* Tooltip overlays */}
      {hoveredStar && stars.map(star => 
        star.name === hoveredStar && (
          <div 
            key={`tooltip-${star.name}`}
            className="absolute px-2 py-1 bg-black/80 text-white text-xs rounded whitespace-nowrap pointer-events-none"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              transform: 'translate(-50%, -130%)'
            }}
          >
            {star.name}
            <div className="text-xs opacity-75">
              {star.z} light years
            </div>
          </div>
        )
      )}
    </div>
  );
}
