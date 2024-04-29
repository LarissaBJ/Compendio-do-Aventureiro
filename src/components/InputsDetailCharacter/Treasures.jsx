import React from 'react';
import InputTreasuresBoxImage from "../../assets/Detalhes do Personagem/Caixas de Componentes/Caixa  Tesouro.svg";
import EditableTextSection from "./EditableTextSection.jsx";

const Treasures = () => {
    return (
            <EditableTextSection
                title="Tesouros"
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
            />
    );
};

export default Treasures;