import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tareas, onMarcarRealizada, onEliminar }) => {
  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tareas.map((tarea, index) => (
          <TaskItem 
            key={index} 
            tarea={tarea} 
            onMarcarRealizada={() => onMarcarRealizada(index)} 
            onEliminar={() => onEliminar(index)} 
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;