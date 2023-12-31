"use client";

import {
  OrbitControls,
  Grid,
  PerspectiveCamera,
  Center,
  Stars,
  Text3D,
} from "@react-three/drei";
import { Canvas, Vector3 } from "@react-three/fiber";
import { ReactNode, useState, useEffect } from "react";
import { useSpring, animated, easings } from "@react-spring/three";

function Box({
  position,
  height,
  level,
  children,
}: {
  position: Vector3;
  height: any;
  level: number;
  children?: ReactNode;
}) {
  function getColor(level: number) {
    switch (level) {
      case 0:
        return "#1e293b";
      case 1:
        return "#1e40af";
      case 2:
        return "#1d4ed8";
      case 3:
        return "#2563eb";
      case 4:
        return "#3b82f6";
      default:
        return "#000";
    }
  }

  return (
    <mesh position={position}>
      <boxGeometry args={height} />
      <meshLambertMaterial attach="material" color={getColor(level)} />
      {children}
    </mesh>
  );
}

export default function Scene({
  contributions,
  totalContributions,
}: {
  contributions: ({
    count: number;
    day: number;
    month: string;
    year: string;
    level: number;
  } | null)[][];
  totalContributions: number;
}) {
  const [scale, setScale] = useState(0);

  function normalize(count: number, base = 4, offset = 2) {
    switch (true) {
      case count == 0:
        return offset;
      case count > 40:
        return count;
      case !count:
        return 0;
      default:
        return count * (base + offset);
    }
  }

  const { scaleY } = useSpring({
    scaleY: scale,
    config: {
      tension: 300,
      friction: 150,
      easing: easings.easeInOutQuad,
    },
  });
  useEffect(() => {
    setScale(1);
  }, []);

  return (
    <Canvas className="h-full w-full">
      <Grid
        infiniteGrid
        sectionColor="#1e40af"
        sectionSize={20}
        cellSize={20}
        fadeDistance={800}
      />
      <PerspectiveCamera makeDefault position={[10, 150, 400]} fov={60}>
        <OrbitControls enableDamping autoRotate autoRotateSpeed={0.75} />
      </PerspectiveCamera>
      <Stars
        radius={600}
        depth={50}
        count={50000}
        factor={4}
        saturation={1}
        fade
        speed={1}
      />
      <ambientLight color="#fff" intensity={0.4} />
      <directionalLight position={[0, 200, 200]} intensity={2} color="#fff" />
      <directionalLight position={[0, 200, -200]} color="#fff" intensity={2} />
      
      <Center top>
      <Box position={[0,0,0]} height={[53*12, 50, 7*14]} level={0}>
      <Center position-z={4*14-1}>
        <Text3D
          curveSegments={32}
          bevelEnabled
          bevelSize={1}
          bevelThickness={5}
          size={30}
          font="/Inter_Bold.json"
        >
          {totalContributions} Contributions
          <meshStandardMaterial color="azure" />
        </Text3D>
      </Center>
      </Box>
      </Center>
      <Center top position={[0, 50, 0]}>
        {contributions.map((row: any, i: number) =>
          row.map((day: any, j: number) => (
            <animated.group
              position={[0, 0, 12 * (i || 1)]}
              key={`${day?.day} + ${day?.month}`}
              scale-y={scaleY}
            >
              <Box
                position={[12 * (j || 1), normalize(day?.count) / 2, 0]}
                height={[10, normalize(day?.count), 10]}
                level={day?.level}
                key={j}
              >
                {day?.count && (
                  <Center position={[0, normalize(day?.count) / 2 + 5, 0]}>
                    <Text3D
                      curveSegments={32}
                      bevelEnabled
                      bevelSize={0.04}
                      bevelThickness={1}
                      size={5}
                      font="/Inter_Bold.json"
                    >
                      {day?.count}
                      <meshStandardMaterial color="azure" />
                    </Text3D>
                  </Center>
                )}
              </Box>
            </animated.group>
          ))
        )}
      </Center>
    </Canvas>
  );
}
