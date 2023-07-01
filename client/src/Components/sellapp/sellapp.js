import React, { useState } from 'react';
import axios from 'axios';
import './sellapp.css';

const Form = () => {
  const [collectionName, setCollectionName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [position, setPosition] = useState('');
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState(''); 
  const [contactNo, setContactNo] = useState(''); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('collectionName', collectionName);
      formData.append('description', description);
      formData.append('date', date);d
      formData.append('position', position);
      formData.append('image', image);
      formData.append('price', price);
      formData.append('contactNo', contactNo);

      const response = await axios.post(
        'http://localhost:4040/Ebartr/sellappRouter/sell',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log('hello');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="collectionName">Collection Name:</label>
        <input
          type="text"
          id="collectionName"
          value={collectionName}
          onChange={(e) => setCollectionName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date:</label> {/* Updated label */}
        <input
          type="date" 
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="position">Position:</label>
        <input
          type="text"
          id="position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input
          type="number" 
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="contactNo">Contact Number:</label>
        <input
          type="tel"
          id="contactNo"
          value={contactNo}
          onChange={(e) => setContactNo(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
