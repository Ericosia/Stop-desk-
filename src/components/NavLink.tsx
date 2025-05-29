'use client';

import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-blue-900 hover:text-amber-500 transition-colors duration-200 font-medium"
    >
      {children}
    </a>
  );
};

export default NavLink;