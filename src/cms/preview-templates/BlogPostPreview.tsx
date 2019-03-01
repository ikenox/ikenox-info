import * as React from "react";

const BlogPostPreview: React.FC<{
  entry: { getIn: Function };
  widgetFor: Function;
}> = props => props.widgetFor("body");

export default BlogPostPreview;
