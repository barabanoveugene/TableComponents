import React from 'react';
import { Search } from '../Search/Search';
import { CustomCheckbox } from '../Custom-Checkbox/CustomCheckbox';
// eslint-disable-next-line import/no-cycle
import { ColumnType } from '../Table-Data/TableData';

interface PropsPopUp {
  type: ColumnType;
}

export const PopUpVisibleSearchCheckbox: React.FC<PropsPopUp> = (props) => {
  const { type } = props;
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const showPopupSearch = (type: ColumnType) => type === ColumnType.search;
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const showPopupCheckBox = (type: ColumnType) => type === ColumnType.checkBox;

  return (
    <div className="popUp">
      {showPopupSearch(type) ? <Search /> : null}
      {showPopupCheckBox(type) ? <CustomCheckbox /> : null}
    </div>
  );
};
