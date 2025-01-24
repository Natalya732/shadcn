import data from "@/config/fakeDb.json";
import { columns } from "./Column";
import { DataTable } from "./DataTable";
import { columnType, PaginationConfig } from "@/Definitions/TypeDefinition";
import { fetchAllTasks } from "@/api/datableApi";
import { useEffect, useState } from "react";

// const tableData = data as unknown as columnType[];

export default function Table() {
  const [tableData, setTableData] = useState<columnType[]>([]);

  const [loading, setLoading] = useState<boolean>(false);

  const tableQuery = (pagination: PaginationConfig): any => {
    setLoading(true);
    const response = fetchAllTasks(pagination, {}).then((data) => {
      setLoading(false);
      if (Array.isArray(data)) {
        setTableData(data);
      }
    });
  };


  return loading ? <h1>...Loading</h1> : (
    <div className="min-h-screen p-4 flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-semibold">DUMMY TABLE</h1>
        <p className="text-gray-500 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam
          architecto perferendis magni deleniti? Officia suscipit consequatur
          rerum. Optio perferendis tempora voluptatum repellendus veritatis!
        </p>
      </div>
      <DataTable columns={columns} data={tableData} />
    </div>
  );
}
