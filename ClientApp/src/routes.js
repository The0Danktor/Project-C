import { HomePage } from "./pages/HomePage";
import { NotFound } from "./pages/NotFound";
import { LoginPage } from "./pages/Login";
import { Knowledge } from "./pages/Knowledge";
import { Admin } from "./pages/Admin";
import { TestPage } from "./pages/TestPage";
import { TestPageProblems } from "./pages/TestPageProblems";

export const routes = [
  { path: "/", name: "homePage", component: <HomePage /> },
  { path: "/login", name: "loginPage", component: <LoginPage /> },
  { path: "/knowledge", name: "knowledgePage", component: <Knowledge /> },
  { path: "/admin", name: "adminPage", component: <Admin /> },
  { path: "/test", name: "testPage", component: <TestPage /> },
  { path: "/test/:Problem_Id", name: "testPage", component: <TestPageProblems/> },
  { path: "/*", name: "notFound", component: <NotFound /> },
];
