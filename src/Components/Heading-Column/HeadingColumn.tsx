import React from "react";

import "./HeadingColumn.css";

interface Props {
  icon: string;
  text: string;
  handlerClick: () => void;
}

export const HeadingColumn: React.FC<Props> = (props) => {
  const { icon, text, handlerClick } = props;
  
  return (
    <div className="cellSelection">
      <div className="titleCell">{text} </div>
      <img
        className="iconColumn"
        onClick={handlerClick} aria-hidden="true"
        src={icon}
        alt="icon"
      />
    </div>
  );
};


