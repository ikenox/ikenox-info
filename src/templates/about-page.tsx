import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import MarkdownHTMLContent from "../components/MarkdownHTMLContent";
import Helmet from "react-helmet";
import { renderAst } from "../util";

export const AboutPageTemplate: React.FC<{
  content: string;
}> = props => (
  <section>
    <h1 className="text-xxlarge">About</h1>
    <MarkdownHTMLContent content={props.content} />
  </section>
);

const AboutPage: React.FC<{ data: { markdownRemark: any } }> = props => (
  <Layout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <AboutPageTemplate content={renderAst(props.data.markdownRemark.htmlAst)} />
  </Layout>
);

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      htmlAst
      frontmatter {
        title
      }
    }
  }
`;
