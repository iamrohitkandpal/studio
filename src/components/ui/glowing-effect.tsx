"use client";

import React, { useEffect, useRef, useState } from "react";

interface GlowingEffectProps {
  children: React.ReactNode;
  glow?: boolean;
  disabled?: boolean;
  proximity?: number;
  spread?: number;
  inactiveZone?: number;
  className?: string;
  color?: string;
}

export function GlowingEffect({
  children,
  glow = true,
  disabled = false,
  proximity = 80,
  spread = 40,
  inactiveZone = 0.2,
  className,
  color = "rgba(var(--primary-rgb), 0.3)",
}: GlowingEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [opacity, setOpacity] = useState<number>(0);
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (disabled || !containerRef.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();

    setSize({
      width: rect.width,
      height: rect.height,
    });

    const handleMouseMove = (e: MouseEvent) => {
      if (!glow) return;

      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      // Check boundaries
      const rectX = rect.left + window.scrollX;
      const rectY = rect.top + window.scrollY;
      const rectRight = rectX + rect.width;
      const rectBottom = rectY + rect.height;
      
      const centerX = rectX + rect.width / 2;
      const centerY = rectY + rect.height / 2;
      
      // Calculate distance from center as a percentage
      const distanceFromCenterX = Math.abs(mouseX - centerX) / (rect.width / 2);
      const distanceFromCenterY = Math.abs(mouseY - centerY) / (rect.height / 2);
      
      // Calculate average distance from center (0 to 1)
      const distanceFromCenter = Math.min(
        Math.sqrt(distanceFromCenterX ** 2 + distanceFromCenterY ** 2) / Math.sqrt(2),
        1
      );

      // Check if mouse is inside the container or within proximity
      const isInXRange = mouseX >= rectX - proximity && mouseX <= rectRight + proximity;
      const isInYRange = mouseY >= rectY - proximity && mouseY <= rectBottom + proximity;
      
      if (isInXRange && isInYRange) {
        let newOpacity = 1 - (distanceFromCenter / (1 + inactiveZone));
        newOpacity = Math.max(0, Math.min(newOpacity, 1));
        
        setOpacity(newOpacity);
        setPosition({
          x: mouseX - rectX,
          y: mouseY - rectY,
        });
      } else {
        setOpacity(0);
      }
    };

    // Handle when mouse enters container
    const handleMouseEnter = () => {
      // Add initial glow
      setOpacity(0.3);
    };

    // Handle when mouse leaves container
    const handleMouseLeave = () => {
      setOpacity(0);
    };

    document.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [disabled, glow, proximity, inactiveZone]);

  return (
    <div
      ref={containerRef}
      className={`relative ${className || ""}`}
      style={{
        overflow: "hidden",
        cursor: disabled ? "auto" : "inherit",
        position: "relative",
      }}
    >
      {!disabled && (
        <div
          className="pointer-events-none absolute inset-0 z-0 rounded-[inherit]"
          style={{
            position: "absolute",
            opacity: opacity,
            background: `radial-gradient(
              ${spread}% ${spread}% at ${position.x}px ${position.y}px, 
              ${color}, 
              transparent 80%
            )`,
            transition: "opacity 0.15s ease",
            transitionProperty: "opacity",
          }}
          aria-hidden="true"
        />
      )}
      {children}
    </div>
  );
}
