"use client";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import styles from "./torchEffect.module.css";

const TorchEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX + window.scrollX, y: e.clientY + window.scrollY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Box
      className={styles.torchEffect}
      sx={{
        backgroundImage: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 60%)`,
      }}
    />
  );
};

export default TorchEffect;
