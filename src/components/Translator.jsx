import React, { useState } from 'react';
import TextInput from './TextInput';
import LanguageDropdown from './LanguageDropdown';
import TextOutput from './TextOutput';
import './Translator.css';

const languages = [
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Bengali',
    value: 'bn',
  },
  {
    label: 'Bulgarian',
    value: 'bg',
  },
  {
    label: 'Czech',
    value: 'cs',
  },
  {
    label: 'Danish',
    value: 'da',
  },
  {
    label: 'French',
    value: 'fr',
  },
  {
    label: 'German',
    value: 'de',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
  {
    label: 'Italian',
    value: 'it',
  },
  {
    label: 'Japanese',
    value: 'ja',
  },
  {
    label: 'Korean',
    value: 'ko',
  },
  {
    label: 'Spanish',
    value: 'es',
  },
];

const Translator = () => {
  const [text, setText] = useState('');
  const [language, setLanguage] = useState(languages[0]);
  const [translatedText, setTranslatedText] = useState('');

  return (
    <div className="translator">
      <TextInput label="Write Input Text" text={text} onTextInput={setText} />
      <LanguageDropdown
        label="Select Language"
        onLanguageSelect={setLanguage}
        languages={languages}
      />
      <TextOutput
        label="Ouput Translated Text"
        text={text}
        onUpdate={setTranslatedText}
        language={language}
        translatedText={translatedText}
      />
    </div>
  );
};

export default Translator;
