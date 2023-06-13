import axios from "axios";
import { UserContextProvider } from "./Components/Message/UserContext";
import ChatRoutes from "./Components/Message/Routes";

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Cardsdata from "./Components/cards/RenderCards";
import logo from "./logo.svg";
// import Footer from "./Components/footer/Render Code/RenderFooter";
// import ProductSection from "./Components/ProductSection/Render code/RenderProduct";
function App() {
  axios.defaults.baseURL = "http://localhost:4040";
  axios.defaults.withCredentials = true; //used to send cookie from server
  return (
    <UserContextProvider>
      <ChatRoutes />
    </UserContextProvider>
    //     <Router>
    //     <Routes>
    //      {/* <Route exact path="/" element={<Cardsdata />} /> */}
    //      {/* <Route path="/card/:cardId" component={CardDetails} /> */}
    //      </Routes>
    //  </Router>
  );
}

export default App;
