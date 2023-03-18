import { useEffect, useState, useRef } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Box } from "@mui/material";

export default function DataTable({ rows, headers, onViewAction }) {
  const actions = [
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => onViewAction(params.row.id)}
        >
          Edit
        </Button>
      ),
    },
  ];

  const [columns, setColumns] = useState(headers);
  const dataGridRef = useRef(null);

  useEffect(() => {
    const updateColumnWidths = () => {
      if (!dataGridRef.current) return;
      const containerWidth = dataGridRef.current.clientWidth;

      const newColumns = headers.map((column, index) => {
        // Calculate the column width based on the container width
        const newWidth = containerWidth * column.percent;
        return { ...column, width: newWidth };
      });

      setColumns([...newColumns, ...actions]);
    };

    // Update column widths initially
    updateColumnWidths();

    // Update column widths on window resize
    window.addEventListener("resize", updateColumnWidths);
    return () => {
      window.removeEventListener("resize", updateColumnWidths);
    };
  }, []);

  return (
    <Box width="100%" heigth="400px" ref={dataGridRef}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        sx={{ m: 1 }}
        style={{ width: "100%", height: "400px" }}
      />
    </Box>
  );
}
