import * as React from "react";
import { Link } from "gatsby";

const Navbar: React.FC<{ siteTitle: string }> = props => (
  <nav role="navigation">
    <Link to="/" className="text-xlarge">
      <b className="heading">{props.siteTitle}</b>
    </Link>
    &nbsp;
    {/*<Link to="/about">About</Link>*/}
    {/*&nbsp;*/}
    {/*<Link to="/blog">Blog</Link>*/}
    {/*&nbsp;*/}
    {/*<span className="text-large">*/}
    {/*<ExternalLink to="/rss.xml">*/}
    {/*<FaRss />*/}
    {/*</ExternalLink>*/}
    {/*</span>*/}
  </nav>
);

export default Navbar;
