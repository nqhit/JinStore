import { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Xử lý đăng ký tài khoản ở đây
    console.log({ username, email, password });
  };

  return (
    <div className="register-container">
      <h1 className="register-heading">Register</h1>
      <p className="register-subtext">
        There are many advantages to creating an account: the payment process is faster, shipment tracking is possible
        and much more.
      </p>
      <form className="register-form" onSubmit={handleRegister}>
        <div className="register-field">
          <label>Username *</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="register-input"
          />
        </div>
        <div className="register-field">
          <label>Email address *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="register-input"
          />
        </div>
        <div className="register-field">
          <label>Password *</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="register-input"
          />
        </div>
        <div className="register-field">
          <label>Confirm Password *</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="register-input"
          />
        </div>
        <p className="privacy-text">
          Your personal data will be used to support your experience throughout this website, to manage access to your
          account, and for other purposes described in our
          <Link to="/privacy-policy"> privacy policy</Link>.
        </p>
        <button type="submit" className="btn register-button">
          Register
        </button>
      </form>
      <p>
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
}

export default Register;
