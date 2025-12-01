import { useUserStore } from "../stores/userStore";
import { GenericTable } from "../components/tables/GenericTable";
import { userColumns } from "../components/tables/user.columns";
import { Button, Toolbar, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Add as AddIcon } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

export const SellerTablePage = () => {
  const navigate = useNavigate();

  const { data, removeUser } = useUserStore();
  const sellers = data.sellers;
  return (
    <>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {"مدیریت فروشندگان       "}
        </Typography>{" "}
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate("/sellers/add")}
        >
          افزودن
        </Button>
      </Toolbar>

      <GenericTable
        rows={sellers}
        columns={[
          ...userColumns,
          {
            field: "actions",
            headerName: "عملیات",
            width: 130,
            renderCell: (params) => (
              <Button
                variant="outlined"
                color="error"
                onClick={() => removeUser(params.row.id)}
              >
                حذف
              </Button>
            ),
          },
        ]}
        onSelectionChange={(ids) => {
          console.log("Selected:", ids);
        }}
      />

      <Toolbar>
        <Button
          variant="contained"
          startIcon={<ArrowForwardIosIcon />}
          onClick={() => navigate("/admins")}
        >
          بعدی
        </Button>
        <Button
          variant="contained"
          startIcon={<ArrowBackIosIcon />}
          onClick={() => navigate("/users")}
        >
          قبلی
        </Button>
      </Toolbar>
    </>
  );
};
