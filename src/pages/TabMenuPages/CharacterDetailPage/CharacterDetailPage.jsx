import React from 'react';
import {PageContentMenuSheet ,Row,Column,Exemplo} from '../../../App.js';
import AlliesAndOrganizations from '../../../components/InputsDetailCharacter/AlliesAndOrganizations.jsx';
import Ideals from '../../../components/InputsDetailCharacter/Ideals.jsx';
import History from '../../../components/InputsDetailCharacter/History.jsx';
import PersonalityTraits from '../../../components/InputsDetailCharacter/PersonalityTraits.jsx';
import AdditionalFeaturesAndTraits from '../../../components/InputsDetailCharacter/AdditionalFeaturesAndTraits.jsx';
const CharacterDetailPage = () => {
    return (
        <PageContentMenuSheet>
            <Column $gap="19px" $width="992px" $height="1968.33px">
                <Row $gap="34px" $width="990.83px" $height="647px">
                    <Exemplo $width="440.83px" $height="647px">APARENCIA DE PERSONAGEM</Exemplo>
                    <Column $gap="23px" $width="516px" $height="647px"> 
                        <PersonalityTraits/>
                        <Ideals/>
                        <Exemplo $width="514px" $height="129px">VÍNCULOS</Exemplo>
                        <Exemplo $width="514px" $height="152px">FRAQUEZAS</Exemplo>
                    </Column>
                </Row>

                <Column $gap="23px" $width="991.5px" $height="798.5px">
                    <AlliesAndOrganizations/>
                    <History/>
                </Column>

                <Row $gap="28px" $width="988.5px" $height="485.5px">
                    <AdditionalFeaturesAndTraits/>
                    <Exemplo $width="510.5px" $height="484.5px">TESOURO</Exemplo>
                </Row>
            </Column>
        </PageContentMenuSheet>
    );
};

export default CharacterDetailPage;