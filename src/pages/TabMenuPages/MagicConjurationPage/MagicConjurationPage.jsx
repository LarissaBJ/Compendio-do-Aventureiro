import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { PageContentMenuSheet, ContentSheet } from '../../../App.js';
import MagicHeader from '../../../components/MagicHeader/MagicHeader.jsx';

const MagicConjurationPage = () => {
    const { userId } = useParams(); 
    return (
        <PageContentMenuSheet>
            <MagicHeader serId={userId}/>
            <ContentSheet>
                <Outlet/>
            </ContentSheet>  
        </PageContentMenuSheet>
    );
};

export default MagicConjurationPage;
