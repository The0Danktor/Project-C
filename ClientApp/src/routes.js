import { HomePage } from './pages/HomePage';
import { NotFound} from './pages/NotFound';

export const routes = [
    { path: '/', name: 'homePage', component: <HomePage /> },
    { path: '/*', name: 'notFound', component: <NotFound /> }
];