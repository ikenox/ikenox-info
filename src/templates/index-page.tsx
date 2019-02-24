import * as React from "react";

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";

export const IndexPageTemplate: React.FC = props => (
  <div>
    <BlogRoll />
  </div>
);

const IndexPage: React.FC = props => {
  return (
    <Layout>
      <IndexPageTemplate />
    </Layout>
  );
};

export default IndexPage;
