import React from 'react';
import EditableTextSection from './EditableTextSection';
import InputAllieBoxImage from '../../assets/Detalhes do Personagem/Caixas de Componentes/Caixa Aliados e Organizações.svg';

const AlliesAndOrganizations = () => {
    return (
        <EditableTextSection
            title="ALIADOS & ORGANIZAÇÕES"
            backgroundImage={InputAllieBoxImage}
            width="990px"
            height="284.5px"
            inputWidth="90%"
            inputHeight="88%"
            inputPadding="0 15px"
            displayWidth="90%"
            displayPadding="0 30px"
            displayMargin="0"
            displayMaxHeight="80%"
        />
    );
};

export default AlliesAndOrganizations;
