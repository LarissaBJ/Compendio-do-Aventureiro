import React from 'react';
import {
    DeathSavesButtonsWrapper,
    DeathSavesCheckBox,
    DeathSavesElementsWrapper,
    DeathSavesText,
    DeathSavesTitle,
    DeathSavesWrapper
} from "./styled.js";
import ResistanceValueImage from "../../assets/Atributos e Combates/Inputs e Selects/Select de Salvaguarda.svg";

const DeathSaves = () => {
    return (
        <DeathSavesWrapper>
            <div className="quase-a-porra-toda">
                <DeathSavesTitle>TESTE CONTRA A MORTE</DeathSavesTitle>

                <DeathSavesElementsWrapper>
                    <DeathSavesText>SUCESSOS</DeathSavesText>

                    <DeathSavesButtonsWrapper>
                        <DeathSavesCheckBox/>
                        <DeathSavesCheckBox/>
                        <DeathSavesCheckBox/>

                    </DeathSavesButtonsWrapper>

                </DeathSavesElementsWrapper>

                <DeathSavesElementsWrapper>
                    <DeathSavesText>FALHAS</DeathSavesText>

                    <DeathSavesButtonsWrapper>
                        <DeathSavesCheckBox/>
                        <DeathSavesCheckBox/>
                        <DeathSavesCheckBox/>
                    </DeathSavesButtonsWrapper>

                </DeathSavesElementsWrapper>
            </div>

        </DeathSavesWrapper>
    );
};

export default DeathSaves;

