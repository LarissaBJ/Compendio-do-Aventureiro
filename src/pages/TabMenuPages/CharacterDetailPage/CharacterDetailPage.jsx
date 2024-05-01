import React from 'react';
import {PageContentMenuSheet ,Row,Column,Exemplo} from '../../../App.js';
import AlliesAndOrganizations from '../../../components/InputsDetailCharacter/AlliesAndOrganizations.jsx';
import Ideals from '../../../components/InputsDetailCharacter/Ideals.jsx';
import History from '../../../components/InputsDetailCharacter/History.jsx';
import PersonalityTraits from '../../../components/InputsDetailCharacter/PersonalityTraits.jsx';
import AdditionalFeaturesAndTraits from '../../../components/InputsDetailCharacter/AdditionalFeaturesAndTraits.jsx';
import Bonds from "../../../components/InputsDetailCharacter/Bonds.jsx";
import Weaknesses from "../../../components/InputsDetailCharacter/Weaknesses.jsx";
import Treasures from "../../../components/InputsDetailCharacter/Treasures.jsx";
import Appearance from '../../../components/Appearance/Appearance.jsx';
const CharacterDetailPage = () => {
    return (
        <PageContentMenuSheet>
            <Column $gap="19px" $width="992px" $height="1968.33px">
                <Row $gap="34px" $width="990.83px" $height="647px">
                    <Appearance/>
                    <Column $gap="23px" $width="516px" $height="647px"> 
                        <PersonalityTraits/>
                        <Ideals/>

                        <Bonds/>
                        <Weaknesses/>
                    </Column>
                </Row>

                <Column $gap="23px" $width="991.5px" $height="798.5px">
                    <AlliesAndOrganizations/>
                    <History/>
                </Column>

                <Row $gap="28px" $width="988.5px" $height="485.5px">
                    <AdditionalFeaturesAndTraits/>
                    <Treasures/>
                </Row>
            </Column>
        </PageContentMenuSheet>
    );
};

export default CharacterDetailPage;