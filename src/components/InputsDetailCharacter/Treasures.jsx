import React, { useContext } from 'react';
import { CharacterSheetContext } from '../../context/CharacterSheetContext';
import EditableTextSection from './EditableTextSection';
import InputTreasuresBoxImage from '../../assets/Detalhes do Personagem/Caixas de Componentes/Caixa  Tesouro.svg';

const Treasures = () => {
    const { characterSheet, updateCharacterDetails } = useContext(CharacterSheetContext);
    const { treasure } = characterSheet.characterDetails;

    return (
        <EditableTextSection
            title="TESOUROS"
            backgroundImage={InputTreasuresBoxImage}
            width="510.5px"
            height="484.5px"
            inputWidth="88%"
            inputHeight="70%"
            inputPadding="0 15px"
            inputMarginBottom="10px"
            displayWidth="90%"
            displayPadding="0 10px"
            displayMargin="0 0 10px 0"
            displayMaxHeight="70%"
            text={treasure}
            onChange={(newValue) => updateCharacterDetails('treasure', newValue)}
        />
    );
};

export default Treasures;
