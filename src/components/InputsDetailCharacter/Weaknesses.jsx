import React from 'react';
import InputWeaknessesBoxImage from "../../assets/Detalhes do Personagem/Caixas de Componentes/Caixa  Fraquezas.svg";
import EditableTextSection from "./EditableTextSection.jsx";

const Weaknesses = () => {
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
        />
    );
};

export default Weaknesses;