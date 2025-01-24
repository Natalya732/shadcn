import { Button } from "@/components/ui/button";
import { columnType } from "@/Definitions/TypeDefinition";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";


export const columns: ColumnDef<columnType>[] = [
  {
    accessorKey: "priority",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Priority
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
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
