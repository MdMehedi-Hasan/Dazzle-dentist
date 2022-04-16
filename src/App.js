import logo from './logo.svg';
import './App.css';
import Header from './Components/Shared/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Blogs from './Components/Pages/Blogs/Blogs';
import About from './Components/Pages/About/About';
import Login from './Components/Pages/Login/Login';
import Footer from './Components/Shared/Footer';

function App() {
  return (
    <div className='page-container'>
      <div className='page-wrapper'>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
      </div>
      
    </div>
  );
}

export default App;
