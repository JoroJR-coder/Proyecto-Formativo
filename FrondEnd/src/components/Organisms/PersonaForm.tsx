import React from 'react';
import FormField from '../Molecules/FormField';
import Button from '../Atoms/Button';
import { Persona } from '../../services/api';

interface PersonaFormProps {
  formData: Partial<Persona>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  isSubmitting: boolean;
  isEditing: boolean;
  formError: string | null;
}

const PersonaForm: React.FC<PersonaFormProps> = ({
  formData,
  handleInputChange,
  handleSubmit,
  onCancel,
  isSubmitting,
  isEditing,
  formError,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      {formError && (
        <div className="mb-4 bg-red-50 border border-red-200 text-red-800 rounded-md p-3">
          {formError}
        </div>
      )}

      <FormField
        id="identificacion"
        name="identificacion"
        label="Identificación"
        value={formData.identificacion}
        onChange={handleInputChange}
        required
      />

      <FormField
        id="nombres"
        name="nombres"
        label="Nombres"
        value={formData.nombres}
        onChange={handleInputChange}
        required
      />

      <FormField
        id="telefono"
        name="telefono"
        label="Teléfono"
        value={formData.telefono || ""}
        onChange={handleInputChange}
      />

      <FormField
        id="correo"
        name="correo"
        label="Correo"
        type="email"
        value={formData.correo || ""}
        onChange={handleInputChange}
      />

      <FormField
        id="fkArea"
        name="fkArea"
        label="Área"
        type="number"
        value={formData.fkArea?.toString() || ""}
        onChange={handleInputChange}
      />

      <FormField
        id="fkFicha"
        name="fkFicha"
        label="Ficha"
        type="number"
        value={formData.fkFicha?.toString() || ""}
        onChange={handleInputChange}
      />

      <div className="flex items-center justify-between mt-6">
        <Button
          onClick={onCancel}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold"
        >
          Cancelar
        </Button>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold"
        >
          {isSubmitting
            ? "Guardando..."
            : isEditing
            ? "Actualizar"
            : "Crear"}
        </Button>
      </div>
    </form>
  );
};

export default PersonaForm;