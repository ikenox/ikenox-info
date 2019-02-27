import * as React from "react";
import { BlogPostTemplate } from "../../templates/blog-post";

const BlogPostPreview: React.FC<{
  entry: { getIn: Function };
  widgetFor: Function;
}> = props => (
  <BlogPostTemplate
    content={props.widgetFor("body")}
    description={props.entry.getIn(["data", "description"])}
    tags={props.entry.getIn(["data", "tags"])}
    title={props.entry.getIn(["data", "title"])}
    date={props.entry.getIn(["data", "date"])}
  />
);

export default BlogPostPreview;
