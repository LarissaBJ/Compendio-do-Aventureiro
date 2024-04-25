import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Router } from './routes/RouteConfig';
import { RouterProvider } from 'react-router-dom';
import { CRUDProvider } from './context/CRUDContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CRUDProvider>
      <RouterProvider router={Router}/>
    </CRUDProvider>
  </React.StrictMode>,
)
