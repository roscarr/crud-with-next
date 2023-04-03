"use client";
import { useTask } from "@/context/TasksContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();
  const { tasks } = useTask();
  return (
    <header className=" flex justify-between items-center bg-gray-800 px-28 py-3">
      <Link href="/" className=" font-bold text-3xl   text-white">
        <h1>
          Task App
          <span className=" text-slate-300 ml-5 text-sm">
            {tasks.length} tasks
          </span>
        </h1>
      </Link>
      <div>
        <button
          onClick={() => router.push("/new")}
          className=" bg-green-500 items-center hover:bg-green-400 px-5 py-2 text-gray-50 font-bold rounded-sm inline-flex"
        >
          Add Task
        </button>
      </div>
    </header>
  );
}

export default Navbar;
