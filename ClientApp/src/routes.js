import { HomePage } from "./pages/HomePage";
import { NotFound } from "./pages/NotFound";
import { LoginPage } from "./pages/Login";
import { Knowledge } from "./pages/Knowledge";
import { Admin } from "./pages/Admin";
import { TestPage } from "./pages/TestPage";
import { Accounts } from "./pages/Accounts";
import { Machines } from "./pages/Machines2";
import {AdminHistory} from "./pages/AdminHistory.tsx";

export const routes = [
  { path: "/", name: "homePage", component: <HomePage /> },
  { path: "/login", name: "loginPage", component: <LoginPage /> },
  { path: "/knowledge", name: "knowledgePage", component: <Knowledge /> },
  { path: "/admin", name: "adminPage", component: <Admin /> },
  { path: "/test", name: "testPage", component: <TestPage /> },
  { path: "/*", name: "notFound", component: <NotFound /> },
  { path: "/admin/accounts", name: "accounts", component: <Accounts /> },
  { path: "/admin/machines", name: "machines", component: <Machines /> },
  { path: "/admin/problems", name: "history", component: <AdminHistory /> },
];
