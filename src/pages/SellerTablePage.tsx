// SellerTablePage.tsx
import { EntityTablePage } from "./EntityTablePage";

export const SellerTablePage = () => {
  return (
    <>
      <EntityTablePage
        title="مدیریت فروشندگان"
        entityKey="sellers"
        addRoute="/sellers/add"
        nextRoute="/admins"
        prevRoute="/users"
      />
    </>
  );
};
