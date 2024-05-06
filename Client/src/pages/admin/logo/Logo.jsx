import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { DataGrid, GridToolbarContainer, GridActionsCellItem, GridRowEditStopReasons, GridToolbarQuickFilter } from "@mui/x-data-grid";
import Swal from "sweetalert2";
import { getLogo, deleteImage, changeLogo } from "../../../api/ItemApi";
import { btnValue, deleteForm, changeForm, widthTable } from "../../../enum/EnumApi";
import AddLogo from "../../../components/admin/edit/AddLogo";
import SideBar from "../../../components/admin/sideBar/SideBar";
import "../../../components/admin/table/Table.css";
import "./Logo.css";

export default function Logo() {
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    async function fetchLogo() {
      const data = await getLogo();
      setRows(data || []);
    }
    fetchLogo();
  }, []);

  const handleEditClick = (id) => () => {
    Swal.fire({
      title: changeForm.title,
      text: changeForm.text,
      icon: changeForm.icon,
      showCancelButton: true,
      confirmButtonColor: changeForm.confirmBtnColor,
      cancelButtonColor: changeForm.cancelBtnColor,
      confirmButtonText: changeForm.confirmBtnDelete,
    }).then((result) => {
      if (result.isConfirmed) {
        changeLogo(id);
        Swal.fire({
          title: changeForm.resultTitle,
          icon: changeForm.resultIcon,
        });
        window.location.reload();
      }
    });
  };

  const handleDeleteClick = (id) => () => {
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
        deleteImage(id);
        setRows(rows.filter((row) => row.id !== id));
        Swal.fire({
          title: deleteForm.resultTitle,
          icon: deleteForm.resultIcon,
        });
      }
    });
  };

  const getActions = ({ id }) => [
    <GridActionsCellItem
      icon={<CheckCircleIcon />}
      label="Edit"
      onClick={handleEditClick(id)}
      color="inherit"
    />,
    <GridActionsCellItem
      icon={<DeleteIcon />}
      label="Delete"
      onClick={handleDeleteClick(id)}
      color="inherit"
    />,
  ];

  const columns = [
    {
      field: "imageUrl",
      headerName: "Image",
      width: widthTable.l,
      renderCell: (rows) => <img src={rows.value} />,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: widthTable.xxl,
      getActions,
    },
  ];

  const HandleToolbar = () => (
    <GridToolbarContainer sx={{ justifyContent: "space-between" }}>
      <Button
        color={btnValue.colorAdd}
        startIcon={<AddIcon />}
        onClick={() => setIsPopupVisible(true)}
      >
        Add record
      </Button>
      <GridToolbarQuickFilter />
    </GridToolbarContainer>
  );

  return (
    <Box className="logo-admin">
      <SideBar name="Logo" />
      <Box
        component="main"
        sx={{
          padding: 10,
          justifyContent: "center",
          height: "98vh",
          width: "100%",
          "& .actions": { color: "text.secondary" },
          "& .textPrimary": { color: "text.primary" },
          display: "table",
          tableLayout: "fixed",
        }}
      >
        <div className="data-grid-container">
          <DataGrid
            rowHeight={200}
            rows={rows}
            columns={columns}
            rowModesModel={rowModesModel}
            onRowModesModelChange={setRowModesModel}
            processRowUpdate={(newRow) => {
              const updatedRow = { ...newRow, isNew: false };
              setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
              return updatedRow;
            }}
            slots={{ toolbar: HandleToolbar }}
            initialState={{
              pagination: { paginationModel: { pageSize: 5 } },
            }}
            pageSizeOptions={[5, 10, 25]}
          />
        </div>
      </Box>
      {isPopupVisible && (
        <div className="edit-show active">
          <AddLogo setIsPopupVisible={setIsPopupVisible} />
        </div>
      )}
    </Box>
  );
}
