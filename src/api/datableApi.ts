import {
  columnType,
  PaginationConfig,
  FiterConfig,
  sortConfig,
} from "@/Definitions/TypeDefinition";
import data from "@/config/fakeDb.json";

// ********************************** Sorting the data based on the sortConfig and pagination **********************************

export const sortTasks = (sortConfig: sortConfig): columnType[] => {
  const taskList = data as unknown as columnType[];
  const { fieldName, direction } = sortConfig;
  const sortedData = taskList.sort((a, b) => {
    let conversion = 0;

    if (fieldName === "createdDate" || fieldName === "dueDate") {
      conversion =
        new Date(a[fieldName]).getTime() - new Date(b[fieldName]).getTime();
    } else if (fieldName === "priority") {
      const priorityOrder = { Low: 1, Medium: 2, High: 3 };

      conversion =
        priorityOrder[a[fieldName] as keyof typeof priorityOrder] -
        priorityOrder[b[fieldName] as keyof typeof priorityOrder];
    } else {
      conversion = String(a[fieldName as keyof columnType]).localeCompare(
        String(b[fieldName as keyof columnType])
      );
    }

    return direction === "asc" ? conversion : -conversion;
  });

  return sortedData;
};

// ************************************************* Now we will implement the searching function based upon name *************************************************

export const searchTasks = (searchString: string): columnType[] => {
  const taskList = data as unknown as columnType[];

  const filteredData = taskList.filter((task) =>
    task.name.toLowerCase().includes(searchString.toLowerCase())
  );
  return filteredData;
};

// ********************************************** Now we will implement the filter function based upon priority **********************************************

export const filterTasks = (filter: FiterConfig): columnType[] => {
  const taskList = data as unknown as columnType[];
  const { status, priority } = filter;

  const filteredData = taskList.filter((task) => {
    const statusMatch =
      Array.isArray(status) && status.length > 0
        ? status.includes(task.status)
        : typeof status === "string"
        ? status === task.status
        : true;

    const priorityMatch =
      Array.isArray(priority) && priority.length > 0
        ? priority.includes(task.priority)
        : typeof priority === "string"
        ? priority === task.priority
        : true;

    return statusMatch && priorityMatch;
  });

  return filteredData;
};

// *********************************** A basic paginated api to fetch all data ***********************************

export const fetchAllTasks = (
  pagination: PaginationConfig,
  options: {
    filter?: FiterConfig;
    sort?: sortConfig;
    search?: string;
  }
): Promise<columnType[]> => {
  const taskList = data as unknown as columnType[];
  const { filter, sort, search } = options;
  const { page, pageSize } = pagination;

  return new Promise((resolve) => {
    let result = taskList;
    if (filter) {
      result = filterTasks(filter);
    }

    if (sort) {
      result = sortTasks(sort);
    }

    if (search) {
      result = searchTasks(search);
    }

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedData = result.slice(startIndex, endIndex);
    setTimeout(() => {
      resolve(paginatedData);
    }, 1500);
  });
};
