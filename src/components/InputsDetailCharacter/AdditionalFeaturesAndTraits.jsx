import React from 'react';
import EditableTextSection from './EditableTextSection';
import InputFeaturesBoxImage from '../../assets/Detalhes do Personagem/Caixas de Componentes/Caixa  Caracteristicas e Traços Adicionais.svg';

const AdditionalFeaturesAndTraits = () => {
    return (
        <EditableTextSection
            title="CARACTERÍSTICAS & TRAÇOS ADICIONAIS"
            backgroundImage={InputFeaturesBoxImage}
            width="450.5px"
            height="484.5px"
            inputWidth="90%"
            inputHeight="87%"
            inputPadding="0 15px"
            inputMarginBottom="20px"
            displayWidth="90%"
            displayPadding="0 10px"
            displayMargin="0"
            displayMaxHeight="87%"
        />
    );
};

export default AdditionalFeaturesAndTraits;
