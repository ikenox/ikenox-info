import * as Prism from "prismjs";
import "./markdown.sass";
import "./prism.css";
import "./prism-custom.sass";
import * as React from "react";

import "prismjs/components/prism-perl";
import "prismjs/components/prism-java";
import "prismjs/components/prism-vim";

export default class ContentContainsCode extends React.Component<{
  inner: any;
}> {
  componentDidMount(): void {
    Prism.highlightAll();
  }
  render(): React.ReactNode {
    return this.props.inner;
  }
}
