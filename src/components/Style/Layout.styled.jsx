import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 60px;
  background: content-box radial-gradient(green, skyblue);
  box-shadow: 0px 1px 10px 2px #414141;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 180px;
  justify-content: center;
  text-align: center;
`;

export const PageLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  font-size: 24px;
  padding: 16px;
  transition: color 600ms ease;
  text-align: center;

  &:hover,
  &:focus,
  &:active {
    color: yellow;
  }
`;
