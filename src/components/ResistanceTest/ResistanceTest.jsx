import React, { useContext } from 'react';
import { CharacterSheetContext } from '../../context/CharacterSheetContext.jsx';
import {
    ResistanceBox,
    ResistanceTestWrapper,
    ResistanceTitle,
    ResistanceWrapper,
    ResistanceCheckBox,
    ResistanceText, ResistanceValue, ValueBox
} from "./styled.js";
import ResistanceValueImage from "../../assets/Atributos e Combates/Inputs e Selects/Input de Pericia.svg"

const ResistanceTest = () => {
    const { characterSheet, updateResistanceTests } = useContext(CharacterSheetContext);

    // Função para lidar com as mudanças no checkbox dos testes de resistência
    const handleCheckboxChange = (index) => {
        // A obtenção do estado atual da seleção e a inversão dele
        const isSelected = !characterSheet.attributeAndCombat.resistanceTests[index].isSelected;
        // Chamada para a função updateResistanceTests do contexto com o novo estado da seleção
        updateResistanceTests(index, isSelected);
    };


    return (
        <ResistanceTestWrapper>
            <ResistanceTitle>TESTE DE RESISTÊNCIA</ResistanceTitle>

            <ResistanceWrapper>
                {characterSheet.attributeAndCombat.resistanceTests.map((test, index) => (
                    <ResistanceBox key={test.name}>
                        <ResistanceCheckBox
                            type="checkbox"
                            checked={test.isSelected}
                            onChange={() => handleCheckboxChange(index)}
                        />
                        <ValueBox>
                            <ResistanceValue>{test.totalMod}</ResistanceValue>
                            <img className="img-resistencias" src={ResistanceValueImage} alt="input de Teste de resistencias" style={{ alignSelf: 'center' }} />
                        </ValueBox>

                        <ResistanceText>{test.name}</ResistanceText>
                    </ResistanceBox>
                ))}
            </ResistanceWrapper>

        </ResistanceTestWrapper>
    );
};

export default ResistanceTest;