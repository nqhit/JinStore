import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@components/ui/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);

    if (rememberMe) {
      navigate('/');
    } else {
      navigate('/Login');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">
        Login <span className="register">Register</span>
      </h2>
      <p className="login-subtext">If you have an account, sign in with your username or email address.</p>
      <form onSubmit={handleLogin}>
        <div className="login-field">
          <label>Username or email address *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="login-input"
          />
        </div>
        <div className="login-field">
          <label>Password *</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
          />
        </div>
        <div className="login-checkbox-container">
          <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} id="remember-me" />
          <label htmlFor="remember-me" className="login-label">
            Remember me
          </label>
          <a href="#" className="login-link">
            Lost your password?
          </a>
        </div>
        <Button title="Login" type="submit" />
      </form>
    </div>
  );
};

export default Login;
