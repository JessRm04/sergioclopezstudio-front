import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router"
import NavbarComponent from './Components/molecules/Navbar/Navbar.jsx'

function App() {
  return (
    <>
      <NavbarComponent/>
      <Routes>
        {/* <Route path="/" element={<Dashboard/>} />
        <Route path="*" element={<h1>Error 404</h1>}/> */}
      </Routes>
    </>
  );
}

export default App;
