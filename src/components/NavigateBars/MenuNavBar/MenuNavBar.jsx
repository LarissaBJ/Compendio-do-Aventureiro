import React from 'react';
import { ThinMenu, MenuItem, MenuLink } from '../Styled'; 

const MenuNavBar = ({ userId }) => {
  return (
    <ThinMenu>
      <MenuItem>
        <MenuLink to={`/home/${userId}/charactersheet/attributecombat`}>Atributos & Combate</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to={`/home/${userId}/charactersheet/characterdetail`}>Detalhes do Personagem</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to={`/home/${userId}/charactersheet/magicconjuration`}>Magias & Conjuração</MenuLink>
      </MenuItem>
    </ThinMenu>
  );
};

export default MenuNavBar;

