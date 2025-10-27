import { useEffect, useRef, useState, forwardRef, useMemo } from "react";
import type { AnimationItem } from "lottie-web";
import { LottieIconProps } from "./types";

// Helper to convert a hex color to Lottie's [r,g,b] format (0-1 scale)
function hexToLottieColor(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return [0, 0, 0];
  return [
    parseInt(result[1], 16) / 255,
    parseInt(result[2], 16) / 255,
    parseInt(result[3], 16) / 255,
  ];
}

// Helper to compare two Lottie colors with a tolerance
function areColorsEqual(
  color1: number[],
  color2: [number, number, number],
): boolean {
  const tolerance = 0.01;
  return (
    Math.abs(color1[0] - color2[0]) < tolerance &&
    Math.abs(color1[1] - color2[1]) < tolerance &&
    Math.abs(color1[2] - color2[2]) < tolerance
  );
}

export const LottieIcon = forwardRef<HTMLDivElement, LottieIconProps>(
  (
    {
      size = 24,
      speed = 1,
      loop = false,
      autoplay = true,
      color,
      colors,
      strokeWidth,
      className = "",
      onComplete,
      onLoad,
      hoverToPlay = false,
      animationData,
      renderer = "svg",
      style,
      ...rest
    },
    externalRef,
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<AnimationItem | null>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Combine internal ref with external ref
    useEffect(() => {
      if (externalRef) {
        if (typeof externalRef === "function") {
          externalRef(containerRef.current);
        } else {
          externalRef.current = containerRef.current;
        }
      }
    }, [externalRef]);

    const themedAnimationData = useMemo(() => {
      if (!colors || !animationData) {
        return animationData;
      }

      // Deep clone the animation data to avoid mutating the original object
      const newAnimationData = JSON.parse(JSON.stringify(animationData));

      const colorMap = Object.entries(colors).map(([key, value]) => ({
        from: hexToLottieColor(key),
        to: hexToLottieColor(value),
      }));

      // Traverse the layers and shapes to replace colors
      newAnimationData.layers?.forEach((layer: any) => {
        layer.shapes?.forEach((shape: any) => {
          shape.it?.forEach((item: any) => {
            if (item.c?.k) {
              for (const { from, to } of colorMap) {
                if (areColorsEqual(item.c.k, from)) {
                  item.c.k = [...to, item.c.k[3]]; // Keep original alpha
                }
              }
            }
          });
        });
      });

      return newAnimationData;
    }, [animationData, colors]);

    useEffect(() => {
      if (typeof window === "undefined") return; // SSR guard
      if (!containerRef.current || !themedAnimationData) return;

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
            animationData: themedAnimationData,
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
      themedAnimationData,
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
  },
);

LottieIcon.displayName = "LottieIcon";
