import React from 'react';
import { FiHome } from "react-icons/fi";

interface SidebarHeaderProps {
  collapsed: boolean;
}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ collapsed }) => {
  return (
    <div className={`py-6 px-4 border-b border-green-500 ${collapsed ? 'justify-center' : ''} flex items-center`}>
      {!collapsed && <span className="text-white font-bold text-xl">DASHBOARD</span>}
      {collapsed && <FiHome className="text-white text-xl" />}
    </div>
  );
};

export default SidebarHeader;