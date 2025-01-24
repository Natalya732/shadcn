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

export type sortConfig = {
  fieldName: string;
  direction: string;
};

export type PaginationConfig = {
  page: number;
  pageSize: number;
};

export type FiterConfig = {
  status?: string | string[];
  priority?: string | string[];
};
