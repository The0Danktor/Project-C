import { HomePage } from "./pages/HomePage";
import { NotFound } from "./pages/NotFound";
import { LoginPage } from "./pages/Login";
import { Knowledge } from "./pages/Knowledge";
import { Admin } from "./pages/Admin";
import { TicketPage } from "./pages/Ticket";
import { TestPage } from "./pages/TestPage";
import { Accounts } from "./pages/Accounts";
import { Machines } from "./pages/Machines";
import { TestPageProblems } from "./pages/TestPageProblems";
import { Settings } from "./pages/Settings"
import { Account } from "./pages/Account"
import { AdminHistory } from "./pages/AdminHistory.tsx";
import { AddImage } from "./pages/AddImage";

export const routes = [
  { path: "/", name: "homePage", component: <HomePage /> },
  { path: "/login", name: "loginPage", component: <LoginPage /> },
  { path: "/knowledge", name: "knowledgePage", component: <Knowledge /> },
  { path: "/admin", name: "adminPage", component: <Admin /> },
  { path: "/ticket", name: "ticketPage", component: <TicketPage />},
  { path: "/test", name: "testPage", component: <TestPage /> },
  { path: "/test/:Problem_Id", name: "testPage", component: <TestPageProblems/> },
  { path: "/*", name: "notFound", component: <NotFound /> },
  { path: "/admin/accounts", name: "accounts", component: <Accounts /> },
  { path: "/admin/machines", name: "machines", component: <Machines /> },
  { path: "/settings", name: "settings", component: <Settings /> },
  { path: "/account", name: "account", component: <Account /> },
  { path: "/admin/problems", name: "history", component: <AdminHistory /> },
  { path: "/addimage", name: "addimg", component: <AddImage /> },
];
