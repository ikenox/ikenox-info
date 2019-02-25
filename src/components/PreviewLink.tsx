import * as React from "react";
import ExternalLink from "./ExternalLink";

const PreviewLink: React.FC<{ title: string; url: string }> = props => (
  <div>
    <ExternalLink to={props.url}>{props.title}</ExternalLink>
  </div>
);

export default PreviewLink;
