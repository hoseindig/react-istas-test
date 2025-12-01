import { useUserStore } from "../stores/userStore";
import { GenericTable } from "../components/tables/GenericTable";
import { userColumns } from "../components/tables/user.columns";
import { Button, Toolbar, Typography } from "@mui/material";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { Add as AddIcon } from "@mui/icons-material";

export const AdminTablePage = () => {
  const navigate = useNavigate();

  const { data, removeUser } = useUserStore();
  const admins = data.admins;
  return (
    <>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {"مدیریت  ادمین ها       "}
        </Typography>{" "}
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={() => navigate("/admins/add")}
        >
          افزودن
        </Button>
      </Toolbar>

      <GenericTable
        rows={admins}
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
          startIcon={<ArrowBackIosIcon />}
          onClick={() => navigate("/sellers")}
        >
          قبلی
        </Button>
        {/* <Button
          variant="contained"
          startIcon={<ArrowForwardIosIcon />}
          onClick={() => navigate("/seller")}
        >
          بعدی
        </Button> */}
      </Toolbar>
    </>
  );
};
