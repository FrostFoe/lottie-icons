import { createLottieIcon } from "../createIcon";
import { heartAnimation } from "./heart";
import { checkAnimation } from "./check";
import { loaderAnimation } from "./loader";
import { arrowRightAnimation } from "./arrowRight";

// Export individual icon components (Lucide-style)
export const Heart = createLottieIcon("Heart", heartAnimation);
export const Check = createLottieIcon("Check", checkAnimation);
export const Loader = createLottieIcon("Loader", loaderAnimation);
export const ArrowRight = createLottieIcon("ArrowRight", arrowRightAnimation);

// Export animation data for direct use
export { heartAnimation, checkAnimation, loaderAnimation, arrowRightAnimation };
