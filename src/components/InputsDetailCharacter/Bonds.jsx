import React from 'react';
import InputIdealBondsImage from "../../assets/Detalhes do Personagem/Caixas de Componentes/Caixa Ideais e Vinculos.svg";
import EditableTextSection from "./EditableTextSection.jsx";

const Bonds = () => {
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
        />
    );
};
export default Bonds;