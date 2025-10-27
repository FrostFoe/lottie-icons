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
import { Heart, Check, Loader } from "lottie-icons";

function App() {
  return (
    <div>
      <Heart size={32} />
      <Check size={48} speed={2} loop />
      <Loader size={64} loop autoplay />
    </div>
  );
}
```

## 📖 Usage

### Basic Usage

Import and use icons just like Lucide React:

```tsx
import { Heart, Check, ArrowRight } from "lottie-icons";

function MyComponent() {
  return (
    <div>
      <Heart size={24} />
      <Check size={32} speed={1.5} />
      <ArrowRight size={40} loop />
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

export const Star = createLottieIcon("Star", starAnimation);

// Use it anywhere
<Star size={32} speed={1.5} loop />;
```

### Interactive Icons

Add hover effects and callbacks:

```tsx
import { Heart } from "lottie-icons";

function LikeButton() {
  return (
    <Heart
      size={48}
      hoverToPlay
      onComplete={() => console.log("Animation complete!")}
      onLoad={() => console.log("Icon loaded!")}
    />
  );
}
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

The library includes these sample icons:

- `Heart` - Animated heart icon
- `Check` - Checkmark with animation
- `Loader` - Spinning loader
- `ArrowRight` - Animated arrow

## 🎨 Creating Your Own Icons

1. **Get Lottie Animation**: Create or download a Lottie JSON from [LottieFiles](https://lottiefiles.com/)

2. **Import the JSON**:

```tsx
import myAnimation from "./animations/my-icon.json";
```

3. **Create the Icon Component**:

```tsx
import { createLottieIcon } from "lottie-icons";
export const MyIcon = createLottieIcon("MyIcon", myAnimation);
```

4. **Use It**:

```tsx
<MyIcon size={48} loop />
```

## 🔧 Advanced Usage

### Icon Registry

Register multiple icons globally:

```tsx
import { iconRegistry } from "lottie-icons";
import icon1 from "./icon1.json";
import icon2 from "./icon2.json";

iconRegistry.register("Icon1", icon1);
iconRegistry.register("Icon2", icon2);

// Create component from registry
const Icon1 = iconRegistry.createComponent("Icon1");
```

### Different Renderers

Choose between SVG, Canvas, or HTML rendering:

```tsx
<Heart renderer="svg" />    {/* Default - best for most cases */}
<Heart renderer="canvas" /> {/* Better for complex animations */}
<Heart renderer="html" />   {/* Rare use cases */}
```

## 📚 Examples

### Like Button with State

```tsx
import { useState } from "react";
import { Heart } from "lottie-icons";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(!liked)}>
      <Heart size={32} autoplay={liked} loop={false} />
    </button>
  );
}
```

### Loading Indicator

```tsx
import { Loader } from "lottie-icons";

function LoadingScreen({ isLoading }) {
  if (!isLoading) return null;

  return (
    <div className="loading-overlay">
      <Loader size={64} loop autoplay speed={1.5} />
      <p>Loading...</p>
    </div>
  );
}
```

### Success Animation

```tsx
import { Check } from "lottie-icons";

function SuccessMessage({ onComplete }) {
  return (
    <div className="success">
      <Check size={80} speed={1.2} onComplete={onComplete} />
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
