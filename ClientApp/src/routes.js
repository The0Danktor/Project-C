import { HomePage } from './pages/HomePage';
import { NotFound} from './pages/NotFound';
import { LoginPage } from './pages/Login';

export const routes = [
    { path: '/', name: 'homePage', component: <HomePage /> },
    { path: '/*', name: 'notFound', component: <NotFound /> },
    { path: '/login', name: 'loginPage', component: <LoginPage /> }
];