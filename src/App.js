import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Shared/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Blogs from "./Components/Pages/Blogs/Blogs";
import About from "./Components/Pages/About/About";
import Login from "./Components/Pages/Login/Login";
import Footer from "./Components/Shared/Footer";
import Register from "./Components/Pages/Register/Register";
import Checkout from "./Components/Pages/Checkout/Checkout";
import RequireAuth from "./Components/RequireAuth";

function App() {
  return (
    <div className="page-container">
      <div className="page-wrapper">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route
            path="/checkout"
            element={
              <RequireAuth>
                <Checkout></Checkout>
              </RequireAuth>
            }
          ></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
