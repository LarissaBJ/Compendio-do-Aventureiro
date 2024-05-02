
import { useParams, Outlet } from 'react-router-dom';
import MenuNavBar from '../../components/NavigateBars/MenuNavBar/MenuNavBar';
import HeaderSheet from '../../components/HeaderSheet/HeaderSheet';
import { PageContenierSheet, ContentSheet } from '../../App.js';

const CharacterSheetPage = () => {
    const { characterId, userId } = useParams();

    return (
        <PageContenierSheet>
            <HeaderSheet />
            <MenuNavBar userId={userId} characterId={characterId} />
            <ContentSheet>
                <Outlet />
            </ContentSheet>
        </PageContenierSheet>
    );
};

export default CharacterSheetPage;