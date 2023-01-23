import React from 'react';
import logo from './logo.svg';
import './App.css';
import UseEffect from './playground/UseEffect';

const users = [
  { id: '1', name: 'José', email: 'carlos.avellar@gmail.com', phone: '119827272', website: 'www.uol.com.br' },
];

function App() {
  return (
    <div className="App">
      <UseEffect users={users} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
