import "../components/markdown.sass";
import "../components/prism.css";
import "../components/prism-custom.sass";
import * as Prism from "prismjs";
import { Component, ReactNode } from "react";

export default class Content extends Component {
  componentDidMount(): void {
    Prism.highlightAll();
    console.log("hogehoeg");
  }
  render(): ReactNode {
    return this.props.children;
  }
}
