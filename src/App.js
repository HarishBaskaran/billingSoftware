import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactToPrint from 'react-to-print';


function App() {
  const componentRef = useRef();

  return (
    <div>
    <ReactToPrint 
    trigger={()=> {
      return <button>Print it!</button>
    }}
    content={() => componentRef.current}
    documentTitle="PRINTED DOCUMENT"
    pageStyle="print"
    />
    <div className="App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p ref={componentRef}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </div>
  );
}

export default App;
