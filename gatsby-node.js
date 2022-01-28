const path = require(`path`);
const slugify = require(`slugify`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/layouts/post.js`);
  const result = await graphql(
    `
      query CMSPage {
        allDatoCmsArticle {
          nodes {
            id
            title
          }
        }
      }
    `,
    { limit: 1000 }
  );

  result.data.allDatoCmsArticle.nodes.forEach(post => {
    const slugifiedTitle = slugify(post.title, { lower: true });
    console.log(post.id);
    createPage({
      path: `articles/${slugifiedTitle}`,
      component: blogPostTemplate,
      context: { id: post.id },
    });
  });
};
