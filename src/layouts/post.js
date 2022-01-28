import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export const query = graphql`
  query SingleArticle($id: String) {
    datoCmsArticle(id: { eq: $id }) {
      articleContent {
        ... on DatoCmsParagraph {
          paragraph
        }
        ... on DatoCmsHeading {
          heading
        }
        ... on DatoCmsImage {
          image {
            alt
            gatsbyImageData
          }
        }
      }
      featuredImage {
        alt
        gatsbyImageData
      }
      author
      title
    }
  }
`;
const PostLayout = ({ data }) => {
  return (
    <div>
      <h1>{data.datoCmsArticle.title}</h1>
      <p>{data.datoCmsArticle.author}</p>
      <GatsbyImage
        image={getImage(data.datoCmsArticle.featuredImage.gatsbyImageData)}
        alt={data.datoCmsArticle.featuredImage.alt}
      />

      {data.datoCmsArticle.articleContent.map(item => {
        const itemKey = Object.keys(item)[0];

        switch (itemKey) {
          case 'image':
            return <GatsbyImage image={getImage(item.image.gatsbyImageData)} />;
          case 'heading':
            return <h2>{item.heading}</h2>;
          default:
            return <p>{item.paragraph}</p>;
        }
      })}
    </div>
  );
};

export default PostLayout;
