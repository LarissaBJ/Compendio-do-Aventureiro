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
  height: 43px;
  box-sizing: border-box;
  width: 100%; 
  display: flex;
  justify-content: left;
  align-items: center;
  border-bottom: solid 4px #FFB8BA;
`;

export const MenuItem = styled.button`
margin-left: 43px;
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
    text-decoration: none;
  }
`;

// CONFIGURAÇÃO ESTILO NAV BAR DESLOGADO

 

export const LinkDeslogado = styled(Link)`
  text-decoration: none;
  color: inherit; 
  font-size: 15px;
`;

export const ButtonDeslogado = styled.button`
  font-family:'Amethysta';
  padding: 10px; 
  color: #FFB2B2;
  height: 100%;
  background-color: #4A0204;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  white-space: nowrap; 

  &:hover {
    background-color: #610508;
    color: #1A0101;
  }
`;
export const BoxNavDesLogado = styled.div`
  height: 4.6vh;
  width: 192px; 
  display: flex;
  justify-content:space-between;
  align-items: center;
`;