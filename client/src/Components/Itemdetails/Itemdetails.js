import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetails.css';
import Header from '../Header/Code/HeaderSec';

const ItemDetailsPage = () => {
  //const { itemId } = useParams();
  const { collection, itemId } = useParams();
  // console.log(collection);
  // console.log(itemId);
//   const itemId = "64a07863be267ed11ed6a89e";
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4040/Ebartr/items/${collection}/${itemId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Item not found');
        }
        return response.json();
      })
      .then((data) => {
        setItem(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [itemId]);

  if (loading) {
    return <div className="item-details-loading">Loading...</div>;
  }

  if (error) {
    return <div className="item-details-error">{error}</div>;
  }

  if (!item) {
    return <div className="item-details-error">Item not found</div>;
  }

  return (
    <div>
      <Header />
    <div className="item-details-container">
      {/* <img className="item-details-image" src={`data:${item.image.contentType};base64,${Buffer.from(item.image.data).toString('base64')}`} alt="Item" /> */}
      <div className="item-details-content">
        <h2 className="item-details-heading">{item.position}</h2>
        <p className="item-details-description">{item.description}</p>
        <p className="item-details-date">Date: {item.date}</p>
        <p className="item-details-price">Price: {item.price}</p>
        <p className="item-details-contact">Contact No: {item.contactNo}</p>
        <div className="item-details-buttons">
          <button>Chat with Seller</button>
          <button>Contact Seller</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ItemDetailsPage;