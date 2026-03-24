import { Suspense, useEffect, useState, useMemo } from "react";
import * as THREE from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const RobotEar = ({ isMobile }) => {
  const ear = useGLTF("./pinna/Pinna_System.gltf");

  useMemo(() => {
    const lineMaterial = new THREE.LineBasicMaterial({ color: "#292929", transparent: true, opacity: 0.2 });
    const geometries = [];

    ear.scene.traverse((child) => {
      if (child.isMesh && child.geometry.attributes.position.count < 5000) {
        const edges = new THREE.EdgesGeometry(child.geometry, 120);
        geometries.push(edges);
      }

      if (child.isMesh && child.material) {
        child.material.metalness = 0.1;
        child.material.roughness = 0.3;
        child.material.needsUpdate = true;
      }
    });

    if (geometries.length > 0) {
      const merged = mergeGeometries(geometries, false);
      const lines = new THREE.LineSegments(merged, lineMaterial);
      ear.scene.add(lines);
    }
  }, [ear]);

  return (
      <mesh>
      <directionalLight position={[10, 10, 10]} intensity={0.8} />
      <directionalLight position={[-10, 5, 10]} intensity={0.4} />
      <hemisphereLight intensity={0.3} groundColor="black" />
      <primitive
        object={ear.scene}
        scale={isMobile ? 20 : 34}
        position={isMobile ? [-1.3, -2.5, 0] : [-2.5, -4.5, 0]}
        rotation={[-Math.PI/2, 0, Math.PI/1.75]}
      />
    </mesh>
  );
};

const RobotEarCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 1.5]}
      orthographic camera={{ position: [10, 8, 10], zoom: 70 }}
      gl={{ preserveDrawingBuffer: false }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          minPolarAngle={0}
          maxPolarAngle={Math.PI}
        />
        <RobotEar isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default RobotEarCanvas;