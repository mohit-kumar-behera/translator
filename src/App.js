import React from 'react';
import Translator from './components/Translator';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="page-heading">
          <h1>Translator APP</h1>
        </div>
        <Translator />
      </div>
    );
  }
}

export default App;
