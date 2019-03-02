import * as React from "react";

const profilePic = require("../img/profile.jpeg");

import Link from "gatsby-link";
import ExternalLink from "./ExternalLink";

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
      <br />
      <span>
        Backend Engineer, Software Architecture & Design, Perl, Rust, Golang,
        GCP
      </span>
      <br />
      <span>
        <ExternalLink to={`https://github.com/ikenox`}>
          {/*<FaGithub />*/}
          GitHub
        </ExternalLink>
        &nbsp; | &nbsp;
        <ExternalLink to={`https://twitter.com/ikenox_`}>
          {/*<FaTwitter />*/}
          Twitter
        </ExternalLink>
        &nbsp; | &nbsp;
        <ExternalLink to="/rss.xml">
          RSS
          {/*<FaRss />*/}
        </ExternalLink>
      </span>
    </div>
  </div>
);

export default Bio;
