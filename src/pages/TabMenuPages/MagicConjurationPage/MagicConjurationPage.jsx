import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { PageContentMenuSheet, ContentSheet } from '../../../App.js';
import MagicHeader from '../../../components/MagicHeader/MagicHeader.jsx';

const MagicConjurationPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/charactersheet/magicconjuration/SpellPagination-1');
    }, [navigate]);  
    return (
        <PageContentMenuSheet>
            <MagicHeader/>
            <ContentSheet>
                <Outlet/>
            </ContentSheet>  
        </PageContentMenuSheet>
    );
};

export default MagicConjurationPage;
