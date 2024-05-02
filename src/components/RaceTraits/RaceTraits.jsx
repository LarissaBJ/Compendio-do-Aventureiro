import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { CharacterSheetContext } from '../../context/CharacterSheetContext.jsx';
import {
    Trait, TraitBox, TraitBoxTittle, TraitElementWrapper, TraitWrapper, TraitText, TraitTittle
} from "./styled.js";

const RaceTraits = () => {
    const { characterSheet } = useContext(CharacterSheetContext);
    const race = characterSheet.headerDetails.race;
    const [traits, setTraits] = useState([]);

    useEffect(() => {
        const fetchTraits = async () => {
            try {
                const response = await axios.get(`https://www.dnd5eapi.co/api/races/${race}`);
                const traitsData = await Promise.all(response.data.traits.map(async (trait) => {
                    const response = await axios.get(`https://www.dnd5eapi.co${trait.url}`);
                    return response.data;
                }));
                setTraits(traitsData);
            } catch (error) {
                console.error('Erro ao buscar dados da API', error);
            }
        };

        fetchTraits();
    }, [race]);

    return (
        <TraitBox>
            <TraitElementWrapper>
                <TraitBoxTittle>CARACTERÍSTICAS E TRAÇOS</TraitBoxTittle>
                <TraitWrapper>
                    {traits.map((trait, index) => (

                        <Trait key={index}>
                            <TraitTittle>{trait.name}</TraitTittle>
                            <TraitText>{trait.desc.join(' ')}</TraitText>
                        </Trait>

                    ))}
                </TraitWrapper>
            </TraitElementWrapper>
        </TraitBox>
    );
};

export default RaceTraits;
