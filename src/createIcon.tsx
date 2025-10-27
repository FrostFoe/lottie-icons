import { LottieIcon } from "./LottieIcon";
import type { IconComponent, LottieIconProps } from "./types";

/**
 * Creates a reusable icon component from Lottie animation data
 * Similar to Lucide's icon creation pattern
 */
export function createLottieIcon(
  name: string,
  animationData: any,
): IconComponent {
  const Component: IconComponent = (
    props: Omit<LottieIconProps, "animationData">,
  ) => {
    return <LottieIcon animationData={animationData} {...props} />;
  };

  Component.displayName = name;

  return Component;
}

/**
 * Icon registry for managing multiple icons
 */
class IconRegistry {
  private icons: Map<string, any> = new Map();

  register(name: string, animationData: any) {
    this.icons.set(name, animationData);
  }

  get(name: string) {
    return this.icons.get(name);
  }

  has(name: string) {
    return this.icons.has(name);
  }

  getAll() {
    return Array.from(this.icons.keys());
  }

  createComponent(name: string): IconComponent | null {
    const animationData = this.get(name);
    if (!animationData) return null;
    return createLottieIcon(name, animationData);
  }
}

export const iconRegistry = new IconRegistry();
