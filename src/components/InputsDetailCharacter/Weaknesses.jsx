import React, { useContext } from 'react';
import { CharacterSheetContext } from '../../context/CharacterSheetContext';
import EditableTextSection from './EditableTextSection';
import InputWeaknessesBoxImage from '../../assets/Detalhes do Personagem/Caixas de Componentes/Caixa  Fraquezas.svg';

const Weaknesses = () => {
    const { characterSheet, updateCharacterDetails } = useContext(CharacterSheetContext);
    const { flaws } = characterSheet.characterDetails;

    return (
        <EditableTextSection
            title="FRAQUEZAS"
            backgroundImage={InputWeaknessesBoxImage}
            width="514px"
            height="152px"
            inputWidth="88%"
            inputHeight="70%"
            inputPadding="0 15px"
            inputMarginBottom="10px"
            displayWidth="90%"
            displayPadding="0 10px"
            displayMargin="0 0 10px 0"
            displayMaxHeight="70%"
            text={flaws}
            onChange={(newValue) => updateCharacterDetails({ flaws: newValue })}
        />
    );
};

export default Weaknesses;
