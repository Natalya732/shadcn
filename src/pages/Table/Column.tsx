import { ColumnDef } from "@tanstack/react-table";

export type columnType = {
  id: string;
  priority: "High" | "Medium" | "Low";
  status: "Open" | "In Progress" | "Closed";
  labels: string[];
  name: string;
  dueDate: string;
  createdDate: string;
  assignee: string;
  comment?: string;
};

export const columns: ColumnDef<columnType>[] = [
  {
    accessorKey: "priority",
    header: "Priority",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "labels",
    header: "Labels",
  },
  {
    accessorKey: "name",
    header: "Name",
  },

  {
    accessorKey: "assignee",
    header: "Assignee",
  },
];
