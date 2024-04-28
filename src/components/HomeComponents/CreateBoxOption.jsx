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

import ImageCreateCharacter from '../../assets/Imagens/Imagem Criar Personagem.jpg'

const CreateBoxOption = () => {
  return (
    <BoxContainer>
      <BoxContent>
        <Title>CRIE SEU PERSONAGEM</Title>
        <Description>Aqui os jogadores encontrarão todas as ferramentas necessárias para criar e personalizar seus próprios personagens. Isso incluirá subseções para escolher raça, classe, habilidades e histórias de fundo.</Description>
        <BoxButton>
            <CreateButton>CRIAR</CreateButton>
        </BoxButton>
      </BoxContent>
      <ImagemContenier><Image src={ImageCreateCharacter} alt="Imagem de Dungeons and dragon" /></ImagemContenier>
    </BoxContainer>
  );
};

export default CreateBoxOption;
