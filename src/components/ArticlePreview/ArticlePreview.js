import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import slugify from 'slugify';

const PreviewWrapper = styled.div`
  display: grid;
  gap: 22px;
  max-width: 1280px;
  margin: auto;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 408px), 1fr));
`;

const PreviewItem = styled(Link)`
  display: block;
  min-height: 252px;
  position: relative;
`;

const PreviewImage = styled(GatsbyImage)`
  object-fit: cover;
  width: 100%;
  height: 252px;
`;

const PreviewText = styled.div`
  position: absolute;
  width: 75%;
  background: #000000;
  color: #ffffff;
  padding: 11px 25px;
  bottom: 20px;

  h2 {
    font-size: 19px;
    font-weight: bold;
    line-height: 1;
    margin: 0;
  }

  p {
    font-size: 13px;
    line-height: 1;
    margin: 3px 0 0 0;
  }
`;

const ArticlesPreview = ({ posts }) => {
  return (
    <PreviewWrapper>
      {posts.map(post => (
        <PreviewItem
          to={`/articles/${slugify(post.title, { lower: true })}`}
          key={post.id}
        >
          <PreviewImage
            image={getImage(post.featuredImage.gatsbyImageData)}
            alt={post.featuredImage.alt}
          />
          <PreviewText>
            <h2>{post.title}</h2>
            <p>{post.author}</p>
          </PreviewText>
        </PreviewItem>
      ))}
    </PreviewWrapper>
  );
};

export default ArticlesPreview;
