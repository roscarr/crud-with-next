"use client";
import { useTask } from "@/context/TasksContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

function page({ params }) {
  const { tasks, createTask, updateTask } = useTask();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data);
      toast.success("task updated successfully");
    } else {
      createTask(data.title, data.descripcion);
      toast.success("task created successfully");
    }
    router.push("/");
  });
  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id);
      console.log(taskFound);
      if (taskFound) {
        setValue("title", taskFound.title);
        setValue("descripcion", taskFound.descripcion);
      }
    }
  }, []);
  return (
    <div className=" flex justify-center items-center h-full">
      <form action="" onSubmit={onSubmit} className=" bg-gray-700 p-10">
        <h1>New Task</h1>
        <input
          className=" bg-gray-800 py-3 px-4 mb-2 block focus:outline-none w-full"
          placeholder="write a title"
          {...register("title", { required: true })}
        />
        {errors.title && (
          <span className=" block text-red-400 mb-2">
            this field is required
          </span>
        )}
        <textarea
          className=" bg-gray-800 py-3 px-4 mb-2 block focus:outline-none w-full"
          placeholder="write a descripcion"
          {...register("descripcion", { required: true })}
        />
        {errors.descripcion && (
          <span className=" block text-red-400 mb-2">
            this field is required
          </span>
        )}

        <button className=" bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30">
          save
        </button>
      </form>
    </div>
  );
}

export default page;
