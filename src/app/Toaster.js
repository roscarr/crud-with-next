"use client";
import dynamic from "next/dynamic";

export const Toaster = dynamic(
  async () => {
    //usar esta pagina solamente cuando usas next
    const { Toaster } = await import("react-hot-toast");
    return Toaster;
  },
  {
    ssr: false,
  }
);
