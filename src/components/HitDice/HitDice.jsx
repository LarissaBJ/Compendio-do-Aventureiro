import React from 'react';
import {DeathSavesElementsWrapper, DeathSavesText, DeathSavesTitle, HitDiceWrapper} from "./styled.js";

const HitDice = () => {
    return (
        <HitDiceWrapper>
            <DeathSavesElementsWrapper>
                <DeathSavesTitle>DADOS DE VIDA</DeathSavesTitle>

                <DeathSavesText>{1}</DeathSavesText>

                <DeathSavesText>D{10}</DeathSavesText>
            </DeathSavesElementsWrapper>

        </HitDiceWrapper>
    );
};

//TODO
export default HitDice;