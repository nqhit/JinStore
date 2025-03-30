import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '@services/AuthService.jsx';

import Button from '@components/ui/Button';
function FormRegister() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    await register(user, dispatch, navigate);
  };

  return (
    <Fragment>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="register-field">
          <label>Username *</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
            className="register-input"
          />
        </div>
        <div className="register-field">
          <label>Email address *</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="register-input"
          />
        </div>
        <div className="register-field">
          <label>Password *</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="register-input"
          />
        </div>
        <div className="register-field">
          <label>Confirm Password *</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="register-input"
          />
        </div>
        <p className="privacy-text">
          Dữ liệu cá nhân của bạn sẽ được sử dụng để hỗ trợ trải nghiệm của bạn trên trang web này, quản lý quyền truy
          cập vào tài khoản của bạn và cho các mục đích khác được mô tả trong
          <Link to="/privacy-policy"> chính sách bảo mật</Link> của chúng tôi.
        </p>
        <Button type="submit" className="btn register-button">
          Register
        </Button>
      </form>
    </Fragment>
  );
}

export default FormRegister;
