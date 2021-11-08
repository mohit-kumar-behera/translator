import React from 'react';
import './Translator.css';

const TextInput = ({ label, text, onTextInput }) => {
  const handleInputChange = (ev) => {
    onTextInput(ev.target.value);
  };

  return (
    <div className="text-input">
      <label>{label}</label>
      <textarea value={text} onChange={handleInputChange}></textarea>
    </div>
  );
};

export default TextInput;
