import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className='App'>
      <h1>NAVBAR</h1>
      <Link to="/">-HOME-</Link>
      <Link to="/login">-LOGIN-</Link>
      <Link to="/about">-ABOUT-</Link>
      <Link to="/character">-CHARACTER-</Link>
      <Link to="/register">-REGISTER-</Link>
      <Link to="/charactersheet">-CHARACTER SHEET-</Link>
      <Outlet/>
      <p>FOOTER</p>
    </div>
  )
}

export default App