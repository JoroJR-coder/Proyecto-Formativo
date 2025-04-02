import { FiSettings, FiMonitor, FiUsers, FiFileText } from "react-icons/fi";
import { useQuery } from "@tanstack/react-query";
import personaService from "../services/api";
import UsersTable from "../components/Organisms/UsersTable";
import AreaChartHero from "../components/Templates/AreaChartHero"; // ✅ Corregimos la importación

function Inicio() {
  const { data: personas, isLoading, error } = useQuery({
    queryKey: ["personas"],
    queryFn: personaService.getAll,
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* ✅ Agregamos la gráfica correctamente dentro del return */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
        <h2 className="text-xl font-bold mb-4">Gráfica de Análisis</h2>
        <AreaChartHero />
      </div>

      <h2 className="text-xl font-bold mb-4">PERSONAS REGISTRADAS</h2>
      <UsersTable users={personas} isLoading={isLoading} error={error} />
    </div>
  );
}

export default Inicio;
