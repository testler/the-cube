import React, { useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';

const SmallCube = ({ position }) => {
  const [hovered, hover] = useState(false);
  const [cubePosition, setCubePosition] = useState(position);
  const [multiplier, setMultiplier] = useState(1);

  const handleMouseEnter = (event) => {
    event.stopPropagation();
    hover(true);
  };

  const handleMouseLeave = () => {
    hover(false);
    setCubePosition(position);
  };

  useFrame(({ clock }, delta) => {
    if (hovered) {
      setMultiplier((prevMultiplier) => Math.min(prevMultiplier + delta * 0.4, 1.1));
    } else {
      setMultiplier((prevMultiplier) => Math.max(prevMultiplier - delta * 0.4, 1));
    }

    const oscillation = Math.sin(clock.getElapsedTime() * (hovered ? 5.5 : 1.75)) * 0.02;
    setCubePosition([
      position[0] * (multiplier + oscillation),
      position[1] * (multiplier + oscillation),
      position[2] * (multiplier + oscillation),
    ]);
  });

  const boxGeometryArgs = useMemo(() => [1, 1, 1], []);

  return (
    <mesh position={cubePosition} onPointerOver={handleMouseEnter} onPointerOut={handleMouseLeave}>
      <boxGeometry args={boxGeometryArgs} />
      <meshStandardMaterial color={hovered ? '#8b15f9' : '#1537f9'} />
    </mesh>
  );
};

export default SmallCube;
