import React, { useRef } from 'react';

export default function ScrollToSection() {
  const targetSectionRef = useRef(null);

  const scrollToTarget = () => {
    targetSectionRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <div style={{
        background: 'linear-gradient(135deg, #2196f3 0%, #1976d2 100%)',
        color: 'white',
        textAlign: 'center',
        padding: '80px 20px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          fontSize: '60px',
          marginBottom: '30px'
        }}>
          🧭
        </div>
        <h1 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          margin: '0 0 40px 0'
        }}>
          Cuộn tới nội dung
        </h1>
        <button
          onClick={scrollToTarget}
          style={{
            backgroundColor: 'white',
            color: '#1976d2',
            border: 'none',
            padding: '15px 30px',
            fontSize: '18px',
            fontWeight: '600',
            borderRadius: '25px',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
          }}
        >
          Đi tới phần nội dung
        </button>
      </div>

      <div style={{
        backgroundColor: '#f5f5f5',
        padding: '40px',
        minHeight: '100vh'
      }}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          fontSize: '16px',
          lineHeight: '1.6',
          color: '#666'
        }}>
          <p>Đây là nội dung giả lập để tạo khoảng cách cho trang...</p>
          <br />
          <p>Bạn có thể thêm nhiều đoạn như thế này để tăng chiều dài.</p>
          <br />
          <p>Cuộn trang sẽ mượt mà hơn khi có nhiều nội dung.</p>
        </div>
      </div>

      <div 
        ref={targetSectionRef}
        style={{
          backgroundColor: '#4caf50',
          color: 'white',
          textAlign: 'center',
          padding: '60px 20px',
          minHeight: '50vh'
        }}
      >
        <h2 style={{
          fontSize: '32px',
          margin: '0'
        }}>
          🎯 Đây là phần mục tiêu!
        </h2>
      </div>
    </div>
  );
}