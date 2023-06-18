import React, {useState, useEffect} from "react";
import SingleCard from "./singlecard"



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
  
    const handleCardClick = (cardId) => {
        window.location.href = `/card/${cardId}`;
    };
    return(
        <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchTerm} onChange={handleSearch} />
        <button type="submit">Search</button>
      </form>

      <div>
        {cards.map((card) => (
          <div key={card._id} onClick={() => handleCardClick(card._id)}>
            {/* Display card details */}
            <SingleCard  
      src={card.src}
      name={card.name}
      position={card.position}
      content={card.content}
            />
          </div>
        ))}
      </div>
    </div>
    );
}
export default Cardsdata;