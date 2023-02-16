import React, { useState, useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber'



const SmallCube = (props) => {

  const [x, y, z] = props.position;
  const [hovered, hover] = useState(false);
  const [position, setPosition] = useState(props.position);

    useFrame((state, delta)=>{
    })


  const handleMouseEnter = () => {
    hover(true);
    
  }
  const handleMouseLeave = () => {
    hover(false);
    setPosition(props.position);
  }
  useEffect(() => { }, []);
  return (
    <mesh
    {...props}
      position={position}
      // scale={hovered ? 1.1 : 1}
      onPointerOver={(event) => handleMouseEnter()}
      onPointerOut={(event) => handleMouseLeave()}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'purple' : 'blue'} />
    </mesh>
  )
}

export default SmallCube