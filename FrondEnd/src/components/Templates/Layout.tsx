import { useState } from "react";
import Sidebar from "../Organisms/Sidebar";
import Header from "../Organisms/Header";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 overflow-hidden">
      {/* Header */}
      <Header />
      
      {/* Content area with sidebar and main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar positioned below header */}
        <div className="h-full">
          <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} />
        </div>
        
        {/* Main content area */}
        <div 
          className="flex-1 overflow-auto transition-all duration-300 p-6" 
          style={{ marginLeft: collapsed ? "4rem" : "16rem" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;