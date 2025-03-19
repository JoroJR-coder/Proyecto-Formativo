import React from 'react';
import PersonasTemplate from '../components/Templates/PersonasTemplate';

const Personas: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Gestión de Personas</h1>
      <PersonasTemplate />
    </div>
  );
};

export default Personas;