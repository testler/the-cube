import './App.css';
import { Canvas } from '@react-three/fiber'
import CubicCube from './components/CubicCube/CubicCube';
import { OrbitControls } from '@react-three/drei'


function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <CubicCube />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
