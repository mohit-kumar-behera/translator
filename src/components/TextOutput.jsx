import React, { useState, useEffect } from 'react';
import translator from './../api/google';
import './Translator.css';

const TextOutput = ({ label, text, onUpdate, language, translatedText }) => {
  const [debounceText, setDebounceText] = useState(text);

  useEffect(() => {
    const timer = setTimeout(() => setDebounceText(text), 750);

    return () => clearInterval(timer);
  }, [text]);

  useEffect(() => {
    const translateText = async () => {
      try {
        const res = await translator.post(
          '/',
          {},
          {
            params: {
              q: debounceText,
              target: language.value,
            },
          }
        );
        onUpdate(res.data.data.translations[0].translatedText);
      } catch (err) {
        alert('Something Went Wrong');
      }
    };

    translateText();
  }, [language, debounceText]);

  return (
    <div className="text-input">
      <label>{label}</label>
      <textarea value={translatedText} disabled></textarea>
    </div>
  );
};

export default TextOutput;
