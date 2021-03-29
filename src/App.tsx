import React from 'react';
import './App.css';
import {
  titleHeadingColumn,
  titleTestTable,
  dataTestTable,
} from './Components/helper';
import { TableData } from './Components/Table-Data/TableData';
import { PageTable } from './Components/PageTable/PageTable';
import { TestTable } from './Components/test-table/TestTable';

function App() {
  return (
    <div className="App">
      <TableData strTableData={titleHeadingColumn} />
      <PageTable />
      <TestTable
        strDataItem={dataTestTable}
        strTitleTestTable={titleTestTable}
      />
    </div>
  );
}

export default App;
