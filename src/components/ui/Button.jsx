import '@assets/styles/ui/button.css';
function Button({ onClick, children, type = 'button', className = 'btn' }) {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default Button;
