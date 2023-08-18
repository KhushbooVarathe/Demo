import React, { useState } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import LanguageSelector from './LanguageSelector';

const messages = {
  english: {
    greeting: 'Hello!',
  },
  hindi: {
    greeting: 'नमस्ते!',
  },
  marathi: {
    greeting: 'kasi aahe!',
  },
  telgu: {
    greeting: 'heyy telgu!',
  },
  gujrati: {
    greeting: 'kem choo!',
  },
  panjabi: {
    greeting: 'panjabi!',
  },
  bengali: {
    greeting: 'bengali!',
  },
};

const App = () => {
  const [locale, setLocale] = useState('en');

  const handleLanguageChange = event => {
    setLocale(event.target.value);
  };

  return (
    <div style={{marginLeft:'700px',fontSize:'40px'}}>
    <IntlProvider locale={locale} messages={messages[locale]}>
      <LanguageSelector
        supportedLanguages={['english','hindi','marathi','telgu','bengali','panjabi','gujrati']}
        currentLanguage={locale}
        onChange={handleLanguageChange}
      />
      <FormattedMessage id="greeting" />
    </IntlProvider>
    </div>
  );
};

export default App;
