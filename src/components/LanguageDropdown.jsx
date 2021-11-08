import React, { useRef, useState } from 'react';
import './Translator.css';

const LanguageDropdown = ({ label, onLanguageSelect, languages }) => {
  const ref = useRef();

  const handleOptionClick = () => {
    const idx = ref.current.selectedIndex;
    onLanguageSelect(languages[idx]);
  };

  const languageMarkup = languages.map((lang, idx) => {
    return (
      <React.Fragment key={idx}>
        <option value={lang.value} onClick={handleOptionClick}>
          {lang.label}
        </option>
      </React.Fragment>
    );
  });

  return (
    <div className="language-dropdown">
      <label htmlFor="languageSelect">{label}</label>
      <select ref={ref} name="language" id="languageSelect">
        {languageMarkup}
      </select>
    </div>
  );
};

export default LanguageDropdown;
