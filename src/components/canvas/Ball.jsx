import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Decal, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";

const MAX_TILT = 0.35; // 20°
const SMOOTH = 0.06;
const BASE_SCALE = 2.75;
const HOVER_SCALE = 3.0;
const SCALE_SMOOTH = 0.1;

const Ball = ({ imgUrl }) => {
  const meshRef = useRef();
  const [decal] = useTexture([imgUrl]);
  const [hovered, setHovered] = useState(false);
  const target = useRef({ x: 0, y: 0 });

  const { gl } = useThree(); 

  const handlePointerMove = (e) => {
    if (!hovered) return;

    const canvas = gl.domElement;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const cursorX = (x / rect.width) * 2 - 1;
    const cursorY = -((y / rect.height) * 2) + 1;

    target.current.x = Math.max(-MAX_TILT, Math.min(MAX_TILT, -cursorY * MAX_TILT));
    target.current.y = Math.max(-MAX_TILT, Math.min(MAX_TILT, cursorX * MAX_TILT));
  };

  const handleLeave = () => {
    setHovered(false);
    target.current.x = 0;
    target.current.y = 0;
  };

  useFrame(() => {
    if (!meshRef.current) return;

    const currentScale = meshRef.current.scale.x;
    const targetScale = hovered ? HOVER_SCALE : BASE_SCALE;
    const newScale = currentScale + (targetScale - currentScale) * SCALE_SMOOTH;

    meshRef.current.scale.set(newScale, newScale, newScale);

    meshRef.current.rotation.x += (target.current.x - meshRef.current.rotation.x) * SMOOTH;
    meshRef.current.rotation.y += (target.current.y - meshRef.current.rotation.y) * SMOOTH;
  });

  return (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight position={[-5, 5, 5]} intensity={0.8} />

      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        scale={2.75}
        onPointerOver={() => setHovered(true)}
        onPointerMove={handlePointerMove}
        onPointerOut={handleLeave}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#FFEDDC"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="always" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enableDamping={true} dampingFactor={0.1} rotateSpeed={0.3} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
