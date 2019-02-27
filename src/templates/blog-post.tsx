import * as React from "react";
import Helmet from "react-helmet";
import { graphql, Link, StaticQuery, StaticQueryProps } from "gatsby";
import Layout from "../components/Layout";
import MarkdownHTMLContent from "../components/MarkdownHTMLContent";
import Bio from "../components/Bio";
import PocketButton from "../components/SocialButtons/PocketButton";
import { HatenaBookmarkButton } from "../components/SocialButtons/HatenaBookmarkButton";
import { TwitterButton } from "../components/SocialButtons/TwitterButton";

export const BlogPostTemplate: React.FC<{
  content: any;
  description: any;
  tags: Array<any>;
  title: any;
  date: string;
  thumbnail?: any;
  lang?: string;
}> = props => (
  <section className="section">
    <Helmet>
      {/*<html lang={props.lang !== null ? props.lang : "ja"} />*/}
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta property="og:description" content={props.description} />
      <meta property="og:title" content={props.title} />
      <meta property="og:type" content="article" />
      {props.thumbnail !== undefined ? (
        <meta
          property="og:image"
          content={"https://ikenox.info" + props.thumbnail.publicURL}
        />
      ) : (
        ""
      )}
    </Helmet>
    <div>
      <h1 style={{ marginBottom: 0 }} className="text-xxlarge">
        {props.title}
      </h1>
      <div style={{ margin: ".7rem 0 0 0" }}>{props.date}</div>
      <div style={{ margin: "1rem 0 0 0" }}>
        <HatenaBookmarkButton />
        &nbsp;
        <TwitterButton />
        &nbsp;
        <PocketButton />
      </div>
      <div style={{ height: "1rem" }} />
      <MarkdownHTMLContent content={props.content} />
      {/*{props.tags && props.tags.length ? (*/}
      {/*<div style={{ marginTop: `4rem` }}>*/}
      {/*<h4>Tags</h4>*/}
      {/*<ul className="taglist">*/}
      {/*{props.tags.map(tag => (*/}
      {/*<li key={tag + `tag`}>*/}
      {/*<Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>*/}
      {/*</li>*/}
      {/*))}*/}
      {/*</ul>*/}
      {/*</div>*/}
      {/*) : null}*/}
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
        lang={props.data.markdownRemark.frontmatter.lang}
      />
      <div style={{ height: "1rem" }} />
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
        lang
      }
    }
  }
`;
