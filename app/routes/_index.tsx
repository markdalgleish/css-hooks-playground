import type { MetaFunction } from "@remix-run/node";
import { ReactNode } from "react";
import { css, classes } from "~/css-hooks";

export const meta: MetaFunction = () => {
  return [
    { title: "CSS Hooks Playground" },
    { name: "description", content: "Just playing around with CSS Hooks!" },
  ];
};

const Test = ({ children }: { children: ReactNode }) => (
  <h1
    style={css({
      fontFamily: "sans-serif",
      ":light": {
        color: "blue",
        backgroundColor: "aliceblue",
        ":hover": { backgroundColor: "aqua" },
      },
      ":dark": {
        color: "white",
        backgroundColor: "navy",
        ":hover": { backgroundColor: "blue" },
      },
      padding: 10,
      fontSize: 16,
      ":container(640px)": { padding: 16, fontSize: 24 },
      ":container(1024px)": { padding: 24, fontSize: 32 },
    })}
  >
    {children}
  </h1>
);

export default function Index() {
  return (
    <>
      <div className={classes.container} style={{ maxWidth: 480 }}>
        <Test>Test element in a 480px max-width container</Test>
      </div>
      <div className={classes.container} style={{ maxWidth: 768 }}>
        <Test>Test element in a 768px max-width container</Test>
      </div>
      <div className={classes.container} style={{ maxWidth: 1024 }}>
        <Test>Test element in a 1024px max-width container</Test>
      </div>
      <details>
        <summary style={{ cursor: "default" }}>Show stress test</summary>
        {Array.from({ length: 1000 }).map((_, index) => (
          <Test key={index}>Test element {index + 1} of 1000</Test>
        ))}
      </details>
    </>
  );
}
