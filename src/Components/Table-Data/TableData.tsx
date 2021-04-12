import React, { ReactNode, useEffect, useState } from 'react';
import { HeadingColumn } from '../Heading-Column/HeadingColumn';
import iconSearch from '../../image/svg/search.svg';
import iconTriangleDown from '../../image/svg/triangleDown.svg';
import './TableData.css';
import { CustomCheckbox, CusCheckbox } from '../Custom-Checkbox/CustomCheckbox';
import { PopUp } from '../PopUp/popup';
import { CusSearch, CustomSearch } from '../Search/Search';

export enum ColumnType {
  search,
  checkBox
}

type StrTableCommon = {
  title: string;
  id: string;
  dataKey: string;
};

type StrTableFieldsSearch = {
  type: ColumnType.search;
  fieldsSearch: CusSearch;
};

type StrTableFieldsCheckbox = {
  type: ColumnType.checkBox;
  fieldsCheckbox: CusCheckbox[];
};

/* Example */
type ItemFields = {
  name: string;
  norm: string;
};

type ItemTableData = {
  name: string;
  fields: ItemFields[];
};

export type DataTable = ItemTableData[];
/* End Example */

export type StrTable = StrTableCommon &
  (StrTableFieldsSearch | StrTableFieldsCheckbox);

export interface ITableData {
  strTableData: StrTable[];
  // dataArr: DataTable;
}

type Popup = {
  id: string;
  visible: boolean;
  type: ColumnType;
};

type StatePopup = {
  itemsPopup: Popup[];
};

export const TableData: React.FC<ITableData> = ({ strTableData }) => {
  const selectIcon = (type: ColumnType) => {
    if (type === ColumnType.search) {
      return iconSearch;
    }
    return iconTriangleDown;
  };

  /* useEffect */
  const [dataRequest, setDataRequest] = useState([]);

  useEffect(() => {
    const getResponse = async () => {
      const response = await (
        await fetch('/api/normative-documents?page=1')
      ).json();
      setDataRequest(response);
    };
    getResponse();
  }, []);

  // Visible PopUp
  const [isPopup, setIsSearch] = useState<StatePopup>({
    itemsPopup: strTableData.map((item) => ({
      id: item.id,
      visible: false,
      type: item.type
    }))
  });

  const handlerClickIcon = (idElem: string) => {
    const itemsPopup = isPopup.itemsPopup.map((item) => {
      const itemItemsPopup = item; /* add variable */
      itemItemsPopup.visible = item.id === idElem ? !item.visible : false;
      return {
        id: item.id,
        visible: itemItemsPopup.visible,
        type: item.type
      };
    });

    setIsSearch({
      ...isPopup,
      itemsPopup
    });
  };

  // Search
  const [stateSearchFields, setStateSearchFields] = useState<CusSearch[]>(
    strTableData.map((item) => {
      if (item.type === ColumnType.search) {
        return item.fieldsSearch;
      }
      return { value: '', id: '' };
    })
  );

  const onChangeFieldsSearch = (value: string, id: string) => {
    const newState = stateSearchFields.map((fields) => {
      if (fields.id === id) {
        return { ...fields, value };
      }
      return fields;
    });
    setStateSearchFields(newState);
  };

  const renderSearch = (fields: CusSearch): ReactNode => (
    <CustomSearch fields={fields} onChange={onChangeFieldsSearch} />
  );

  // Checkbox
  const [stateCheckboxFields, setStateCheckboxFields] = useState<
    CusCheckbox[][]
  >(
    strTableData.map((item) => {
      if (item.type === ColumnType.checkBox) {
        return item.fieldsCheckbox;
      }
      return [{ checked: false, title: '', id: '' }];
    })
  );

  const onChangeFieldsCheckbox = (id: string, checked: boolean) => {
    const newStateCheckbox = stateCheckboxFields.map((fields) => {
      const itemFields = fields.map((field) => {
        if (field.id === id) {
          return {
            id: field.id,
            title: field.title,
            checked: !field.checked
          };
        }
        return field;
      });
      return itemFields;
    });
    setStateCheckboxFields(newStateCheckbox);
  };

  const renderCheckbox = (checkboxes: CusCheckbox[]): ReactNode =>
    checkboxes.map((checkbox) => (
      <CustomCheckbox
        key={checkbox.id}
        checked={checkbox.checked}
        title={checkbox.title}
        onChange={() => onChangeFieldsCheckbox(checkbox.id, checkbox.checked)}
      />
    ));

  return (
    <table>
      <thead>
        <tr>
          {strTableData.map((item, i) => (
            <td key={item.id} className="td__table">
              <HeadingColumn
                key={item.id}
                handlerClick={() => handlerClickIcon(item.id)}
                icon={String(selectIcon(item.type))}
                text={item.title}
              />

              {isPopup.itemsPopup[i].visible ? (
                <PopUp>
                  {item.type === ColumnType.checkBox
                    ? renderCheckbox(stateCheckboxFields[i])
                    : null}
                  {item.type === ColumnType.search
                    ? renderSearch(stateSearchFields[i])
                    : null}
                </PopUp>
              ) : null}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* {pageState.members.map((item) => {
          const tr = item.fields.map((field, i) => {
            let name = null;
            if (i === 0) {
              name = <td rowSpan={item.fields.length}>{item.name}</td>;
            }
            return (
              <tr key={field.id}>
                {name}
                <td>{field.name}</td>
                <td>{field.norm}</td>
              </tr>
            );
          });
          return tr;
        })} */}
      </tbody>
    </table>
  );
};
