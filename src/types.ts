import type { FC, HTMLAttributes } from "react";

export interface LottieIconProps extends HTMLAttributes<HTMLDivElement> {
  /** Size of the icon in pixels */
  size?: number | string;
  /** Animation speed multiplier (1 = normal speed) */
  speed?: number;
  /** Whether to loop the animation */
  loop?: boolean;
  /** Whether to autoplay the animation */
  autoplay?: boolean;
  /** Color override (if the Lottie file supports it) */
  color?: string;
  /** Stroke width override (if applicable) */
  strokeWidth?: number;
  /** Additional CSS class names */
  className?: string;
  /** Callback when animation completes */
  onComplete?: () => void;
  /** Callback when animation is loaded */
  onLoad?: () => void;
  /** Whether to play the animation on hover */
  hoverToPlay?: boolean;
  /** The Lottie animation data (JSON) */
  animationData: any;
  /** Renderer type */
  renderer?: "svg" | "canvas" | "html";
}

export interface IconComponent
  extends FC<Omit<LottieIconProps, "animationData">> {
  displayName?: string;
}
