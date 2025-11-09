// Icon metadata for search and filtering
export interface IconMetadata {
  name: string;
  tags: string[];
  animationType: string;
  description: string;
  bundleSize: string; // in kB
}

export const ICON_METADATA: Record<string, IconMetadata> = {
  Add: {
    name: "Add",
    tags: ["plus", "create", "new", "action"],
    animationType: "pulse",
    description: "Add or create new item",
    bundleSize: "0.14",
  },
  Announcement: {
    name: "Announcement",
    tags: ["megaphone", "notification", "alert", "broadcast"],
    animationType: "wave",
    description: "Announcement or broadcast",
    bundleSize: "0.15",
  },
  Customer: {
    name: "Customer",
    tags: ["user", "profile", "person", "account"],
    animationType: "fade",
    description: "Customer or user profile",
    bundleSize: "0.16",
  },
  Coupon: {
    name: "Coupon",
    tags: ["discount", "offer", "deal", "promotion"],
    animationType: "bounce",
    description: "Coupon or discount",
    bundleSize: "0.14",
  },
  FilterItem: {
    name: "FilterItem",
    tags: ["filter", "funnel", "sort", "search"],
    animationType: "spin",
    description: "Filter or sort items",
    bundleSize: "0.15",
  },
  Dislike: {
    name: "Dislike",
    tags: ["thumbs down", "negative", "feedback", "reaction"],
    animationType: "bounce",
    description: "Dislike or negative feedback",
    bundleSize: "0.14",
  },
  FastDelivery: {
    name: "FastDelivery",
    tags: ["shipping", "delivery", "fast", "package"],
    animationType: "slide",
    description: "Fast delivery or shipping",
    bundleSize: "0.16",
  },
  Location: {
    name: "Location",
    tags: ["map", "pin", "place", "geography"],
    animationType: "pulse",
    description: "Location or map pin",
    bundleSize: "0.15",
  },
  Nevigation: {
    name: "Nevigation",
    tags: ["compass", "navigate", "direction", "route"],
    animationType: "spin",
    description: "Navigation or compass",
    bundleSize: "0.15",
  },
  RemoveItem: {
    name: "RemoveItem",
    tags: ["delete", "remove", "trash", "close"],
    animationType: "fade",
    description: "Remove or delete item",
    bundleSize: "0.14",
  },
  User: {
    name: "User",
    tags: ["profile", "account", "person", "human"],
    animationType: "fade",
    description: "User profile or account",
    bundleSize: "0.14",
  },
  QrCode: {
    name: "QrCode",
    tags: ["scan", "qr", "code", "barcode"],
    animationType: "spin",
    description: "QR code scanner",
    bundleSize: "0.16",
  },
  PhoneCall: {
    name: "PhoneCall",
    tags: ["phone", "call", "contact", "communication"],
    animationType: "ring",
    description: "Phone call or contact",
    bundleSize: "0.14",
  },
  SearchProduct: {
    name: "SearchProduct",
    tags: ["search", "magnifying glass", "find", "query"],
    animationType: "pulse",
    description: "Search product or item",
    bundleSize: "0.15",
  },
  Security: {
    name: "Security",
    tags: ["lock", "security", "protection", "safe"],
    animationType: "shake",
    description: "Security or lock",
    bundleSize: "0.15",
  },
};

export const ANIMATION_TYPES = [
  "pulse",
  "bounce",
  "spin",
  "fade",
  "slide",
  "wave",
  "ring",
  "shake",
];

// Search and filter icons
export function searchIcons(
  query: string,
  animationType?: string,
  favorites?: Set<string>
): string[] {
  const queryLower = query.toLowerCase();

  return Object.entries(ICON_METADATA)
    .filter(([name, metadata]) => {
      // Text search
      const matchesQuery =
        !query ||
        name.toLowerCase().includes(queryLower) ||
        metadata.tags.some((tag) => tag.includes(queryLower)) ||
        metadata.description.toLowerCase().includes(queryLower);

      // Animation type filter
      const matchesType = !animationType || metadata.animationType === animationType;

      return matchesQuery && matchesType;
    })
    .map(([name]) => name)
    .sort((a, b) => {
      // Favorites first
      const aFav = favorites?.has(a) ? 0 : 1;
      const bFav = favorites?.has(b) ? 0 : 1;
      if (aFav !== bFav) return aFav - bFav;
      return a.localeCompare(b);
    });
}

// Generate code snippet
export function generateCodeSnippet(
  iconName: string,
  isPerIcon: boolean = false
): string {
  if (isPerIcon) {
    return `import ${iconName} from 'lottie-icons/icons/${iconName}';

export default function App() {
  return <${iconName} size={48} loop autoplay />;
}`;
  }
  return `import { ${iconName} } from 'lottie-icons';

export default function App() {
  return <${iconName} size={48} loop autoplay />;
}`;
}

// Copy to clipboard with toast
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

// Calculate bundle size
export function getBundleSize(iconNames: string[]): string {
  const total = iconNames.reduce((sum, name) => {
    const metadata = ICON_METADATA[name];
    return sum + parseFloat(metadata?.bundleSize || "0.14");
  }, 0);
  return total.toFixed(2);
}
