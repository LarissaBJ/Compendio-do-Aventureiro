import React from 'react';
import { ThinMenu, MenuItem, MenuLink } from '../Styled'; // Importe o Styled Components

const MenuNavBar = () => {
  return (
    <ThinMenu>
      <MenuItem><MenuLink to="/charactersheet/attributecombat">Atributos & Combate</MenuLink></MenuItem>
      <MenuItem><MenuLink to="/charactersheet/characterdetail">Detalhes do Personagem</MenuLink></MenuItem>
      <MenuItem><MenuLink to="/charactersheet/magicconjuration">Magias & Conjuração</MenuLink></MenuItem>
    </ThinMenu>
  );
};

export default MenuNavBar;

