import * as React from "react";
import { AboutPageTemplate } from "../../templates/about-page";

const AboutPagePreview: React.FC<{
  entry: { getIn: Function };
  widgetFor: Function;
}> = props => <AboutPageTemplate content={props.widgetFor("body")} />;

export default AboutPagePreview;
