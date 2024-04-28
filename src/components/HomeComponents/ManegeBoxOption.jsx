import React from 'react';
import {
    BoxContainer,
    BoxContent,
    Title,
    Description,
    CreateButton,
    ImagemContenier,
    Image,
    BoxButton
} from './Styled';
import ImageManageCharacter from '../../assets/Imagens/Imagem Gerenciar Personagem.jpg'

const ManegeBoxOption = () => {
  return (
    <BoxContainer>
      <ImagemContenier><Image src={ImageManageCharacter} alt="Imagem de Dungeons and dragon" /></ImagemContenier>
      <BoxContent>
        <Title>GERENCIE SUA FICHA</Title>
        <Description>Os jogadores poderão visualizar e gerenciar suas fichas de personagem. Ela incluirá seções para atributos, habilidades, inventário, progressão de nível e qualquer outra informação relevante sobre o personagem.</Description>
        <BoxButton>
            <CreateButton>EDITAR</CreateButton>
        </BoxButton>
      </BoxContent>
    </BoxContainer>
  );
};

export default ManegeBoxOption;
