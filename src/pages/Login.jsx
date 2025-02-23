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
      <div className="login-heading">
        Login <span className="register">Register</span>
      </div>
      <p className="login-subtext">If you have an account, sign in with your username or email address.</p>
      <form className="login-form" onSubmit={handleLogin}>
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
          <div className="login-checkbox-left">
            <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} id="remember-me" />
            <label htmlFor="remember-me" className="login-label">
              Remember me
            </label>
          </div>
          <a href="#" className="login-link">
            Lost your password?
          </a>
        </div>
        <Button to="/Login" type="submit">
          Login
        </Button>
      </form>
      <p>
        No account?{' '}
        <a href="#" className="create-account-link">
          Create an account.
        </a>
      </p>
    </div>
  );
};

export default Login;
