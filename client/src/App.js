import axios from "axios";
import MessageSection from "./Components/Message/messageRender";
import LoginSignup from "./Components/LoginSignup/loginSignupRender";
import Form from "./Components/sellapp/sellapp";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cardsdata from "./Components/cards/RenderCards";
// import ItemDetailsPage from "./Components/Itemdetails/Itemdetails";
// import logo from "./logo.svg";
// import Footer from "./Components/footer/Render Code/RenderFooter";
import Header from "./Components/Header/Render Code/RenderHeader";
// import ProductSection from "./Components/ProductSection/Render code/RenderProduct";

function App() {
  axios.defaults.baseURL = "http://localhost:4040";
  axios.defaults.withCredentials = true; //used to send cookie from server
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Cardsdata />} />
          {/* <Route exact path="/product" element={<ProductSection />} /> */}
          <Route path="/loginsignup" element={<LoginSignup />} />
          <Route exact path="/message" element={<MessageSection />} />
          <Route path="/sell" element={<Form />} />
          {/* <Route path="/dummy" element={<ItemDetailsPage/>}/> */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
