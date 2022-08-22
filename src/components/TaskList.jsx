import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskList() {
  const { Tanks } = useContext(TaskContext);

  if (Tanks.length === 0) {
    return (
      <h1 className="text-white test-4xl font-bold text-center">
        No hay tareas aun
      </h1>
    );
  }

  return (
    <map className="grid grid-cols-4 gap-2">
      {Tanks.map((Tank) => (
        <TaskCard key={Tank.id} Tank={Tank} />
      ))}
    </map>
  );
}

//const styles = StyleSheet.create({});
