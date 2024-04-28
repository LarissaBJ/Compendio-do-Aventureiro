import React, { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { NavbarContainer, NavbarLogo, NavbarTitle, NavbarMenuIcon, Logo, BoxNavDesLogado, LinkDeslogado, ButtonDeslogado } from '../Styled';
import DnDIcon from '../../../assets/NavBar/Icone D&D Simbolo.svg';
import MenuIcon from '../../../assets/NavBar/Icone Menu.svg';
import { MenuModal } from "../../Modais/MenuModal";

const Navbar = () => {
  const { isAuth } = useAuth(); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <NavbarContainer>
      <Logo>
        <NavbarLogo src={DnDIcon} alt="Dungeons & Dragons Logo" />
        <NavbarTitle>COMPENDIO DO AVENTUREIRO</NavbarTitle>
      </Logo>
      {isAuth() ? (
        <>
          <NavbarMenuIcon src={MenuIcon} alt="Menu Icon" onClick={toggleModal} />
          <MenuModal isOpen={isModalOpen} onClose={closeModal} />
        </>
      ) : (
        <BoxNavDesLogado>
          <LinkDeslogado to="/login"><ButtonDeslogado>ENTRAR</ButtonDeslogado></LinkDeslogado>
          <LinkDeslogado to="/register"><ButtonDeslogado>CADASTRAR</ButtonDeslogado></LinkDeslogado>
        </BoxNavDesLogado>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
