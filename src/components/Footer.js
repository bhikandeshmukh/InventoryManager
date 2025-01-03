import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center py-3 mt-5">
      <div className="container">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Inventory Management System. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;