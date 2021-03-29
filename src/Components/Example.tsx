import React from 'react';

export const TableComponent = () => {
  console.log('Hello');
  return (
    <table style={{ border: '2px solid #000' }}>
      <thead>
        <tr>
          <th>Title1</th>
          <th>Title2</th>
          <th>Title3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan={0}>SomeText</td>
          <td>SomeText1</td>
          <td>SomeText2</td>
        </tr>
        <tr>
          <td>SomeText</td>
          <td>SomeText1</td>
          <td>SomeText2</td>
        </tr>
        <tr>
          <td>SomeText</td>
          <td>SomeText1</td>
          <td>SomeText2</td>
        </tr>
        <tr>
          <td>SomeText</td>
          <td>SomeText1</td>
          <td>SomeText2</td>
        </tr>
      </tbody>
    </table>
  );
};
