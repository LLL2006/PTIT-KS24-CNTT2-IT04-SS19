import React, { useState, useEffect } from 'react';

export default function KeyTracker() {
  const [lastKey, setLastKey] = useState('');

  useEffect(() => {
    const handleKeyDown = (event) => {
      setLastKey(event.key);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f0f0',
      fontFamily: 'Arial, sans-serif',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        maxWidth: '500px',
        width: '100%'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '30px'
        }}>
          <h1 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#333',
            margin: '0'
          }}>
            Phím bạn vừa nhấn:
          </h1>
        </div>

        <div style={{
          border: '3px dashed #666',
          borderRadius: '15px',
          padding: '40px',
          backgroundColor: '#fafafa',
          marginBottom: '30px',
          minHeight: '120px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            fontSize: '72px',
            fontWeight: 'bold',
            color: '#333',
            fontFamily: 'monospace',
            textTransform: 'uppercase',
            letterSpacing: '4px'
          }}>
            {lastKey ? `[ ${lastKey} ]` : '[ ? ]'}
          </div>
        </div>
        
      </div>
    </div>
  );
}