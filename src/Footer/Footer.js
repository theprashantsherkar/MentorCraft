import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-center md:text-left">
          <p>&copy; 2024 MentorCraft</p>
          <p>All rights reserved.</p>
        </div>
        <div className="text-center md:text-right">
          <p>Contact Us: contact@mentorcraft.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
