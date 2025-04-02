import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import personaService, { Persona } from "../../services/api";
import PersonasTable from '../Organisms/PersonasTable';
import PersonaForm from '../Organisms/PersonaForm';
import Button from '../Atoms/Button';

const PersonasTemplate: React.FC = () => {
  const queryClient = useQueryClient();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPersona, setCurrentPersona] = useState<Persona | null>(null);
  const [formData, setFormData] = useState<Partial<Persona>>({
    identificacion: "",
    nombres: "",
    telefono: "",
    correo: "",
    fkArea: undefined,
    fkFicha: undefined,
  });

  const {
    data: personas,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["personas"],
    queryFn: personaService.getAll,
  });

  const deleteMutation = useMutation({ // Las mutaciones se manejan en los hooks
    mutationFn: (id: number) => personaService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["personas"] });
      setErrorMessage(null);
    },
    onError: (error: any) => {
      console.error("Error deleting:", error);
      setErrorMessage(
        error.response?.status === 401
          ? "No tienes autorización para eliminar registros. Por favor inicia sesión."
          : "Error al eliminar el registro. Inténtalo de nuevo."
      );
    },
  });

  const saveMutation = useMutation({
    mutationFn: (data: Partial<Persona>) => {
      if (currentPersona?.idPersona) {
        return personaService.update(currentPersona.idPersona, data);
      } else {
        return personaService.create(data as Omit<Persona, "idPersona">);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["personas"] });
      setIsModalOpen(false);
      setCurrentPersona(null);
      setFormError(null);
      setFormData({
        identificacion: "",
        nombres: "",
        telefono: "",
        correo: "",
        fkArea: undefined,
        fkFicha: undefined,
      });
    },
    onError: (error: any) => {
      if (error.response) {
        if (error.response.status === 401) {
          setFormError(
            "No tienes autorización para esta acción. Por favor inicia sesión."
          );
        } else if (error.response.status === 500) {
          setFormError(
            "Error interno del servidor. Contacta al administrador del sistema."
          );
        } else if (error.response.data && error.response.data.message) {
          setFormError(`Error: ${error.response.data.message}`);
        } else {
          setFormError("Error al guardar los datos. Inténtalo de nuevo.");
        }
      } else if (error.request) {
        setFormError(
          "No se recibió respuesta del servidor. Verifica tu conexión a internet."
        );
      } else {
        setFormError(`Error: ${error.message}`);
      }
    },
  });

  const handleEdit = (persona: Persona) => {
    setCurrentPersona(persona);
    setFormData({
      identificacion: persona.identificacion,
      nombres: persona.nombres,
      telefono: persona.telefono || "",
      correo: persona.correo || "",
      fkArea: persona.fkArea,
      fkFicha: persona.fkFicha,
    });
    setIsModalOpen(true);
    setFormError(null);
  };

  const handleCreate = () => {
    setCurrentPersona(null);
    setFormData({
      identificacion: "",
      nombres: "",
      telefono: "",
      correo: "",
      fkArea: undefined,
      fkFicha: undefined,
    });
    setIsModalOpen(true);
    setFormError(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;

    if (type === "number") {
      setFormData((prev) => ({
        ...prev,
        [name]: value === "" ? undefined : Number(value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveMutation.mutate(formData);
  };

  const handleDelete = (id: number) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar esta persona?")) {
      deleteMutation.mutate(id);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4 my-4">
        Error al cargar los datos
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {errorMessage && (
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4 m-4">
          {errorMessage}
        </div>
      )}

      <div className="mt-10 p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">
          Lista de Personas
        </h2>
        <Button
          onClick={handleCreate}
          className="bg-green-600 text-white hover:bg-green-700 focus:ring-green-500"
        >
          Crear Persona
        </Button>
      </div>

      <PersonasTable 
        personas={personas} 
        onEdit={handleEdit} 
        onDelete={handleDelete}
        isDeleting={deleteMutation.isPending}
      />

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">
              {currentPersona ? "Editar Persona" : "Crear Persona"}
            </h2>
            
            <PersonaForm
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              onCancel={() => setIsModalOpen(false)}
              isSubmitting={saveMutation.isPending}
              isEditing={!!currentPersona}
              formError={formError}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonasTemplate;