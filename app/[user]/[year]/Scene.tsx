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
import { Button } from "@/components/ui/button";

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
  const [autoRotate, setAutoRotate] = useState(true);

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
      duration: 1500,
    },
  });

  useEffect(() => {
    setScale(1);
  }, []);

  return (
    <div className="relative h-full w-full">
      <Button
        className="absolute z-50 bottom-20 left-1/2 -translate-x-1/2"
        variant={"secondary"}
        onClick={() => setAutoRotate(!autoRotate)}
      >
        Auto Rotate {autoRotate ? " ✔" : " ✖"}
      </Button>

      <Canvas className="h-full w-full">
        <Grid
          infiniteGrid
          sectionColor="#1e40af"
          sectionSize={20}
          cellSize={20}
          fadeDistance={800}
        />
        <PerspectiveCamera makeDefault position={[10, 150, 400]} fov={75}>
          <OrbitControls
            enableDamping
            autoRotate={autoRotate}
            autoRotateSpeed={0.65}
            reverseHorizontalOrbit
          />
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
        <directionalLight
          position={[0, 200, -200]}
          color="#fff"
          intensity={2}
        />

        <animated.group position={[0, 0, 5]}>
          <Center top>
            <mesh>
              <boxGeometry args={[53 * 12, 50, 7 * 14]} />
              <meshLambertMaterial attach="material" color="#1E293B" />
              <Center position-z={4 * 14 - 3}>
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
            </mesh>
          </Center>
        </animated.group>
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
    </div>
  );
}
