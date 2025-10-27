import React from "react";
import { LottieIcon } from "./LottieIcon";
import type { IconComponent, LottieIconProps } from "./types";

/**
 * Creates a reusable icon component from Lottie animation data
 * Similar to Lucide's icon creation pattern
 */
export function createLottieIcon(
  animationData: any,
  iconName: string,
): IconComponent {
  const Component = React.forwardRef<
    HTMLDivElement,
    Omit<LottieIconProps, "animationData">
  >((props, ref) => {
    return <LottieIcon ref={ref} animationData={animationData} {...props} />;
  });

  Component.displayName = iconName;

  return Component as IconComponent;
}
