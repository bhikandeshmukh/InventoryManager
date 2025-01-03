import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h2>Welcome, {user.username}</h2>
      <div className="mt-4">
        <button
          className="btn btn-primary me-2"
          onClick={() => navigate('/products')}
        >
          View Products
        </button>
        {user.role === 'admin' && (
          <button
            className="btn btn-success"
            onClick={() => navigate('/add-product')}
          >
            Add Product
          </button>
        )}
      </div>
    </div>
  );
};

export default Dashboard;