import React  from 'react';
import {useParams, Outlet } from 'react-router-dom';
import MenuNavBar from '../../components/NavigateBars/MenuNavBar/MenuNavBar';
import { PageContenierSheet, ContentSheet } from '../../App.js'; 
import HeaderSheet from '../../components/HeaderSheet/HeaderSheet';

const CharacterSheetPage = () => {
    const { userId } = useParams(); 

    return (
        <PageContenierSheet>
            <HeaderSheet />
            <MenuNavBar userId={userId} /> 
            <ContentSheet>
                <Outlet /> 
            </ContentSheet>
        </PageContenierSheet>
    );
};

export default CharacterSheetPage;
