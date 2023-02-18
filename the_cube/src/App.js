import './App.css';
import { Canvas, useFrame } from '@react-three/fiber'
import CubicCube from './components/CubicCube/CubicCube';
import { OrbitControls, ArcballControls } from '@react-three/drei'


function App() {


  
  return (
    <Canvas class="bg">
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <CubicCube />
      <ArcballControls enablePan={false} enableZoom={false} dampingFactor={2} />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} autoRotate={true} autoRotateSpeed={.75}/>
      <Scene/>
    </Canvas>
  );
}

function Scene() {
  useFrame(({ gl, scene, camera }) => {
    gl.render(scene, camera)
  })

  return null
}

export default App;
