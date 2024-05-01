import React, { useContext } from 'react';
import { CharacterSheetContext } from '../../context/CharacterSheetContext';
import EditableTextSection from './EditableTextSection';
import InputAllieBoxImage from '../../assets/Detalhes do Personagem/Caixas de Componentes/Caixa Aliados e Organizações.svg';

const AlliesAndOrganizations = () => {
    const { characterSheet, updateCharacterDetails } = useContext(CharacterSheetContext);
    const { allies } = characterSheet.characterDetails;

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
            text={allies}
            onChange={(newValue) => updateCharacterDetails({ allies: newValue })}
        />
    );
};

export default AlliesAndOrganizations;
