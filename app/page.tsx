"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Home() {
  const mountRef = useRef(null);

  useEffect(() => {
    // 1️⃣ Scene
    const scene = new THREE.Scene();

    // 2️⃣ Camera
    const camera = new THREE.PerspectiveCamera(
      75, // field of view
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // 3️⃣ Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Cube
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshStandardMaterial({ color: "#4f46e5" });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Light (VERY IMPORTANT)
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.03;
      cube.rotation.y += 0.03;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup (IMPORTANT in React)
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} />;
}
