import { useTask } from "@/context/TasksContext";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

function TaskCard({ id, title, descripcion }) {
  const router = useRouter();
  const { deleteTask } = useTask();
  return (
    <div
      onClick={() => router.push(`/edit/${id}`)}
      className=" bg-gray-700 hove:bg-slate-600 cursor-pointer px-20 py-5 m-2  "
    >
      <div className=" flex justify-between">
        <h3>{title}</h3>
        <button
          className=" bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex items-center"
          onClick={(e) => {
            e.stopPropagation();
            const accept = window.confirm("are you sure");
            if (accept) {
              deleteTask(id);
              toast.success("task deleted successfully");
            }
          }}
        >
          delete
        </button>
      </div>
      <p>{descripcion}</p>
      <span className=" text-gray-400 text-xs">{id}</span>
    </div>
  );
}

export default TaskCard;
