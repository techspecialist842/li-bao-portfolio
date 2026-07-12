import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';

function FloatingShape({ color, position, shape = 'torus' }) {
  const ref = useRef();

  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime * 0.3;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.5}>
      <mesh ref={ref} position={position}>
        {shape === 'torus' && <torusKnotGeometry args={[0.4, 0.12, 80, 16]} />}
        {shape === 'ico' && <icosahedronGeometry args={[0.5, 0]} />}
        {shape === 'octa' && <octahedronGeometry args={[0.5, 0]} />}
        <MeshDistortMaterial
          color={color}
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.9}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
}

export default function ProjectScene({ color = '#915eff' }) {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[3, 3, 3]} color={color} intensity={4} />
      <pointLight position={[-3, -2, 2]} color="#ffffff" intensity={1} />
      <FloatingShape color={color} position={[0, 0, 0]} shape="torus" />
    </Canvas>
  );
}
