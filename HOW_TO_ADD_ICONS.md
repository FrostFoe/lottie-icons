# How to Add or Edit Icons

## Adding a New Icon

### Step 1: Get Your Lottie Animation

**Option A: Download from LottieFiles**

1. Go to https://lottiefiles.com
2. Find an animation you like
3. Download as "Lottie JSON"

**Option B: Create Your Own**

1. Design in After Effects
2. Export with Bodymovin plugin
3. Save the JSON file

### Step 2: Create the Icon File

Create a new file in `src/icons/yourIconName.ts`:

```typescript
// src/icons/star.ts
export const starAnimation = {
  v: "5.7.4",
  fr: 60,
  ip: 0,
  op: 60,
  w: 500,
  h: 500,
  nm: "Star",
  // ... paste your Lottie JSON here
  layers: [
    // ... animation data
  ],
};
```

### Step 3: Register the Icon

Add it to `src/icons/index.ts`:

```typescript
import { createLottieIcon } from "../createIcon";
import { heartAnimation } from "./heart";
import { starAnimation } from "./star"; // ADD THIS

// Export existing icons
export const Heart = createLottieIcon("Heart", heartAnimation);
export const Star = createLottieIcon("Star", starAnimation); // ADD THIS

// Export animation data
export { heartAnimation, starAnimation }; // ADD starAnimation
```

### Step 4: Export from Main Index

Add to `src/index.ts`:

```typescript
// Export all built-in icons
export { Heart, Check, Loader, ArrowRight, Star } from "./icons"; // Add Star

// Export animation data
export {
  heartAnimation,
  checkAnimation,
  loaderAnimation,
  arrowRightAnimation,
  starAnimation, // ADD THIS
} from "./icons";
```

### Step 5: Rebuild

```bash
npm run build
```

### Step 6: Use Your New Icon!

```tsx
import { Star } from "lottie-icons";

<Star size={32} autoplay loop />;
```

---

## Editing Existing Icons

### Method 1: Replace the Animation Data

Edit the icon file directly (e.g., `src/icons/heart.ts`):

```typescript
// src/icons/heart.ts
export const heartAnimation = {
  // Replace with your new Lottie JSON
  v: "5.7.4",
  fr: 60,
  // ... your new animation data
};
```

### Method 2: Load from External File

```typescript
// src/icons/heart.ts
import heartData from "./animations/heart.json";

export const heartAnimation = heartData;
```

Then create `src/icons/animations/heart.json` with your Lottie data.

---

## Quick Example: Adding a "Star" Icon

1. **Create the file:**

```bash
touch src/icons/star.ts
```

2. **Add the animation:**

```typescript
// src/icons/star.ts
export const starAnimation = {
  v: "5.7.4",
  fr: 60,
  ip: 0,
  op: 60,
  w: 500,
  h: 500,
  nm: "Star",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Star Shape",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            { t: 0, s: [0], e: [360] },
            { t: 60, s: [360] },
          ],
        },
        p: { a: 0, k: [250, 250, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "sr",
              sy: 1,
              d: 1,
              pt: { a: 0, k: 5 },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 0 },
              ir: { a: 0, k: 40 },
              is: { a: 0, k: 0 },
              or: { a: 0, k: 80 },
              os: { a: 0, k: 0 },
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 0.8, 0, 1] },
              o: { a: 0, k: 100 },
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 },
            },
          ],
        },
      ],
      ip: 0,
      op: 60,
      st: 0,
    },
  ],
};
```

3. **Register in `src/icons/index.ts`:**

```typescript
import { createLottieIcon } from "../createIcon";
import { heartAnimation } from "./heart";
import { checkAnimation } from "./check";
import { loaderAnimation } from "./loader";
import { arrowRightAnimation } from "./arrowRight";
import { starAnimation } from "./star"; // ADD

export const Heart = createLottieIcon("Heart", heartAnimation);
export const Check = createLottieIcon("Check", checkAnimation);
export const Loader = createLottieIcon("Loader", loaderAnimation);
export const ArrowRight = createLottieIcon("ArrowRight", arrowRightAnimation);
export const Star = createLottieIcon("Star", starAnimation); // ADD

export {
  heartAnimation,
  checkAnimation,
  loaderAnimation,
  arrowRightAnimation,
  starAnimation, // ADD
};
```

4. **Export from `src/index.ts`:**

```typescript
// Export all built-in icons
export { Heart, Check, Loader, ArrowRight, Star } from "./icons";

// Export animation data
export {
  heartAnimation,
  checkAnimation,
  loaderAnimation,
  arrowRightAnimation,
  starAnimation,
} from "./icons";
```

5. **Rebuild:**

```bash
npm run build
```

6. **Use it:**

```tsx
import { Star } from "lottie-icons";

<Star size={40} autoplay loop />;
```

---

## Tips for Better Icons

### 1. Optimize Your Lottie Files

- Use https://lottiefiles.com/tools/lottie-compressor
- Remove unnecessary layers
- Keep file size small (< 50KB recommended)

### 2. Test Your Animations

```tsx
// In src/demo/main.tsx, add your icon to test
import { Star } from "../index";

<Star size={48} autoplay loop />;
```

Then run:

```bash
npm run dev
```

### 3. Naming Conventions

- Use PascalCase for icon names: `Star`, `CheckCircle`, `ArrowRight`
- File names should be camelCase: `star.ts`, `checkCircle.ts`
- Animation data should be `iconNameAnimation`: `starAnimation`

### 4. Animation Properties

Make sure your Lottie JSON includes:

- `"v"`: Lottie version
- `"fr"`: Frame rate
- `"ip"`: In point (start frame)
- `"op"`: Out point (end frame)
- `"w"`, `"h"`: Width and height
- `"layers"`: Animation layers

---

## File Structure

```
src/icons/
├── index.ts              # Main icon registry
├── heart.ts             # Heart icon animation
├── check.ts             # Check icon animation
├── loader.ts            # Loader icon animation
├── arrowRight.ts        # ArrowRight icon animation
└── star.ts              # Your new icon!
```

---

## Troubleshooting

**Icon not showing?**

- Check that you exported it from both `src/icons/index.ts` AND `src/index.ts`
- Rebuild with `npm run build`
- Check browser console for errors

**Animation not playing?**

- Verify your Lottie JSON is valid
- Test on https://lottiefiles.com/preview
- Check `autoplay` prop is set to `true`

**TypeScript errors?**

- Make sure you're exporting the animation data
- Run `npm run build` to regenerate type definitions
