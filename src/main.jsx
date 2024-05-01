import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './routes/RouteConfig.jsx';
import { RouterProvider } from 'react-router-dom';
import { CRUDProvider } from './context/CRUDContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import {CharacterSheetProvider } from './context/CharacterSheetContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CharacterSheetProvider>
    <AuthProvider>
    <CRUDProvider>
    <RouterProvider router={Router}/>
    </CRUDProvider>
    </AuthProvider>
    </CharacterSheetProvider>
    
  
    
    
  </React.StrictMode>,
)
