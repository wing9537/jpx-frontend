import { useEffect, useState, useRef } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

function BaseTable({
  rows,
  headers,
  viewAction = () => {},
  deleteAction = () => {},
}) {
  const { t } = useTranslation("common");

  const actions = {
    field: "actions",
    headerName: t("field.action"),
    sortable: false,
    renderCell: (params) => (
      <>
        <Button
          sx={{ mx: "5px" }}
          variant="contained"
          color="primary"
          onClick={() => viewAction(params.row.id)}
        >
          {t("button.edit")}
        </Button>
        <Button
          sx={{ mx: "5px" }}
          variant="contained"
          color="error"
          onClick={() => deleteAction(params.row.id)}
        >
          {t("button.delete")}
        </Button>
      </>
    ),
  };

  const [columns, setColumns] = useState(headers);
  const dataGridRef = useRef(null);

  useEffect(() => {
    const updateColumnWidths = () => {
      if (!dataGridRef.current) return;
      const containerWidth = dataGridRef.current.clientWidth - 2;
      let remainingWidth = containerWidth;

      const newColumns = headers.map((column, index) => {
        // Calculate the column width based on the container width
        const newWidth = containerWidth * column.width;
        remainingWidth = remainingWidth - newWidth;
        return { ...column, width: newWidth };
      });
      newColumns.push({ ...actions, width: remainingWidth });
      setColumns(newColumns);
    };

    // Update column widths initially
    updateColumnWidths();

    // Update column widths on window resize
    window.addEventListener("resize", updateColumnWidths);
    return () => {
      window.removeEventListener("resize", updateColumnWidths);
    };
  }, [headers]);

  return (
    <Box width="98%" ref={dataGridRef}>
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

export default BaseTable;
