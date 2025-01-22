import React from 'react';
import data from '@/config/fakeDb.json';
import { columnType, columns } from './Column';
import { DataTable } from './DataTable';

// First assert data as unknown, then to columnType[]
const tableData = data as unknown as columnType[];

export default function Table() {
  return (
    <div className="container mx-auto py-10">
    <DataTable columns={columns} data={tableData} />
  </div>
  );
}
