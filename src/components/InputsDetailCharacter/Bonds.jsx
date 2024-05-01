import React, { useContext } from 'react';
import { CharacterSheetContext } from '../../context/CharacterSheetContext';
import EditableTextSection from "./EditableTextSection";
import InputIdealBondsImage from "../../assets/Detalhes do Personagem/Caixas de Componentes/Caixa Ideais e Vinculos.svg";

const Bonds = () => {
    const { characterSheet, updateCharacterDetails } = useContext(CharacterSheetContext);
    const { bonds } = characterSheet.characterDetails;

    return (
        <EditableTextSection
            title="VÍNCULOS"
            backgroundImage={InputIdealBondsImage}
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
            text={bonds}
            onChange={(newValue) => updateCharacterDetails({ bonds: newValue })}
        />
    );
};

export default Bonds;
