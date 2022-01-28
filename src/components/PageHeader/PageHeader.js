import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  margin: auto;
  margin-bottom: 60px;
  max-width: 1280px;

  h1 {
    font-size: 52px;
    line-height: 1;
    font-weight: bold;
    margin: 20px 0 40px 0;
  }

  p {
    font-size: 18px;
    line-height: 1.6;
    max-width: 330px;
  }
`;

const PageHeader = () => {
  return (
    <HeaderWrapper>
      <h1>articles</h1>
      <p>
        While artists work from real to the abstract, architects must work from
        the abstract to the real.
      </p>
    </HeaderWrapper>
  );
};

export default PageHeader;
