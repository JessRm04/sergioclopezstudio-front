import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router"
import NavbarComponent from './Components/molecules/Navbar/Navbar.jsx'
import RegisterPage from './Pages/RegisterForm/RegisterPage';
import LoginPage from './Pages/LoginForm/LoginPage';
import ProductForm from './Pages/ProductForm/ProductForm';
import Dashboard from './Pages/Dashboard/Dashboard.jsx'
import ContactForm from './Components/molecules/Contact/ContactForm';

function App() {
  return (
    <>
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="contact" element={<ContactForm/>}/>
        <Route path="createProduct" element={<ProductForm/>} />
        <Route path="register" element={<RegisterPage/>} />
        <Route path="login" element={<LoginPage/>} />
        {/* <Route path="*" element={<h1>Error 404</h1>}/> */}
      </Routes>
    </>
  );
}

export default App;
