import React from 'react';
import {Ability, AbilityBox, AbilityBoxTittle, AbilityElementWrapper, AbilityText, AbilityTittle} from "./styled.js";

const AbilityAndCharacteristics = () => {
    return (
        <AbilityBox>
            <AbilityElementWrapper>

                <AbilityBoxTittle>CARACTERÍSTICAS E TRAÇOS</AbilityBoxTittle>

                <Ability>
                    <AbilityTittle>{"Nome"}</AbilityTittle>
                    <AbilityText>{"Origem: "} {"Classe"}</AbilityText>
                    <AbilityText>Descrição: {"abigubigublé"}</AbilityText>
                </Ability>

            </AbilityElementWrapper>
        </AbilityBox>
    );
};

export default AbilityAndCharacteristics;