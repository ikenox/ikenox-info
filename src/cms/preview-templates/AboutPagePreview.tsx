import * as React from "react";
import { AboutPageTemplate } from "../../templates/about-page";

const AboutPagePreview: React.FC<{
  entry: { getIn: Function };
  widgetFor: Function;
}> = props => (
  <AboutPageTemplate
    title={props.entry.getIn(["data", "title"])}
    content={props.widgetFor("body")}
  />
);

export default AboutPagePreview;
