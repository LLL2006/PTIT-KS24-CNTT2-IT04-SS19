import React, { useState } from 'react';

export default function RandomQuote() {
  const quotes = [
    "Học, học nữa, học mãi.",
    "Thất bại là mẹ thành công.",
    "Không gì là không thể.",
    "Kiên trì lâu đây tỏ.",
    "Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau."
  ];

  const [currentQuote, setCurrentQuote] = useState(quotes[2]); 

  const getRandomQuote = () => {
    let newQuote;
    do {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      newQuote = quotes[randomIndex];
    } while (newQuote === currentQuote);
    
    setCurrentQuote(newQuote);
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '50px auto',
      padding: '40px',
      backgroundColor: '#f8f9fa',
      borderRadius: '12px',
      border: '2px solid #dee2e6',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '30px'
      }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#495057',
          margin: '0'
        }}>
          Câu nói truyền cảm hứng hôm nay:
        </h2>
      </div>

      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        marginBottom: '25px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        minHeight: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <p style={{
          fontSize: '20px',
          fontStyle: 'italic',
          color: '#6c757d',
          margin: '0',
          lineHeight: '1.5',
          fontWeight: '500'
        }}>
          "{currentQuote}"
        </p>
      </div>

      <button
        onClick={getRandomQuote}
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          fontSize: '16px',
          fontWeight: '600',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          boxShadow: '0 2px 4px rgba(0, 123, 255, 0.3)'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#0056b3';
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 4px 8px rgba(0, 123, 255, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#007bff';
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 2px 4px rgba(0, 123, 255, 0.3)';
        }}
        onMouseDown={(e) => {
          e.target.style.transform = 'translateY(0)';
        }}
        onMouseUp={(e) => {
          e.target.style.transform = 'translateY(-2px)';
        }}
      >
        Lấy câu nói mới
      </button>

    </div>
  );
}