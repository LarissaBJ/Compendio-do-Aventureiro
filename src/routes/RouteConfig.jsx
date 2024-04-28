import { createBrowserRouter , Navigate} from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginAndRegister/LoginPage.jsx';
import RegisterPage from '../pages/LoginAndRegister/RegisterPage.jsx';
import CharacterPage from '../pages/CharacterPage/CharacterPage';
import CharacterSheetPage from '../pages/CharacterSheetPage/CharacterSheetPage';
import AttributeCombatPage from '../pages/TabMenuPages/AttributeCombatPage/AttributeCombatPage';
import CharacterDetailPage from '../pages/TabMenuPages/CharacterDetailPage/CharacterDetailPage';
import MagicConjurationPage from '../pages/TabMenuPages/MagicConjurationPage/MagicConjurationPage';
import SpellPagination_1 from '../pages/TabMenuPages/MagicConjurationPage/SpellPagination/SpellPagination_1';
import SpellPagination_2 from '../pages/TabMenuPages/MagicConjurationPage/SpellPagination/SpellPagination_2';
import SpellPagination_3 from '../pages/TabMenuPages/MagicConjurationPage/SpellPagination/SpellPagination_3';
import AboutPage from '../pages/AboutPage/AboutPage.jsx'
import ProtectedRoute from './ProtectedRoute';
import App from '../App.jsx';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'home/:userId',
        element: <ProtectedRoute />,
        children: [
          { index: true, element: <HomePage /> },
          { path: 'about', element: <AboutPage /> },
          { path: 'characters', element: <CharacterPage /> },
          {
            path: 'charactersheet',
            element: <CharacterSheetPage />,
            children: [
              { path: 'attributecombat', element: <AttributeCombatPage /> },
              { path: 'characterdetail', element: <CharacterDetailPage /> },
              {
                path: 'magicconjuration',
                element: <MagicConjurationPage />,
                children: [
                  { path: 'spellpagination-1', element: <SpellPagination_1 /> },
                  { path: 'spellpagination-2', element: <SpellPagination_2 /> },
                  { path: 'spellpagination-3', element: <SpellPagination_3 /> },
                  { index: true, element: <Navigate replace to="SpellPagination-1" />}
                ],
              },
              { index: true, element: <Navigate replace to="attributecombat" />}
            ],
          },
        ],
      },
    ],
  },
  { path: 'register', element: <RegisterPage /> },
  { path: 'login', element: <LoginPage /> }
]);

export default Router;

