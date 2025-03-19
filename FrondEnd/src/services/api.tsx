import axios from 'axios';


interface Persona {
  idPersona?: number;
  identificacion: string;
  nombres: string;
  telefono?: string;
  correo?: string 
  fkArea?: number | null;
  fkFicha?: number | null;
}

const API_URL = 'http://localhost:5000/personas'; 

const personaService = {
  getAll: async (): Promise<Persona[]> => {
    try {
      const response = await axios.get<Persona[]>(`${API_URL}/view`);
      return response.data;
    } catch (error) {
      console.error('Error fetching personas:', error);
      throw error;
    }
  },

  getById: async (id: number): Promise<Persona> => {
    try {
      const response = await axios.get<Persona>(`${API_URL}/view/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching persona with id ${id}:`, error);
      throw error;
    }
  },

  create: async (personaData: Omit<Persona, 'idPersona'>): Promise<Persona> => {
    try {
      const response = await axios.post<Persona>(`${API_URL}/create`, personaData);
      return response.data;
    } catch (error) {
      console.error('Error creating persona:', error);
      throw error;
    }
  },

  update: async (id: number, personaData: Partial<Persona>): Promise<Persona> => {
    try {
      const response = await axios.put<Persona>(`${API_URL}/update/${id}`, personaData);
      return response.data;
    } catch (error) {
      console.error(`Error updating persona with id ${id}:`, error);
      throw error;
    }
  },

  delete: async (id: number): Promise<any> => {
    try {
      const response = await axios.delete(`${API_URL}/delete/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting persona with id ${id}:`, error);
      throw error;
    }
  }
};

export default personaService;
export type { Persona };