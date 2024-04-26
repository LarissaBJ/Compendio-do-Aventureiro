import React from 'react';
import {ProficiencyElementsWrapper, ProficiencyText, ProficiencyValue, ProficiencyWrapper} from "./styled.js";

const ProficiencyBonus = () => {
    return (
        <ProficiencyWrapper>

            <ProficiencyElementsWrapper>

                <ProficiencyValue>+{2}</ProficiencyValue>

                <ProficiencyText>BÔNUS DE PROFICIÊNCIA</ProficiencyText>
            </ProficiencyElementsWrapper>

        </ProficiencyWrapper>
    );
};

export default ProficiencyBonus;

