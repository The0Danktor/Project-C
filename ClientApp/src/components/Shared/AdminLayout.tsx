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
        <div className="flex flex-col mt-10 mx-10 w-40 h-40 bg-neutral hover:bg-slate-100 shadow-lg rounded-lg">
            
        </div>
      </div>
    </div>
  );
}
