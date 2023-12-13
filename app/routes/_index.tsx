import type { MetaFunction } from "@remix-run/node";
import { css } from "~/css-hooks";

export const meta: MetaFunction = () => {
  return [
    { title: "CSS Hooks Playground" },
    { name: "description", content: "Just playing around with CSS Hooks!" },
  ];
};

export default function Index() {
  return (
    <>
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
          ":640px": { padding: 16, fontSize: 24 },
          ":1024px": { padding: 24, fontSize: 32 },
        })}
      >
        Hello from Remix and CSS Hooks!
      </h1>
    </>
  );
}
