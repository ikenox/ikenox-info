import * as React from "react";

const ExternalLink: React.FC<{ to: string }> = props => (
  <a href={props.to} target="_blank" rel="noopener noreferrer">
    {props.children}
  </a>
);

export default ExternalLink;
