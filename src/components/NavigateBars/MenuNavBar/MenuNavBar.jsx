import React from 'react';
import { ThinMenu, MenuItem, MenuLink } from '../Styled'; 

const MenuNavBar = ({ userId, characterId }) => {
  return (
    <ThinMenu>
      <MenuItem>
        <MenuLink to={`/home/${userId}/charactersheet/${characterId}/attributecombat`}>Atributos & Combate</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to={`/home/${userId}/charactersheet/${characterId}/characterdetail`}>Detalhes do Personagem</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to={`/home/${userId}/charactersheet/${characterId}/magicconjuration`}>Magias & Conjuração</MenuLink>
      </MenuItem>
    </ThinMenu>
  );
};

export default MenuNavBar;
