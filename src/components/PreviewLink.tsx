import * as React from "react";
import ExternalLink from "./ExternalLink";

const PreviewLink: React.FC<{ title: string; url: string }> = props => (
  <span style={{ display: "block" }}>
    <ExternalLink to={props.url}>{props.title}</ExternalLink>
  </span>
);

export default PreviewLink;
