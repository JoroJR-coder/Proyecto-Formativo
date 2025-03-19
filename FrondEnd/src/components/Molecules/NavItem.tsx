import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface NavItemProps {
  to: string;
  icon: ReactNode;
  label: string;
  isActive: boolean;
  collapsed: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label, isActive, collapsed }) => {
  return (
    <Link
      to={to}
      className={`flex items-center py-4 px-4 transition-colors ${collapsed ? 'justify-center' : ''} 
        ${isActive ? 'bg-white text-green-600' : 'text-white hover:bg-green-500'}`}
    >
      {icon}
      {!collapsed && <span className="ml-3">{label}</span>}
    </Link>
  );
};

export default NavItem;