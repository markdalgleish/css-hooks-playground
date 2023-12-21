import { createHooks } from "@css-hooks/react";
import { blue } from "@radix-ui/colors";

const classes = {
  container: "__container__",
  group: "__group__",
};
const containerStyles = `:root,.${classes.container}{container-type:inline-size;container-name:${classes.container}}`;

const [hooks, css] = createHooks(
  {
    ":container(640px)": `@container ${classes.container} (min-width: 640px)`,
    ":container(1024px)": `@container ${classes.container} (min-width: 1024px)`,
    ":window(640px)": `@media screen and (min-width: 640px)`,
    ":window(1024px)": `@media screen and (min-width: 1024px)`,
    ":light": "@media (prefers-color-scheme: light)",
    ":dark": "@media (prefers-color-scheme: dark)",
    ":hover": ":hover",
    ":group(:hover)": `.${classes.group}:hover &`,
  },
  { debug: process.env.NODE_ENV !== "production" }
);

const CssHooks = () => (
  <style
    dangerouslySetInnerHTML={{
      __html: [containerStyles, hooks].join(""),
    }}
  />
);

const colors = {
  ...blue,
};

export { CssHooks, css, classes, colors };
