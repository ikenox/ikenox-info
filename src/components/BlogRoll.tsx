import * as React from "react";
import { Link, graphql, StaticQuery } from "gatsby";

const BlogRoll: React.FC<{
  posts: Array<any>;
}> = props => {
  return (
    <div className="columns is-multiline">
      {props.posts &&
        props.posts
          .map(post => post.node)
          .map(post => (
            <div
              key={post.id}
              style={{ marginTop: "2rem", marginBottom: "2rem" }}
            >
              <hr />
              <article>
                <h2>
                  <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                </h2>
                <span>{post.frontmatter.date}</span>
                <p>{post.excerpt}</p>
              </article>
            </div>
          ))}
    </div>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={data => <BlogRoll posts={data.allMarkdownRemark.edges} />}
  />
);
