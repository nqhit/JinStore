import { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

import FormLogin from '@components/common/FormLogin.jsx';
import SocialAccount from '@components/common/SocialAccount.jsx';
import FormDescribe from '@components/common/formDescribe';

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <section className="login-container">
        <FormDescribe>
          Hãy đăng nhập để khám phá thế giới của chúng tôi và cùng nhau xây dựng một tương lai bền vững.
        </FormDescribe>
        <div className="login-main">
          <h1 className="login-heading">Đăng nhập</h1>
          <p className="login-subtext">Vui lòng nhập thông tin đăng nhập của bạn</p>
          <FormLogin />
          <div className="item-other">
            <span className="line-left"></span>
            <span className="text-or">OR</span>
            <span className="line-right"></span>
          </div>
          <SocialAccount />
          <p>
            Don&apos;t have an account? <Link to="/register">Sign up</Link>
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default Login;
