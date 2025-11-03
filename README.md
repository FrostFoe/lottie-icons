# 🎨 Lottie Icons

A **Lucide-style React icon library** with Lottie animations — lightweight, scalable, and fully interactive animated icons for modern React applications.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![React](https://img.shields.io/badge/react-18.0+-blue)

## ✨ Features

- 🎬 **Lottie-Powered Animations** - Beautiful, smooth animations using Lottie JSON format
- ⚡ **Lucide-Style API** - Familiar, intuitive API inspired by Lucide React
- 🎨 **Fully Customizable** - Control size, speed, loop, autoplay, and more
- 🪶 **Lightweight** - Tree-shakeable and optimized for production
- 📦 **TypeScript Support** - Full TypeScript support with type definitions
- 🎯 **Interactive** - Hover to play, callbacks, and event handlers
- 🔧 **Easy to Extend** - Create your own animated icons with any Lottie JSON

## 📦 Installation

```bash
npm install lottie-icons
# or
yarn add lottie-icons
# or
pnpm add lottie-icons
```

## 🚀 Quick Start

```tsx
import { Add, Customer, Location } from "lottie-icons";

function App() {
  return (
    <div>
      <Add size={32} />
      <Customer size={48} speed={2} loop />
      <Location size={64} loop autoplay />
    </div>
  );
}
```

## 📖 Usage

### Basic Usage

Import and use icons just like Lucide React:

```tsx
import { Add, Customer, FastDelivery } from "lottie-icons";

function MyComponent() {
  return (
    <div>
      <Add size={24} />
      <Customer size={32} speed={1.5} />
      <FastDelivery size={40} loop />
    </div>
  );
}
```

### Custom Animation Data

Use your own Lottie JSON animations:

```tsx
import { LottieIcon } from "lottie-icons";
import myAnimation from "./my-animation.json";

function CustomIcon() {
  return <LottieIcon animationData={myAnimation} size={48} loop autoplay />;
}
```

### Create Reusable Icon Components

Create your own icon components from Lottie JSON:

```tsx
import { createLottieIcon } from "lottie-icons";
import starAnimation from "./star-animation.json";

export const Star = createLottieIcon(starAnimation, "Star");

// Use it anywhere
<Star size={32} speed={1.5} loop />;
```

### Ref Support

Icons support refs for direct DOM access:

```tsx
import { useRef } from "react";
import { Add } from "lottie-icons";

function MyComponent() {
  const iconRef = useRef<HTMLDivElement>(null);

  return <Add ref={iconRef} size={48} />;
}
```

### Interactive Icons

Add hover effects and callbacks:

```tsx
import { Dislike } from "lottie-icons";

function LikeButton() {
  return (
    <Dislike
      size={48}
      hoverToPlay
      onComplete={() => console.log("Animation complete!")}
      onLoad={() => console.log("Icon loaded!")}
    />
  );
}
```

### Dark/Light Theme Support

Icons support dynamic color theming for dark and light modes:

```tsx
import { useState } from "react";
import { Add, Customer, Location } from "lottie-icons";

function ThemedIcons() {
  const [isDark, setIsDark] = useState(true);

  // Define color mappings for each theme
  const themeColors = {
    light: {
      "0,0,0,1": [0.29, 0.29, 0.29, 1], // Black to dark gray
    },
    dark: {
      "0,0,0,1": [1, 1, 1, 1], // Black to white
    },
  };

  const colors = isDark ? themeColors.dark : themeColors.light;

  return (
    <div>
      <button onClick={() => setIsDark(!isDark)}>Toggle Theme</button>
      <Add size={32} colors={colors} loop autoplay />
      <Customer size={32} colors={colors} loop autoplay />
      <Location size={32} colors={colors} loop autoplay />
    </div>
  );
}
```

You can also use hex color format:

```tsx
const hexThemeColors = {
  light: {
    "#000000": "#4A4A4A", // Black to dark gray
  },
  dark: {
    "#000000": "#FFFFFF", // Black to white
  },
};
```

## 🎛️ API Reference

### Props

All icon components accept the following props:

| Prop          | Type                          | Default | Description                             |
| ------------- | ----------------------------- | ------- | --------------------------------------- |
| `size`        | `number \| string`            | `24`    | Size of the icon in pixels              |
| `speed`       | `number`                      | `1`     | Animation speed multiplier (1 = normal) |
| `loop`        | `boolean`                     | `false` | Whether to loop the animation           |
| `autoplay`    | `boolean`                     | `true`  | Whether to autoplay on mount            |
| `hoverToPlay` | `boolean`                     | `false` | Play animation on hover                 |
| `colors`      | `Record<string, string \| number[]>` | -    | Color mappings for theming (supports hex or RGB) |
| `renderer`    | `'svg' \| 'canvas' \| 'html'` | `'svg'` | Lottie renderer type                    |
| `className`   | `string`                      | `''`    | Additional CSS classes                  |
| `onComplete`  | `() => void`                  | -       | Callback when animation completes       |
| `onLoad`      | `() => void`                  | -       | Callback when animation loads           |
| `style`       | `React.CSSProperties`         | -       | Inline styles                           |

### Components

#### `LottieIcon`

The base component that all icons use:

```tsx
<LottieIcon animationData={myAnimation} size={48} speed={2} loop autoplay />
```

#### `createLottieIcon(name, animationData)`

Factory function to create reusable icon components:

```tsx
const MyIcon = createLottieIcon("MyIcon", animationData);
```

### Built-in Icons

The library includes these 15 animated icons:

- `Add` - Add/Plus icon with animation
- `Announcement` - Announcement/megaphone icon
- `Customer` - Customer/user profile icon
- `Coupon` - Coupon/discount icon
- `FilterItem` - Filter/funnel icon
- `Dislike` - Thumbs down icon
- `FastDelivery` - Fast delivery/shipping icon
- `Location` - Location/map pin icon
- `Nevigation` - Navigation/compass icon
- `RemoveItem` - Remove/delete icon
- `User` - User/person icon
- `QrCode` - QR code scanner icon
- `PhoneCall` - Phone call icon
- `SearchProduct` - Search/magnifying glass icon
- `Security` - Security/lock icon

## 🎨 Creating Your Own Icons

1. **Get Lottie Animation**: Create or download a Lottie JSON from [LottieFiles](https://lottiefiles.com/)

2. **Import the JSON**:

```tsx
import myAnimation from "./animations/my-icon.json";
```

3. **Create the Icon Component**:

```tsx
import { createLottieIcon } from "lottie-icons";
export const MyIcon = createLottieIcon(myAnimation, "MyIcon");
```

4. **Use It**:

```tsx
<MyIcon size={48} loop />
```

## 🔧 Advanced Usage

### Per-Icon Imports (Tree-Shaking)

For optimal bundle size, import icons individually:

```tsx
// Default import (all icons)
import { Add, Customer } from "lottie-icons"; // ~0.32 kB

// Per-icon import (smaller bundle)
import Add from "lottie-icons/icons/Add"; // ~0.14 kB (87% smaller!)
import Customer from "lottie-icons/icons/Customer";
```

### Next.js / SSR Usage

Icons are SSR-safe by default:

```tsx
// Next.js App Router
"use client";
import { Add } from "lottie-icons";

export default function Page() {
  return <Add size={48} loop />;
}

// Or use dynamic import for Pages Router
import dynamic from "next/dynamic";

const Add = dynamic(() => import("lottie-icons").then((mod) => mod.Add), {
  ssr: false,
});
```

### Different Renderers

Choose between SVG, Canvas, or HTML rendering:

```tsx
<Add renderer="svg" />    {/* Default - best for most cases */}
<Add renderer="canvas" /> {/* Better for complex animations */}
<Add renderer="html" />   {/* Rare use cases */}
```

## 📚 Examples

### Like Button with State

```tsx
import { useState } from "react";
import { Dislike } from "lottie-icons";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(!liked)}>
      <Dislike size={32} autoplay={liked} loop={false} />
    </button>
  );
}
```

### Loading Indicator

```tsx
import { Location } from "lottie-icons";

function LoadingScreen({ isLoading }) {
  if (!isLoading) return null;

  return (
    <div className="loading-overlay">
      <Location size={64} loop autoplay speed={1.5} />
      <p>Loading...</p>
    </div>
  );
}
```

### Success Animation

```tsx
import { Add } from "lottie-icons";

function SuccessMessage({ onComplete }) {
  return (
    <div className="success">
      <Add size={80} speed={1.2} onComplete={onComplete} />
      <p>Success!</p>
    </div>
  );
}
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Add new Lottie icon animations
2. Improve documentation
3. Report bugs
4. Suggest new features

## 📄 License

MIT License - feel free to use in your projects!

## 🙏 Acknowledgments

- Inspired by [Lucide React](https://lucide.dev)
- Powered by [Lottie Web](https://github.com/airbnb/lottie-web)
- Icons from [LottieFiles](https://lottiefiles.com/)

## 🔗 Links

- [Documentation](https://github.com/yourusername/lottie-icons)
- [Examples](https://lottie-icons-demo.vercel.app)
- [LottieFiles](https://lottiefiles.com) - Find more animations
- [Lucide](https://lucide.dev) - The inspiration for this project

---

Made with ❤️ for the React community
