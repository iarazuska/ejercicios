import React from 'react';
import Coches from './ejercicios_JSX/coches'; 
import Despedida from './ejercicios_JSX/despedida';
import Saludo from './ejercicios_JSX/saludo';
import Contador from './ejercicios_componentesReactSencillos/contador';
import Formulario from './ejercicios_componentesReactSencillos/formulario';
import Toggle from './ejercicios_componentesReactSencillos/toggle';
import Tareas from './ejercicios_componentesReactSencillos/tareas';
import Compra from './ejercicios_componentesReactSencillos/compra';

const App = () => {
  const isGreeting = false;
  const nombre = 'IaraZas';

  return (
    <div className="container mt-3">
      {}
      <h1>Componentes React Sencillos</h1>
      <Contador />
      <Formulario />
      <Toggle />
      <Tareas />
      <Compra />
    </div>
  );
};

export default App;

