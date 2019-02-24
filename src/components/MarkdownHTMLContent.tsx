import * as React from "react";

import * as Prism from "prismjs";
import "prismjs/components/prism-java";
import "prismjs/components/prism-vim";
import "prismjs/components/prism-perl";
import "./prism.css";
import "./prism-custom.sass";

import { isProduction } from "util";

const MarkdownHTMLContent = class extends React.Component<{ content: string }> {
  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate(
    prevProps: Readonly<{ content: string }>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    if (!isProduction()) {
      Prism.highlightAll();
    }
  }

  render() {
    return <div dangerouslySetInnerHTML={{ __html: this.props.content }} />;
  }
};

export default MarkdownHTMLContent;
