import type { CSSProperties, ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react';
import type { LottieRefCurrentProps, LottieComponentProps } from 'lottie-react';

export interface LucideLottieIconOptions {
  /**
   * Name of the icon. Used for debugging and accessible labels.
   */
  name: string;
  /**
   * Raw Lottie JSON animation data.
   */
  animationData: object;
  /**
   * Whether the animation should loop by default.
   * @default false
   */
  defaultLoop?: boolean;
  /**
   * Whether the animation should autoplay by default.
   * @default false
   */
  defaultAutoplay?: boolean;
  /**
   * Default playback speed for the animation.
   * @default 1
   */
  defaultSpeed?: number;
  /**
   * Optional aria label to use when the icon is rendered without other context.
   */
  label?: string;
}

export interface LucideLottieIconProps extends Omit<LottieComponentProps, 'animationData' | 'lottieRef'> {
  /**
   * Pixel size for the icon. Accepts a number (pixels) or any CSS size string.
   * @default 24
   */
  size?: number | string;
  /**
   * Icon color. When supplied, the animation's stroke/fill colors will be updated to match.
   */
  color?: string;
  /**
   * Optional speed override. Falls back to the defaultSpeed provided when the component was created.
   */
  speed?: number;
  /**
   * Optional custom className applied to the underlying container element.
   */
  className?: string;
  /**
   * Optional style override applied to the container element.
   */
  style?: CSSProperties;
  /**
   * Optional accessible label. Falls back to the label provided in the icon options.
   */
  label?: string;
  /**
   * Optional children to render alongside the icon (e.g., for inline labels).
   */
  children?: ReactNode;
}

export type LucideLottieIconComponent = ForwardRefExoticComponent<
  LucideLottieIconProps & RefAttributes<LottieRefCurrentProps | null>
>;
