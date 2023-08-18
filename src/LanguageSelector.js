import React from 'react';

const LanguageSelector = ({ supportedLanguages, currentLanguage, onChange }) => {
  return (
    <div >
      <span>Select Language: </span>
      <select value={currentLanguage} onChange={onChange}>
        {supportedLanguages.map(lang => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
