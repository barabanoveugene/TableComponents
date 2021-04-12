import { CusCheckbox } from './Custom-Checkbox/CustomCheckbox';
import { ColumnType, StrTable, DataTable } from './Table-Data/TableData';

const titleCheckBox: CusCheckbox[] = [
  {
    title: 'Text01',
    id: '01',
    checked: false
  },
  {
    title: 'Text02',
    id: '02',
    checked: true
  },
  {
    title: 'Text03',
    id: '03',
    checked: false
  },
  {
    title: 'Text04',
    id: '04',
    checked: true
  },
  {
    title: 'Text05',
    id: '05',
    checked: false
  }
];

// const titleCheckBoxBuild: CusCheckbox[] = [
//   {
//     title: 'Build1',
//     id: 'Build1',
//     checked: false,
//   },
//   {
//     title: 'Build2',
//     id: 'Build2',
//     checked: true,
//   },
//   {
//     title: 'Build3',
//     id: 'Build3',
//     checked: false,
//   },
//   {
//     title: 'Build4',
//     id: 'Build4',
//     checked: true,
//   },
//   {
//     title: 'Build5',
//     id: 'Build5',
//     checked: false,
//   },
// ];

export const titleHeadingColumn: StrTable[] = [
  {
    title: 'Title document',
    id: '1',
    dataKey: 'name',
    type: ColumnType.search,
    fieldsSearch: {
      value: 'Enter your request',
      id: 't1'
    }
  },
  {
    title: 'Text2',
    id: '2',
    dataKey: 'fields.name',
    type: ColumnType.checkBox,
    fieldsCheckbox: titleCheckBox
  },
  {
    title: 'Text3',
    id: '3',
    dataKey: 'fields.norm',
    type: ColumnType.search,
    fieldsSearch: {
      value: 'Enter document',
      id: 't2'
    }
  }
];

const normativeDocument: DataTable = [
  {
    name: 'name document',
    fields: [
      {
        name: 'name1',
        norm: 'norm1'
      },
      {
        name: 'name2',
        norm: 'name2'
      },
      {
        name: 'name3',
        norm: 'name3'
      },
      {
        name: 'name4',
        norm: 'name4'
      },
      {
        name: 'name5',
        norm: 'name5'
      }
    ]
  },
  {
    name: 'name document 2',
    fields: [
      {
        name: 'name3',
        norm: 'norm3'
      },
      {
        name: 'name4',
        norm: 'norm4'
      }
    ]
  }
];

type FindValue = string | number | boolean | [];

const findValuesInObject = (
  keys: string[],
  obj: any /* { [key: string]: [string] } */
): FindValue[] => {
  let outValue: FindValue[] = [];
  Object.entries(obj).forEach(([objKey, value]) => {
    if (keys[0] === objKey) {
      if (
        typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'boolean'
      ) {
        outValue.push(value);
      } else if (Object.prototype.hasOwnProperty.call(value, 'length')) {
        const newKeys = keys.slice(1);
        const arr = obj[objKey];
        outValue = [].concat(
          ...arr.map((newObj: any) => findValuesInObject(newKeys, newObj))
        );
      }
    }
  });
  return outValue;
};

type DataValue = { [k: string]: FindValue[] };

export const transformDataAccordingToHeaders = (
  strTable: StrTable[],
  dataArr: Array<unknown>
): DataValue[] => {
  const dataValues: DataValue[] = [];
  dataArr.forEach((data) => {
    const dataValue: DataValue = {};
    strTable.forEach(({ dataKey }) => {
      const keys: string[] = dataKey.split('.');
      dataValue[dataKey] = [...findValuesInObject(keys, data)];
    });
    dataValues.push(dataValue);
  });
  return dataValues;
};

const Example = transformDataAccordingToHeaders(
  titleHeadingColumn,
  normativeDocument
);

console.log(`example ${Example}`);

// type FindValue = string | number | boolean | [];

// const findValuesInObject = (
//   keys: string[],
//   obj: { [key: string]:  }
// ): FindValue[] => {
//   let outValue: FindValue[] = [];
//   Object.entries(obj).forEach(([objKey, value]) => {
//     if (keys[0] === objKey) {
//       if (
//         typeof value === 'string' ||
//         typeof value === 'number' ||
//         typeof value === 'boolean'
//       ) {
//         outValue.push(value);
//       // eslint-disable-next-line no-prototype-builtins
//       } else if (value.hasOwnProperty('length')) {
//         const newKeys = keys.slice(1);
//         const arr = obj[objKey];
//         outValue = [].concat(
//           ...arr.map((newObj) =>
//             findValuesInObject(newKeys, newObj))
//         );
//       }
//     }
//   });
//   return outValue;
// };

// type DataValue = { [k: string]: FindValue[] };

// export const transformDataAccordingToHeaders = (
//   strTable: StrTable[],
//   dataArr: DataTable
// ): DataValue[] => {
//   const dataValues: DataValue[] = [];
//   dataArr.forEach((data) => {
//     const dataValue: DataValue = {};
//     strTable.forEach(({ dataKey }) => {
//       const keys: string[] = dataKey.split('.');
//       dataValue[dataKey] = [...findValuesInObject(keys, data)];
//     });
//     dataValues.push(dataValue);
//   });
//   return dataValues;
// };

// transformDataAccordingToHeaders(titleHeadingColumn, normativeDocument)
