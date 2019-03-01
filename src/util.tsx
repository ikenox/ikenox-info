import PreviewLink from "./components/PreviewLink";
import * as React from "react";

export function isProduction(): boolean {
  return process.env.NODE_ENV === "production";
}

const rehypeReact = require("rehype-react");

export const renderAst = (ast: any) => {
  let compiler = new rehypeReact({
    createElement: React.createElement,
    components: { "preview-link": PreviewLink }
  }).Compiler;
  return compiler(ast);
};
