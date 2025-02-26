import Home from '@pages/Home';
import Login from '@pages/Login';
import Register from '@pages/Register';
import About from '@pages/About';
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
];

export default routes;
