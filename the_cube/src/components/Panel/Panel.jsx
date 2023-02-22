import React from 'react'

const Panel = (props) => {
  return (
        <mesh {...props}>
            <planeGeometry args={[1,1]}/>
            <meshBasicMaterial color={"white"}/>
        </mesh>
  )
}

export default Panel