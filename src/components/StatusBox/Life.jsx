import React, { useContext, useState } from 'react';
import { CharacterSheetContext } from '../../context/CharacterSheetContext';
import { StatusWrapper, StatusTitle, StatusBoxWrapper, StatusBox, StatusSubTitle, StatusValue, StatusShieldBox, StatusShieldTitle, StatusInput } from './styled';
import LifeShieldBoxValueImage from '../../assets/Atributos e Combates/Inputs e Selects/Input de Vida.svg';

const Life = () => {
    const { characterSheet, updateTemporaryHitPoints } = useContext(CharacterSheetContext);
    const { hitPoints, temporaryHitPoints } = characterSheet.attributeAndCombat;

    const [tempHitPoints, setTempHitPoints] = useState(temporaryHitPoints || 0);

    const handleTempHitPointsChange = (e) => {
        const newTempHitPoints = parseInt(e.target.value, 10) || 0;
        setTempHitPoints(newTempHitPoints);
        updateTemporaryHitPoints(newTempHitPoints);  // Assuming you have such a function to update context
    };

    // Ensure numerical values for display
    const maximaDisplay = isNaN(hitPoints) ? 'Erro' : hitPoints;
    const atualDisplay = maximaDisplay + tempHitPoints;

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
            <StatusInput 
              type="number"
              value={tempHitPoints}
              onChange={handleTempHitPointsChange}
            />
          </StatusBox>
        </StatusBoxWrapper>
      </StatusWrapper>
    );
};

export default Life;