import React from 'react';
import { Plane, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white-900 text-white pt-16 pb-8">
          <p className="text-center text-gray-900 text-sm">
            &copy; {new Date().getFullYear()} WorldExpress. Powered by Colitrack.
          </p>
    </footer>
  );
};

export default Footer;