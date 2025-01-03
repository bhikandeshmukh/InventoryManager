import React, { useState } from 'react';

const AddProduct = ({ user }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = () => {
    // Add logic to save the product
    alert('Product added successfully!');
  };

  return (
    <div className="container mt-5">
      <h2>Add Product</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <button className="btn btn-success" onClick={handleSubmit}>
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;