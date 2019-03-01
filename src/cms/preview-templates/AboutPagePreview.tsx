import * as React from "react";

const AboutPagePreview: React.FC<{
  entry: { getIn: Function };
  widgetFor: Function;
}> = props => {
  return props.widgetFor("body");
};

export default AboutPagePreview;
