// src/components/pages/EntityTablePage.tsx
import { Button, Toolbar, Typography } from "@mui/material";
import { GenericTable } from "../components/tables/GenericTable";
import { userColumns } from "../components/tables/user.columns";
import { Add as AddIcon } from "@mui/icons-material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../stores/userStore";
import { ConfirmDeleteDialog } from "../components/common/ConfirmDeleteDialog";
import { useDeleteConfirm } from "../hooks/useDeleteConfirm";

interface EntityTablePageProps {
  title: string;
  entityKey: "users" | "sellers" | "admins"; // کلید در استور
  addRoute: string; // مثلاً "/users/add"
  prevRoute?: string; // اختیاری
  nextRoute?: string; // اختیاری
}

export const EntityTablePage: React.FC<EntityTablePageProps> = ({
  title,
  entityKey,
  addRoute,
  prevRoute,
  nextRoute,
}) => {
  const navigate = useNavigate();
  const { data, removeUser } = useUserStore();
  const entities = data[entityKey];

  const { open, entityId, entityName, showConfirm, hideConfirm } =
    useDeleteConfirm();

  const handleDelete = () => {
    if (entityId) {
      removeUser(entityId, entityKey);
      hideConfirm();
    }
  };

  return (
    <>
      {/* هدر */}
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <Button
          variant="contained"
          endIcon={<AddIcon />}
          onClick={() => navigate(addRoute)}
        >
          افزودن
        </Button>
      </Toolbar>

      {/* جدول */}
      <GenericTable
        rows={entities}
        columns={[
          ...userColumns,
          {
            field: "actions",
            headerName: "عملیات",
            width: 150,
            sortable: false,
            filterable: false,
            renderCell: (params) => (
              <Button
                variant="outlined"
                color="error"
                size="small"
                onClick={() =>
                  showConfirm(
                    params.row.id,
                    `${params.row.firstName} ${params.row.lastName}`
                  )
                }
              >
                حذف
              </Button>
            ),
          },
        ]}
      />

      {/* فوتر با دکمه‌های قبلی/بعدی */}
      {(prevRoute || nextRoute) && (
        <Toolbar sx={{ justifyContent: "space-between", mt: 2 }}>
          {prevRoute && (
            <Button
              variant="contained"
              startIcon={<ArrowForwardIosIcon />}
              onClick={() => navigate(prevRoute)}
            >
              قبلی
            </Button>
          )}
          {nextRoute && (
            <Button
              variant="contained"
              endIcon={<ArrowBackIosIcon />}
              onClick={() => navigate(nextRoute)}
            >
              بعدی
            </Button>
          )}
        </Toolbar>
      )}

      {/* دیالوگ تأیید حذف */}
      <ConfirmDeleteDialog
        open={open}
        entityName={entityName || "این مورد"}
        onConfirm={handleDelete}
        onCancel={hideConfirm}
      />
    </>
  );
};
