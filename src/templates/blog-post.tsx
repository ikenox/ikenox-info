import * as React from "react";
import * as PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import HTMLContent from "../components/HTMLContent";

export const BlogPostTemplate: React.FC<{
  content: any;
  description: any;
  tags: Array<any>;
  title: any;
  helmet: any;
}> = props => (
  <section className="section">
    {props.helmet || ""}
    <div className="container content">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
            {props.title}
          </h1>
          <p>{props.description}</p>
          <HTMLContent content={props.content} />
          {props.tags && props.tags.length ? (
            <div style={{ marginTop: `4rem` }}>
              <h4>Tags</h4>
              <ul className="taglist">
                {props.tags.map(tag => (
                  <li key={tag + `tag`}>
                    <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  </section>
);

const BlogPost: React.FC<{
  data: { markdownRemark: any };
}> = props => {
  return (
    <Layout>
      <BlogPostTemplate
        content={props.data.markdownRemark.html}
        description={props.data.markdownRemark.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${props.data.markdownRemark.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${props.data.markdownRemark.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={props.data.markdownRemark.frontmatter.tags}
        title={props.data.markdownRemark.frontmatter.title}
      />
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
