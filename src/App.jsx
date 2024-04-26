import {Outlet } from 'react-router-dom';
import Navbar from './components/NavigateBars/NavBar/NavBar';
import {PageContenier,ContentPage} from './App.js';
function App() {

  return (
    <PageContenier>
      <Navbar/>
      <ContentPage>
        <Outlet/>
      </ContentPage>
      <footer>FOOTER</footer>
    </PageContenier>
  )
}

export default App