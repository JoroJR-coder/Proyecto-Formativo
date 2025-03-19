import React from 'react';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface SidebarToggleProps {
  collapsed: boolean;
  toggleSidebar: () => void;
}

const SidebarToggle: React.FC<SidebarToggleProps> = ({ collapsed, toggleSidebar }) => {
  return (
    <button 
      onClick={toggleSidebar}
      className="absolute -right-3 top-20 bg-white rounded-full p-1 shadow-md z-20"
    >
      {collapsed ? 
        <FiChevronRight className="text-green-600" /> : 
        <FiChevronLeft className="text-green-600" />
      }
    </button>
  );
};

export default SidebarToggle;