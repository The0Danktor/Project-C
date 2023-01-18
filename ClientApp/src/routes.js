import { HomePage } from "./pages/HomePage";
import { NotFound } from "./pages/NotFound";
import { LoginPage } from "./pages/Login";
import { Admin } from "./pages/Admin";
import { TicketPage } from "./pages/Ticket";
import { TestPage } from "./pages/TestPage";
import { Accounts } from "./pages/Accounts";
import {AdminHistory} from "./pages/AdminHistory.tsx";
import { Machines } from "./pages/Machines";
import { MachineProblems } from "./pages/MachineProblems";
import { Machines2 } from "./pages/Machines2";
import { Settings } from "./pages/Settings"
import { Account } from "./pages/Account"
import { AddImage } from "./pages/AddImage";
import { FinalForm } from "./pages/FinalForm";
import { Companys } from "./pages/Companys";
import { Departments } from "./pages/Departments";


export const routes = [
  { path: "/", name: "homePage", component: <HomePage /> },
  { path: "/login", name: "loginPage", component: <LoginPage /> },
  { path: "/knowledge", name: "knowledgePage", component: <Machines /> },
  { path: "/admin", name: "adminPage", component: <Admin /> },
  { path: "/ticket", name: "ticketPage", component: <TicketPage />},
  { path: "/test", name: "testPage", component: <TestPage /> },
  { path: "/admin/accounts", name: "accounts", component: <Accounts /> },
  { path: "/admin/machines", name: "Machines2", component: <Machines2 /> },
  { path: "/admin/problems", name: "history", component: <AdminHistory /> },
  { path: "/admin/companys", name: "companys", component:  <Companys/> },
  { path: "/admin/Departments", name: "Department", component:  <Departments/> },
  { path: "/machines", name: "machines", component: <Machines /> },
  { path: "/machineproblems/:Problem_Id", name: "machineproblems", component: <MachineProblems /> },
  { path: "/settings", name: "settings", component: <Settings /> },
  { path: "/account", name: "account", component: <Account /> },
  { path: "/addimage", name: "addimg", component: <AddImage /> },
  { path: "/finalform", name: "finalform", component: <FinalForm /> },
  { path: "/*", name: "notFound", component: <NotFound /> }
];

