import { HomePage } from './pages/HomePage';
import { NotFound} from './pages/NotFound';
import { LoginPage } from './pages/Login';
import { Knowledge } from './pages/Knowledge';
import { Admin } from './pages/Admin';

export const routes = [
    { path: '/', name: 'homePage', component: <HomePage /> },
    { path: '/login', name: 'loginPage', component: <LoginPage /> },
    { path: '/knowledge', name: 'knowledgePage', component: <Knowledge /> },
    { path: '/admin', name: 'adminPage', component: <Admin /> },
    { path: '/*', name: 'notFound', component: <NotFound /> },
    
];