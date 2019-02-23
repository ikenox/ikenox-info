import * as React from "react";
import { Link, graphql, StaticQuery } from "gatsby";

const BlogRoll: React.FC<{
  posts: Array<any>;
}> = props => {
  return (
    <div className="columns is-multiline">
      {console.log(props.posts)}
      {props.posts &&
        props.posts
          .map(post => post.node)
          .map(post => (
            <div className="is-parent column is-6" key={post.id}>
              <article className="tile is-child box notification">
                <p>
                  <Link
                    className="title has-text-primary is-size-4"
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <span className="subtitle is-size-5 is-block">
                    {post.frontmatter.date}
                  </span>
                </p>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
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
