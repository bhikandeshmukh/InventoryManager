import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import Footer
import './styles/App.css'; // Import App.css

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      {user && <Navbar user={user} />}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
          <Route
            path="/dashboard"
            element={user ? <Dashboard user={user} /> : <Login setUser={setUser} />}
          />
          <Route
            path="/products"
            element={user ? <Products user={user} /> : <Login setUser={setUser} />}
          />
          <Route
            path="/add-product"
            element={user ? <AddProduct user={user} /> : <Login setUser={setUser} />}
          />
        </Routes>
      </div>
      <Footer /> {/* Add Footer */}
    </Router>
  );
};

export default App;