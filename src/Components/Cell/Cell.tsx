import React from "react";

import "./Cell.css";

interface PropsCell {
  indTtn: string;
  customer: string;
  nameRecipe: string;
  vProduct: number;
}

export const Cell: React.FC<PropsCell> = (props) => (
        <td>
            <div className="cell">
                {props.indTtn}
            </div>
            <div className="cell">
                {props.customer}
            </div>
            <div className="cell">
                {props.nameRecipe}
            </div>
            <div className="cell">
                {props.vProduct}
            </div>
        </td>    
    );
