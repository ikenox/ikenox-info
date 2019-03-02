import * as Prism from "prismjs";
import "./markdown.sass";
import "./prism.css";
import "./prism-custom.sass";
import * as React from "react";

export default class Content extends React.Component {
  componentDidMount(): void {
    Prism.highlightAll();
  }
  render(): React.ReactNode {
    return this.props.children;
  }
}
