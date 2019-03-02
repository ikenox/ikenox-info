const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.createPages = ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions;

  // old path
  createRedirect({
    fromPath: "/2017-10-15/first-commit",
    toPath: "/2017-10-15-first-commit",
    isPermanent: true,
    redirectInBrowser: true
  });
  createRedirect({
    fromPath: "/2017-10-15/first-commit/",
    toPath: "/2017-10-15-first-commit/",
    isPermanent: true,
    redirectInBrowser: true
  });
  createRedirect({
    fromPath: "/2017-12-25/ideavim-introduction",
    toPath: "/2017-12-25-ideavim-introduction",
    isPermanent: true,
    redirectInBrowser: true
  });
  createRedirect({
    fromPath: "/2017-12-25/ideavim-introduction/",
    toPath: "/2017-12-25-ideavim-introduction/",
    isPermanent: true,
    redirectInBrowser: true
  });
  createRedirect({
    fromPath: "/2018-05-20/perl-mousex-types-enum",
    toPath: "/2018-05-20-perl-mousex-types-enum",
    isPermanent: true,
    redirectInBrowser: true
  });
  createRedirect({
    fromPath: "/2018-05-20/perl-mousex-types-enum/",
    toPath: "/2018-05-20-perl-mousex-types-enum/",
    isPermanent: true,
    redirectInBrowser: true
  });
  for (let slug of [
    "2017-10-15-first-commit",
    "2017-12-25-ideavim-introduction",
    "2018-05-20-perl-mousex-types-enum",
    "2018-08-04-replaced-blog-with-gatsbyjs",
    "2018-09-02-inheritance-and-delegation-and-interface",
    "2019-01-10-database-is-like-global-variable",
    "2019-01-21-made-corne-keyboard",
    "2019-01-25-getting-started-ideavim"
  ]) {
    createRedirect({
      fromPath: "/" + slug,
      toPath: "/blog/" + slug,
      isPermanent: true,
      redirectInBrowser: true
    });
    createRedirect({
      fromPath: "/" + slug + "/",
      toPath: "/blog/" + slug + "/",
      isPermanent: true,
      redirectInBrowser: true
    });
  }

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(edge => {
      const id = edge.node.id;
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.tsx`
        ),
        // additional data can be passed via context
        context: {
          id
        }
      });
    });

    // Tag pages:
    let tags = [];
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    });
    // Eliminate duplicate tags
    tags = _.uniq(tags);

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`;

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag
        }
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
