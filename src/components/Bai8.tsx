import React, { useReducer, useState } from 'react';

const initialState = {
  loading: false,
  success: false,
  error: false,
  errorMessage: ''
};

const loginReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        loading: true,
        success: false,
        error: false,
        errorMessage: ''
      };
    case 'LOGIN_SUCCESS':
      return {
        loading: false,
        success: true,
        error: false,
        errorMessage: ''
      };
    case 'LOGIN_ERROR':
      return {
        loading: false,
        success: false,
        error: true,
        errorMessage: action.message
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

export default function LoginForm() {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    dispatch({ type: 'LOGIN_START' });

    setTimeout(() => {
      if (username === 'admin' && password === '123456') {
        dispatch({ type: 'LOGIN_SUCCESS' });
      } else {
        dispatch({ 
          type: 'LOGIN_ERROR', 
          message: 'Tên đăng nhập hoặc mật khẩu không đúng!' 
        });
      }
    }, 2000);
  };

  const handleReset = () => {
    dispatch({ type: 'RESET' });
    setUsername('');
    setPassword('');
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '50px auto',
      padding: '40px',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '30px'
      }}>
        <div style={{
          fontSize: '24px',
          marginRight: '10px'
        }}>
          👤
        </div>
        <h2 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#333',
          margin: '0'
        }}>
          Đăng nhập
        </h2>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{
          display: 'block',
          fontSize: '14px',
          color: '#666',
          marginBottom: '8px'
        }}>
          Tên người dùng
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Nhập tên..."
          disabled={state.loading}
          style={{
            width: '100%',
            padding: '12px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '16px',
            backgroundColor: state.loading ? '#f5f5f5' : '#424242',
            color: 'white',
            boxSizing: 'border-box'
          }}
        />
      </div>

      <div style={{ marginBottom: '25px' }}>
        <label style={{
          display: 'block',
          fontSize: '14px',
          color: '#666',
          marginBottom: '8px'
        }}>
          Mật khẩu
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Nhập mật khẩu..."
          disabled={state.loading}
          style={{
            width: '100%',
            padding: '12px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '16px',
            backgroundColor: state.loading ? '#f5f5f5' : '#424242',
            color: 'white',
            boxSizing: 'border-box'
          }}
        />
      </div>

      <button
        onClick={handleLogin}
        disabled={state.loading || !username || !password}
        style={{
          width: '100%',
          padding: '12px',
          backgroundColor: state.loading || !username || !password ? '#ccc' : '#1976d2',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: state.loading || !username || !password ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px'
        }}
      >
        {state.loading && (
          <div style={{
            width: '16px',
            height: '16px',
            border: '2px solid #ffffff',
            borderTop: '2px solid transparent',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}></div>
        )}
        {state.loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
      </button>

      {state.loading && (
        <div style={{
          marginTop: '15px',
          textAlign: 'center',
          color: '#666',
          fontSize: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px'
        }}>
          <span>⏳</span>
          Đang đăng nhập...
        </div>
      )}

      {state.success && (
        <div style={{
          marginTop: '15px',
          padding: '12px',
          backgroundColor: '#d4edda',
          color: '#155724',
          border: '1px solid #c3e6cb',
          borderRadius: '4px',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px'
        }}>
          <span>✅</span>
          Đăng nhập thành công!
        </div>
      )}

      {state.error && (
        <div style={{
          marginTop: '15px',
          padding: '12px',
          backgroundColor: '#f8d7da',
          color: '#721c24',
          border: '1px solid #f5c6cb',
          borderRadius: '4px',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px'
        }}>
          <span>❌</span>
          {state.errorMessage}
        </div>
      )}

      <div style={{
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#f8f9fa',
        borderRadius: '4px',
        fontSize: '12px',
        color: '#666',
        textAlign: 'center'
      }}>
        <p style={{ margin: '0 0 5px 0' }}>
           <strong>Demo:</strong> admin / 123456
        </p>

      </div>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}