import React, { useState } from 'react';



const SmallCube = (props) => {

    const [hovered, hover] = useState(false);
    
  return (
    <mesh
      {...props}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered? 'red': 'blue'} />
    </mesh>
  )
}

export default SmallCube