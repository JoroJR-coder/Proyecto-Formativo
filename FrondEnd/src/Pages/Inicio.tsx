import { FiSettings, FiMonitor, FiUsers, FiFileText } from "react-icons/fi";
import { useQuery } from "@tanstack/react-query";
import personaService from "../services/api";
import StatsCardSection from "../components/Organisms/StatsCardSection";
import UsersTable from "../components/Organisms/UsersTable";

function Inicio() {

  const { data: personas, isLoading, error } = useQuery({
    queryKey: ["personas"],
    queryFn: personaService.getAll,
  });

  const mainStatsCards = [
    {
      title: "MANTENIMIENTOS PREVENTIVOS",
      value: 5,
      icon: <FiSettings className="text-2xl" />
    },
    {
      title: "EQUIPOS",
      value: 45,
      icon: <FiMonitor className="text-2xl" />
    },
    {
      title: "ENCARGADOS",
      value: 8,
      icon: <FiUsers className="text-2xl" />
    },
    {
      title: "MANTENIMIENTOS TÉCNICOS",
      value: 15,
      icon: <FiFileText className="text-2xl" />
    }
  ];

  const unitStatsCards = [
    {
      title: "TICS",
      value: 5,
      icon: <FiMonitor className="text-2xl" />
    },
    {
      title: "AGROINDUSTRIA",
      value: 45,
      icon: <FiFileText className="text-2xl" />
    },
    {
      title: "GASTRONOMÍA",
      value: 8,
      icon: <FiUsers className="text-2xl" />
    },
    {
      title: "CAFÉ",
      value: 15,
      icon: <FiMonitor className="text-2xl" />
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
     
      <StatsCardSection cards={mainStatsCards} />
      
   
      <StatsCardSection title="EQUIPOS POR UNIDAD PRODUCTIVA" cards={unitStatsCards} />
      

      <h2 className="text-xl font-bold mb-4">PERSONAS REGISTRADAS</h2>
      <UsersTable users={personas} isLoading={isLoading} error={error} />
    </div>
  );
}

export default Inicio;