# lottie-lucide

A Lucide-inspired React icon library powered by lightweight [Lottie](https://airbnb.design/lottie/) animations. Instead of static SVGs, every icon is an interactive Lottie JSON animation that can loop, autoplay, or respond to user input.

## Features

- ⚡️ Tiny React components generated from Lottie JSON data
- 🎨 Dynamic color overrides at runtime
- ♻️ Looping, autoplay, and speed controls exposed as familiar props
- 🧩 Lucide-style API: import only the icons you use
- 📦 Tree-shakeable ESM & CJS builds with TypeScript typings

## Installation

```bash
npm install lottie-lucide lottie-react
# or
yarn add lottie-lucide lottie-react
```

This package expects `react` and `react-dom` to be installed in your application.

## Usage

```tsx
import { Check, Loader } from 'lottie-lucide';

export function Example() {
  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Check size={32} color="#10b981" autoplay />
      <Loader size={32} color="#6366f1" />
    </div>
  );
}
```

### Icon props

Every icon exposes the following props:

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `size` | `number \| string` | `24` | Sets both width and height. Override `width`/`height` individually if you need custom sizing. |
| `color` | `string` | `undefined` | Overrides stroke/fill colors in the animation. |
| `loop` | `boolean` | Icon specific | Controls looping. |
| `autoplay` | `boolean` | Icon specific | Starts animation automatically when mounted. |
| `speed` | `number` | `1` | Playback speed multiplier. |
| `rendererSettings` | `RendererSettings` | Preserves aspect ratio and enables progressive load by default. | Merge custom renderer settings. |

Any additional props supported by [`lottie-react`](https://github.com/Gamote/lottie-react) are forwarded to the underlying `<Lottie />` component.

Need direct access to the Lottie instance? Each icon component is `forwardRef`-aware, so you can use `useRef` and interact with the animation imperatively.

## Creating custom icons

Use the `createLucideLottieIcon` factory to wrap any Lottie JSON file into a reusable React component:

```tsx
import animationData from './path/to/icon.json';
import { createLucideLottieIcon } from 'lottie-lucide';

export const PartyPopper = createLucideLottieIcon({
  name: 'PartyPopper',
  animationData,
  defaultLoop: false,
  defaultAutoplay: true,
  label: 'Celebrate'
});
```

## Included icons

- `Check`
- `Loader`
- `X`

Each icon ships with a subtle animation handcrafted for Lucide-inspired motion.
