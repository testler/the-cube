import React from 'react';
import SmallCube from '../SmallCube/SmallCube';

const dis = 1.05;

const CubicCube = (props) => {
  return (
    <group {...props}>
        {/* <SmallCube position={[0,0,0]}/> */}
        <SmallCube position={[dis,0,0]}/>
        <SmallCube position={[-dis,0,0]}/>
        <SmallCube position={[0,dis,0]}/>
        <SmallCube position={[0,-dis,0]}/>
        <SmallCube position={[0,0,dis]}/>
        <SmallCube position={[0,0,-dis]}/>

        <SmallCube position={[0,dis,dis]}/>
        <SmallCube position={[0,dis,-dis]}/>
        <SmallCube position={[0,-dis,dis]}/>
        <SmallCube position={[0,-dis,-dis]}/>
        <SmallCube position={[dis,dis,0]}/>
        <SmallCube position={[dis,-dis,0]}/>
        <SmallCube position={[-dis,dis,0]}/>
        <SmallCube position={[-dis,-dis,0]}/>
        <SmallCube position={[dis,0,dis]}/>
        <SmallCube position={[dis,0,-dis]}/>
        <SmallCube position={[-dis,0,dis]}/>
        <SmallCube position={[-dis,0,-dis]}/>

        <SmallCube position={[-dis,dis,dis]}/>
        <SmallCube position={[-dis,-dis,dis]}/>
        <SmallCube position={[-dis,-dis,-dis]}/>
        <SmallCube position={[dis,-dis,dis]}/>
        <SmallCube position={[dis,dis,-dis]}/>
        <SmallCube position={[dis,dis,dis]}/>
        <SmallCube position={[-dis,dis,-dis]}/>
        <SmallCube position={[dis,-dis,-dis]}/>
    </group>
  )
}

export default CubicCube