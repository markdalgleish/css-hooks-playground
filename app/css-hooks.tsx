import { createHooks } from "@css-hooks/react";

const container = "__container__";
const containerStyles = `:root,.${container}{container-type:inline-size;container-name:${container}}`;

const [hooks, css] = createHooks({
  ":container(640px)": `@container ${container} (min-width: 640px)`,
  ":container(1024px)": `@container ${container} (min-width: 1024px)`,
  ":window(640px)": `@media screen and (min-width: 640px)`,
  ":window(1024px)": `@media screen and (min-width: 1024px)`,
  ":light": "@media (prefers-color-scheme: light)",
  ":dark": "@media (prefers-color-scheme: dark)",
  ":hover": ":hover",
});

export { css };
export const classes = { container };
export const CssHooks = () => (
  <style
    dangerouslySetInnerHTML={{
      __html: [containerStyles, hooks].join(""),
    }}
  />
);
