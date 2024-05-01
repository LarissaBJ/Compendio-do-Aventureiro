import React, { useContext } from 'react';
import { CharacterSheetContext } from '../../context/CharacterSheetContext';
import { StatusWrapper, StatusTitle, StatusBoxWrapper, StatusBox, StatusSubTitle, StatusValue, StatusShieldBox, StatusShieldTitle } from './styled';
import LifeShieldBoxValueImage from '../../assets/Atributos e Combates/Inputs e Selects/Input de Vida.svg';

const Life = () => {
    const { characterSheet } = useContext(CharacterSheetContext);
    const { hitPoints, temporaryHitPoints } = characterSheet.attributeAndCombat;

    // Convertendo valores para exibição e evitando NaN
    const maximaDisplay = isNaN(hitPoints) ? 'Erro' : hitPoints;
    const temporariaDisplay = isNaN(temporaryHitPoints) ? 'Erro' : temporaryHitPoints;
    const atualDisplay = maximaDisplay + (temporariaDisplay || 0);  // Soma a vida temporária à máxima, garantindo que não é NaN.

    return (
      <StatusWrapper>
        <StatusTitle>PONTUAÇÃO DE VIDA</StatusTitle>
        <StatusBoxWrapper>
          <StatusBox>
            <StatusSubTitle>Atual</StatusSubTitle>
            <StatusValue>{atualDisplay}</StatusValue>
          </StatusBox>
          <StatusShieldBox $image={LifeShieldBoxValueImage} width="112px" height="133px">
            <StatusShieldTitle>MÁXIMA</StatusShieldTitle>
            <StatusValue>{maximaDisplay}</StatusValue>
          </StatusShieldBox>
          <StatusBox>
            <StatusSubTitle>Temporária</StatusSubTitle>
            <StatusValue>{temporariaDisplay}</StatusValue>
          </StatusBox>
        </StatusBoxWrapper>
      </StatusWrapper>
    );
};

export default Life;
