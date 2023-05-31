import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cardsdata from "./Components/cards/RenderCards";
import logo from "./logo.svg";
import Footer from "./Components/footer/Render Code/RenderFooter";
// import ProductSection from "./Components/ProductSection/Render code/RenderProduct";
// import MessageSection from "./Components/MessageSection/Render Code/RenderMessage";
function App() {
  return (
    <Router>
    <Routes>
     <Route exact path="/" element={<Cardsdata />} />
     {/* <Route path="/card/:cardId" component={CardDetails} /> */}
     </Routes>
 </Router>
  );
}

export default App;
