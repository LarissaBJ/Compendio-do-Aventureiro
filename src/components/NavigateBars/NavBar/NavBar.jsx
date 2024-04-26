import React from 'react';
import DnDIcon from '../../../assets/NavBar/Icone D&D Simbolo.svg';
import MenuIcon from '../../../assets/NavBar/Icone Menu.svg';

import {
  NavbarContainer,
  NavbarLogo,
  NavbarTitle,
  NavbarMenuIcon,
  Logo
} from '../Styled';

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>
        <NavbarLogo src={DnDIcon} alt="D&D Logo" />
        <NavbarTitle>COMPENDIO DO AVENTUREIRO</NavbarTitle>
      </Logo>
      <NavbarMenuIcon src={MenuIcon} alt="Menu Icon" />
    </NavbarContainer>
  );
};

export default Navbar;
