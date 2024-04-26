import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content:  space-between;
  height:80px;
  background-color: #8b0000;
  padding: 10px 40px;
  color: white;
  border-bottom: solid 4px #FFB8BA;
`;

export const NavbarLogo = styled.img`
  height: 61.27px; 
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;
export const NavbarTitle = styled.h1`
  font-family:'Adventure', sans-serif;
  font-size: 35px; 
  color: #2A0606;
  margin-left: 38px;
  padding: 0;
`;


export const NavbarMenuIcon = styled.img`
  height: 30px; 
  cursor: pointer; 
`;

// MENU DE NAVEGAÇÃO 

export const ThinMenu = styled.div`
  background-color: #890004;
  height: 4.6vh;
  box-sizing: border-box;
  width: 100%; 
  display: flex;
  justify-content: left;
  align-items: center;
  border-bottom: solid 4px #FFB8BA;
`;

export const MenuItem = styled.button`
  padding: 0 1rem; 
  color: #FFB2B2;
  height: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  white-space: nowrap; 

  &:hover {
    background-color: #610508;
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: inherit; 
  font-family:'Inter', sans-serif;
  font-size: 15px;
  &:hover {
    text-decoration: underline;
  }
`;