"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";

function Stars() {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(2000 * 3);
    for (let i = 0; i < 1500; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return arr;
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.008;
    ref.current.rotation.x += delta * 0.008;
  });

  return (
    <group ref={ref}>
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#191e29"
          size={0.02}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#070a13]">
      <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
        <color attach="background" args={["#070a13"]} />
        <Stars />
      </Canvas>
    </div>
  );
}
