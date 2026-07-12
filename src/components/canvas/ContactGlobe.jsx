import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function Globe() {
  const ref = useRef();
  const linesRef = useRef();

  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.15;
    linesRef.current.rotation.y = -state.clock.elapsedTime * 0.1;
  });

  const lines = useMemo(() => {
    const points = [];
    for (let lat = -80; lat <= 80; lat += 20) {
      const y = Math.sin((lat * Math.PI) / 180) * 1.5;
      const r = Math.cos((lat * Math.PI) / 180) * 1.5;
      const linePoints = [];
      for (let i = 0; i <= 64; i++) {
        const angle = (i / 64) * Math.PI * 2;
        linePoints.push(new THREE.Vector3(r * Math.cos(angle), y, r * Math.sin(angle)));
      }
      points.push(linePoints);
    }
    for (let lng = 0; lng < 360; lng += 30) {
      const linePoints = [];
      for (let i = 0; i <= 64; i++) {
        const lat = (i / 64) * 180 - 90;
        const phi = (lat * Math.PI) / 180;
        const theta = (lng * Math.PI) / 180;
        linePoints.push(
          new THREE.Vector3(
            1.5 * Math.cos(phi) * Math.cos(theta),
            1.5 * Math.sin(phi),
            1.5 * Math.cos(phi) * Math.sin(theta)
          )
        );
      }
      points.push(linePoints);
    }
    return points;
  }, []);

  return (
    <>
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.1}>
        <Sphere ref={ref} args={[1.5, 64, 64]}>
          <MeshDistortMaterial
            color="#0a0a2e"
            distort={0.05}
            speed={1}
            roughness={0.8}
            metalness={0.2}
            transparent
            opacity={0.9}
          />
        </Sphere>
      </Float>
      <group ref={linesRef}>
        {lines.map((linePoints, i) => {
          const geometry = new THREE.BufferGeometry().setFromPoints(linePoints);
          return (
            <line key={i} geometry={geometry}>
              <lineBasicMaterial color="#915eff" transparent opacity={0.25} />
            </line>
          );
        })}
      </group>
    </>
  );
}

function Dots() {
  const ref = useRef();
  const positions = useMemo(() => {
    const pos = new Float32Array(300);
    for (let i = 0; i < 100; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      pos[i * 3] = 1.52 * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = 1.52 * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = 1.52 * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.15;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#00d4ff" size={0.05} transparent opacity={0.9} />
    </points>
  );
}

export default function ContactGlobe() {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[4, 4, 4]} color="#915eff" intensity={5} />
      <pointLight position={[-4, -4, 4]} color="#00d4ff" intensity={3} />
      <Globe />
      <Dots />
    </Canvas>
  );
}
