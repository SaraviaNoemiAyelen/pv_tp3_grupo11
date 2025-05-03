import React from 'react'
import { useState } from 'react'
import './App.css'

import TaskItem from './components/TaskItem'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

function App() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (textoTarea) => {
    if (textoTarea.trim() !== '') {
      setTareas([...tareas, { texto: textoTarea, realizada: false }]);
    }
  };

  const marcarRealizada = (indice) => {
    const nuevasTareas = tareas.map((tarea, i) =>
      i === indice ? { ...tarea, realizada: !tarea.realizada } : tarea
    );
    setTareas(nuevasTareas);
  };

  // Función para eliminar una tarea
  const eliminarTarea = (indice) => {
    const nuevasTareas = tareas.filter((_, i) => i !== indice);
    setTareas(nuevasTareas);
  };


  return (
    <div>
      <h1>Agregar Tareas</h1>
      <TaskInput onAgregarTarea={agregarTarea} />
      <TaskList
        tareas={tareas}
        onMarcarRealizada={marcarRealizada}
        onEliminar={eliminarTarea}
      />
    </div>
  );
}

export default App