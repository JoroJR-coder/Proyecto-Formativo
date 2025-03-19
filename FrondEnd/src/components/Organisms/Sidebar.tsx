import { useLocation } from "react-router-dom";
import { FiSettings, FiMonitor, FiUsers, FiFileText } from "react-icons/fi";
import NavItem from "../Molecules/NavItem";
import SidebarHeader from "../Molecules/SidebarHeader";
import SidebarToggle from "../Molecules/SidebarToggle";

interface SidebarProps {
  collapsed: boolean;
  toggleSidebar: () => void;
}

function Sidebar({ collapsed, toggleSidebar }: SidebarProps) {
  const location = useLocation();
  
  const navItems = [
    { path: "/", icon: <FiSettings className="text-xl" />, label: "DASHBOARD" },
    { path: "/prueba", icon: <FiMonitor className="text-xl" />, label: "PRUEBA" },
    { path: "/prueba2", icon: <FiFileText className="text-xl" />, label: "PRUEBA 2" },
    { path: "/personas", icon: <FiUsers className="text-xl" />, label: "PERSONAS" },
  ];
  
  return (
    <div className={`fixed left-0 top-16 h-[calc(100vh-4rem)] transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'} bg-green-600 shadow-lg z-10`}>
      <SidebarToggle 
        collapsed={collapsed} 
        toggleSidebar={toggleSidebar} 
      />

      <div className="flex flex-col h-full">
        <SidebarHeader collapsed={collapsed} />

        <nav className="flex-1">
          {navItems.map((item) => (
            <NavItem
              key={item.path}
              to={item.path}
              icon={item.icon}
              label={item.label}
              isActive={location.pathname === item.path}
              collapsed={collapsed}
            />
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;