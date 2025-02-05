import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gradient">AR</div>
        <nav className="hidden md:flex space-x-6">
          <NavLink to="home">Home</NavLink>
          <NavLink to="services">Services</NavLink>
          <NavLink to="portfolio">Portfolio</NavLink>
          <NavLink to="testimonials">Testimonials</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </nav>
        <button onClick={toggleMenu} className="md:hidden">
          <i className="bi bi-list text-2xl"></i>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center py-4 bg-white">
            <NavLink to="home" onClick={toggleMenu}>Home</NavLink>
            <NavLink to="services" onClick={toggleMenu}>Services</NavLink>
            <NavLink to="portfolio" onClick={toggleMenu}>Portfolio</NavLink>
            <NavLink to="testimonials" onClick={toggleMenu}>Testimonials</NavLink>
            <NavLink to="contact" onClick={toggleMenu}>Contact</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    smooth={true}
    duration={500}
    className="text-gray-600 hover:text-indigo-600 cursor-pointer transition-colors duration-300"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Header;
