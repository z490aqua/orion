import { useState } from 'react';
import { motion } from 'framer-motion';

interface Star {
  x: number;
  y: number;
  name: string;
  magnitude: number;
  color: string;
}

interface StarMap3DProps {
  stars: Star[];
}

export function StarMap3D({ stars }: StarMap3DProps) {
  const [hoveredStar, setHoveredStar] = useState<string | null>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientY - rect.top - rect.height / 2) / 10;
    const y = -(e.clientX - rect.left - rect.width / 2) / 10;
    setRotation({ x, y });
  };

  return (
    <div 
      className="w-full aspect-square relative bg-black rounded-2xl overflow-hidden backdrop-blur-xl border border-white/10"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotation({ x: 0, y: 0 })}
    >
      <div 
        className="w-full h-full relative preserve-3d"
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        {/* Background grid */}
        {/*<div className="absolute inset-0">
          <svg width="100%" height="100%" className="opacity-10">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Stars */}
        {stars.map((star) => (
          <motion.div
            key={star.name}
            className="absolute star-glow"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              transform: `translateZ(${50 - star.magnitude * 20}px)`,
            }}
            whileHover={{ scale: 1.5, zIndex: 10 }}
            onHoverStart={() => setHoveredStar(star.name)}
            onHoverEnd={() => setHoveredStar(null)}
          >
            <div 
              className="rounded-full"
              style={{
                width: `${(3 - star.magnitude * 0.5) * 2}px`,
                height: `${(3 - star.magnitude * 0.5) * 2}px`,
                backgroundColor: star.color,
                boxShadow: `0 0 10px ${star.color}, 0 0 20px ${star.color}80`
              }}
            />
            {hoveredStar === star.name && (
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full 
                          px-2 py-1 bg-black/80 text-white text-xs rounded whitespace-nowrap"
              >
                {star.name}
              </div>
            )}
          </motion.div>
        ))}

        {/* Constellation lines 
        <svg className="absolute inset-0 pointer-events-none">
          <path
            d="M 50,30 L 30,50 L 45,65 L 55,65 L 70,50 L 50,30 M 45,65 L 40,85 M 55,65 L 60,85"
            className="stroke-white/20"
            strokeWidth="0.5"
            fill="none"
          />
          <path 
            d="M 30,50 L 20,40 L 15,30 L 10,25 L 5,20"
            className="stroke-white/20"
            strokeWidth="0.5"
            fill="none"
          />
          <path 
            d="M 70,75 L 75,75 L 80,75 L 85,75 L 90,75 L 95,75"
            className="stroke-white/20"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>*/}
      </div>
    </div>
  );
}