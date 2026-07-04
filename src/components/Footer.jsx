import React from 'react';

const Footer = () => {
  return (
    <div className="py-8 bg-dark-300 px-6 text-center">
       <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Ankit Kumar Yadav. All rights reserved.</p>
       </div>
    </div>
  );
};

export default Footer;
