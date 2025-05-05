import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="Global_bridge_Icon.svg" alt="WBO Logo" className="h-8 w-auto" />
            <img src="GB.svg" alt="WBO Logo" className="h-5 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="font-medium nav-link">
              Home
            </Link>
            <Link to="/why-outsource" className="font-medium nav-link">
              Why Outsource?
            </Link>
            <Link to="/services" className="font-medium nav-link">
              Services
            </Link>
            <Link to="/about" className="font-medium nav-link">
              About Us
            </Link>
            <Link to="/partners" className="font-medium nav-link">
              Partners & Clients
            </Link>
            <Link to="/careers" className="font-medium nav-link">
              Careers
            </Link>
          </nav>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:block">
            <Button className="bg-wbo-green hover:bg-wbo-darkteal">
              <Link to="/contact" className="font-medium text-white transition">
                Contact Us
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-wbo-green focus:outline-none z-60"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden fixed top-0 left-0 bg-wbo-lightblue shadow-md w-full shadow-md px-4 py-6 space-y-3 z-50">
          <button
            className="absolute top-4 right-4 text-wbo-green focus:outline-none"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <Link to="/" className="block font-medium nav-link" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/careers" className="block font-medium nav-link" onClick={toggleMenu}>
            Careers
          </Link>
          <Link to="/contact" className="block font-medium nav-link" onClick={toggleMenu}>
            Contact Us
          </Link>
          <Link to="/why-outsource" className="block font-medium nav-link" onClick={toggleMenu}>
            Why Outsource?
          </Link>
          <Link to="/partners" className="block font-medium nav-link" onClick={toggleMenu}>
            Partners & Clients
          </Link>
          <Link to="/services" className="block font-medium nav-link" onClick={toggleMenu}>
            Services
          </Link>
          <Link to="/about" className="block font-medium nav-link" onClick={toggleMenu}>
            About Us
          </Link>
          <Button className="w-full bg-wbo-blue hover:bg-wbo-darkblue" onClick={toggleMenu}>
            Contact Us
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;