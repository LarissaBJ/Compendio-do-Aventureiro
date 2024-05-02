import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './routes/RouteConfig.jsx';
import { RouterProvider } from 'react-router-dom';
import { CRUDProvider } from './context/CRUDContext.jsx';
import AuthProvider from './context/AuthContext.jsx';
import { CharacterSheetProvider } from './context/CharacterSheetContext.jsx';
import { CharactersProvider } from './context/CharactersContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CharacterSheetProvider>
        <CharactersProvider>
          <CRUDProvider> 
            <RouterProvider router={Router}>
            </RouterProvider>
          </CRUDProvider>
        </CharactersProvider>
      </CharacterSheetProvider>
    </AuthProvider>
  </React.StrictMode>
);
