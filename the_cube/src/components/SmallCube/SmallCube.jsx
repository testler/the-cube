import React, { useState, useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

const SmallCube = (props) => {
  const [x, y, z] = props.position;
  const [hovered, hover] = useState(false);
  const [position, setPosition] = useState(props.position);
  const [multiplier, setMultiplier] = useState(1);

  const { camera } = useThree();

  const handleMouseEnter = () => {
    hover(true);
  };

  const handleMouseLeave = () => {
    hover(false);
    setPosition(props.position);
  };

  const handlePointerDown = (event) => {
    event.stopPropagation();
    camera.lookAt(x, y, z);
  };

  // Animate the cube
  useFrame((state, delta) => {
    // If the cube is hovered over, increase the multiplier up to 1.25
    if (hovered) {
      setMultiplier(Math.min(multiplier + delta * 0.4, 1.25));
    } else {
      setMultiplier(Math.max(multiplier - delta * 0.4, 1));
    }

    // Update the cube's position based on the multiplier
    setPosition([x * multiplier, y * multiplier, z * multiplier]);
  });

  return (
    <mesh
      {...props}
      position={position}
      onPointerOver={handleMouseEnter}
      onPointerOut={handleMouseLeave}
      onPointerDown={handlePointerDown}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? '#8b15f9' : '#1537f9'} />
    </mesh>
  );
};

export default SmallCube;
