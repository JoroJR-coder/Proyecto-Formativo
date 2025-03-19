import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/Templates/Layout';
import Inicio from './Pages/Inicio';
import Personas from './Pages/Personas';
import Prueba from './Pages/Prueba';
import Prueba2 from './Pages/Prueba2';
// Import other pages as needed

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/prueba" element={<Prueba />} />
            <Route path="/prueba2" element={<Prueba2 />} />
            <Route path="/personas" element={<Personas />} />
          </Routes>
        </Layout>
      </Router>
    </QueryClientProvider>
  );
}

export default App;