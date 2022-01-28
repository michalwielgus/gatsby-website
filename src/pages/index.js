import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import Button from '../components/Button/Button.js';

const ContentWrapper = styled.div`
  width: 60%;
  height: calc(100vh - 84px);
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-right: 34px;

  h1 {
    font-size: 85px;
    line-height: 1;
    font-weight: 900;
    max-width: 500px;
    margin-bottom: 50px;
  }

  p {
    margin-bottom: 0;
    font-size: 18px;
    line-height: 1.6;
    max-width: 311px;
  }
`;

const ImageWrapper = styled(GatsbyImage)`
  position: absolute;
  inset: 0 0 auto auto;
  width: calc(40% - 34px);
  object-fit: cover;
  height: 100%;
`;

const IndexPage = ({ data }) => {
  const image = getImage(data.file);

  return (
    <>
      <ContentWrapper>
        <h1>Your new space</h1>
        <p>
          While artists work from real to the abstract, architects must work
          from the abstract to the real.
        </p>
        <Button to="/contact">estimate project</Button>
      </ContentWrapper>
      <ImageWrapper image={image} alt="Matta - Home Page Hero" />
    </>
  );
};

export const query = graphql`
  {
    file(name: { eq: "hero-image" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;

export default IndexPage;
