import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

const SmallCube = ({ position }) => {
  const [hovered, hover] = useState(false);
  const [cubePosition, setCubePosition] = useState(position);
  const [multiplier, setMultiplier] = useState(1);
  const { camera } = useThree();

  const handleMouseEnter = useCallback(() => {
    hover(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    hover(false);
    setCubePosition(position);
  }, [position]);

  const cameraPosition = useRef();

  const handlePointerDown = useCallback((event) => {
    const  {face}  = event;
    console.log('Clicked face:', face);
    event.stopPropagation();
    cameraPosition.current = camera.position.clone();
    camera.lookAt(position[0], position[1], position[2]);
  }, [camera, position]);

  useFrame((state, delta) => {
    if (hovered) {
      setMultiplier((prevMultiplier) => Math.min(prevMultiplier + delta * 0.4, 1.1));
    } else {
      setMultiplier((prevMultiplier) => Math.max(prevMultiplier - delta * 0.4, 1));
    }

    const oscillation = Math.sin(state.clock.getElapsedTime() * 2) * 0.02;
    setCubePosition([
      position[0] * (multiplier + oscillation),
      position[1] * (multiplier + oscillation),
      position[2] * (multiplier + oscillation),
    ]);
  });

  const boxGeometryArgs = useMemo(() => [1, 1, 1], []);

  return (
    <mesh
      position={cubePosition}
      onPointerOver={handleMouseEnter}
      onPointerOut={handleMouseLeave}
      onPointerDown={handlePointerDown}>
      <boxGeometry args={boxGeometryArgs} />
      <meshStandardMaterial color={hovered ? '#8b15f9' : '#1537f9'} />
    </mesh>
  );
};

export default SmallCube;
