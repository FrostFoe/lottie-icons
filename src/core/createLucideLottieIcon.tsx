import React from 'react';
import { Lottie } from 'lottie-react';
import type { LottieRefCurrentProps } from 'lottie-react';
import type { LucideLottieIconComponent, LucideLottieIconOptions, LucideLottieIconProps } from './types.js';

function toCssSize(value: number | string): string {
  if (typeof value === 'number') {
    return `${value}px`;
  }
  return value;
}

function applyColorToAnimation(animation: LottieRefCurrentProps | null | undefined, color?: string) {
  if (!animation || !color) {
    return;
  }

  const svgRoot = (animation as unknown as { renderer?: { svgElement?: SVGElement } }).renderer?.svgElement;
  if (!svgRoot) {
    return;
  }

  const strokeElements = svgRoot.querySelectorAll('[stroke]');
  strokeElements.forEach((element) => {
    if (element.getAttribute('stroke') !== 'none') {
      element.setAttribute('stroke', color);
    }
  });

  const fillElements = svgRoot.querySelectorAll('[fill]');
  fillElements.forEach((element) => {
    const currentFill = element.getAttribute('fill');
    if (currentFill && currentFill !== 'none') {
      element.setAttribute('fill', color);
    }
  });
}

function mergeClassNames(...classNames: Array<string | undefined>): string {
  return classNames.filter(Boolean).join(' ');
}

export function createLucideLottieIcon(options: LucideLottieIconOptions): LucideLottieIconComponent {
  const {
    animationData,
    defaultAutoplay = false,
    defaultLoop = false,
    defaultSpeed = 1,
    label,
    name
  } = options;

  const Component = React.forwardRef<LottieRefCurrentProps | null, LucideLottieIconProps>(
    (
      {
        autoplay = defaultAutoplay,
        className,
        color,
        height,
        width,
        loop = defaultLoop,
        rendererSettings,
        size = 24,
        speed = defaultSpeed,
        style,
        label: labelOverride,
        children,
        ...rest
      },
      forwardedRef
    ) => {
      const lottieRef = React.useRef<LottieRefCurrentProps | null>(null);

      React.useImperativeHandle(forwardedRef, () => lottieRef.current);

      const computedStyle = React.useMemo<React.CSSProperties>(() => {
        const dimension = toCssSize(size);
        return {
          width: width ?? dimension,
          height: height ?? dimension,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          color,
          ...style
        };
      }, [color, height, size, style, width]);

      React.useEffect(() => {
        applyColorToAnimation(lottieRef.current, color);
      }, [color]);

      React.useEffect(() => {
        if (lottieRef.current) {
          lottieRef.current.setSpeed(speed);
        }
      }, [speed]);

      const accessibleLabel = labelOverride ?? label ?? name;

      return (
        <span
          className={mergeClassNames('lucide-lottie-icon', className)}
          style={computedStyle}
          aria-label={accessibleLabel}
          role="img"
        >
          <Lottie
            lottieRef={lottieRef}
            animationData={animationData}
            autoplay={autoplay}
            loop={loop}
            rendererSettings={{
              preserveAspectRatio: 'xMidYMid meet',
              progressiveLoad: true,
              ...rendererSettings
            }}
            {...rest}
          />
          {children}
        </span>
      );
    }
  );

  Component.displayName = `${name}LottieIcon`;

  return Component;
}
