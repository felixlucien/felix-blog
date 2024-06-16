"use client";
// components/NeuralNetwork.js
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import * as THREE from "three";

function Node({ position }) {
  return (
    <mesh position={position}>
      <circleGeometry args={[0.1, 32]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}

function Link({ start, end }) {
  const ref = useRef();
  useFrame(() => {
    if (ref.current) {
      const startVector = new THREE.Vector3(...start);
      const endVector = new THREE.Vector3(...end);
      ref.current.geometry.setFromPoints([startVector, endVector]);
    }
  });

  return (
    <line ref={ref}>
      <bufferGeometry />
      <lineBasicMaterial color="black" />
    </line>
  );
}

const generateLinks = (layers) => {
  let links = [];
  for (let i = 0; i < layers.length - 1; i++) {
    links = [
      ...links,
      ...layers[i]
        .map((start) => layers[i + 1].map((end) => ({ start, end })))
        .flat(),
    ];
  }
  return links;
};

const NeuralNetwork = () => {
  const layers = [
    [
      [-1, 1.5, 0],
      [-1, 1, 0],
      [-1, 0.5, 0],
      [-1, 0, 0],
      [-1, -0.5, 0],
      [-1, -1, 0],
      [-1, -1.5, 0],
      [-1, -2, 0],
    ],
    [
      [0, 1, 0],
      [0, 0.66, 0],
      [0, 0.33, 0],
      [0, -0.33, 0],
      [0, -0.66, 0],
      [0, -1, 0],
    ],
    [
      [1, 1, 0],
      [1, 0.66, 0],
      [1, 0.33, 0],
      [1, -0.33, 0],
      [1, -0.66, 0],
      [1, -1, 0],
    ],
    [
      [2, 1.5, 0],
      [2, 1, 0],
      [2, 0.5, 0],
      [2, 0, 0],
      [2, -0.5, 0],
      [2, -1, 0],
      [2, -1.5, 0],
      [2, -2, 0],
    ],
  ];

  const links = generateLinks(layers);

  return (
    <Canvas className="h-1/2">
      <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={100} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {links.map((link, idx) => (
        <Link key={idx} start={link.start} end={link.end} />
      ))}
      {layers.flat().map((pos, idx) => (
        <Node key={idx} position={pos} />
      ))}
    </Canvas>
  );
};

export default NeuralNetwork;
