import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import AddProduct from './components/AddProduct';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
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
    </Router>
  );
};

export default App;