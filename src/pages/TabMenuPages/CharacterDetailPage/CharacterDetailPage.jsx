import React from 'react';
import {PageContentMenuSheet} from '../../../App.js';
import AlliesAndOrganizations from '../../../components/InputsDetailCharacter/AlliesAndOrganizations.jsx';
import Ideals from '../../../components/InputsDetailCharacter/Ideals.jsx';
import History from '../../../components/InputsDetailCharacter/History.jsx';
import PersonalityTraits from '../../../components/InputsDetailCharacter/PersonalityTraits.jsx';
import AdditionalFeaturesAndTraits from '../../../components/InputsDetailCharacter/AdditionalFeaturesAndTraits.jsx';
const CharacterDetailPage = () => {
    return (
        <PageContentMenuSheet>
            <h1>CHARACTER DETAIL PAGE</h1>
            <Ideals/>
            <PersonalityTraits/>
            <AlliesAndOrganizations/>
            <History/>
            <AdditionalFeaturesAndTraits/>
        </PageContentMenuSheet>
    );
};

export default CharacterDetailPage;