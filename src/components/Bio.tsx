import * as React from "react";

const profilePic = require("../img/profile.jpeg");

import Link from "gatsby-link";
import ExternalLink from "./ExternalLink";
import MediaQuery from "react-responsive";
import { FaGithub, FaRss, FaTwitter } from "react-icons/fa";

const Separator = () => <span>&nbsp; | &nbsp;</span>;

const ResponsiveSeparator = () => (
  <span>
    <MediaQuery minWidth={540}>
      <br />
    </MediaQuery>
  </span>
);

const Bio = () => (
  <div
    style={{
      marginTop: "1rem",
      marginBottom: "1rem",
      verticalAlign: "middle",
      display: "flex",
      alignItems: "center"
    }}
  >
    <Link to={`/about`} style={{ float: "left", lineHeight: 0 }}>
      <img
        src={profilePic}
        alt={`Naoto Ikeno`}
        width={64}
        height={64}
        // style={{ borderRadius: 30 }}
      />
    </Link>
    <div style={{ marginLeft: "12px" }}>
      <span className="heading">Naoto Ikeno</span>
      <MediaQuery maxWidth={780}>
        <span>
          &nbsp;
          <ExternalLink to={`https://github.com/ikenox`}>
            <FaGithub />
          </ExternalLink>
          &nbsp;
          <ExternalLink to={`https://twitter.com/ikenox_`}>
            <FaTwitter />
          </ExternalLink>
          &nbsp;
          <ExternalLink to="/rss.xml">
            <FaRss />
          </ExternalLink>
        </span>
      </MediaQuery>
      <br />
      <span>Backend Engineer, Love Software Architecture & Design</span>
      <MediaQuery minWidth={780}>
        <br />
        <span>
          <ExternalLink to={`https://github.com/ikenox`}>
            {/*<FaGithub />*/}
            GitHub
          </ExternalLink>
          <Separator />
          <ExternalLink to={`https://twitter.com/ikenox_`}>
            {/*<FaTwitter />*/}
            Twitter
          </ExternalLink>
          <Separator />
          <ExternalLink to="/rss.xml">
            RSS
            {/*<FaRss />*/}
          </ExternalLink>
        </span>
      </MediaQuery>
    </div>
  </div>
);

export default Bio;
