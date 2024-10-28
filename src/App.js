
import React from 'react';
import Saludo from './ejercicios/saludo';
import Despedida from './ejercicios/despedida';
import Coches from './ejercicios/coches'; // Ensure this path is correct
import './ejercicios/Coches.css'; // Update the path if necessary

const App = () => {
  const isGreeting = false; 
  const nombre = 'IaraZas';

  return (
    <div className="container mt-3">
      {isGreeting ? <Saludo nombre={nombre} /> : <Despedida nombre={nombre} />}
      
      <h1>Coches</h1>
      <Coches /> {/* Corrected usage of Coches component */}
    </div>
  );
};

export default App;
