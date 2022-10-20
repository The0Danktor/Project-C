import { HomePage } from "./pages/HomePage";
import { NotFound } from "./pages/NotFound";
import { LoginPage } from "./pages/Login";
import { Knowledge } from "./pages/Knowledge";
import { Admin } from "./pages/Admin";
import { TicketPage } from "./pages/Ticket";
import { TestPage } from "./pages/TestPage";
import { Machines } from "./pages/Machines";
import { MachineProblems } from "./pages/MachineProblems";

export const routes = [
  { path: "/", name: "homePage", component: <HomePage /> },
  { path: "/login", name: "loginPage", component: <LoginPage /> },
  { path: "/knowledge", name: "knowledgePage", component: <Knowledge /> },
  { path: "/admin", name: "adminPage", component: <Admin /> },
  { path: "/ticket", name: "ticketPage", component: <TicketPage />},
  { path: "/test", name: "testPage", component: <TestPage /> },
  { path: "/*", name: "notFound", component: <NotFound /> },
  { path: "/machines", name: "machines", component: <Machines /> },
  { path: "/machineproblems", name: "machineproblems", component: <MachineProblems /> },
];