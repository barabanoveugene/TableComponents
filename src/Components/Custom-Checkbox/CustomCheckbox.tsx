/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

import "./CustomCheckbox.css";

export type StrBoxCheckbox ={
  title: string;
  id: string;
}

export const CustomCheckbox: React.FC = () => (
    <>
      <div className="customCheckbox">
        <div>
          <input id="cusCheckbox" type="checkbox" />
          <label htmlFor="cusCheckbox">Some text</label>
        </div>
      </div>
    </>
  );
