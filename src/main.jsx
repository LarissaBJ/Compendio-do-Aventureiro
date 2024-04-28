import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './routes/RouteConfig.jsx';
import { RouterProvider } from 'react-router-dom';
import { CRUDProvider } from './context/CRUDContext';
import { AuthProvider } from './context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <CRUDProvider>
    <RouterProvider router={Router}/>
    </CRUDProvider>
    </AuthProvider>
  </React.StrictMode>,
)
