import { useUserStore } from "../stores/userStore";
import { GenericTable } from "../components/tables/GenericTable";
import { userColumns } from "../components/tables/user.columns";
import { Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Add as AddIcon } from "@mui/icons-material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export const UserTablePage = () => {
  const navigate = useNavigate();

  const { data, removeUser } = useUserStore();
  const users = data.users;

  return (
    <>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {"مدیریت کاربران       "}
        </Typography>{" "}
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate("/users/add")}
        >
          افزودن
        </Button>
      </Toolbar>
      <GenericTable
        rows={users}
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
                onClick={() => removeUser(params.row.id, "users")}
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
          onClick={() => navigate("/sellers")}
        >
          بعدی
        </Button>
        <Button
          variant="contained"
          startIcon={<ArrowBackIosIcon />}
          onClick={() => navigate("/")}
        >
          قبلی
        </Button>
      </Toolbar>
    </>
  );
};
