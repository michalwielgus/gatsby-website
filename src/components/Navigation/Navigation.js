import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavigationWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Montserrat', sans-serif;
  position: absolute;
  top: 20px;
  left: 30px;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Logo = styled.span`
  font-weight: 900;
  font-size: 20px;
  margin-right: 10px;
`;

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
`;

const NavigatinListItem = styled.li`
  font-size: 16px;
  font-weight: 600;
  margin-left: 32px;
`;
const Navigation = () => (
  <NavigationWrapper>
    <Logo>
      <Link to="/">MATTA</Link>
    </Logo>
    <NavigationList>
      <NavigatinListItem>
        <Link to="/about">about</Link>
      </NavigatinListItem>
      <NavigatinListItem>
        <Link to="/articles">articles</Link>
      </NavigatinListItem>
      <NavigatinListItem>
        <Link to="/gallery">gallery</Link>
      </NavigatinListItem>
      <NavigatinListItem>
        <Link to="/contact">contact</Link>
      </NavigatinListItem>
    </NavigationList>
  </NavigationWrapper>
);

export default Navigation;
