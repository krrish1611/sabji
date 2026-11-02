/**
 * Custom module declarations for static asset imports.
 * Extend this file when adding new asset types (e.g., .svg, .webp, .gif).
 */

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.png" {
  const value: string;
  export default value;
}

// TODO: Add SVG declarations if SVG imports are needed:
// declare module "*.svg" {
//   import React from "react";
//   export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
//   const src: string;
//   export default src;
// }

declare module "*.webp" {
  const value: string;
  export default value;
}
