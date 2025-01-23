import React, { useState } from "react";

export type todoType = {
  id: number;
  title: string;
  description: string;
};

export default function Todo() {
  const [showDialog, setShowDialog] = useState<boolean>(false);

  return (
    <div className="bg-red-100 p-5 h-screen">
      <div className="header w-full flex justify-between items-center">
        <h1 className="text-2xl font-bold">To Do App</h1>
        <button
          className="bg-blue-400 text-white px-3 py-1 rounded"
          onClick={() => setShowDialog(true)}
        >
          Add
        </button>
      </div>
    </div>
  );
}
