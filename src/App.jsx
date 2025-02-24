import { Routes, Route /* , useLocation  */ } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
// import Notification__bar from './components/layout/Notificationbar';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import { Fragment } from 'react';

const App = () => {
  /*   const location = useLocation();
  const isLoginPage = location.pathname === '/login'; */

  return (
    <Fragment>
      {/* {!isLoginPage && <Notification__bar />} */}
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </Fragment>
  );
};

export default App;
