
import { useParams, Outlet } from 'react-router-dom';
import React, { useContext } from 'react';
import MenuNavBar from '../../components/NavigateBars/MenuNavBar/MenuNavBar';
import HeaderSheet from '../../components/HeaderSheet/HeaderSheet';
import { PageContenierSheet, ContentSheet } from '../../App.js';
import { CharactersContext } from '../../context/CharactersContext';

const CharacterSheetPage = () => {
    const { characterId, userId } = useParams();
    const { getCharacterById } = useContext(CharactersContext);

  
    const character = getCharacterById(characterId);

    return (
        <PageContenierSheet>
            <HeaderSheet character={character} />
            <MenuNavBar userId={userId} characterId={characterId} />
            <ContentSheet>
                <Outlet />
            </ContentSheet>
        </PageContenierSheet>
    );
};

export default CharacterSheetPage;