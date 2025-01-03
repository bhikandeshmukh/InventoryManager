import React from 'react';
import products from '../data/products.json';

const Products = ({ user }) => {
  return (
    <div className="container mt-5">
      <h2>Products</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Category</th>
            {user.permissions.includes('update') && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              {user.permissions.includes('update') && (
                <td>
                  <button className="btn btn-warning me-2">Edit</button>
                  {user.permissions.includes('delete') && (
                    <button className="btn btn-danger">Delete</button>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;