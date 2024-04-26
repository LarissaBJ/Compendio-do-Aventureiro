import React from 'react';
import { 
  HeaderSheetContent, 
  HeaderSheetBox, 
  LevelBox, 
  NameBox, 
  IMG, 
  CharacterOrigins, 
  CharacterOriginsBox, 
  CharacterOriginsSelect,
  SelectTitle,
  LevelTitle,
  Level,
  HeaderLevel,
  NameTitle
} from './Styled'; 
import Titulo from '../../assets/Cabeçalho da Ficha/Titulo.svg'
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
          <CharacterOriginsSelect name="classe"/>
          <SelectTitle>CLASSE</SelectTitle>
        </CharacterOriginsBox>

        <CharacterOriginsBox>
            <CharacterOriginsSelect name="raca"/>  
            <SelectTitle>RAÇA</SelectTitle>
        </CharacterOriginsBox>
        
        <CharacterOriginsBox>
            <CharacterOriginsSelect name="antecedente"/> 
            <SelectTitle>ANTECENDENTE</SelectTitle> 
        </CharacterOriginsBox>
        
        <CharacterOriginsBox>
            <CharacterOriginsSelect name="alinhamento"/>  
            <SelectTitle>ALINHAMENTO</SelectTitle>
        </CharacterOriginsBox>
      
      </CharacterOrigins>
    </HeaderSheetContent>
  );
};

export default HeaderSheet;