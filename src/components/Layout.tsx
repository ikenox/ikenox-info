import * as React from "react";
import { StaticQuery, graphql } from "gatsby";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./all.sass";
import Helmet from "react-helmet";
import Bio from "./Bio";

const favicon32 = require("../../static/favicon.ico");
const icon = require("../../static/icon.png");

const TemplateWrapper: React.FC = props => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <div style={{ maxWidth: "800px", margin: "auto" }}>
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
          <link rel="icon" type="image/png" href={favicon32} sizes="32x32" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:image" content={icon} />
          <meta
            property="og:description"
            content={data.site.siteMetadata.description}
          />
        </Helmet>
        <Navbar siteTitle={data.site.siteMetadata.title} />
        <div>
          <Bio />
          {props.children}
        </div>
        <Footer />
      </div>
    )}
  />
);

export default TemplateWrapper;
