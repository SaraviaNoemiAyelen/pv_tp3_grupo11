import React, { useState } from 'react';

const TaskInput = ({ onAgregarTarea }) => {
  const [tarea, setTarea] = useState('');

  const manejarCambio = (e) => {
    setTarea(e.target.value);
  };

  const manejarSubmit = (e) => {
    e.preventDefault();
    onAgregarTarea(tarea);
    setTarea('');
  };

  return (
    <form onSubmit={manejarSubmit}>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={tarea}
        onChange={manejarCambio}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default TaskInput;