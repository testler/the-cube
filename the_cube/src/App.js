import "./App.css";
import { Canvas } from "@react-three/fiber";
import CubicCube from "./components/CubicCube/CubicCube";
import { OrbitControls, ArcballControls, TransformControls, TrackballControls } from "@react-three/drei";

function App() {
  return (
    <Canvas className="bg">
      <camera />
      <ambientLight intensity={0.3}/>
      <hemisphereLight
        intensity={0.5}
        groundColor={"#000000"}
        skyColor={"#ffffff"}
        position={[0, 50, 0]}
      />
      <directionalLight
        intensity={0.5}
        color={"#ffffff"}
        position={[-10, 10, 10]}
        castShadow
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
        shadow-radius={4}
        shadow-bias={-0.0001}
      />
      <directionalLight
        intensity={0.5}
        color={"#ffffff"}
        position={[10, 10, -10]}
        castShadow
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
        shadow-radius={4}
        shadow-bias={-0.0001}
      />
      <CubicCube/>
      <TrackballControls
        rotateSpeed={1.0}
        noZoom={true}
        noPan={true}
        dynamicDampingFactor={0.1}
        target={[0, 0, 0]}
      />
      <OrbitControls enablePan={false} enableRotate={false} enableZoom={false} autoRotate={true} />
    </Canvas>
  );
}

export default App;
