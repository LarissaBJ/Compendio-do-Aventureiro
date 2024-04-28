import React from 'react';
import ReactDOM from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; 
import { ModalBackdrop, ModalContainer, ModalContent } from './Styled';

export const MenuModal = ({ isOpen, onClose }) => {
  const { user, logout } = useAuth(); 
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    onClose(); 
    navigate('/'); 
  };

  if (!isOpen || !user) return null;

  const userId = user.userId; 

  return ReactDOM.createPortal(
    <ModalBackdrop onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalContent>
          <Link to={`/home/${userId}`}>Home</Link>
          <Link to={`/home/${userId}/characters`}>Personagens</Link>
          <Link to={`/home/${userId}/charactersheet`}>Ficha de Personagem</Link>
          <Link to={`/home/${userId}/about`}>Sobre Nós</Link>
          <button onClick={onLogout}>Logout</button>
          <button onClick={onClose}>Fechar</button>
        </ModalContent>
      </ModalContainer>
    </ModalBackdrop>,
    document.getElementById('modal-root')
  );
};
