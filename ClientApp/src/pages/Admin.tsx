import RootState from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "../components/Shared/AdminLayout";

export function Admin() {
  return (
    <div>
      <Layout />
    </div>
  );
}
