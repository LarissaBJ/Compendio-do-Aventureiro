import React from 'react';
import {
    HitDiceElementsWrapper, HitDiceInput, HitDiceInputTotal,
    HitDiceText,
    HitDiceTitle, HitDiceTotalWrapper,
    HitDiceWrapper
} from "./styled.js";

const HitDice = () => {
    return (
        <HitDiceWrapper>
            <HitDiceElementsWrapper>
                <HitDiceTitle>DADOS DE VIDA</HitDiceTitle>
                <HitDiceTotalWrapper>
                    <HitDiceText>Total:</HitDiceText>
                    <HitDiceInputTotal
                        defaultValue={0}
                        min={0}
                        type="number"/>
                </HitDiceTotalWrapper>

                <HitDiceInput
                    defaultValue={0}
                    min={0}
                    type="number"
                />

                <HitDiceText>D{10}</HitDiceText>
            </HitDiceElementsWrapper>

        </HitDiceWrapper>
    );
};

export default HitDice;