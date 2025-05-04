
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-wbo-blue">WBO</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="font-medium hover:text-wbo-blue transition">
              Home
            </Link>
            <Link to="/why-outsource" className="font-medium hover:text-wbo-blue transition">
              Why Outsource?
            </Link>
            <Link to="/services" className="font-medium hover:text-wbo-blue transition">
              Services
            </Link>
            <Link to="/about" className="font-medium hover:text-wbo-blue transition">
              About Us
            </Link>
            {/* <Link to="/contact" className="font-medium hover:text-wbo-blue transition">
              Contact Us
            </Link> */}
            <Link to="/partners" className="font-medium hover:text-wbo-blue transition">
              Partners & Clients
            </Link>
            <Link to="/careers" className="font-medium hover:text-wbo-mustard transition">
              Careers
            </Link>
          </nav>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:block">
            <Button className="bg-wbo-mustard hover:bg-wbo-darkblue">
              <Link to="/contact" className="font-medium text-white transition">
              Contact Us
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-wbo-blue focus:outline-none"
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

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 space-y-3 pb-3">
            <Link to="/" className="block font-medium hover:text-wbo-blue transition" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/careers" className="block font-medium hover:text-wbo-blue transition" onClick={toggleMenu}>
              Careers
            </Link>
            <Link to="/contact" className="block font-medium hover:text-wbo-blue transition" onClick={toggleMenu}>
              Contact Us
            </Link>
            <Link to="/why-outsource" className="block font-medium hover:text-wbo-blue transition" onClick={toggleMenu}>
              Why Outsource?
            </Link>
            <Link to="/partners" className="block font-medium hover:text-wbo-blue transition" onClick={toggleMenu}>
              Partners & Clients
            </Link>
            <Link to="/services" className="block font-medium hover:text-wbo-blue transition" onClick={toggleMenu}>
              Services
            </Link>
            <Link to="/about" className="block font-medium hover:text-wbo-blue transition" onClick={toggleMenu}>
              About Us
            </Link>
            <Button className="w-full bg-wbo-blue hover:bg-wbo-darkblue">Contact Us</Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
