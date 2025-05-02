interface AlertProps {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
}

const Alert: React.FC<AlertProps> = ({ type, message }) => {
  const alertStyles = {
    padding: '15px',
    borderRadius: '4px',
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };

  const getAlertType = () => {
    switch(type) {
      case 'success':
        return {
          backgroundColor: '#d4edda',
          color: '#155724',
          border: '1px solid #c3e6cb'
        };
      case 'error':
        return {
          backgroundColor: '#f8d7da',
          color: '#721c24', 
          border: '1px solid #f5c6cb'
        };
      case 'warning':
        return {
          backgroundColor: '#fff3cd',
          color: '#856404',
          border: '1px solid #ffeeba'
        };
      case 'info':
      default:
        return {
          backgroundColor: '#cce5ff',
          color: '#004085',
          border: '1px solid #b8daff'
        };
    }
  };

  return (
    <div style={{...alertStyles, ...getAlertType()}}>
      <span>{message}</span>
      <button 
        onClick={() => {/* handle close */}}
        style={{
          background: 'none',
          border: 'none',
          color: 'inherit',
          cursor: 'pointer',
          fontSize: '1.25rem',
          fontWeight: 'bold'
        }}
      >
        ×
      </button>
    </div>
  );
};

export default Alert;
