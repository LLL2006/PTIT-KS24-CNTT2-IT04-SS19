import React, { useState, useEffect } from 'react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: ''
  });
  
  const [errors, setErrors] = useState({
    fullName: '',
    email: ''
  });
  
  const [isFormValid, setIsFormValid] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    const newErrors = {
      fullName: '',
      email: ''
    };

    if (formData.fullName.trim() === '') {
      newErrors.fullName = 'Trường này là bắt buộc';
    }

    if (formData.email.trim() === '') {
      newErrors.email = 'Trường này là bắt buộc';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(error => error !== '');
    const hasEmptyFields = formData.fullName.trim() === '' || formData.email.trim() === '';
    setIsFormValid(!hasErrors && !hasEmptyFields);
  }, [formData]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    if (isFormValid) {
      alert('Gửi thành công!');
      setFormData({
        fullName: '',
        email: ''
      });
    }
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '32px auto',
      padding: '24px',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '24px'
      }}>
        <div style={{
          width: '32px',
          height: '32px',
          backgroundColor: '#f97316',
          borderRadius: '4px',
          marginRight: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <svg 
            style={{ width: '20px', height: '20px', color: 'white' }} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <h1 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#1f2937',
          margin: 0
        }}>
          Đăng ký thông tin
        </h1>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <label style={{
            display: 'block',
            fontSize: '14px',
            fontWeight: '500',
            color: '#374151',
            marginBottom: '8px'
          }}>
            Họ tên
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            placeholder="Nhập họ tên..."
            style={{
              width: '100%',
              padding: '12px 16px',
              border: errors.fullName ? '2px solid #ef4444' : '2px solid #4b5563',
              borderRadius: '8px',
              backgroundColor: '#374151',
              color: 'white',
              fontSize: '16px',
              outline: 'none',
              boxSizing: 'border-box',
              transition: 'border-color 0.2s',
              '::placeholder': {
                color: '#9ca3af'
              }
            }}
            onFocus={(e) => {
              e.target.style.borderColor = errors.fullName ? '#ef4444' : '#3b82f6';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = errors.fullName ? '#ef4444' : '#4b5563';
            }}
          />
          {errors.fullName && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '8px',
              color: '#ef4444',
              fontSize: '14px'
            }}>
              <svg 
                style={{ width: '16px', height: '16px', marginRight: '4px' }} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
              </svg>
              {errors.fullName}
            </div>
          )}
        </div>

        <div>
          <label style={{
            display: 'block',
            fontSize: '14px',
            fontWeight: '500',
            color: '#374151',
            marginBottom: '8px'
          }}>
            Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="example@gmail.com"
            style={{
              width: '100%',
              padding: '12px 16px',
              border: errors.email ? '2px solid #ef4444' : '2px solid #4b5563',
              borderRadius: '8px',
              backgroundColor: '#374151',
              color: 'white',
              fontSize: '16px',
              outline: 'none',
              boxSizing: 'border-box',
              transition: 'border-color 0.2s'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = errors.email ? '#ef4444' : '#3b82f6';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = errors.email ? '#ef4444' : '#4b5563';
            }}
          />
          {errors.email && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '8px',
              color: '#ef4444',
              fontSize: '14px'
            }}>
              <svg 
                style={{ width: '16px', height: '16px', marginRight: '4px' }} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
              </svg>
              {errors.email}
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={!isFormValid}
          style={{
            width: '100%',
            padding: '12px 16px',
            borderRadius: '8px',
            fontWeight: '500',
            color: 'white',
            fontSize: '16px',
            border: 'none',
            cursor: isFormValid ? 'pointer' : 'not-allowed',
            backgroundColor: isFormValid ? '#3b82f6' : '#9ca3af',
            opacity: isFormValid ? 1 : 0.6,
            transition: 'all 0.2s',
            transform: isFormValid ? 'scale(1)' : 'scale(1)'
          }}
          onMouseEnter={(e) => {
            if (isFormValid) {
              e.target.style.backgroundColor = '#2563eb';
              e.target.style.transform = 'scale(1.05)';
            }
          }}
          onMouseLeave={(e) => {
            if (isFormValid) {
              e.target.style.backgroundColor = '#3b82f6';
              e.target.style.transform = 'scale(1)';
            }
          }}
        >
          Gửi
        </button>
      </div>
    </div>
  );
}