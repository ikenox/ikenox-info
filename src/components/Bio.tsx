import * as React from "react";

const profilePic = require("../../static/img/profile.jpeg");

import Link from "gatsby-link";
import { FaGithub, FaRss, FaTwitter } from "react-icons/fa";
import ExternalLink from "./ExternalLink";

const Bio = () => (
  <div
    style={{
      marginTop: ".5rem",
      marginBottom: ".5rem",
      verticalAlign: "middle",
      display: "flex",
      alignItems: "center"
    }}
  >
    <Link to={`/about`} style={{ float: "left", lineHeight: 0 }}>
      <img
        src={profilePic}
        alt={`Naoto Ikeno`}
        width={60}
        height={60}
        style={{ borderRadius: 30 }}
      />
    </Link>
    <div style={{ marginLeft: "12px" }}>
      <span className="heading">Naoto Ikeno</span>
      &nbsp;
      <span>
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
      <br />
      <span>
        Backend Engineer, Software Architecture & Design, Perl, Rust, Golang,
        GCP
      </span>
    </div>
  </div>
);

export default Bio;
