import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/NavigateBars/NavBar/NavBar';
import { PageContenier, ContentPage } from './App.js'; 
import Footer from './components/HomeComponents/Footer.jsx';

const App = () => {
  return (
      <PageContenier>
      <Navbar/>
      <ContentPage>
        <Outlet/>  
      </ContentPage>
      <Footer/>
    </PageContenier>
  );
};

export default App;
