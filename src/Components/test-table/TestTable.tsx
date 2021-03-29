import React from 'react';
import './TestTable.css';
import { ColumnType } from '../Table-Data/TableData';
import iconSearch from '../../image/svg/search.svg';
import iconTriangleDown from '../../image/svg/triangleDown.svg';

export type TitleTestTable = {
  title: string;
  icon: ColumnType;
};

type DataField = {
  status: string;
  result: number;
  id: string;
  value?: string;
  description?: string;
};

export type DataItem = {
  titleColumn: string;
  fields: DataField[];
};

interface StrTestTable {
  strTitleTestTable: TitleTestTable[];
  strDataItem: DataItem[];
}

export const TestTable: React.FC<StrTestTable> = (props) => {
  const { strTitleTestTable, strDataItem } = props;

  const changeIcon = (icon: ColumnType) => {
    if (icon === ColumnType.checkBox) {
      return iconTriangleDown;
    }
    return iconSearch;
  };

  return (
    <table className="wrap-table">
      <thead>
        <tr>
          {strTitleTestTable.map((item) => (
            <th key={item.title + 1}>
              <div>
                {item.title}
                <img src={String(changeIcon(item.icon))} alt="icon" />
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {strDataItem.map((item) => {
          const tr = item.fields.map((field, i) => {
            let columnName = null;
            if (i === 0) {
              columnName = (
                <th rowSpan={item.fields.length}>{item.titleColumn}</th>
              );
            }
            return (
              <tr key={field.id}>
                {columnName}
                {Object.values(field).map((itemFields) => (
                  <td key={Math.random()}>{itemFields}</td>
                ))}
              </tr>
            );
          });
          return tr;
        })}
      </tbody>
    </table>
  );
};
