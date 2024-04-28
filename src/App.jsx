import {Outlet } from 'react-router-dom';
import Navbar from './components/NavigateBars/NavBar/NavBar';
import {PageContenier,ContentPage} from './App.js';
import Footer from './components/HomeComponents/Footer.jsx';
function App() {

  return (
    <PageContenier>
      <Navbar/>
      <ContentPage>
        <Outlet/>
      </ContentPage>
      <Footer/>
    </PageContenier>
  )
}

export default App