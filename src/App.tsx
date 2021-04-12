import React from 'react';
import './App.css';
import { titleHeadingColumn } from './Components/helper';
import { TableData } from './Components/Table-Data/TableData';

function App() {
  return (
    <div className="App">
      <TableData strTableData={titleHeadingColumn} />
    </div>
  );
}

export default App;
