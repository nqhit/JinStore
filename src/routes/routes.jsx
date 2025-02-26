import Home from '@pages/Home';
import Login from '@pages/Login';
import Register from '@pages/Register';
import About from '@pages/About';
import Contact from '@pages/Contact';
import NotFound from '@pages/NotFound';
const routes = [
  {
    path: '/',
    page: Home,
  },
  {
    path: '/login',
    page: Login,
  },
  {
    path: '/register',
    page: Register,
  },
  {
    path: '/about',
    page: About,
  },
  {
    path: '/contact',
    page: Contact,
  },
  {
    path: '/notfound',
    page: NotFound,
  },
  {
    path: '*', // Bắt tất cả các đường dẫn không khớp
    page: NotFound,
  },
];

export default routes;
