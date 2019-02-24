import * as React from "react";

const profilePic = require("../../static/img/profile.jpeg");

import Link from "gatsby-link";
import { FaGithub, FaTwitter } from "react-icons/fa";
import ExternalLink from "./ExternalLink";

const Bio = () => (
  <div
    style={{
      marginTop: "1.5rem",
      marginBottom: "1.5rem",
      verticalAlign: "middle",
      display: "flex",
      alignItems: "center"
    }}
  >
    <Link to={`/about`} style={{ float: "left", lineHeight: 0 }}>
      <img
        src={profilePic}
        alt={`Naoto Ikeno`}
        width={80}
        height={80}
        style={{ borderRadius: 40 }}
      />
    </Link>
    <div style={{ marginLeft: "12px" }}>
      <span className="text-large heading">Naoto Ikeno</span>
      &nbsp;
      <span className="text-large">
        <ExternalLink to={`https://github.com/ikenox`}>
          <FaGithub />
        </ExternalLink>
        &nbsp;
        <ExternalLink to={`https://twitter.com/ikenox_`}>
          <FaTwitter />
        </ExternalLink>
      </span>
      <br />
      Backend Engineer, Software Architecture & Design, Perl, Rust, Golang, GCP
    </div>
  </div>
);

export default Bio;
