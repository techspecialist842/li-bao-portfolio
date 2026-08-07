import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Ring } from '@react-three/drei';
import * as THREE from 'three';

function Orb({ color }) {
  const meshRef = useRef();
  const ringRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    ringRef.current.rotation.x = t * 0.5;
    ringRef.current.rotation.y = t * 0.3;
  });

  return (
    <>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.3}>
        <Sphere ref={meshRef} args={[0.9, 64, 64]}>
          <MeshDistortMaterial
            color={color}
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.1}
            metalness={0.8}
            transparent
            opacity={0.85}
          />
        </Sphere>
      </Float>
      <mesh ref={ringRef}>
        <torusGeometry args={[1.3, 0.03, 8, 60]} />
        <meshStandardMaterial color={color} transparent opacity={0.4} emissive={color} emissiveIntensity={0.5} />
      </mesh>
    </>
  );
}

function ParticleRing({ color }) {
  const ref = useRef();
  const count = 60;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      pos[i * 3] = Math.cos(angle) * 1.6;
      pos[i * 3 + 1] = 0;
      pos[i * 3 + 2] = Math.sin(angle) * 1.6;
    }
    return pos;
  }, []);

  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.4;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={color} size={0.06} transparent opacity={0.8} />
    </points>
  );
}

export default function SkillOrb({ color = '#3b82f6' }) {
  return (
    <Canvas camera={{ position: [0, 0, 3.5] }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 3, 3]} color={color} intensity={3} />
      <pointLight position={[-3, -3, 3]} color="#ffffff" intensity={1} />
      <Orb color={color} />
      <ParticleRing color={color} />
    </Canvas>
  );
}
