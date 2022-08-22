import { createContext, useState, useEffect } from "react";
import { Tanks as data } from "../Tank";
export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [Tanks, setTasks] = useState([]);
  function creatTask(task) {
    setTasks([
      ...Tanks,
      {
        title: task.titulo,
        id: Tanks.length,
        description: task.descipcion,
      },
    ]);
  }

  function deletTask(taskId) {
    setTasks(Tanks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        Tanks: Tanks,
        deletTask: deletTask,
        creatTask: creatTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
