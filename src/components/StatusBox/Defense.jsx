import React, { useContext } from 'react';
import { CharacterSheetContext } from '../../context/CharacterSheetContext';
import { StatusWrapper, StatusTitle, StatusBoxWrapper, StatusBox, StatusSubTitle, StatusValue, StatusShieldBox, StatusShieldTitle } from './styled';
import DefenserShildBoxValueImage from '../../assets/Atributos e Combates/Inputs e Selects/Input de Defesa.svg';

const Defense = () => {
    const { characterSheet } = useContext(CharacterSheetContext);
    const { defense } = characterSheet.attributeAndCombat;
    const { iniciativa, ca, deslocamento } = defense;

    return (
      <StatusWrapper>
        <StatusTitle>STATUS DE BATALHA</StatusTitle>
        <StatusBoxWrapper>
          <StatusBox>
            <StatusSubTitle>Iniciativa</StatusSubTitle>
            <StatusValue>{iniciativa}</StatusValue>
          </StatusBox>
          <StatusShieldBox $image={DefenserShildBoxValueImage} width="115px" height="131px">
            <StatusShieldTitle>CA</StatusShieldTitle>
            <StatusValue>{ca}</StatusValue>
          </StatusShieldBox>
          <StatusBox>
            <StatusSubTitle>Deslocamento</StatusSubTitle>
            <StatusValue>{deslocamento}</StatusValue>
          </StatusBox>
        </StatusBoxWrapper>
      </StatusWrapper>
    );
};
  
  export default Defense;
  