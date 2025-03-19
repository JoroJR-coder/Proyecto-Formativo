import React from 'react';
import TableHeader from '../Molecules/TableHeader';
import Button from '../Atoms/Button';
import { Persona } from '../../services/api';

interface PersonasTableProps {
  personas: Persona[] | undefined;
  onEdit: (persona: Persona) => void;
  onDelete: (id: number) => void;
  isDeleting: boolean;
}

const PersonasTable: React.FC<PersonasTableProps> = ({
  personas,
  onEdit,
  onDelete,
  isDeleting,
}) => {
  const columns = [
    "ID", 
    "Identificación", 
    "Nombres", 
    "Teléfono", 
    "Correo", 
    "Área", 
    "Ficha", 
    "Acciones"
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <TableHeader columns={columns} />
        <tbody className="bg-white divide-y divide-gray-200">
          {personas?.length ? (
            personas.map((persona: Persona) => (
              <tr key={persona.idPersona} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{persona.idPersona}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{persona.identificacion}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{persona.nombres}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {persona.telefono || <span className="text-gray-400 italic">N/A</span>}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {persona.correo || <span className="text-gray-400 italic">N/A</span>}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {persona.fkArea || <span className="text-gray-400 italic">N/A</span>}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {persona.fkFicha || <span className="text-gray-400 italic">N/A</span>}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <Button 
                      onClick={() => onEdit(persona)}
                      disabled={isDeleting}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium"
                    >
                      Editar
                    </Button>
                    <Button 
                      onClick={() => persona.idPersona && onDelete(persona.idPersona)}
                      disabled={isDeleting}
                      className="bg-red-600 hover:bg-red-700 text-white text-xs font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isDeleting ? 'Eliminando...' : 'Eliminar'}
                    </Button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={8} className="px-6 py-10 text-center text-sm text-gray-500">
                No hay datos disponibles
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PersonasTable;