import { Route, Routes } from "react-router";
import Navbar from "./component/Navbar/Navbar";
import Home from "./Pages/Home/Home.js";
import AboutUs from "./component/AboutUs/AboutUs.js";
import Footer from "./component/Footer/Footer.js";
// import Header from "./component/Header/Header";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
      
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
