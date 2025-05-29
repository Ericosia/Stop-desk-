import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src="https://i.imgur.com/oaYBiJB.png" 
        alt="World Express Logo"
        className="h-8 w-auto object-contain"
      />
    </div>
  );
};

export default Logo;
