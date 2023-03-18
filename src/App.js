import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router"
import NavbarComponent from './Components/molecules/Navbar/Navbar.jsx'
import Register from './Components/molecules/Register/Register';
import RegisterPage from './Pages/Register/RegisterPage';
import LoginPage from './Pages/LoginForm/LoginPage';
import ProductForm from './Pages/ProductForm/ProductForm';

function App() {
  return (
    <>
      <NavbarComponent/>
      <Routes>
      <Route path="/" element={<ProductForm/>} />
       <Route path="register" element={<RegisterPage/>} />
       <Route path="login" element={<LoginPage/>} />
        {/* <Route path="*" element={<h1>Error 404</h1>}/> */}
      </Routes>
    </>
  );
}

export default App;
