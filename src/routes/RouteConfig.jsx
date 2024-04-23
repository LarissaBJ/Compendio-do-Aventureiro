import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage/AboutPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import App from '../App';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import CharacterPage from '../pages/CharacterPage/CharacterPage';
import CharacterSheetPage from '../pages/CharacterSheetPage/CharacterSheetPage';
import AttributeCombatPage from '../pages/TabMenuPages/AttributeCombatPage/AttributeCombatPage';
import CharacterDetailPage from '../pages/TabMenuPages/CharacterDetailPage/CharacterDetailPage';
import MagicConjurationPage from '../pages/TabMenuPages/MagicConjurationPage/MagicConjurationPage';


//CONFIGURAÇÃO DE ROTAS 
export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
        {
            path: "/",
            element: <HomePage/>
        },
        {
            path: "/about",
            element: <AboutPage/>
        }, 
        {
            path: "/login",
            element: <LoginPage/>
        },
        {
            path: "/register",
            element:<RegisterPage/>
        },
        {
            path: "/character",
            element: <CharacterPage/>
        },
        {
            path: "/charactersheet",
            element: <CharacterSheetPage/>,
            children:[
                {
                    path:"/charactersheet/attributecombat",
                    element: <AttributeCombatPage/>
                },
                {
                    path:"/charactersheet/characterdetail",
                    element:<CharacterDetailPage/>
                },
                {
                    path:"/charactersheet/magicconjuration",
                    element: <MagicConjurationPage/>
                }
            ]
        }
    ]
  }
])