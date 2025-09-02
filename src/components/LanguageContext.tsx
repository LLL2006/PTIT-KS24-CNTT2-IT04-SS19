import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    currentLanguage: "Ngôn ngữ hiện tại",
    welcome: "Welcome!"
  },
  vi: {
    currentLanguage: "Ngôn ngữ hiện tại", 
    welcome: "Xin chào!"
  }
};

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('lang') || 'en';
  });

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('lang', newLanguage);
  };

  const t = (key) => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage phải được sử dụng trong LanguageProvider');
  }
  return context;
};

const LanguageDemo = () => {
  const { language, changeLanguage, t } = useLanguage();

  const containerStyle = {
    backgroundColor: '#2d2d2d',
    color: 'white',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '400px',
    margin: '20px auto',
    textAlign: 'center'
  };

  const selectStyle = {
    backgroundColor: '#404040',
    color: 'white',
    border: '1px solid #555',
    padding: '5px 10px',
    borderRadius: '4px',
    marginLeft: '10px'
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    fontSize: '14px'
  };

  const welcomeStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    margin: '0'
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        🌐 {t('currentLanguage')}:
        <select 
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
          style={selectStyle}
        >
          <option value="en">English</option>
          <option value="vi">Tiếng Việt</option>
        </select>
      </div>
      
      <h1 style={welcomeStyle}>
        {t('welcome')}
      </h1>
    </div>
  );
};

export { LanguageProvider, LanguageDemo };
