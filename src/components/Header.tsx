'use client';

import React, { useState, useEffect } from 'react';
import { Plane } from 'lucide-react';
import NavLink from './NavLink';
import Image from 'next/image';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image
              src="/image.png"
              alt="WorldExpress Logo"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
            <span className="text-2xl font-bold text-red-600 text-red-500">
              World<span className="text-blue-400">Express</span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
