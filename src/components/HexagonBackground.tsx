import { motion } from 'framer-motion';
import { useMemo } from 'react';

const HexagonBackground = () => {
  // Generate hexagon positions in a beehive pattern
  const hexagons = useMemo(() => {
    const hexArray = [];
    const hexWidth = 80;
    const hexHeight = 70;
    const rows = 15;
    const cols = 20;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * (hexWidth * 0.75) - 200;
        const y = row * hexHeight + (col % 2 === 1 ? hexHeight / 2 : 0) - 100;
        
        hexArray.push({
          id: `hex-${row}-${col}`,
          x,
          y,
          delay: (row + col) * 0.1,
          glowDelay: Math.random() * 8,
        });
      }
    }
    return hexArray;
  }, []);

  const hexagonPath = "M30 5 L50 15 L50 35 L30 45 L10 35 L10 15 Z";

  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1400 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Gradient definitions for glowing effect */}
          <radialGradient id="hexGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#64ffda" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#64ffda" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#64ffda" stopOpacity="0" />
          </radialGradient>
          
          <linearGradient id="hexStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#64ffda" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#64ffda" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64ffda" stopOpacity="0.1" />
          </linearGradient>

          {/* Filter for glow effect */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {hexagons.map((hex) => (
          <motion.g
            key={hex.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: [0, 0.7, 0.3, 0.7, 0.3],
              scale: [0.5, 1, 1, 1, 1],
            }}
            transition={{
              duration: 8,
              delay: hex.glowDelay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            transform={`translate(${hex.x}, ${hex.y})`}
          >
            {/* Glow circle behind hexagon */}
            <motion.circle
              cx="30"
              cy="25"
              r="25"
              fill="url(#hexGlow)"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 4,
                delay: hex.glowDelay + 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Hexagon shape */}
            <motion.path
              d={hexagonPath}
              fill="none"
              stroke="url(#hexStroke)"
              strokeWidth="1"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                delay: hex.delay,
                ease: "easeInOut"
              }}
            />
          </motion.g>
        ))}
      </svg>
    </div>
  );
};

export default HexagonBackground;