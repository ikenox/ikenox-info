import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Helmet from "react-helmet";
import { renderAst } from "../util";
import { ReactNode } from "react";
import Content from "../components/Content";

export const AboutPageTemplate: React.FC<{
  content: ReactNode | string;
}> = props => (
  <section>
    <h1 className="text-xxlarge">About</h1>
    <Content>{props.content}</Content>
  </section>
);

const AboutPage: React.FC<{ data: { markdownRemark: any } }> = props => (
  <Layout>
    <Helmet>
      <title>About</title>
      <meta name="description" content="Naoto Ikeno's Profile" />
      <meta property="og:description" content="Naoto Ikeno's Profile" />
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
