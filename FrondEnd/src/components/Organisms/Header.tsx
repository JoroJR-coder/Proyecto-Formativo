import React from 'react';
import Logo from '../Atoms/Logo';
import HeaderLogo from '../Molecules/HeaderLogo';
import { FiAlignJustify } from "react-icons/fi";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md h-16 flex items-center px-6 z-30 w-full sticky top-0 left-0 right-0">
      <div className="flex items-center justify-between w-full">
        {/* Left side - Additional Logo */}
        <div className="flex items-center">
          <Logo src='public\image.png' alt="Left Logo" size="lg" />
        </div>
        
        {/* Center - Main Logo and Title */}
        <HeaderLogo 
          logoSrc='public\imagen.png'
          logoAlt="Logo"
          title="INVENTORY"
        />
        
        {/* Right side - Menu icon */}
        <div className="flex items-center">
          <FiAlignJustify className="text-2xl text-gray-700 cursor-pointer hover:text-gray-900" />
        </div>
      </div>
    </header>
  );
};

export default Header;