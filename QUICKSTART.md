# 🚀 Quick Start Guide

## View the Demo

The development server is running! Open your browser to:

**http://localhost:5173/**

You'll see:

- ❤️ Heart animation
- ✓ Check animation
- ⟳ Loader animation
- → Arrow animation

All with interactive controls!

## Project Commands

```bash
# Navigate to project
cd /workspaces/codespaces-blank/lottie-icons

# Development
npm run dev          # Start dev server
npm run build        # Build library for distribution
npm run preview      # Preview production build
npm run type-check   # Check TypeScript types

# The demo is at:     http://localhost:5173/
```

## File Overview

### Core Library (What you'd publish to npm)

- `src/LottieIcon.tsx` - Main component wrapping Lottie
- `src/createIcon.tsx` - Factory for creating icon components
- `src/types.ts` - TypeScript type definitions
- `src/icons/*` - Sample Lottie animation data

### Demo App

- `src/demo/main.tsx` - Interactive demo application
- `src/demo/styles.css` - Beautiful gradient styling
- `index.html` - Demo entry point

### Configuration

- `package.json` - Dependencies & scripts
- `vite.config.ts` - Build for library distribution
- `tsconfig.json` - TypeScript settings

## Usage Examples

### 1. Use Built-in Icons

```tsx
import { Heart, Check, Loader } from "lottie-icons";

function App() {
  return (
    <>
      <Heart size={48} loop autoplay />
      <Check size={32} speed={2} />
      <Loader size={64} loop />
    </>
  );
}
```

### 2. Custom Lottie Animation

```tsx
import { LottieIcon } from "lottie-icons";
import customAnim from "./my-animation.json";

<LottieIcon
  animationData={customAnim}
  size={48}
  hoverToPlay
  onComplete={() => alert("Done!")}
/>;
```

### 3. Create Your Own Icon Component

```tsx
import { createLottieIcon } from "lottie-icons";
import starData from "./star.json";

export const Star = createLottieIcon("Star", starData);

// Use it
<Star size={40} speed={1.5} loop />;
```

## Adding New Icons

1. **Get Lottie JSON** from [LottieFiles.com](https://lottiefiles.com)
2. **Save** to `src/icons/yourIcon.ts`:
   ```ts
   export const yourIconAnimation = {
     /* paste JSON */
   };
   ```
3. **Create component** in `src/icons/index.ts`:

   ```ts
   import { createLottieIcon } from "../createIcon";
   import { yourIconAnimation } from "./yourIcon";

   export const YourIcon = createLottieIcon("YourIcon", yourIconAnimation);
   ```

4. **Export** from `src/index.ts`:
   ```ts
   export { YourIcon } from "./icons";
   ```

## Props Reference

| Prop          | Type                    | Default | Description                |
| ------------- | ----------------------- | ------- | -------------------------- |
| `size`        | number\|string          | 24      | Icon size                  |
| `speed`       | number                  | 1       | Animation speed (1=normal) |
| `loop`        | boolean                 | false   | Loop animation             |
| `autoplay`    | boolean                 | true    | Auto-play on mount         |
| `hoverToPlay` | boolean                 | false   | Play on hover              |
| `renderer`    | 'svg'\|'canvas'\|'html' | 'svg'   | Renderer type              |
| `onComplete`  | function                | -       | Animation end callback     |
| `onLoad`      | function                | -       | Animation load callback    |
| `className`   | string                  | ''      | CSS classes                |
| `style`       | object                  | -       | React inline styles        |

## What Makes This Special?

✅ **Lucide-Style API** - Familiar developer experience  
✅ **Lottie Animations** - Beautiful, smooth animations  
✅ **TypeScript** - Full type safety  
✅ **Tree-Shakeable** - Only import what you use  
✅ **Customizable** - Control every aspect  
✅ **Interactive** - Hover effects, callbacks  
✅ **Lightweight** - Optimized bundle size

## Next Steps

1. **Explore the demo** at http://localhost:5173/
2. **Try different settings** with the interactive controls
3. **Read the full docs** in `README.md`
4. **Add your own icons** from LottieFiles
5. **Build the library** with `npm run build`
6. **Publish to npm** (optional)

Enjoy! 🎨✨
