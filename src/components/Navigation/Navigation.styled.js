import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
font-size: 22px;

 &.active {
    color: ${p => p.theme.colors.greens};
  }`;

export const Nav = styled.nav`
display: flex;
  gap: 20px;
  `;