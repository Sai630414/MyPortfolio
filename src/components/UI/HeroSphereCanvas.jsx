import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';

function GlowingSphereMesh() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.2}>
        <MeshDistortMaterial
          color="#06b6d4"
          attach="material"
          distort={0.4}
          speed={3}
          roughness={0.1}
          metalness={0.8}
          wireframe={false}
          emissive="#3b82f6"
          emissiveIntensity={0.4}
        />
      </Sphere>
    </Float>
  );
}

const HeroSphereCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#38bdf8" />
        <pointLight position={[-10, -10, -5]} intensity={2} color="#a855f7" />
        <GlowingSphereMesh />
      </Canvas>
    </div>
  );
};

export default HeroSphereCanvas;
