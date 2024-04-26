import React from 'react';
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
    const resistances = [
        {name: "Força"},
        {name: "Destreza"},
        {name: "Constituição"},
        {name: "Inteligência"},
        {name: "Sabedoria"},
        {name: "Carisma"}];

    return (
        <ResistanceTestWrapper>
            <ResistanceTitle>TESTE DE RESISTÊNCIA</ResistanceTitle>

            <ResistanceWrapper>
                {resistances.map(resistance => (
                    <ResistanceBox key={resistance.name}>
                        <ResistanceCheckBox/>
                        <ValueBox>
                            <ResistanceValue>{0}</ResistanceValue>
                            <img className="img-resistencias" src={ResistanceValueImage} alt="input de Teste de resistencias" style={{ alignSelf: 'center' }} />
                        </ValueBox>

                        <ResistanceText>{resistance.name}</ResistanceText>
                    </ResistanceBox>
                ))}
            </ResistanceWrapper>

        </ResistanceTestWrapper>
    );
};

export default ResistanceTest;