# Usage Examples - Lottie Icons

This library works **exactly like Lucide React** but with animated Lottie icons!

## Installation

```bash
npm install lottie-icons
# or
yarn add lottie-icons
# or
pnpm add lottie-icons
```

## Installation

```bash
npm install lottie-icons
# or
yarn add lottie-icons
# or
pnpm add lottie-icons
```

## Basic Usage

### Import All Icons (Default)

```tsx
import { Heart, Check, Loader, ArrowRight } from "lottie-icons";

function App() {
  return (
    <div>
      <Heart size={48} loop />
      <Check size={48} autoplay={false} />
    </div>
  );
}
```

### Per-Icon Imports (Optimized for Tree-Shaking)

For maximum bundle optimization, import icons individually:

```tsx
import Heart from "lottie-icons/icons/Heart";
import Check from "lottie-icons/icons/Check";

function App() {
  return (
    <div>
      <Heart size={48} loop />
      <Check size={48} />
    </div>
  );
}
```

**Benefits:**

- 🎯 Only bundles the specific icon animation data you use
- 📦 Smaller initial bundle size (0.16-0.18 kB per icon vs ~0.63 kB for main export)
- ⚡ Faster load times in production
- 🌳 Perfect tree-shaking with modern bundlers

## Icon Props

```tsx
import { Heart, Check, Loader, ArrowRight } from "lottie-icons";

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
import { Heart, Check } from "lottie-icons";

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
import { Heart } from "lottie-icons";

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
import { Check, Loader } from "lottie-icons";

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
import { Heart, Check } from "lottie-icons";

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
import { Heart, Check } from 'lottie-icons';

<Heart size={24} />
<Check size={24} loop={true} speed={1.5} />
```

## Creating Custom Icons

You can create your own animated icons:

```tsx
import { createLottieIcon } from "lottie-icons";
import myAnimation from "./my-animation.json";

// Create a custom icon component
export const MyIcon = createLottieIcon("MyIcon", myAnimation);

// Use it anywhere
<MyIcon size={32} autoplay loop />;
```

## TypeScript Support

Full TypeScript support out of the box:

```tsx
import { Heart, LottieIconProps } from "lottie-icons";

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
import { Heart } from "lottie-icons";
```

## Next.js / SSR Usage

Lottie Icons is **fully SSR-safe** out of the box! The library automatically:

- Guards against server-side execution (checks `typeof window`)
- Lazy-loads `lottie-web` only on the client (dynamic import in `useEffect`)
- Renders a placeholder `<div>` on the server, hydrates with animation on the client

### Basic Usage in Next.js

```tsx
// app/page.tsx or pages/index.tsx
import { Heart, Check, Loader } from "lottie-icons";

export default function Page() {
  return (
    <div>
      <Heart size={32} autoplay loop />
      <Check size={24} />
      <Loader size={40} loop />
    </div>
  );
}
```

This works in:

- ✅ Next.js App Router (React Server Components & Client Components)
- ✅ Next.js Pages Router (SSR & SSG)
- ✅ Any other React SSR framework (Remix, Gatsby, etc.)

### Advanced: Explicit Client-Only Loading (Optional)

If you want to explicitly mark icons as client-only (e.g., for code splitting or clarity), use Next.js dynamic import with `ssr: false`:

```tsx
"use client"; // if using App Router

import dynamic from "next/dynamic";

const Heart = dynamic(() => import("lottie-icons").then((mod) => mod.Heart), {
  ssr: false,
});

export default function MyComponent() {
  return <Heart size={32} autoplay loop />;
}
```

**Note:** This is usually unnecessary because the library already handles SSR safely. Use this approach only if you want to defer loading the icon module entirely until client-side.

### Next.js Performance Tips

1. **Tree-shaking works automatically** — only icons you import are bundled (thanks to `sideEffects: false` in package.json).
2. **`lottie-web` is code-split** — it's dynamically imported when an icon mounts, keeping your initial bundle small.
3. **Use per-icon imports** (when available) for even smaller bundles:
   ```tsx
   import Heart from "lottie-icons/icons/Heart"; // (if per-icon exports are configured)
   ```

## Browser Support

Works in all modern browsers that support:

- React 18+
- ES6+
- SVG rendering

## License

MIT
