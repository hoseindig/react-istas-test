import { EntityTablePage } from "./EntityTablePage";

export const AdminTablePage = () => {
  // const navigate = useNavigate();

  // const admins = data.admins;
  return (
    <>
      <EntityTablePage
        title="مدیریت ادمین ها"
        entityKey="admins"
        addRoute="/admins/add"
        // nextRoute="/sellers"
        prevRoute="/sellers"
      />
    </>
  );
};
