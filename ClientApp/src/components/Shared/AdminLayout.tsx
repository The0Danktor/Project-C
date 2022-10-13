import React from "react";
import { Outlet } from "react-router-dom";
import { AdminSidebar } from "./AdminSidebar";
import { Header } from "./Header";

export function Layout() {
  return (
    <div className="flex">
      <AdminSidebar />
      <div>
      <Header />
      hlkjhlkljhlk
      </div>
    </div>
  );
}
