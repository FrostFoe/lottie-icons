import React, { useEffect, useRef, useState } from "react";
import type { AnimationItem } from "lottie-web";
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
    if (typeof window === "undefined") return; // SSR guard
    if (!containerRef.current || !animationData) return;

    // Clear previous animation (if any)
    if (animationRef.current) {
      try {
        animationRef.current.destroy();
      } catch (e) {
        // ignore
      }
      animationRef.current = null;
    }

    let mounted = true;
    let anim: AnimationItem | null = null;

    // Lazy-load lottie-web at runtime to avoid bundling it into SSR or consumers' main bundles
    (async () => {
      try {
        const lottieModule = await import("lottie-web");
        if (!mounted || !containerRef.current) return;
        const player = (lottieModule &&
          (lottieModule.default || lottieModule)) as any;

        anim = player.loadAnimation({
          container: containerRef.current,
          renderer,
          loop: hoverToPlay ? false : loop,
          autoplay: hoverToPlay ? false : autoplay,
          animationData,
        });

        animationRef.current = anim;

        // Set speed and attach events if animation exists
        if (anim) {
          anim.setSpeed(speed);
          if (onComplete) {
            anim.addEventListener("complete", onComplete);
          }
          if (onLoad) {
            anim.addEventListener("DOMLoaded", onLoad);
          }
        }
      } catch (err) {
        // If dynamic import fails, fail gracefully in the console
        // (this should be rare unless consumer blocks dynamic imports)
        // eslint-disable-next-line no-console
        console.error("Failed to load lottie-web:", err);
      }
    })();

    return () => {
      mounted = false;
      if (anim) {
        try {
          anim.destroy();
        } catch (e) {
          // ignore
        }
      }
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
