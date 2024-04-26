import React from 'react';
import { Outlet } from 'react-router-dom';
import MenuNavBar from '../../components/NavigateBars/MenuNavBar/MenuNavBar';
import {PageContenierSheet, ContentSheet} from '../../App.js';
import HeaderSheet from '../../components/HeaderSheet/HeaderSheet';

const CharacterSheetPage = () => {
    return (
        <PageContenierSheet>
            <HeaderSheet/>
            <MenuNavBar/>
            <ContentSheet>
                <Outlet/>
            </ContentSheet>
        </PageContenierSheet>
    );
};

export default CharacterSheetPage;