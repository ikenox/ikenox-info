import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import HTMLContent from "../components/HTMLContent";

export const AboutPageTemplate: React.FC<{
  title: string;
  content: string;
}> = props => (
  <section>
    <h1 className="text-xxlarge">{props.title}</h1>
    <HTMLContent content={props.content} />
  </section>
);

const AboutPage: React.FC<{ data: { markdownRemark: any } }> = props => (
  <Layout>
    <AboutPageTemplate
      title={props.data.markdownRemark.frontmatter.title}
      content={props.data.markdownRemark.html}
    />
  </Layout>
);

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
