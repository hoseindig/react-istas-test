import React from "react";
import { DataGrid, type GridColDef, type GridRowsProp } from "@mui/x-data-grid";

import { Paper } from "@mui/material";

interface GenericTableProps<T> {
  rows: T[];
  columns: GridColDef[];
  onSelectionChange?: (ids: string[]) => void;
}

export function GenericTable<T extends { id: string }>({
  rows,
  columns,
  onSelectionChange,
}: GenericTableProps<T>) {
  return (
    <Paper sx={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
        onRowSelectionModelChange={(ids) =>
          onSelectionChange?.(ids as string[])
        }
        pageSizeOptions={[5, 10, 25]}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
      />
    </Paper>
  );
}
