"use client";
import TaskCard from "@/components/TaskCard";
import { useTask } from "@/context/TasksContext";

function page() {
  const { tasks } = useTask();

  return (
    <div className=" flex justify-center">
      <div className=" w-7/12">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            descripcion={task.descripcion}
          />
        ))}
      </div>
    </div>
  );
}

export default page;
