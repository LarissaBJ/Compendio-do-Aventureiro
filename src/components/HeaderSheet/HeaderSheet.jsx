import React from 'react';
import { 
  HeaderSheetContent, 
  HeaderSheetBox, 
  LevelBox, 
  NameBox, 
  IMG, 
  CharacterOrigins, 
  CharacterOriginsBox,
  SelectTitle,
  LevelTitle,
  Level,
  HeaderLevel,
  NameTitle
} from './Styled'; 
import { GlobalSelect } from '../GlobalStyled.js';
import Titulo from '../../assets/Cabeçalho da Ficha/Titulo.svg';
const HeaderSheet = () => {
  return (
    <HeaderSheetContent>

      <HeaderSheetBox>
        <LevelBox>
          <HeaderLevel>
            <LevelTitle>NIVEL</LevelTitle>
            <Level>1</Level>
          </HeaderLevel>
        </LevelBox>

        <NameBox>
            <NameTitle>KIRA FIORE</NameTitle>
        </NameBox>

        <IMG src={Titulo} alt="titulo" />
      </HeaderSheetBox>

      <CharacterOrigins>

        <CharacterOriginsBox>
          <GlobalSelect name="classe"/>
          <SelectTitle>CLASSE</SelectTitle>
        </CharacterOriginsBox>

        <CharacterOriginsBox>
            <GlobalSelect name="raca"/>  
            <SelectTitle>RAÇA</SelectTitle>
        </CharacterOriginsBox>
        
        <CharacterOriginsBox>
            <GlobalSelect name="antecedente"/> 
            <SelectTitle>ANTECENDENTE</SelectTitle> 
        </CharacterOriginsBox>
        
        <CharacterOriginsBox>
            <GlobalSelect name="alinhamento"/>  
            <SelectTitle>ALINHAMENTO</SelectTitle>
        </CharacterOriginsBox>
      
      </CharacterOrigins>
    </HeaderSheetContent>
  );
};

export default HeaderSheet;