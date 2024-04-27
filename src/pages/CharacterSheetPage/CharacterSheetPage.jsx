import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import MenuNavBar from '../../components/NavigateBars/MenuNavBar/MenuNavBar';
import {PageContenierSheet, ContentSheet} from '../../App.js';
import HeaderSheet from '../../components/HeaderSheet/HeaderSheet';

const CharacterSheetPage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        navigate('/charactersheet/attributecombat');
    }, [navigate]);

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