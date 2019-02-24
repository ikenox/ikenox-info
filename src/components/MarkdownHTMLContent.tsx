import * as React from "react";

import * as Prism from "prismjs";
import "./prism.css";

const MarkdownHTMLContent = class extends React.Component<{ content: string }> {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return <div dangerouslySetInnerHTML={{ __html: this.props.content }} />;
  }
};

export default MarkdownHTMLContent;
