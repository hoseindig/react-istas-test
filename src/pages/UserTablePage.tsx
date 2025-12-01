import { EntityTablePage } from "./EntityTablePage";

export const UserTablePage = () => {
  return (
    <>
      <EntityTablePage
        title="مدیریت کاربران"
        entityKey="users"
        addRoute="/users/add"
        nextRoute="/sellers"
      />
    </>
  );
};
