import * as React from 'react';
import { graphql } from 'gatsby';

import PageHeader from '../components/PageHeader/PageHeader';
import ArticlesPreview from '../components/ArticlePreview/ArticlePreview';

const ArticlesPage = ({ data }) => (
  <>
    <PageHeader />
    <ArticlesPreview posts={data.allDatoCmsArticle.nodes} />
  </>
);

export const query = graphql`
  query ArticlePreviews {
    allDatoCmsArticle {
      nodes {
        id
        featuredImage {
          alt
          gatsbyImageData
        }
        author
        title
      }
    }
  }
`;
export default ArticlesPage;
