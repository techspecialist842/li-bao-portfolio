import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Stars() {
  const ref = useRef();
  const sphere = useMemo(() => {
    const positions = new Float32Array(6000);
    for (let i = 0; i < 6000; i += 3) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = Math.cbrt(Math.random()) * 3;
      positions[i] = r * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.y -= delta / 20;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#2f8f46"
          size={0.006}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingGeometry() {
  const meshRef = useRef();
  const mesh2Ref = useRef();
  const mesh3Ref = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.x = t * 0.3;
    meshRef.current.rotation.y = t * 0.2;
    meshRef.current.position.y = Math.sin(t * 0.5) * 0.3;

    mesh2Ref.current.rotation.x = -t * 0.2;
    mesh2Ref.current.rotation.z = t * 0.15;
    mesh2Ref.current.position.y = Math.cos(t * 0.4) * 0.2;

    mesh3Ref.current.rotation.y = t * 0.4;
    mesh3Ref.current.rotation.x = t * 0.1;
  });

  return (
    <>
      <mesh ref={meshRef} position={[2.5, 0, -1]}>
        <icosahedronGeometry args={[0.7, 1]} />
        <meshStandardMaterial
          color="#2f8f46"
          wireframe
          transparent
          opacity={0.5}
        />
      </mesh>
      <mesh ref={mesh2Ref} position={[-2.8, 0.5, -1.5]}>
        <octahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial
          color="#5cb85c"
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>
      <mesh ref={mesh3Ref} position={[0, -1.8, -2]}>
        <torusGeometry args={[0.6, 0.15, 8, 20]} />
        <meshStandardMaterial
          color="#6b9e3e"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>
    </>
  );
}

export default function ParticleField() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[2, 2, 2]} color="#5cb85c" intensity={2} />
      <pointLight position={[-2, -2, 2]} color="#86efac" intensity={1.5} />
      <Stars />
      <FloatingGeometry />
    </Canvas>
  );
}
