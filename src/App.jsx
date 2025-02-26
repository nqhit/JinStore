import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import routes from './routes/routes';
import { Fragment } from 'react';

const App = () => {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <Routes>
          {routes.map(({ path, page: Page }, index) => (
            <Route key={index} path={path} element={<Page />} />
          ))}
        </Routes>
      </div>
      <Footer />
    </Fragment>
  );
};

export default App;
