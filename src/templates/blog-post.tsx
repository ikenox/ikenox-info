import * as React from "react";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link, StaticQuery, StaticQueryProps } from "gatsby";
import Layout from "../components/Layout";
import HTMLContent from "../components/HTMLContent";
import Bio from "../components/Bio";

export const BlogPostTemplate: React.FC<{
  content: any;
  description: any;
  tags: Array<any>;
  title: any;
  date: string;
  thumbnail?: any | null;
}> = props => (
  <section className="section">
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta property="og:description" content={props.description} />
      <meta property="og:type" content="article" />
      {props.thumbnail !== null ? (
        <meta property="og:image" content={props.thumbnail.publicURL} />
      ) : (
        ""
      )}
    </Helmet>
    <div>
      <h1 className="text-xxlarge">{props.title}</h1>
      {props.date}
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
  </section>
);

const BlogPost: React.FC<{
  data: { markdownRemark: any; site: any };
}> = props => {
  return (
    <Layout>
      <Helmet titleTemplate={`%s - ${props.data.site.siteMetadata.title}`} />
      <BlogPostTemplate
        content={props.data.markdownRemark.html}
        description={props.data.markdownRemark.frontmatter.description}
        tags={props.data.markdownRemark.frontmatter.tags}
        title={props.data.markdownRemark.frontmatter.title}
        date={props.data.markdownRemark.frontmatter.date}
        thumbnail={props.data.markdownRemark.frontmatter.thumbnail}
      />
      <Bio />
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        thumbnail {
          publicURL
        }
      }
    }
  }
`;
