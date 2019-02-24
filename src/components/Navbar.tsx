import * as React from "react";
import { Link } from "gatsby";
import { FaRss } from "react-icons/fa";
import ExternalLink from "./ExternalLink";

const Navbar: React.FC<{ siteTitle: string }> = props => (
  <nav role="navigation">
    <div>
      <Link to="/" className="text-xlarge">
        <b className="heading">{props.siteTitle}</b>
      </Link>
      &nbsp;
      {/*<Link to="/about">About</Link>*/}
      {/*&nbsp;*/}
      {/*<Link to="/blog">Blog</Link>*/}
      {/*&nbsp;*/}
      <ExternalLink to="/rss.xml">
        <FaRss />
      </ExternalLink>
    </div>
  </nav>
);

export default Navbar;
