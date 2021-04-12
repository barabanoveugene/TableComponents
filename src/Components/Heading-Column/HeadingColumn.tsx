import React from 'react';

import './HeadingColumn.css';

interface ICheckbox {
  icon: string;
  text: string;
  handlerClick: () => void;
}

export const HeadingColumn: React.FC<ICheckbox> = (props) => {
  const { icon, text, handlerClick } = props;

  return (
    <td>
      <div className="cellSelection">
        <div className="titleCell">{text} </div>
        <img
          className="iconColumn"
          onClick={handlerClick}
          aria-hidden="true"
          src={icon}
          alt="icon"
        />
      </div>
    </td>
  );
};
