import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';

const SimpleSphere = () => {
  return (
    <Canvas camera={{ position: [5, 5, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Sphere visible args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color="#00d4ff"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0}
        />
      </Sphere>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
};

export default SimpleSphere;
