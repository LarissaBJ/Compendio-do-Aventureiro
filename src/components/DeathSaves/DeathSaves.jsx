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

// https://www.figma.com/file/z0M5TnSHYhXhDT9cOpKff1/GERENCIADOR_DE_PERSONAGENS_D%26D?type=design&node-id=143-3985&mode=design&t=sAipGcSg36HiFULL-4