import React, { useEffect, useRef, useState } from "react";
import lottie, { AnimationItem } from "lottie-web";
import { LottieIconProps } from "./types";

export const LottieIcon: React.FC<LottieIconProps> = ({
  size = 24,
  speed = 1,
  loop = false,
  autoplay = true,
  color,
  strokeWidth,
  className = "",
  onComplete,
  onLoad,
  hoverToPlay = false,
  animationData,
  renderer = "svg",
  style,
  ...rest
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !animationData) return;

    // Clear previous animation
    if (animationRef.current) {
      animationRef.current.destroy();
    }

    // Create new animation
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer,
      loop: hoverToPlay ? false : loop,
      autoplay: hoverToPlay ? false : autoplay,
      animationData,
    });

    animationRef.current = anim;

    // Set speed
    anim.setSpeed(speed);

    // Event listeners
    if (onComplete) {
      anim.addEventListener("complete", onComplete);
    }

    if (onLoad) {
      anim.addEventListener("DOMLoaded", onLoad);
    }

    return () => {
      anim.destroy();
    };
  }, [
    animationData,
    loop,
    autoplay,
    speed,
    renderer,
    onComplete,
    onLoad,
    hoverToPlay,
  ]);

  // Handle hover to play
  useEffect(() => {
    if (!hoverToPlay || !animationRef.current) return;

    if (isHovered) {
      animationRef.current.play();
    } else {
      animationRef.current.stop();
    }
  }, [isHovered, hoverToPlay]);

  const handleMouseEnter = () => {
    if (hoverToPlay) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (hoverToPlay) {
      setIsHovered(false);
    }
  };

  const sizeValue = typeof size === "number" ? `${size}px` : size;

  return (
    <div
      ref={containerRef}
      className={`lottie-icon ${className}`}
      style={{
        width: sizeValue,
        height: sizeValue,
        display: "inline-block",
        ...style,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    />
  );
};

LottieIcon.displayName = "LottieIcon";
