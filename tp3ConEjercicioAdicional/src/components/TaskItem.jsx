import React from 'react';

const TaskItem = ({ tarea, onMarcarRealizada, onEliminar }) => {
  return (
    <li>
      <span style={{ textDecoration: tarea.realizada ? 'line-through' : 'none' }}>{tarea.texto}</span>
      <button onClick={onMarcarRealizada}>
        {tarea.realizada ? 'Desmarcar' : 'Realizada'}
      </button>
      <button onClick={onEliminar}>Eliminar</button>
    </li>
  );
};

export default TaskItem;