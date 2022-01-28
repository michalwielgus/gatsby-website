import styled from 'styled-components';
import { Link } from 'gatsby';

const Button = styled(Link)`
  background: #000000;
  color: #ffffff;
  padding: 10px 18px;
  font-size: 14px;
  line-height: 1;
  font-weight: bold;
  text-decoration: none;
  border: solid 3px #000000;
  margin-top: 36px;
  display: inline-block;
  transition: 0.2s all ease;

  &:hover {
    background: #ffffff;
    color: #000000;
  }
`;

export default Button;
