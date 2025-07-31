import React from 'react';
import './App.css';

import Parent from './component/Parent';
import TextArea from './component/TextArea';
import Select from './component/Select';
import Booking from './component/Booking';
import SignUp from './component/SignUp';
import Table from './chapter_01/Table';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <h5>React, Hello World</h5>
        <Table />
      </header>
    </div>
  );
}

export default App;
