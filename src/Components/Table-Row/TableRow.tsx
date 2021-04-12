import React from 'react';

import './Cell.css';

export type ItemCell = {
  name: string;
  norm: string;
};

export interface IItemCell {
  name: string;
  fields: ItemCell[];
}

export const TableRow: React.FC<IItemCell> = (props) => (
  <>
    <tr>
      <td rowSpan={3}>name</td>
    </tr>
    <tr>
      <td>name1</td>
      <td>name2</td>
      <td>name3</td>
    </tr>
  </>
);
