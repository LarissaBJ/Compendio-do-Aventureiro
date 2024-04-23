import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const CharacterSheetPage = () => {
    return (
        <div>
            <h1>CHARACTER SHEET PAGE</h1>
            <h1>MENU SECUNDARIO</h1>
            <Link to="/charactersheet/attributecombat">-ATTRIBUTE & COMBAT-</Link>
            <Link to="/charactersheet/characterdetail">-CHARACTER DETAIL-</Link>
            <Link to="/charactersheet/magicconjuration">-MAGIC & CONJURATION-</Link>
            <Outlet/>
        </div>
    );
};

export default CharacterSheetPage;