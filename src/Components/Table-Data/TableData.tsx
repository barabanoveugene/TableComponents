import React, { useEffect, useState } from 'react';
import { HeadingColumn } from '../Heading-Column/HeadingColumn';
import iconSearch from '../../image/svg/search.svg';
import iconTriangleDown from '../../image/svg/triangleDown.svg';
import { Cell } from '../Cell/Cell';
import './TableData.css';
// eslint-disable-next-line import/no-cycle
import { PopUpVisibleSearchCheckbox } from '../PopUpVisibleSearchCheckbox/PopUpVisibleSearchCheckbox';

// eslint-disable-next-line @typescript-eslint/comma-dangle
export enum ColumnType {
  search,
  checkBox,
}

type CheckBox = {
  title: string;
  value: boolean;
};

export type StrTable = {
  // ??
  title: string;
  id: string;
  type: ColumnType;
  valueInput?: string | Array<CheckBox>;
};

interface Props {
  strTableData: StrTable[];
}

export type Popup = {
  //
  id: string;
  visible: boolean;
  type: ColumnType;
  stateCheck?: Array<boolean>;
};

export interface StatePopup {
  //
  itemsPopup: Popup[];
}

type TtnItem = {
  id: string;
  ind_TTN: string;
  customer: string;
  name_recipe: string;
  v_product: number;
};

interface ITtnTable {
  itemsTableTtn: TtnItem[];
}

export const TableData: React.FC<Props> = (props) => {
  const { strTableData } = props;

  const [stateTableTtn, setStateTableTtn] = useState<ITtnTable>({
    itemsTableTtn: [],
  });

  useEffect(() => {
    const data = async () => {
      const ttnData = await (
        await fetch('http://178.159.39.75:3000/ttns')
      ).json();
      setStateTableTtn({ ...stateTableTtn, itemsTableTtn: ttnData });
    };
    data();
  }, []);

  const [isPopup, setIsSearch] = useState<StatePopup>({
    //
    itemsPopup: strTableData.map((item) => ({
      id: item.id,
      visible: false,
      type: item.type,
    })),
  });

  const handlerClick = (idElem: string) => {
    const { itemsPopup: itemPopup } = isPopup;

    setIsSearch({
      ...isPopup,
      itemsPopup: itemPopup.map((item) => {
        // eslint-disable-next-line no-param-reassign
        item.visible = item.id === idElem ? !item.visible : false;
        return {
          id: item.id,
          visible: item.visible,
          type: item.type,
        };
      }),
    });
  };

  // eslint-disable-next-line consistent-return
  const selectIcon = (type: ColumnType) => {
    if (type === ColumnType.search) {
      return iconSearch;
    }
    if (type === ColumnType.checkBox) {
      return iconTriangleDown;
    }
  };
  return (
    <table>
      <thead>
        <tr>
          {strTableData.map((item, i) => (
            // eslint-disable-next-line react/jsx-key
            <td className="td__table">
              <HeadingColumn
                key={item.id}
                handlerClick={() => handlerClick(item.id)}
                icon={String(selectIcon(item.type))}
                text={item.title}
              />

              {isPopup.itemsPopup[i].visible ? (
                <PopUpVisibleSearchCheckbox
                  key={`Popup${isPopup.itemsPopup[i].id}`}
                  type={isPopup.itemsPopup[i].type}
                />
              ) : null}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {stateTableTtn.itemsTableTtn.map((item: TtnItem) => (
            <Cell
              key={item.id}
              indTtn={item.ind_TTN}
              customer={item.customer}
              nameRecipe={item.name_recipe}
              vProduct={item.v_product}
            />
          ))}
        </tr>
      </tbody>
    </table>
  );
};
