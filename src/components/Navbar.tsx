import * as React from "react";
import { Link } from "gatsby";
import { FaRss } from "react-icons/fa";

const Navbar: React.FC<{ siteTitle: string }> = props => (
  <nav
    role="navigation"
    aria-label="main-navigation"
    style={{ fontFamily: "Raleway" }}
  >
    <div>
      <Link to="/" className="text-xlarge">
        <b className="heading">{props.siteTitle}</b>
      </Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/rss">
        <FaRss />
      </Link>
    </div>
  </nav>
);

export default Navbar;
