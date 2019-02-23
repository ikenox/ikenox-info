import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import HTMLContent from "../components/HTMLContent";

export const AboutPageTemplate: React.FC<{
  title: string;
  content: string;
}> = props => (
  <section className="section section--gradient">
    <div className="container">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="section">
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
              {props.title}
            </h2>
            <HTMLContent content={props.content} />
          </div>
        </div>
      </div>
    </div>
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
