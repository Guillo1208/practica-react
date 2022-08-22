import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [titulo, settitulo] = useState("");
  const [descipcion, setDescripcion] = useState("");
  const { creatTask } = useContext(TaskContext);
  const CargarFormulario = (e) => {
    e.preventDefault();
    creatTask({
      titulo,
      descipcion,
    });
    settitulo("");
    setDescripcion("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={CargarFormulario} className="bg-slate-900 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          placeholder="Escribe el titulo de tarea"
          onChange={(e) => settitulo(e.target.value)}
          value={titulo}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <textarea
          placeholder="Escribe la descripciond e la trea"
          onChange={(e) => setDescripcion(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2"
          value={descipcion}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
