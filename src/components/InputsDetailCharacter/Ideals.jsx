import React, { useContext } from 'react';
import { CharacterSheetContext } from '../../context/CharacterSheetContext';
import EditableTextSection from './EditableTextSection';
import InputIdealBoxImage from '../../assets/Detalhes do Personagem/Caixas de Componentes/Caixa Ideais e Vinculos.svg';

const Ideals = () => {
    const { characterSheet, updateCharacterDetails } = useContext(CharacterSheetContext);
    const { ideals } = characterSheet.characterDetails;

    return (
        <EditableTextSection
            title="IDEAIS"
            backgroundImage={InputIdealBoxImage}
            width="514px"
            height="129px"
            inputWidth="88%"
            inputHeight="70%"
            inputPadding="0 15px"
            inputMarginBottom="10px"
            displayWidth="90%"
            displayPadding="0 10px"
            displayMargin="0 0 10px 0"
            displayMaxHeight="70%"
            text={ideals}
            onChange={(newValue) => updateCharacterDetails('ideals', newValue)}
        />
    );
};

export default Ideals;
