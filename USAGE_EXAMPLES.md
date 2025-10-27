# Usage Examples - Lottie Lucide

This library works **exactly like Lucide React** but with animated Lottie icons!

## Installation

```bash
npm install lottie-lucide
# or
yarn add lottie-lucide
# or
pnpm add lottie-lucide
```

## Basic Usage (Just like Lucide!)

```tsx
import { Heart, Check, Loader, ArrowRight } from "lottie-lucide";

function App() {
  return (
    <div>
      {/* Use icons just like Lucide - super simple! */}
      <Heart />
      <Check />
      <Loader />
      <ArrowRight />
    </div>
  );
}
```

## With Props (Lucide-style API)

```tsx
import { Heart, Check } from "lottie-lucide";

function MyComponent() {
  return (
    <div>
      {/* Size */}
      <Heart size={24} />
      <Heart size={48} />
      <Heart size="3rem" />

      {/* Custom styling */}
      <Check size={32} className="my-custom-class" style={{ margin: "10px" }} />

      {/* Animation controls */}
      <Heart size={40} autoplay={true} loop={true} speed={1.5} />

      {/* Hover to play */}
      <Check size={32} hoverToPlay={true} autoplay={false} />
    </div>
  );
}
```

## Available Icons

Currently includes 4 sample icons:

- `Heart` - Animated heart with scale effect
- `Check` - Animated checkmark
- `Loader` - Spinning loader animation
- `ArrowRight` - Animated arrow

## Props API

All icons accept these props (just like Lucide, but with animation extras):

| Prop          | Type                          | Default     | Description                       |
| ------------- | ----------------------------- | ----------- | --------------------------------- |
| `size`        | `number \| string`            | `24`        | Icon size in pixels or CSS value  |
| `className`   | `string`                      | `undefined` | Additional CSS classes            |
| `style`       | `CSSProperties`               | `undefined` | Inline styles                     |
| `autoplay`    | `boolean`                     | `true`      | Auto-play animation on mount      |
| `loop`        | `boolean`                     | `false`     | Loop the animation                |
| `speed`       | `number`                      | `1`         | Animation speed (1 = normal)      |
| `hoverToPlay` | `boolean`                     | `false`     | Play animation on hover           |
| `onComplete`  | `() => void`                  | `undefined` | Callback when animation completes |
| `onLoad`      | `() => void`                  | `undefined` | Callback when animation loads     |
| `renderer`    | `'svg' \| 'canvas' \| 'html'` | `'svg'`     | Lottie renderer type              |

## Advanced Usage

### Event Handlers

```tsx
import { Heart } from "lottie-lucide";

function AnimatedButton() {
  return (
    <Heart
      size={32}
      onComplete={() => console.log("Animation completed!")}
      onLoad={() => console.log("Animation loaded!")}
    />
  );
}
```

### Conditional Rendering

```tsx
import { Check, Loader } from "lottie-lucide";

function SaveButton({ isLoading, isSaved }) {
  return (
    <button>
      {isLoading ? <Loader size={20} /> : null}
      {isSaved ? <Check size={20} /> : null}
      Save
    </button>
  );
}
```

### With Tailwind CSS

```tsx
import { Heart, Check } from "lottie-lucide";

function TailwindExample() {
  return (
    <div className="flex gap-4 p-4">
      <Heart
        size={32}
        className="text-red-500 hover:scale-110 transition-transform"
      />
      <Check size={32} className="text-green-500" hoverToPlay />
    </div>
  );
}
```

## Comparison with Lucide React

### Lucide React

```tsx
import { Heart, Check } from 'lucide-react';

<Heart size={24} color="red" />
<Check size={24} strokeWidth={2} />
```

### Lottie Lucide (Same API + Animations!)

```tsx
import { Heart, Check } from 'lottie-lucide';

<Heart size={24} />
<Check size={24} loop={true} speed={1.5} />
```

## Creating Custom Icons

You can create your own animated icons:

```tsx
import { createLottieIcon } from "lottie-lucide";
import myAnimation from "./my-animation.json";

// Create a custom icon component
export const MyIcon = createLottieIcon("MyIcon", myAnimation);

// Use it anywhere
<MyIcon size={32} autoplay loop />;
```

## TypeScript Support

Full TypeScript support out of the box:

```tsx
import { Heart, LottieIconProps } from "lottie-lucide";

const MyComponent: React.FC = () => {
  const iconProps: Partial<LottieIconProps> = {
    size: 32,
    loop: true,
    autoplay: true,
  };

  return <Heart {...iconProps} />;
};
```

## Bundle Size

- ES Module: ~454 KB (97 KB gzipped)
- Tree-shakeable: Only imports what you use!

```tsx
// Only Heart icon will be bundled
import { Heart } from "lottie-lucide";
```

## Browser Support

Works in all modern browsers that support:

- React 18+
- ES6+
- SVG rendering

## License

MIT
