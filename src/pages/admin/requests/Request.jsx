import React, { useState, useEffect} from "react";
import Box from "@mui/material/Box";
import { useDemoData } from "@mui/x-data-grid-generator";
import {
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import { getContact, deleteContactById } from "../../../api/ItemApi";
import {
  numberLength,
  queryDefault,
  deleteForm,
  widthTable,
} from "../../../enum/EnumApi";
import "../../../components/admin/table/Table.css";
import SideBar from "../../../components/admin/sideBar/SideBar";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import Swal from "sweetalert2";

export default function AdRequest() {
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});

  const payload = {
    pageSize: numberLength.max,
    pageNumber: queryDefault.pageNumberDefault,
  };
  //call api get data
  useEffect(() => {
    getItem();
    async function getItem() {
      const data = await getContact(payload);
      if (data) {
        setRows(data.items);
      } else setRows([rows.id]);
    }
  }, [rows.id]);

  const { data } = useDemoData({
    dataSet: "Commodity",
  });
  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };
  const handleDeleteClick = (id) => () => {
    Remove(id);
    async function Remove(id) {
      Swal.fire({
        title: deleteForm.title,
        text: deleteForm.text,
        icon: deleteForm.icon,
        showCancelButton: true,
        confirmButtonColor: deleteForm.confirmBtnColor,
        cancelButtonColor: deleteForm.cancelBtnColor,
        confirmButtonText: deleteForm.confirmBtnDelete,
      }).then((result) => {
        if (result.isConfirmed) {
          deleteContactById(id);
          setRows(rows.filter((row) => row.id !== id));
          Swal.fire({
            title: deleteForm.resultTitle,
            icon: deleteForm.resultIcon,
          });
        }
      });
    }
  };

  const getActions = ({ id }) => {
    return [
      <GridActionsCellItem
        icon={<DeleteIcon />}
        label="Delete"
        onClick={handleDeleteClick(id)}
        color="inherit"
      />,
    ];
  };

  const columns = [
    {
      field: "name",
      headerName: "Name",
      minWidth: widthTable.s,
      maxWidth: widthTable.m,
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      type: "text",
      minWidth: widthTable.m,
      maxWidth: widthTable.xl,
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone",
      type: "text",
      minWidth: widthTable.s,
      maxWidth: widthTable.m,
      flex: 1,
    },
    {
      field: "subject",
      headerName: "Subject",
      type: "text",
      minWidth: widthTable.m,
      maxWidth: widthTable.l,
      flex: 1,
    },
    {
      field: "message",
      headerName: "Message",
      type: "text",
      width: widthTable.xl,
      minWidth: widthTable.m,
      maxWidth: widthTable.xxl,
      flex: 1,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: widthTable.ss,
      cellClassName: "actions",
      getActions,
      minWidth: widthTable.ss,
      maxWidth: widthTable.s,
      flex: 1,
    },
  ];

  return (
    <div style={{ display: "flex" }}>
    <Box>
      <SideBar name="Request" />
    </Box>
      <Box
        component="main"
        sx={{
          padding: 10,
          justifyContent: "center",
          height: "98vh",
          width: "100%",
          "& .actions": {
            color: "text.secondary",
          },
          "& .textPrimary": {
            color: "text.primary",
          },
        }}
      >
        <div className="data-grid-container">
        <DataGrid
          rowHeight={100}
          rows={rows}
          columns={columns}
          rowModesModel={rowModesModel}
          onRowModesModelChange={handleRowModesModelChange}
          onRowEditStop={handleRowEditStop}
          processRowUpdate={processRowUpdate}
          initialState={{
            ...data.initialState,
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10, 25]}
          slotProps={{
            toolbar: { setRows, setRowModesModel },
          }}
          slots={{
            toolbar: HandleToolbar,
          }}
        />
        </div>
      </Box>
    </div>
  );
  function HandleToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarQuickFilter/>
      </GridToolbarContainer>
    );
  }
}
