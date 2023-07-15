import React, {useState, useEffect} from "react";
import SingleCard from "./singlecard"
import "./card.css";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import ItemDetailsPage from "../Itemdetails/Itemdetails";
function Cardsdata(){
    const [cards, setCards] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    
  
    useEffect(() => {
      fetchCardsData();
    }, []);
  
    const fetchCardsData = async () => {
      try {
        const response = await fetch(`http://localhost:4040/Ebartr/cards/cardsdata/${searchTerm ? `?search=${searchTerm}` : ''}`);
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error('Error fetching cards data:', error);
      }
    };
  
    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      fetchCardsData();
    };
  
    const handleCardClick = (cardId,cardpos) => {
        window.location.href = `/card/${cardpos}/${cardId}`;
        // <Router>
        // <Routes>
        // <Route path="/card/${cardId}" element={<ItemDetailsPage prop={cardId}/>}/>
        // </Routes>
        // </Router>
    };
    return(
          <div>
          
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchTerm} onChange={handleSearch} />
        <button type="submit">Search</button>
      </form>

      <div className="card-list">
        {cards.map((card) => (
          <div key={card._id} onClick={() => handleCardClick(card._id, card.position)}>
            {/* Display card details */}
            <SingleCard  item={card}/>
          </div>
        ))}
      </div>
      {/* <Router>
      <Route
          exact
          path="/card/:searchTerm/:cardId"
          component={ItemDetailsPage}
        />
         </Router> */}
      </div>
   
    );
}
export default Cardsdata;