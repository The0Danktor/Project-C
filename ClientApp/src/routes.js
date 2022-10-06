import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/Login';

export const routes = [
    { path: '', name: 'homePage', component: <HomePage /> },
    { path: '/login', name: 'loginPage', component: <LoginPage /> },
];