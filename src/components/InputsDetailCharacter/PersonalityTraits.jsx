import React from 'react';
import EditableTextSection from './EditableTextSection';
import InputPersonalityBoxImage from '../../assets/Detalhes do Personagem/Caixas de Componentes/Caixa  Traços de Personalidade.svg';

const PersonalityTraits = () => {
    return (
        <EditableTextSection
            title="TRAÇOS DE PERSONALIDADE"
            backgroundImage={InputPersonalityBoxImage}
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

export default PersonalityTraits;
