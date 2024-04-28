import React from 'react';
import { FooterContainer, CopyrightText } from './Styled';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
        <CopyrightText>
          &copy; {currentYear} by Larissa Bastos e Lucas Monteiro. Todos os direitos reservados.
        </CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
