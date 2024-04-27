import React from 'react';
import EditableTextSection from './EditableTextSection';
import InputHistoryBoxImage from '../../assets/Detalhes do Personagem/Caixas de Componentes/Caixa História.svg';

const History = () => {
    return (
        <EditableTextSection
            title="HISTÓRIA"
            backgroundImage={InputHistoryBoxImage}
            width="991.5px"
            height="491.5px"
            inputWidth="90%"
            inputHeight="87%"
            inputPadding="0 15px"
            inputMarginBottom="20px"
            displayWidth="90%"
            displayPadding="0 30px"
            displayMargin="0"
            displayMaxHeight="87%"
        />
    );
};

export default History;
