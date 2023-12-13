import { createHooks } from "@css-hooks/react";

export const [hooks, css] = createHooks({
  ":640px": "@media screen and (min-width: 640px)",
  ":1024px": "@media screen and (min-width: 1024px)",
  ":light": "@media (prefers-color-scheme: light)",
  ":dark": "@media (prefers-color-scheme: dark)",
  ":hover": ":hover",
});
